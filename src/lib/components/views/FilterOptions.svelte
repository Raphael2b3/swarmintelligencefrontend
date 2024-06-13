<script lang="ts">
	import type { IFilterOptions } from '$lib/interfaces';

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

<div>
	<button onclick={setDefaultOptions}>Clear All</button>

	<input type="checkbox" class="p-3" bind:checked={options.controversial} />Controversal Only
	<p class="mb-4 font-semibold text-gray-900 dark:text-white">Entities</p>

	<input type="checkbox" class="p-3" bind:group={options.entitytype} value="statement" />Statements
	<input
		type="checkbox"
		class="p-3"
		bind:group={options.entitytype}
		value="connection"
	/>Connections
	<input
		type="checkbox"
		class="p-3"
		bind:group={options.entitytype}
		value="duplication"
	/>Duplications
	<label>
		Sort By Truth
		<select class="mt-2" bind:value={options.sortByTruth}>
			{#each sortdirections as direction}
				<option value={direction.value}>{direction.name}</option>
			{/each}
		</select>
	</label>

	<label>
		Sort By Votes
		<select class="mt-2" bind:value={options.sortByVotes}>
			{#each sortdirections as direction}
				<option value={direction.value}>{direction.name}</option>
			{/each}
		</select>
	</label>

	<input type="text" id="first_name" placeholder="Tags" bind:value={options._tagstring} />
</div>
