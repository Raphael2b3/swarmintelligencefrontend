<script lang="ts">
	import Entity from '$lib/components/models/Entity.svelte';
	import { recommendationManager } from '$lib/state/recommendation.svelte';
	import { Button, Card } from 'flowbite-svelte';
</script>

<Card size="xl" class="flex flex-col items-center">
	Recommentdations

	{#if recommendationManager.current}
		<Entity entity={recommendationManager.current} />
		<div>
			<Button onclick={recommendationManager.getNext}>Next</Button>
			<Button onclick={recommendationManager.getPrevious}>Last</Button>
		</div>
	{:else}
		<p>No recommendations</p>
	{/if}
</Card>
