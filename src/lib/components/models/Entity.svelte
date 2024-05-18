<script lang="ts">
	import {
		isIConnection,
		isIDuplicationMarker,
		isIStatement,
		type IConnection,
		type IDuplicationMarker,
		type IStatement
	} from '$lib/interfaces';
	import Statement from './Statement.svelte';
	import Connection from './Connection.svelte';
	import DuplicationMarker from './DuplicationMarker.svelte';
	let { entity }: { entity: IStatement | IConnection | IDuplicationMarker } = $props();
</script>

{#if isIConnection(entity)}
	<Connection connection={entity} />
{:else if isIStatement(entity)}
	<Statement statement={entity} />
{:else if isIDuplicationMarker(entity)}
	<DuplicationMarker duplicationMarker={entity} />
{/if}
