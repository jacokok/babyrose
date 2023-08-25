<script>
	import { BabyIcon } from "lucide-svelte";
</script>

<h1 class="text-center">
	<span
		class="bg-gradient-to-br from-blue-700 to-pink-600 bg-clip-text text-transparent box-decoration-clone"
		>Baby Rose</span
	>
</h1>
<div class="flex justify-center m-8">
	<figure>
		<section class="img-bg" />
		<BabyIcon class="monkey" size={80} />
	</figure>
</div>
<div class="text-center">
	<h2 class="inline">is it a</h2>
	<h1 class="h1 inline m-2">
		<span
			class="bg-gradient-to-br from-blue-500 to-cyan-300 bg-clip-text text-transparent box-decoration-clone"
			>Boy</span
		>
	</h1>
	<h2 class="h1 inline">or a</h2>
	<h1 class="h1 inline m-2">
		<span
			class="bg-gradient-to-br from-pink-500 to-violet-500 bg-clip-text text-transparent box-decoration-clone"
			>Girl</span
		>
	</h1>
</div>

<style lang="postcss">
	figure {
		@apply text-purple-400;
		animation: pulse 10s cubic-bezier(0, 0, 0, 0.5) infinite, glow 5s linear infinite;
	}

	@keyframes glow {
		0% {
			@apply text-pink-400;
		}
		50% {
			@apply text-blue-400;
		}
		100% {
			@apply text-pink-400;
		}
	}
	@keyframes pulse {
		50% {
			transform: scale(1.1);
		}
	}
</style>
