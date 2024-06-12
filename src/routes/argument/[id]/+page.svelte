<script lang="ts">
	import { page } from '$app/stores';
	import Checkbox from '$lib/components/base/Checkbox.svelte';
	import Entity from '$lib/components/models/Entity.svelte';
	import Connection from '$lib/components/models/connection/Connection.svelte';
	import Statement from '$lib/components/models/statement/Statement.svelte';
	import { ELoadingState, type IConnection, type IEntity, type IStatement } from '$lib/interfaces';
	import { getEntity, getConnectiveFor } from '$lib/state/entities.svelte';
	import Searchfield from '$lib/components/base/Searchfield.svelte';
	import DiscoverView from '$lib/components/views/DiscoverView.svelte';
	import RecommendationView from '$lib/components/views/RecommendationView.svelte';
	import { Button } from 'flowbite-svelte';
	import { goto } from '$app/navigation';

	const { id } = $page.params;
	const statement = getEntity(id, 'statement') as IStatement;
	let isEmpty = $state(true);
	let results: IEntity[] = $state([]);
	let loadingState = $state();
</script>

<h3>Add Argument For</h3>
<Statement {statement} showTruth></Statement>
<form>
	Pro Argument Or Contra Argument? <br />
	How Good is the Argument? <br />
	<Checkbox></Checkbox>
</form>

<Searchfield
	bind:isEmpty
	bind:results
	filterOptions={{
		entitytype: ['statement']
	}}
></Searchfield>
{#each results as result}
	<Entity entity={result} mode="preview" />
	<Button onclick={() => {
			console.log((result as IStatement).id);
			goto("/statement/"+statement.id)
		}}
		>Add this as Argument</Button
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
<Button>Didnt find your Statement? Create it! Click</Button>
