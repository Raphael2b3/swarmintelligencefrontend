<script lang="ts">
	import type { IEntity, IFilterOptions } from '$lib/interfaces';

	import FilterOptions from '../views/FilterOptions.svelte';
	import { searchEntites } from '$lib/state/entities.svelte';

	let {
		isEmpty = $bindable(),
		results = $bindable(),
		filterOptions = { entitytype: [] }
	}: { results: IEntity[]; isEmpty: boolean; filterOptions?: IFilterOptions } = $props();

	let searchTerm = $state('');
	let open = $state(false);
	let filteroptions: IFilterOptions = $state(filterOptions);

	$effect(() => {
		isEmpty = searchTerm === '';
	});

	function search() {
		results = searchEntites(searchTerm, filteroptions);
	}
	if (isEmpty) search();
</script>

<form class="flex w-full" onsubmit={search}>
	<div class="relative">
		<button
			onclick={() => (open = !open)}
			class="rounded-e-none whitespace-nowrap border border-e-0 border-primary-700"
		>
			<i class="material-icons w-5 h-5 ms-5">filter_list</i>
			Filter
			<i class="material-icons w-2.5 h-2.5 ms-2.5">keyboard_arrow_down</i>
		</button>
		<select>
			<option>
				<FilterOptions bind:options={filteroptions} />
			</option>
		</select>
	</div>
	<input
		bind:value={searchTerm}
		name="q"
		class="rounded-none py-2.5 w-full"
		placeholder="Search Mockups, Logos, Design Templates..."
	/>
	<button type="submit" class="!p-2.5 rounded-s-none">
		<i class="material-icons w-6 h-6">search</i>
	</button>
</form>
