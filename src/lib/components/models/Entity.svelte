<script lang="ts">
	import { isIConnection, isIDuplicationMarker, isIStatement, type IEntity } from '$lib/interfaces';
	import Connection from './connection/Connection.svelte';
	import ConnectionDetail from './connection/ConnectionDetail.svelte';
	import ConnectionPreview from './connection/ConnectionPreview.svelte';
	import DuplicationMarker from './duplicationmarker/DuplicationMarker.svelte';
	import DuplicationMarkerDetail from './duplicationmarker/DuplicationMarkerDetail.svelte';
	import DuplicationMarkerPreview from './duplicationmarker/DuplicationMarkerPreview.svelte';
	import Statement from './statement/Statement.svelte';
	import StatementDetail from './statement/StatementDetail.svelte';
	import StatementPreview from './statement/StatementPreview.svelte';
	let {
		entity,
		mode = 'default'
	}: {
		entity: IEntity;
		mode?: 'default' | 'preview' | 'detail';
	} = $props();

	let ConnectionElement: typeof Connection | typeof ConnectionPreview | typeof ConnectionDetail =
		$state(Connection);
	let StatementElement: typeof Statement | typeof StatementDetail | typeof StatementPreview =
		$state(Statement);
	let DuplicationMarkerElement:
		| typeof DuplicationMarker
		| typeof DuplicationMarkerDetail
		| typeof DuplicationMarkerPreview = $state(DuplicationMarker);

	if (mode === 'preview') {
		ConnectionElement = ConnectionPreview;
		StatementElement = StatementPreview;
		DuplicationMarkerElement = DuplicationMarker;
	} else if (mode === 'detail') {
		ConnectionElement = ConnectionDetail;
		StatementElement = StatementDetail;
		DuplicationMarkerElement = DuplicationMarkerPreview;
	}
</script>

{#if isIConnection(entity)}
	<ConnectionElement connection={entity} />
{:else if isIStatement(entity)}
	<StatementElement statement={entity} />
{:else if isIDuplicationMarker(entity)}
	<DuplicationMarkerElement duplicationMarker={entity} />
{/if}
