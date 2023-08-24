<script>
	import { Button } from "$lib/components/ui";
	import Google from "$lib/components/ui/icons/google.svelte";
	import { signInWithGoogle, user, configData } from "$lib/firebase";
	import * as Card from "$lib/components/ui/card";
	import Header from "$lib/components/header/header.svelte";
	import { Title } from "$lib/components/title";
	import Vote from "$lib/components/vote/vote.svelte";
	import Timer from "$lib/components/timer/timer.svelte";
	import Chart from "$lib/components/chart/chart.svelte";
	import BarChart from "$lib/components/barChart/BarChart.svelte";
</script>

<Header />

{#if $user}
	You are logged in {$user.displayName}
{/if}

<div>What {$configData?.voteCloseDate}</div>

<div class="flex flex-col w-screen items-center mt-8 mb-4 space-y-6">
	<Card.Root class="max-w-md flex flex-col h-fit w-full">
		<Card.Header>
			<Card.Title>
				<div class="m-8">
					<Title />
				</div>
			</Card.Title>
			{#if $user}
				<Card.Description>Choose one option</Card.Description>
			{:else}
				<Card.Description>Sign in to vote!</Card.Description>
			{/if}
			<Card.Content>
				<Vote />
			</Card.Content>
		</Card.Header>
		{#if $user == null}
			<Card.Footer class="flex justify-between">
				<Button on:click={signInWithGoogle}><Google class="mr-2 h-4 w-4" /> Sign In</Button>
			</Card.Footer>
		{/if}
	</Card.Root>
	<Timer />
	<Chart />
	<BarChart />
</div>
