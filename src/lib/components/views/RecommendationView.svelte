<script lang="ts">
	import { type IConnection, type IDuplicationMarker, type IStatement } from '$lib/interfaces';
	import Entity from '$lib/components/models/Entity.svelte';
	import { recommendationManager } from '$lib/state/recommendation.svelte';
	import { Card } from 'flowbite-svelte';
</script>

<Card>
	Recommentdations
	<div class="horizontal">
		<button class="true-button" onclick={recommendationManager.getNext}>Next</button>
		<button class="false-button" onclick={recommendationManager.getPrevious}>Last</button>
	</div>
	{#if recommendationManager.current}
		<Entity entity={recommendationManager.current} />
	{:else}
		<p>No recommendations</p>
	{/if}
</Card>
