<script lang="ts">
	import { Button } from "$lib/components/ui";
	import * as Card from "$lib/components/ui/card";
	import type { PageData } from "./$types";
	import Google from "$lib/components/ui/icons/google.svelte";
</script>

<div class="flex h-screen w-screen justify-center items-center">
	<Card.Root class="max-w-md flex flex-col h-fit">
		<Card.Header>
			<Card.Title>Create project</Card.Title>
			<Card.Description>Deploy your new project in one-click.</Card.Description>
		</Card.Header>
		<Card.Content>My Content</Card.Content>
		<Card.Footer class="flex justify-between">
			<Button variant="outline">Cancel</Button>
			<Button><Google class="mr-2 h-4 w-4" /> Login</Button>
		</Card.Footer>
	</Card.Root>
</div>
