<script lang="ts">
	import BorderlessButton from '$lib/components/buttons/BorderlessButton.svelte';
	import ConnectionRecommendation from '$lib/components/recommendation/ConnectionRecommendation.svelte';
	import DuplicationRecommendation from '$lib/components/recommendation/DuplicationRecommendation.svelte';
	import StatementRecommendation from '$lib/components/recommendation/StatementRecommendation.svelte';
	import RecommendationFilter from '$lib/components/RecommendationFilter.svelte';
	import { getFallbackConnection } from '$lib/state/entities.svelte';

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
	{#if randint === 0}
		<StatementRecommendation></StatementRecommendation>
	{:else if randint === 1}
		<ConnectionRecommendation connection={getFallbackConnection()}></ConnectionRecommendation>
	{:else}
		<DuplicationRecommendation></DuplicationRecommendation>
	{/if}
</div>
