<script lang="ts">
	import type { IFilterOptions } from '$lib/interfaces';
	import { Card, Button, Checkbox, Label, Select, Input } from 'flowbite-svelte';

	const defopt: IFilterOptions = {
		controversial: false,
		sortByTruth: 'asc',
		sortByVotes: 'asc',
		tags: [],
		entitytype: [],
		_tagstring: ''
	};

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
	let {
		options = $bindable(),
		filterActive = $bindable()
	}: { options: IFilterOptions; filterActive: boolean } = $props();

	$effect(() => {
		filterActive = options == defopt;
		console.log('filterActive', options);
	});

	$effect(() => {
		options.tags = options._tagstring?.split(' ');
	});
</script>

<Card>
	{filterActive}

	<Button onclick={setDefaultOptions}>Clear All</Button>

	<Checkbox class="p-3" bind:checked={options.controversial}>Controversal Only</Checkbox>

	<p class="mb-4 font-semibold text-gray-900 dark:text-white">Entities</p>

	<Checkbox
		class="p-3"
		bind:group={options.entitytype}
		value="statement"
		checked={'statement' in options.entitytype}>Statements</Checkbox
	>
	<Checkbox
		class="p-3"
		bind:group={options.entitytype}
		value="connection"
		checked={'connection' in options.entitytype}>Connections</Checkbox
	>
	<Checkbox
		class="p-3"
		bind:group={options.entitytype}
		value="duplication"
		checked={'duplication' in options.entitytype}>Duplications</Checkbox
	>
	<Label>
		Sort By Truth
		<Select class="mt-2" items={sortdirections} bind:value={options.sortByTruth} />
	</Label>

	<Label>
		Sort By Votes
		<Select class="mt-2" items={sortdirections} bind:value={options.sortByVotes} />
	</Label>

	<Input type="text" id="first_name" placeholder="Tags" bind:value={options._tagstring} />
</Card>
