<script>
	import LightSwitch from "../ui/light-switch/light-switch.svelte";
	import { BabyIcon, LogOut } from "lucide-svelte";
	import * as Avatar from "$lib/components/ui/avatar";
	import { user, signOut } from "$lib/firebase";
	import { getInitials } from "$lib/utils";
	import * as DropdownMenu from "$lib/components/ui/dropdown-menu";
	import { Button } from "../ui/button";
</script>

<header class="sticky top-0 z-40 w-full border-b bg-background/95 shadow-sm backdrop-blur">
	<div class="container flex h-14 items-center">
		<div class="mr-4 hidden md:flex">
			<div
				class="flex flex-1 items-center justify-between space-x-2 sm:space-x-4 md:justify-end mr-4"
			>
				<BabyIcon class="text-foreground " />
			</div>
			<h2>
				<span
					class="bg-gradient-to-br from-blue-500 to-pink-500 bg-clip-text text-transparent box-decoration-clone"
					>Baby Rose</span
				>
			</h2>
		</div>
		<div class="flex flex-1 items-center justify-between space-x-2 sm:space-x-4 md:justify-end">
			<LightSwitch />
			{#if $user}
				<DropdownMenu.Root>
					<DropdownMenu.Trigger asChild let:builder>
						<Button builders={[builder]} variant="link" class="w-0">
							<Avatar.Root>
								<Avatar.Image src={$user?.photoURL} alt={$user?.displayName} />
								<Avatar.Fallback>{getInitials($user?.displayName ?? "")}</Avatar.Fallback>
							</Avatar.Root></Button
						>
					</DropdownMenu.Trigger>
					<DropdownMenu.Content class="w-56">
						<DropdownMenu.Label>{$user?.displayName}</DropdownMenu.Label>
						<DropdownMenu.Separator />
						<DropdownMenu.Item class="cursor-pointer" on:m-click={signOut}>
							<LogOut class="mr-2 h-4 w-4" />
							<span>Sign Out</span>
						</DropdownMenu.Item>
					</DropdownMenu.Content>
				</DropdownMenu.Root>
			{/if}
		</div>
	</div>
</header>
