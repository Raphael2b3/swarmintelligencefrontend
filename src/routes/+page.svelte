<script lang="ts">
	import Searchfield from '$lib/components/base/Searchfield.svelte';
	import DiscoverView from '$lib/components/views/DiscoverView.svelte';
	import RecommendationView from '$lib/components/views/RecommendationView.svelte';
	import type { IEntity } from '$lib/interfaces';
	import { Button } from 'flowbite-svelte';

	let isEmpty = $state(true);
	let results: IEntity[] = $state([]);
</script>

<Searchfield bind:isEmpty bind:results></Searchfield>
{#if isEmpty}
	<RecommendationView />
{:else}
	<DiscoverView {results} />
	<Button>Didnt find your Statement? Create it! Click</Button>
{/if}
