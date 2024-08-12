<script lang="ts">
	import type { IFilterOptions } from '$lib/interfaces';
	import Card from '@smui/card';
	import Ripple from '@smui/ripple';
	import ExpandButton from './buttons/iconbuttons/ExpandButton.svelte';
	import ClearButton from './buttons/iconbuttons/ClearButton.svelte';
	import Checkbox from './form/Checkbox.svelte';
	import DropdownSelect from './form/DropdownSelect.svelte';
	import Textfield from './form/Textfield.svelte';
	import CheckboxGroup from './form/CheckboxGroup.svelte';
	let { options = $bindable() }: { options: IFilterOptions } = $props();

	function setDefaultOptions() {
		options['controversial'] = false;
		options['sortByTruth'] = 'asc';
		options['sortByVotes'] = 'asc';
		options['tags'] = [];
		options['entitytype'] = [];
		options['_tagstring'] = '';
	}
	function onClear() {
		setDefaultOptions();
	}

	const sortdirections = [
		{ value: 'asc', name: 'Ascending' },
		{ value: 'desc', name: 'Descending' }
	];

	$effect(() => {
		options.tags = options._tagstring?.split(' ');
	});

	let previewtext = $derived(
		'Controversial: ' +
			options.controversial +
			', Sort by Truth: ' +
			options.sortByTruth +
			', Sort by Votes: ' +
			options.sortByVotes +
			', Tags: ' +
			options.tags +
			', Entitytype: ' +
			options.entitytype +
			', Sort by Truth: ' +
			options.sortByTruth +
			', Sort by Votes: ' +
			options.sortByVotes +
			', Entitytype: ' +
			options.entitytype
	);
	let expanded = $state(false);
</script>

<div use:Ripple={{ surface: true, color: 'primary' }} tabindex="0" role="button">
	<Card padded variant="outlined" style="display: flex; flex-direction: row;">
		{#if !expanded}
			{previewtext}
		{:else}
			<div style="display:flex; gap: 3px; flex-direction: column;">
				<ClearButton onclick={onClear} title="Clear Filter"></ClearButton>
				<Checkbox bind:checked={options.controversial} label="Controversial Only"></Checkbox>
				Entities
				<CheckboxGroup
					bind:group={options.entitytype}
					options={[
						{ label: 'Statement', value: 'statement' },
						{ label: 'Duplication', value: 'duplication' },
						{ label: 'Connection', value: 'connection' }
					]}
				></CheckboxGroup>
				<div style="display: flex; flex-direction: row;">
					<DropdownSelect
						label="Sort by Truth"
						bind:value={options.sortByTruth}
						options={sortdirections}
					></DropdownSelect>
					<DropdownSelect
						label="Sort by Popularity"
						bind:value={options.sortByVotes}
						options={sortdirections}
					></DropdownSelect>
				</div>
				Tags
				<Textfield bind:value={options._tagstring} label="Tags"></Textfield>
			</div>
		{/if}
		<ExpandButton bind:expanded></ExpandButton>
	</Card>
</div>
