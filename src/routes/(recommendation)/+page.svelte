<script lang="ts">
	import BorderlessButton from '$lib/components/buttons/BorderlessButton.svelte';
	import ConnectionRecommendation from '$lib/components/recommendation/ConnectionRecommendation.svelte';
	import DuplicationRecommendation from '$lib/components/recommendation/DuplicationRecommendation.svelte';
	import StatementRecommendation from '$lib/components/recommendation/StatementRecommendation.svelte';
	import RecommendationFilter from '$lib/components/RecommendationFilter.svelte';
	import ConnectionSearchResult from '$lib/components/searchresult/ConnectionSearchResult.svelte';
	import DuplicationSearchResult from '$lib/components/searchresult/DuplicationSearchResult.svelte';
	import StatementSearchResultOnlyText from '$lib/components/searchresult/StatementSearchResultOnlyText.svelte';
	import {
		getFallbackConnection,
		getFallbackDuplication,
		getFallbackStatement
	} from '$lib/state/entities.svelte';
	import { getSearchmode } from '$lib/state/searchmode.svelte';

	let randint: number = $state(0);
</script>

<RecommendationFilter></RecommendationFilter>
<BorderlessButton
	onclick={() => {
		randint = (randint + 1) % 3;
	}}>Refresh</BorderlessButton
>
<div
	style="flex:1; display:flex; flex-direction: column; justify-content: space-around;  height:0;"
>
	{#if !getSearchmode()}
		<div
			style="flex:1; display:flex; flex-direction: column; justify-content: space-around;  padding-right:3rem; padding-left: 3rem; padding-bottom: 3rem;"
		>
			{#if randint === 0}
				<StatementRecommendation></StatementRecommendation>
			{:else if randint === 1}
				<ConnectionRecommendation connection={getFallbackConnection()}></ConnectionRecommendation>
			{:else}
				<DuplicationRecommendation></DuplicationRecommendation>
			{/if}
		</div>
	{:else}
		<div style="overflow-y: scroll; padding-right:3rem; padding-left: 3rem; padding-bottom: 3rem;">
			<div style="display:flex; flex-direction: column; gap: 1rem;">
				{#each [0, 0, 0, 0, 0] as element}
					<StatementSearchResultOnlyText statement={getFallbackStatement()}
					></StatementSearchResultOnlyText>
					<ConnectionSearchResult connection={getFallbackConnection()}></ConnectionSearchResult>
					<DuplicationSearchResult duplication={getFallbackDuplication()}></DuplicationSearchResult>
				{/each}
			</div>
		</div>
	{/if}
</div>
