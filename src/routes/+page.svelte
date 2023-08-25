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
	import { Home, PublicHome } from "./components";
</script>

<Header />

<div class="m-8 grid grid-cols-1 gap-6 items-center justify-items-center">
	{#if $user}
		<Home />
	{:else}
		<PublicHome />
	{/if}
</div>
