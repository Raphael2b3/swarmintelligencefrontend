<script lang="ts">
	import type { IFilterOptions } from '$lib/interfaces';
	import Dropdown from '../base/Dropdown.svelte';

	let { options = $bindable() }: { options: IFilterOptions } = $props();

	function setDefaultOptions() {
		options['controversial'] = false;
		options['sortByTruth'] = 'asc';
		options['sortByVotes'] = 'asc';
		options['tags'] = [];
		options['entitytype'] = [];
		options['_tagstring'] = '';
	}

	const sortdirections = [
		{ value: 'asc', name: 'Ascending' },
		{ value: 'desc', name: 'Descending' }
	];

	$effect(() => {
		options.tags = options._tagstring?.split(' ');
	});
</script>

<Dropdown title="Filter" icon="filter">
	<button class="rounded p-3 shadow-md" onclick={setDefaultOptions}>Clear All</button>

	<div class="flex gap-3">
		<input type="checkbox" class="p-3" bind:checked={options.controversial} />Controversal Only
	</div>

	<p class="mb-4 font-semibold text-gray-900 dark:text-white">Entities</p>
	<div class="flex gap-3">
		<input
			type="checkbox"
			class="p-3"
			bind:group={options.entitytype}
			value="statement"
		/>Statements
	</div>
	<div class="flex gap-3">
		<input
			type="checkbox"
			class="p-3"
			bind:group={options.entitytype}
			value="connection"
		/>Connections
	</div>
	<div class="flex gap-3">
		<input
			type="checkbox"
			class="p-3"
			bind:group={options.entitytype}
			value="duplication"
		/>Duplications
	</div>
	<p class="mb-4 font-semibold text-gray-900 dark:text-white">Sort By Truth</p>
	<select class="mt-2" bind:value={options.sortByTruth}>
		{#each sortdirections as direction}
			<option value={direction.value}>{direction.name}</option>
		{/each}
	</select>

	<p class="mb-4 font-semibold text-gray-900 dark:text-white">Sort by Votes</p>
	<select class="mt-2" bind:value={options.sortByVotes}>
		{#each sortdirections as direction}
			<option value={direction.value}>{direction.name}</option>
		{/each}
	</select>

	<p class="mb-4 font-semibold text-gray-900 dark:text-white">Tags</p>
	<input
		type="text"
		class="rounded border-2 border-black p-3 shadow-lg"
		id="first_name"
		placeholder="Tags"
		bind:value={options._tagstring}
	/>
</Dropdown>
