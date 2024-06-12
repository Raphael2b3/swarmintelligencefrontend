<script lang="ts">
	import { ELoadingState, type IEntity } from '$lib/interfaces';

	import Entity from '$lib/components/models/Entity.svelte';
	import { Button } from 'flowbite-svelte';
	let {
		results,
		loadingState = ELoadingState.LOADING
	}: { results: IEntity[]; loadingState?: ELoadingState } = $props();
</script>

{#each results as result}
	<Entity entity={result} mode="preview" />
{:else}
	<!-- else if content here -->
	{#if loadingState === ELoadingState.FAILED}
		<p>There was an error loading the statements</p>
	{:else}
		<p>Loading...</p>
	{/if}
{/each}
