<script lang="ts">
	import { isIConnection, isIDuplication, isIStatement, type IEntity } from '$lib/interfaces';
	import Connection from './connection/Connection.svelte';
	import Duplication from './duplication/Duplication.svelte';
	import Statement from './statement/Statement.svelte';

	let {
		entity,
		mode = 'default'
	}: {
		entity: IEntity;
		mode?: 'default' | 'preview' | 'detail';
	} = $props();
</script>

{#if isIConnection(entity)}
	<Connection connection={entity} />
{:else if isIStatement(entity)}
	<Statement showTruth={mode !== 'default'} statement={entity} />
{:else if isIDuplication(entity)}
	<Duplication duplication={entity} />
{/if}
