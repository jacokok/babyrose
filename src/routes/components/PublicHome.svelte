<script lang="ts">
	import { Timer } from "$lib/components/timer";
	import { Button } from "$lib/components/ui";
	import Google from "$lib/components/ui/icons/google.svelte";
	import { signInWithGoogle, user } from "$lib/firebase";
	import * as Card from "$lib/components/ui/card";
	import { Title } from "$lib/components/title";
</script>

<Card.Root class="max-w-lg flex flex-col h-fit w-full">
	<Card.Header>
		<Card.Title>
			<div class="m-8">
				<Title />
			</div>
		</Card.Title>
		<Card.Description>Sign in to vote!</Card.Description>
	</Card.Header>

	<Card.Footer class="flex justify-between">
		<Button variant="secondary" class="w-full" on:click={signInWithGoogle}
			><Google class="mr-2 h-4 w-4" /> Sign In</Button
		>
	</Card.Footer>
</Card.Root>
<Timer />
