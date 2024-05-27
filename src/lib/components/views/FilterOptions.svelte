<script lang="ts">
	import type { IFilterOptions } from '$lib/interfaces';
	import { Card, Button, Checkbox, Label, Select, Input } from 'flowbite-svelte';

	const defopt: IFilterOptions = {
		controversial: false,
		sortByTruth: 'asc',
		sortByVotes: 'asc',
		tags: [],
		entitytype: []
	};

	function setDefaultOptions() {
		options['controversial'] = false;
		options['sortByTruth'] = 'asc';
		options['sortByVotes'] = 'asc';
		options['tags'] = [];
		options['entitytype'] = [];
	}

	const sortdirection = [
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

	let tagsstring: string = $state('');
	$effect(() => {
		options.tags = tagsstring.split(' ');
	});
</script>

<Card>
	{filterActive}

	<Button onclick={setDefaultOptions}>Clear All</Button>

	<Checkbox class="p-3" bind:checked={options.controversial}>Controversal Only</Checkbox>

	<p class="mb-4 font-semibold text-gray-900 dark:text-white">Entities</p>
	<ul
		class="w-48 bg-white rounded-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-600 divide-y divide-gray-200 dark:divide-gray-600"
	>
		<li>
			<Checkbox class="p-3" bind:group={options.entitytype} value="statement">Statements</Checkbox>
		</li>
		<li>
			<Checkbox class="p-3" bind:group={options.entitytype} value="connection">Connections</Checkbox
			>
		</li>
		<li>
			<Checkbox class="p-3" bind:group={options.entitytype} value="duplication"
				>Duplications</Checkbox
			>
		</li>
	</ul>

	<Label>
		Sort By Truth
		<Select class="mt-2" items={sortdirection} bind:value={options.sortByTruth} />
	</Label>

	<Label>
		Sort By Votes
		<Select class="mt-2" items={sortdirection} bind:value={options.sortByVotes} />
	</Label>

	<Input type="text" id="first_name" placeholder="Tags" bind:value={tagsstring} />
</Card>
