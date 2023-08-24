<script lang="ts">
	import Badge from "../ui/badge/badge.svelte";

	export let type: string;
</script>

<div class="flex flex-col items-center align-middle">
	<h2>
		<span
			class="bg-gradient-to-br from-sky-300 to-violet-500 bg-clip-text text-transparent box-decoration-clone"
			><slot class="w-[500px]" /></span
		>
	</h2>
	<Badge variant="secondary">{type}</Badge>
</div>
