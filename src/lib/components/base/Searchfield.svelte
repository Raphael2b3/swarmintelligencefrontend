<script lang="ts">
	import type { IEntity, IFilterOptions } from '$lib/interfaces';

	import { Search, Button, Dropdown, DropdownItem } from 'flowbite-svelte';
	import { SearchOutline, ChevronDownOutline, FilterOutline } from 'flowbite-svelte-icons';
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
		<Button
			onclick={() => (open = !open)}
			class="rounded-e-none whitespace-nowrap border border-e-0 border-primary-700"
		>
			<FilterOutline class="w-5 h-5 ms-5" />
			Filter
			<ChevronDownOutline class="w-2.5 h-2.5 ms-2.5" />
		</Button>
		<Dropdown {open}>
			<DropdownItem>
				<FilterOptions bind:options={filteroptions} />
			</DropdownItem>
		</Dropdown>
	</div>
	<Search
		bind:value={searchTerm}
		name="q"
		size="md"
		class="rounded-none py-2.5"
		placeholder="Search Mockups, Logos, Design Templates..."
	/>
	<Button type="submit" class="!p-2.5 rounded-s-none">
		<SearchOutline class="w-6 h-6" />
	</Button>
</form>
