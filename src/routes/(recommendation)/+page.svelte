<script lang="ts">
	import BorderlessButton from '$lib/components/buttons/BorderlessButton.svelte';
	import ConnectionRecommendation from '$lib/components/recommendation/ConnectionRecommendation.svelte';
	import DuplicationRecommendation from '$lib/components/recommendation/DuplicationRecommendation.svelte';
	import StatementRecommendation from '$lib/components/recommendation/StatementRecommendation.svelte';
	import RecommendationFilter from '$lib/components/RecommendationFilter.svelte';
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
	style="flex:1; display:flex; flex-direction: column; justify-content: space-around;; margin-right:4%; margin-left: 4%; margin-bottom: 4%;"
>
	{#if !getSearchmode()}
		{#if randint === 0}
			<StatementRecommendation></StatementRecommendation>
		{:else if randint === 1}
			<ConnectionRecommendation connection={getFallbackConnection()}></ConnectionRecommendation>
		{:else}
			<DuplicationRecommendation></DuplicationRecommendation>
		{/if}
	{:else}
		{#each [0, 0, 0, 0, 0] as element}
			<div style="display: flex; gap:10px; flex-direction: column;">
				<StatementSearchResultOnlyText statement={getFallbackStatement()}
				></StatementSearchResultOnlyText>
				<DuplicationSearchResult duplication={getFallbackDuplication()}></DuplicationSearchResult>
				<DuplicationSearchResult duplication={getFallbackDuplication()}></DuplicationSearchResult>
			</div>
		{/each}
	{/if}
</div>
