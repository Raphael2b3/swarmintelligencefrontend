<script lang="ts">
	import type { IFilterOptions } from '$lib/interfaces';

	let { options = $bindable() }: { options: IFilterOptions } = $props();

	let tagsstring: string = $state('');
	$effect(() => {
		options.tags = tagsstring.split(' ');
		console.log('test');
	});
</script>

<div>
	<h3>Filter Options</h3>
	<button>Clear all</button>
	<h4>Controversal Only</h4>
	<input type="checkbox" bind:checked={options.controversial} />
	<h4>Entities</h4>
	<input type="checkbox" bind:group={options.entitytype} value="statement" /> Statements
	<input type="checkbox" bind:group={options.entitytype} value="connection" /> Connections
	<input type="checkbox" bind:group={options.entitytype} value="duplication" /> Duplicatoins
	<h4>Sort By truth</h4>
	<select bind:value={options.sortByTruth}>
		<option value="asc">Ascending</option>
		<option value="desc">Descending</option>
	</select>
	<h4>Sort By votes</h4>
	<select bind:value={options.sortByVotes}>
		<option value="asc">Ascending</option>
		<option value="desc">Descending</option>
	</select>
	<h4>Tags</h4>
	<input bind:value={tagsstring} />

	options: {JSON.stringify(options)}
</div>
