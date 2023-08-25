<script lang="ts">
	import * as Card from "$lib/components/ui/card";
	import { configData, vote } from "$lib/firebase";
	import { db, user } from "$lib/firebase";
	import Tick from "./tick.svelte";
	$: voteCloseDate = $configData?.voteCloseDate?.toDate() ?? new Date();

	let now = new Date();
	$: voteOpenSeconds = Math.floor((voteCloseDate.getTime() - now.getTime()) / 1000);

	let timer = { days: 0, hours: 0, minutes: 0, seconds: 0 };
	let clear: NodeJS.Timeout;

	const getTimerValues = () => {
		if (voteOpenSeconds > 0) {
			if ($vote.isClosed) vote.setVoteClosed(false);
			voteOpenSeconds--;
		}

		let minutes = Math.floor(voteOpenSeconds / 60);
		let hours = Math.floor(minutes / 60);
		let days = Math.floor(hours / 24);

		hours = hours - days * 24;
		minutes = minutes - days * 24 * 60 - hours * 60;
		let seconds = voteOpenSeconds - days * 24 * 60 * 60 - hours * 60 * 60 - minutes * 60;
		timer = { days, hours, minutes, seconds };
		return timer;
	};

	$: {
		if (voteOpenSeconds > 0) {
			clearInterval(clear);
			clear = setInterval(getTimerValues, 1000);
		} else {
			clearInterval(clear);
			vote.setVoteClosed(true);
		}
	}

	// $: timer = getTimerValues(voteOpenSeconds);
</script>

{#if !$vote.isClosed}
	<Card.Root class="max-w-lg flex flex-col h-fit w-full">
		<Card.Header>
			<Card.Title>Don't miss out</Card.Title>
			<Card.Description>Voting closes in</Card.Description>
			<Card.Content>
				<div class="flex justify-around pt-2 gap-2">
					<Tick type="Days">{timer.days}</Tick>
					<Tick type="Hours">{timer.hours}</Tick>
					<Tick type="Minutes">{timer.minutes}</Tick>
					<Tick type="Seconds">{timer.seconds}</Tick>
				</div>
			</Card.Content>
		</Card.Header>
	</Card.Root>
{/if}
