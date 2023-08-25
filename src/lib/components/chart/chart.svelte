<script lang="ts">
	import { VisSingleContainer, VisDonut, VisNestedDonut, VisBulletLegend } from "@unovis/svelte";
	import * as Card from "$lib/components/ui/card";
	import { voteDataList, type VoteData } from "$lib/firebase";

	$: data = getData($voteDataList);

	const getData = (
		d: VoteData[] | undefined
	): Array<{ label: string; value: number }> | undefined => {
		let boyCount = 0;
		let girlCount = 0;
		$voteDataList?.map((item) => {
			if (item.gender == "boy") {
				boyCount++;
			} else {
				girlCount++;
			}
		});
		return [
			{ label: "Boy", value: boyCount },
			{ label: "Girl", value: girlCount }
		];
	};

	const value = (d: { label: string; value: number }) => d.value;
	const items = data?.map((d) => ({ name: d.label })) ?? [];
	const color = (d: number, i: number) => ["#62a0ea", "#ff4b84"][i];
</script>

<Card.Root class="max-w-lg flex flex-col h-fit w-full p-8 items-center">
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
			centralSubLabel="Boy or girl?"
		/>
	</VisSingleContainer>
	<VisBulletLegend {items} />
</Card.Root>
