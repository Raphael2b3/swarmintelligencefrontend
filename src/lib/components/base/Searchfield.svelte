<script lang="ts">
	import type { IEntity, IFilterOptions } from '$lib/interfaces';

	import { Search, Button, Dropdown, DropdownItem } from 'flowbite-svelte';
	import { SearchOutline, ChevronDownOutline, FilterOutline } from 'flowbite-svelte-icons';
	import FilterOptions from '../views/FilterOptions.svelte';
	import { getEntity } from '$lib/state/entities.svelte';

	let { isEmpty = $bindable(), results = $bindable() }: { results: IEntity[]; isEmpty: boolean } =
		$props();

	let searchTerm = $state('Ist die Erde Flach?');
	let open = $state(false);
	let filteroptions: IFilterOptions = $state({ entitytype: [] });

	$effect(() => {
		isEmpty = searchTerm === '';
	});

	function search() {
		results = getEni(searchTerm, filteroptions);
	}
</script>

<form class="flex">
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
		size="md"
		class="rounded-none py-2.5"
		placeholder="Search Mockups, Logos, Design Templates..."
	/>
	<Button onclick={search} class="!p-2.5 rounded-s-none">
		<SearchOutline class="w-6 h-6" />
	</Button>
</form>
