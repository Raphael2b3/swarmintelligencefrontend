<script lang="ts">
	import { page } from '$app/stores';
	import Entity from '$lib/components/models/Entity.svelte';
	import Statement from '$lib/components/models/statement/Statement.svelte';
	import { ELoadingState, type IEntity, type IStatement } from '$lib/interfaces';
	import { getEntity, createDuplicationFor } from '$lib/state/entities.svelte';
	import Searchfield from '$lib/components/base/Searchfield.svelte';
	import { goto } from '$app/navigation';

	const { id } = $page.params;
	const statement = getEntity(id, 'statement') as IStatement;
	let isEmpty = $state(true);
	let results: IEntity[] = $state([]);
	let loadingState = $state();
</script>

<h3>Find Duplication For</h3>
<Statement {statement} showTruth></Statement>
<Searchfield
	bind:isEmpty
	bind:results
	filterOptions={{
		entitytype: ['statement']
	}}
></Searchfield>
{#each results as result}
	<Entity entity={result} mode="preview" />
	<button
		onclick={() => {
			createDuplicationFor(statement.id, result.id);
			goto('/statement/' + statement.id);
		}}>Add this as Duplication</button
	>
	<hr />
{:else}
	<!-- else if content here -->
	{#if loadingState === ELoadingState.FAILED}
		<p>There was an error loading the statements</p>
	{:else}
		<p>Loading...</p>
	{/if}
{/each}
