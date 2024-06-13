<script lang="ts">
	import Entity from '$lib/components/models/Entity.svelte';
	import { getRecommendationDB } from '$lib/database';
	import type { IEntity, IEntityType } from '$lib/interfaces';
	import { getEntity } from '$lib/state/entities.svelte';
	import { addVoteListener } from '$lib/hooks/vote.svelte';
	let recommendationsPool: Record<string, IEntityType> = $state({});
	let index = $state(0);
	let keys = $derived(Object.keys(recommendationsPool));
	let id = $derived(keys[index % keys.length]);
	let current_entity: IEntity | undefined = $derived(getEntity(id, recommendationsPool[id]));

	function refresh() {
		recommendationsPool = getRecommendationDB();
		index = 0;
	}
	function getNext() {
		index++;
	}
	function getPrevious() {
		index--;
	}
	refresh();

	addVoteListener(() => {
		console.log('Vote');
		//getNext();
	});
</script>

<div class="flex flex-col items-center">
	Recommendations
	<div>
		<button onclick={getNext}>Next</button>
		<button onclick={getPrevious}>Last</button>
	</div>
	{#if current_entity}
		<Entity entity={current_entity} />
	{:else}
		<p>No recommendations</p>
	{/if}
</div>
