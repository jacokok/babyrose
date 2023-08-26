<script>
	import * as Card from "$lib/components/ui/card";
	import { base } from "$app/paths";
</script>

<Card.Root class="max-w-lg flex flex-col h-fit w-full items-d">
	<Card.Header>
		<Card.Title>Sneak peak</Card.Title>
		<Card.Description>What Ronel and Bryden looked like</Card.Description>
	</Card.Header>
	<Card.Content>
		<div class="flex gap-6 w-full justify-center">
			<div>
				<img
					src="{base}/images/boy1.png"
					alt="Bryden"
					class="border-4 border-blue-400 rounded-full"
				/>
			</div>
			<div>
				<img
					src="{base}/images/ronel.png"
					alt="Ronel"
					class="border-4 border-pink-400 rounded-full"
				/>
			</div>
		</div>
	</Card.Content>
</Card.Root>
