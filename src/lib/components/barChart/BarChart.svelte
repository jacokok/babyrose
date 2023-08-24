<script lang="ts">
	import { VisBulletLegend, VisXYContainer, VisAxis, VisGroupedBar } from "@unovis/svelte";
	import * as Card from "$lib/components/ui/card";

	interface BarData {
		boy: number;
		girl: number;
	}

	const labels = [
		{ label: "Boy", color: "#62a0ea" },
		{ label: "Girl", color: "#ff4b84" }
	];

	const data: Array<BarData> = [{ boy: 1, girl: 10 }];
	const x = (d: BarData) => d.boy;
	const y = [(d: BarData) => d.boy, (d: BarData) => d.girl];
	const items = labels.map((d) => ({ name: d.label }));
	const color = labels.map((d) => d.color);
</script>

<Card.Root class="max-w-md flex flex-col h-fit w-full p-8 items-center">
	<VisXYContainer {data}>
		<VisGroupedBar {x} {y} roundedCorners={5} barPadding={0.5} {color} />
		<VisAxis type="y" label="Number of Votes" gridLine={false} domainLine={false} />
	</VisXYContainer>
	<VisBulletLegend {items} />
</Card.Root>
