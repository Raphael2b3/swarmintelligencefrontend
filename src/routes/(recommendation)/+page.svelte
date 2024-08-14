<script lang="ts">
	import BorderlessButton from '$lib/components/buttons/BorderlessButton.svelte';
	import ConnectionRecommendation from '$lib/components/recommendation/ConnectionRecommendation.svelte';
	import DuplicationRecommendation from '$lib/components/recommendation/DuplicationRecommendation.svelte';
	import StatementRecommendation from '$lib/components/recommendation/StatementRecommendation.svelte';
	import RecommendationFilter from '$lib/components/RecommendationFilter.svelte';

	let randint: number = $state(0);
</script>

<RecommendationFilter></RecommendationFilter>
<BorderlessButton
	onclick={() => {
		randint = Math.floor(Math.random() * 3);
	}}>Refresh</BorderlessButton
>
<div style="flex-grow: 1; background-color: red;">
	{#if randint === 0}
		<StatementRecommendation></StatementRecommendation>
	{:else if randint === 1}
		<ConnectionRecommendation></ConnectionRecommendation>
	{:else}
		<DuplicationRecommendation></DuplicationRecommendation>
	{/if}
</div>
