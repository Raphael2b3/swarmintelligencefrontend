<script lang="ts">
	import { isIConnection, isIDuplicationMarker, isIStatement, type IEntity } from '$lib/interfaces';
	import Connection from './connection/Connection.svelte';
	import DuplicationMarker from './duplicationmarker/DuplicationMarker.svelte';
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
{:else if isIDuplicationMarker(entity)}
	<DuplicationMarker duplicationMarker={entity} />
{/if}
