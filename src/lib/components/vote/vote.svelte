<script lang="ts">
	import { Label } from "$lib/components/ui/label";
	import * as RadioGroup from "$lib/components/ui/radio-group";
	import { db, user, voteData, vote } from "$lib/firebase";
	import { doc, setDoc } from "firebase/firestore";
	import Boy from "../ui/icons/boy.svelte";
	import Girl from "../ui/icons/girl.svelte";
	import { confettiAction } from "svelte-legos";

	$: voteResult = $voteData?.gender;

	const saveVote = async (value: string | undefined) => {
		if ($user?.uid != undefined && value !== undefined && !$vote.isClosed) {
			await setDoc(doc(db, "votes", $user.uid), {
				name: $user.displayName,
				gender: value,
				email: $user.email
			});
		}
	};
</script>

{#if $vote.isClosed}
	<h3 class="text-center">Voting has been closed</h3>
{:else}
	<h3 class="text-center">Pick a gender</h3>
{/if}
<RadioGroup.Root
	class="grid grid-cols-2 gap-4 mt-4"
	onValueChange={saveVote}
	disabled={$vote.isClosed}
>
	<div
		class="border-2 border-muted rounded-md"
		class:border-blue-300={voteResult === "boy"}
		class:bg-blue-100={voteResult === "boy"}
		class:dark:bg-blue-400={voteResult === "boy"}
		use:confettiAction={{ particleCount: $vote.isClosed ? 0 : 100 }}
	>
		<Label
			for="boy"
			class="flex flex-col items-center justify-between rounded-md bg-transparent p-4 text-blue-700 hover:bg-blue-50 hover:dark:bg-blue-400 cursor-pointer hover:text-blue-300"
		>
			<RadioGroup.Item value="boy" id="boy" class="sr-only" aria-label="boy" />
			<Boy class="mb-3 h-16 w-16 text-inherit" />
			Boy
		</Label>
	</div>
	<div
		class="border-2 border-muted rounded-md"
		class:border-pink-400={voteResult === "girl"}
		class:bg-pink-100={voteResult === "girl"}
		class:dark:bg-pink-300={voteResult === "girl"}
		use:confettiAction={{ particleCount: $vote.isClosed ? 0 : 100 }}
	>
		<Label
			for="girl"
			class="flex flex-col items-center justify-between rounded-md bg-transparent p-4 text-pink-500 hover:bg-pink-50 hover:dark:bg-pink-400 cursor-pointer hover:text-pink-300"
		>
			<RadioGroup.Item value="girl" id="girl" class="sr-only" aria-label="girl" />
			<Girl class="mb-3 h-16 w-16 text-inherit" />
			Girl
		</Label>
	</div>
</RadioGroup.Root>
