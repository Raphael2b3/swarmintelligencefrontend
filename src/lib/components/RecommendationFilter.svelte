<script lang="ts">
	import type { IFilterOptions } from '$lib/interfaces';
	import ExpandableFilter from './ExpandableFilter.svelte';

	let filterOptions: IFilterOptions = $state({
		entitytype: ['statement'],
		controversial: true,
		sortByTruth: 'asc',
		sortByVotes: 'desc',
		tags: ['foo'],
		_tagstring: ''
	});
</script>

<ExpandableFilter options={filterOptions} />
