<script lang="ts">
	import * as Card from "$lib/components/ui/card";
	import { configData, vote } from "$lib/firebase";
	import { db, user } from "$lib/firebase";
	import Tick from "./tick.svelte";
	$: voteCloseDate = $configData?.voteCloseDate?.toDate() ?? new Date();

	let now = new Date();
	$: voteOpenSeconds = Math.floor((voteCloseDate.getTime() - now.getTime()) / 1000);

	const getTimerValues = (seconds: number) => {
		let minutes = Math.floor(seconds / 60);
		let hours = Math.floor(minutes / 60);
		let days = Math.floor(hours / 24);

		hours = hours - days * 24;
		minutes = minutes - days * 24 * 60 - hours * 60;
		seconds = seconds - days * 24 * 60 * 60 - hours * 60 * 60 - minutes * 60;
		return { days, hours, minutes, seconds };
	};

	const interval = setInterval(() => {
		if (voteOpenSeconds > 0) {
			voteOpenSeconds--;
			if ($vote.isClosed !== false) vote.setVoteClosed(false);
		} else {
			vote.setVoteClosed(true);
			clearInterval(interval);
		}
	}, 1000);

	$: timer = getTimerValues(voteOpenSeconds);
</script>

{#if !$vote.isClosed}
	<Card.Root class="max-w-lg flex flex-col h-fit w-full">
		<Card.Header>
			<Card.Title>Don't miss out</Card.Title>
			<Card.Description>Voting closes in</Card.Description>
			<Card.Content>
				<div class="flex justify-around pt-2">
					<Tick type="Days">{timer.days}</Tick>
					<Tick type="Hours">{timer.hours}</Tick>
					<Tick type="Minutes">{timer.minutes}</Tick>
					<Tick type="Seconds">{timer.seconds}</Tick>
				</div>
			</Card.Content>
		</Card.Header>
	</Card.Root>
{/if}
