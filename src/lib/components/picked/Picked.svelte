<script>
	import * as Card from "$lib/components/ui/card";
	import { voteData } from "$lib/firebase";
	$: isBoy = $voteData?.gender == "boy";
</script>

<Card.Root class="max-w-lg flex flex-col h-fit w-full">
	<Card.Header>
		<Card.Title>You are hoping for a...</Card.Title>
		<Card.Description>Option can be changed until the voting closes</Card.Description>
	</Card.Header>
	<Card.Content>
		{#if isBoy}
			<h1 class="h1 text-center">
				<span
					class="bg-gradient-to-br from-blue-500 to-cyan-300 bg-clip-text text-transparent box-decoration-clone"
					>Boy</span
				>
			</h1>
		{:else}
			<h1 class="h1 text-center">
				<span
					class="bg-gradient-to-br from-pink-500 to-violet-500 bg-clip-text text-transparent box-decoration-clone"
					>Girl</span
				>
			</h1>
		{/if}
	</Card.Content>
</Card.Root>
