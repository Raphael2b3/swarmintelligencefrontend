<script lang="ts">
	import { searchForEntities } from '$lib/database';
	import type { IFilterOptions } from '$lib/interfaces';

	import { Search, Button, Dropdown, DropdownItem } from 'flowbite-svelte';
	import { SearchOutline, ChevronDownOutline } from 'flowbite-svelte-icons';
	import FilterOptions from '../views/FilterOptions.svelte';

	let { isEmpty = $bindable(), searchFunc }: { searchFunc: (e: any) => void; isEmpty: boolean } =
		$props();
	let searchTerm = $state('Ist die Erde Flach?');
	let open = $state(false);
	//let filteroption: IFilterOptions = $state({});

	let filteroptions: IFilterOptions = $state({ entitytype: [] });
	$effect(() => {
		console.log('filteroptions', filteroptions);

		console.log('filteroptionsdsdgvdff');
	});

	$effect(() => {
		isEmpty = searchTerm === '';
	});
	let filterActive = $state(false);
</script>

<form class="flex">
	<div class="relative">
		<Button
			onclick={() => (open = !open)}
			class="rounded-e-none whitespace-nowrap border border-e-0 border-primary-700"
		>
			{filterActive ? 'Filter Active' : 'Filter'}
			<ChevronDownOutline class="w-2.5 h-2.5 ms-2.5" />
		</Button>
		<Dropdown {open}>
			<DropdownItem>
				<FilterOptions bind:options={filteroptions} {filterActive} />
			</DropdownItem>
		</Dropdown>
	</div>
	<Search
		bind:value={searchTerm}
		size="md"
		class="rounded-none py-2.5"
		placeholder="Search Mockups, Logos, Design Templates..."
	/>
	<Button class="!p-2.5 rounded-s-none">
		<SearchOutline class="w-6 h-6" />
	</Button>
</form>
