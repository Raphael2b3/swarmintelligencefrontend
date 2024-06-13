<script lang="ts">
	import Searchfield from '$lib/components/base/Searchfield.svelte';
	import DiscoverView from '$lib/components/views/DiscoverView.svelte';
	import NewStatement from '$lib/components/views/NewStatement.svelte';
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
	<NewStatement></NewStatement>
{/if}
