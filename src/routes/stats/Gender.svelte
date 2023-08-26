<script lang="ts">
	import Boy from "$lib/components/ui/icons/boy.svelte";
	import Girl from "$lib/components/ui/icons/girl.svelte";
	export let gender: string;
</script>

<div class="flex">
	{#if gender == "boy"}
		<Boy class="mr-2 h-6 w-6 text-blue-500" />
	{:else}
		<Girl class="mr-2 h-6 w-6 text-pink-500" />
	{/if}
	{gender}
</div>
