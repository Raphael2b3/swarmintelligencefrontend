<script lang="ts">
	import { page } from '$app/stores';
	import Entity from '$lib/components/models/Entity.svelte';
	import Connection from '$lib/components/models/connection/Connection.svelte';
	import Statement from '$lib/components/models/statement/Statement.svelte';
	import { type IConnection, type IEntity, type IStatement } from '$lib/interfaces';
	import { getEntity, getConnectiveFor } from '$lib/state/entities.svelte';

	const { id } = $page.params;
	const statement = getEntity(id, 'statement') as IStatement;
	let args: IEntity[] = getConnectiveFor(statement.id, 'argument');
	let thesis: IEntity[] = getConnectiveFor(statement.id, 'thesis');
</script>

<details class="mb-2 flex max-w-full items-center justify-center">
	<summary>Thesis</summary>
	<div class="flex flex-row gap-2 overflow-scroll">
		{#each thesis as thesis}
			<Connection connection={thesis as IConnection} showStatement="thesis"></Connection>
		{/each}
	</div>
</details>
<Statement {statement} showTruth></Statement>
Arguments
<div class="flex flex-row gap-2 overflow-scroll w-full">
	{#each args as argument}
		<Connection connection={argument as IConnection} showStatement="argument"></Connection>
	{/each}
</div>

<style>
	/* Hide scrollbar for Chrome, Safari and Opera */
	.no-scrollbar::-webkit-scrollbar {
		display: none;
	}

	/* Hide scrollbar for IE, Edge and Firefox */
	.no-scrollbar {
		-ms-overflow-style: none; /* IE and Edge */
		scrollbar-width: none; /* Firefox */
	}
</style>
