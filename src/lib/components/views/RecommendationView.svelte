<script lang="ts">
	import Entity from '$lib/components/models/Entity.svelte';
	import { recommendationManager } from '$lib/state/recommendation.svelte';
	import { Button, Card } from 'flowbite-svelte';
</script>

<Card>
	Recommentdations
	<div class="horizontal">
		<Button onclick={recommendationManager.getNext}>Next</Button>
		<Button onclick={recommendationManager.getPrevious}>Last</Button>
	</div>
	{#if recommendationManager.current}
		<Entity entity={recommendationManager.current} />
	{:else}
		<p>No recommendations</p>
	{/if}
</Card>
