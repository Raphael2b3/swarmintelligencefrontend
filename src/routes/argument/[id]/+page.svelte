<script lang="ts">
	import { page } from '$app/stores';
	import Checkbox from '$lib/components/base/Checkbox.svelte';
	import Entity from '$lib/components/models/Entity.svelte';
	import Connection from '$lib/components/models/connection/Connection.svelte';
	import Statement from '$lib/components/models/statement/Statement.svelte';
	import { ELoadingState, type IConnection, type IEntity, type IStatement } from '$lib/interfaces';
	import { getEntity, getConnectiveFor, createConnectionFor } from '$lib/state/entities.svelte';
	import Searchfield from '$lib/components/base/Searchfield.svelte';
	import DiscoverView from '$lib/components/views/DiscoverView.svelte';
	import RecommendationView from '$lib/components/views/RecommendationView.svelte';
	import { Button, Label, Select } from 'flowbite-svelte';
	import { goto } from '$app/navigation';
	import Progressbar from '$lib/components/base/Progressbar.svelte';

	const { id } = $page.params;
	const statement = getEntity(id, 'statement') as IStatement;
	let isEmpty = $state(true);
	let results: IEntity[] = $state([]);
	let loadingState = $state();
	let isProArgument = $state(true);
	let percentage = $state(0);
	const argumentTypes = [
		{ value: true, name: 'Pro Argument' },
		{ value: false, name: 'Contra' }
	];

	const addArgument = (id: string) => {
		createConnectionFor(statement.id, id, isProArgument, percentage);
		goto('/statement/' + id);
	};
</script>

<Searchfield
	bind:isEmpty
	bind:results
	filterOptions={{
		entitytype: ['statement']
	}}
></Searchfield>
<Label>
	What kind of Argument is this?
	<Select class="mt-2" items={argumentTypes} bind:value={isProArgument} />
</Label>

How much is this argument related to the thesis?
<Progressbar bind:value={percentage}></Progressbar>
<h3>Add Argument For</h3>
<Statement {statement} showTruth></Statement>
<hr />
{#each results as result}
	<Entity entity={result} mode="preview" />
	<Button onclick={() => addArgument(result.id)}>Add this as Argument</Button>
	<hr />
{:else}
	<!-- else if content here -->
	{#if loadingState === ELoadingState.FAILED}
		<p>There was an error loading the statements</p>
	{:else}
		<p>Loading...</p>
	{/if}
{/each}
<Button onclick={}>Didnt find your Statement? Create it! Click</Button>
