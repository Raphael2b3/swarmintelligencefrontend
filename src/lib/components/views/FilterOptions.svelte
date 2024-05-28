<script lang="ts">
	import type { IFilterOptions } from '$lib/interfaces';
	import { Card, Button, Label, Select, Input, Toggle } from 'flowbite-svelte';
	import Checkbox from '../base/Checkbox.svelte';

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

<Card>
	<Button onclick={setDefaultOptions}>Clear All</Button>

	<Checkbox class="p-3" bind:checked={options.controversial}>Controversal Only</Checkbox>

	<p class="mb-4 font-semibold text-gray-900 dark:text-white">Entities</p>

	<Checkbox class="p-3" bind:group={options.entitytype} value="statement">Statements</Checkbox>
	<Checkbox class="p-3" bind:group={options.entitytype} value="connection">Connections</Checkbox>
	<Checkbox class="p-3" bind:group={options.entitytype} value="duplication">Duplications</Checkbox>
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
