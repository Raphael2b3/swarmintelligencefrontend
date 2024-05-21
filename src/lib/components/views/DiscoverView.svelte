<script lang="ts">
	import {
		type IConnection,
		type IDuplicationMarker,
		type IEntity,
		type IStatement
	} from '$lib/interfaces';

	import Container from '$lib/components/base/Container.svelte';
	import Searchfield from '$lib/components/base/Searchfield.svelte';
	import Entity from '$lib/components/models/Entity.svelte';
	import StatementDetail from '$lib/components/models/statement/StatementDetail.svelte';
	let { results = $bindable([]) }: { results: IEntity[] } = $props();
</script>

<Container>
	{#each results as result}
		<Entity entity={result} mode="preview" />
	{:else}
		<p>No statements found</p>
	{/each}
</Container>
