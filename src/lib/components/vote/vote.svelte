<script lang="ts">
	import { Label } from "$lib/components/ui/label";
	import * as RadioGroup from "$lib/components/ui/radio-group";
	import { db, user, voteData } from "$lib/firebase";
	import { doc, setDoc } from "firebase/firestore";
	import Boy from "../ui/icons/boy.svelte";
	import Girl from "../ui/icons/girl.svelte";
	import { confettiAction } from "svelte-legos";
	$: {
		console.log($voteData);
	}
	let voteResult: string | undefined = undefined;
	const saveVote = async (value: string | undefined) => {
		if ($user?.uid != undefined && value !== undefined) {
			await setDoc(doc(db, "votes", $user.uid), {
				name: $user.displayName,
				gender: value,
				email: $user.email
			});
		}
	};
</script>

<RadioGroup.Root
	class="grid grid-cols-2 gap-4 mt-4"
	bind:value={voteResult}
	onValueChange={saveVote}
>
	<div
		class="border-2 border-muted rounded-md"
		class:border-blue-200={voteResult === "boy"}
		class:dark:border-blue-800={voteResult === "boy"}
		class:bg-blue-50={voteResult === "boy"}
		class:dark:bg-blue-950={voteResult === "boy"}
		use:confettiAction
	>
		<Label
			for="boy"
			class="flex flex-col items-center justify-between rounded-md bg-transparent p-4 text-blue-400 hover:bg-blue-50 hover:dark:bg-blue-700 cursor-pointer hover:text-blue-300"
		>
			<RadioGroup.Item value="boy" id="boy" class="sr-only" aria-label="boy" />
			<Boy class="mb-3 h-16 w-16 text-inherit" />
			Boy
		</Label>
	</div>
	<div
		class="border-2 border-muted rounded-md"
		class:border-pink-400={voteResult === "girl"}
		class:bg-pink-50={voteResult === "girl"}
		class:dark:bg-pink-800={voteResult === "girl"}
		use:confettiAction
	>
		<Label
			for="girl"
			class="flex flex-col items-center justify-between rounded-md bg-transparent p-4 text-pink-500 hover:bg-pink-50 hover:dark:bg-pink-700 cursor-pointer hover:text-pink-300"
		>
			<RadioGroup.Item value="girl" id="girl" class="sr-only" aria-label="girl" />
			<Girl class="mb-3 h-16 w-16 text-inherit" />
			Girl
		</Label>
	</div>
</RadioGroup.Root>
