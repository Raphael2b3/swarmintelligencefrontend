<script lang="ts">
	import Searchfield from '$lib/components/base/Searchfield.svelte';
	import DiscoverView from '$lib/components/views/DiscoverView.svelte';
	import RecommendationView from '$lib/components/views/RecommendationView.svelte';
	import type { IEntity } from '$lib/interfaces';

	let isEmpty = $state(true);
	let results: IEntity[] = $state([]);
</script>

<Searchfield bind:isEmpty searchFunc={() => {}}></Searchfield>
{#if isEmpty}
	test
	<RecommendationView />
{:else}
	<DiscoverView {results} />
	taa
{/if}
