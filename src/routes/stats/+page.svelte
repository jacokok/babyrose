<script lang="ts">
	import { voteDataList } from "$lib/firebase";
	import * as Table from "$lib/components/ui/table";
	import { Header } from "$lib/components/header";
	import Gender from "./Gender.svelte";
</script>

<Header />
<Table.Root class="mt-6">
	<Table.Caption class="caption-top">What everyone picked</Table.Caption>
	<Table.Header>
		<Table.Row>
			<Table.Head>Name</Table.Head>
			<Table.Head>Gender</Table.Head>
			<Table.Head class="text-right">Email</Table.Head>
		</Table.Row>
	</Table.Header>
	<Table.Body>
		{#each $voteDataList ?? [] as row}
			<Table.Row>
				<Table.Cell>{row.name}</Table.Cell>
				<Table.Cell><Gender gender={row.gender} /></Table.Cell>
				<Table.Cell class="text-right">{row.email}</Table.Cell>
			</Table.Row>
		{/each}
	</Table.Body>
</Table.Root>
