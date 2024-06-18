<script lang="ts">
	import type { IEntity, IFilterOptions } from '$lib/interfaces';

	import FilterOptions from '../views/FilterOptions.svelte';
	import { searchEntites } from '$lib/state/entities.svelte';

	let {
		isEmpty = $bindable(),
		results = $bindable(),
		hide_filter = false,
		filterOptions = { entitytype: [] }
	}: {
		hide_filter?: boolean;
		results: IEntity[];
		isEmpty?: boolean;
		filterOptions?: IFilterOptions;
	} = $props();

	let searchTerm = $state('');
	let filteroptions: IFilterOptions = $state(filterOptions);

	$effect(() => {
		isEmpty = searchTerm === '';
	});

	function search() {
		results = searchEntites(searchTerm, filteroptions);
	}
	if (isEmpty) search();
</script>

<form class="flex w-full gap-2 shadow-lg" onsubmit={search}>
	{#if !hide_filter}
		<FilterOptions bind:options={filteroptions} />
	{/if}
	<input
		bind:value={searchTerm}
		name="q"
		class="w-full rounded-none p-4 py-2.5"
		placeholder="Search Statements"
	/>
	<button type="submit" class="flex items-center rounded-s-none !p-2.5">
		<i class="material-icons h-6 w-6">search</i>
	</button>
</form>
