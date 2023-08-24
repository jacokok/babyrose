<script>
	import * as Card from "$lib/components/ui/card";
	import { Title } from "$lib/components/title";
	import Vote from "$lib/components/vote/vote.svelte";
	import Timer from "$lib/components/timer/timer.svelte";
	import Chart from "$lib/components/chart/chart.svelte";
	import BarChart from "$lib/components/barChart/BarChart.svelte";
</script>

<Card.Root class="max-w-md flex flex-col h-fit w-full">
	<Card.Header>
		<Card.Title>
			<div class="m-8">
				<Title />
			</div>
		</Card.Title>
		<Card.Description>Choose one option</Card.Description>
		<Card.Content>
			<Vote />
		</Card.Content>
	</Card.Header>
</Card.Root>
<Timer />
<Chart />
<BarChart />
