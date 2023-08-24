<script lang="ts">
	import { VisSingleContainer, VisDonut, VisNestedDonut, VisBulletLegend } from "@unovis/svelte";
	import * as Card from "$lib/components/ui/card";

	// let data: number[] = [32, 43];
	const data = [
		{ label: "Boy", value: 3 },
		{ label: "Girl", value: 2 }
	];
	const value = (d: { label: string; value: number }) => d.value;
	const items = data.map((d) => ({ name: d.label }));
	const color = (d: number, i: number) => ["#62a0ea", "#ff4b84"][i];
</script>

<Card.Root class="max-w-md flex flex-col h-fit w-full p-8 items-center">
	<VisSingleContainer {data}>
		<VisDonut
			{value}
			{color}
			radius={120}
			arcWidth={30}
			cornerRadius={5}
			showBackground={false}
			padAngle={0.05}
			centralLabel="Current Results"
			centralSubLabel="Will the majority win?"
		/>
	</VisSingleContainer>
	<VisBulletLegend {items} />
</Card.Root>
