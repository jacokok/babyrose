<script lang="ts">
	import { Moon, Sun } from "lucide-svelte";
	import { onMount } from "svelte";
	import { cn } from "$lib/utils";
	import {
		getModeOsPrefers,
		modeCurrent,
		setModeCurrent,
		setModeUserPrefers
	} from "./light-switch";

	type OnKeyDownEvent = KeyboardEvent & {
		currentTarget: EventTarget & HTMLDivElement;
	};

	function onToggleHandler(): void {
		$modeCurrent = !$modeCurrent;
		setModeUserPrefers($modeCurrent);
		setModeCurrent($modeCurrent);
	}

	// A11y Input Handlers
	function onKeyDown(event: OnKeyDownEvent): void {
		// Enter/Space triggers selection event
		if (["Enter", "Space"].includes(event.code)) {
			event.preventDefault();
			event.currentTarget.click();
		}
	}

	// Lifecycle
	onMount(() => {
		// Sync lightswitch with the theme
		if (!("modeCurrent" in localStorage)) {
			setModeCurrent(getModeOsPrefers());
		}
	});
</script>

<div
	on:click={onToggleHandler}
	on:click
	on:keydown={onKeyDown}
	on:keydown
	on:keyup
	on:keypress
	role="switch"
	aria-label="Light Switch"
	aria-checked={$modeCurrent}
	title="Toggle {$modeCurrent === true ? 'Dark' : 'Light'} Mode"
	tabindex="0"
>
	<div
		class={cn(
			"cursor-pointer inline-flex items-center justify-center font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-8 rounded-md text-xs w-9 px-0"
		)}
	>
		{#if $modeCurrent}
			<Moon class="h-5 w-5" />
			<span class="sr-only">Dark</span>
		{:else}
			<Sun class="h-5 w-5" />
			<span class="sr-only">Light</span>
		{/if}
	</div>
</div>
