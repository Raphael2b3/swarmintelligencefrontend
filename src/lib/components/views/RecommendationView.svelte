<script lang="ts">
	import { type IConnection, type IDuplicationMarker, type IStatement } from '$lib/interfaces';
	import Entity from '$lib/components/models/Entity.svelte';
	import Container from '$lib/components/base/Container.svelte';
	import { recommendationManager } from '$lib/state/entities.svelte';
</script>

Recommentdations
<div>
	<button class="true-button" onclick={recommendationManager.getNext}>Next</button>
	<button class="false-button" onclick={recommendationManager.getPrevious}>Last</button>
</div>
{#if recommendationManager.current}
	<Entity entity={recommendationManager.current} />
{:else}
	<p>No recommendations</p>
{/if}
