<script>
	import * as Card from "$lib/components/ui/card";
	import { base } from "$app/paths";
</script>

<Card.Root class="max-w-lg flex flex-col h-fit w-full">
	<Card.Header>
		<Card.Title>What they could look like</Card.Title>
		<Card.Description>AI Generated images to give you a sneak peak</Card.Description>
	</Card.Header>
	<Card.Content>
		<div class="flex gap-6">
			<img
				src="{base}/images/boy1.png"
				alt="boy1"
				class="w-full h-full border-4 border-blue-400 rounded-full"
			/>
			<img
				src="{base}/images/boy2.png"
				alt="boy2"
				class="w-full h-full border-4 border-blue-400 rounded-full"
			/>
		</div>
		<div class="flex gap-6 mt-6">
			<img
				src="{base}/images/girl1.png"
				alt="girl1"
				class="w-full h-full border-4 border-pink-400 rounded-full"
			/>
			<img
				src="{base}/images/girl2.png"
				alt="girl2"
				class="w-full h-full border-4 border-pink-400 rounded-full"
			/>
		</div>
	</Card.Content>
</Card.Root>
