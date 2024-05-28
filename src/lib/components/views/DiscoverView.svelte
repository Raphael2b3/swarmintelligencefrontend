<script lang="ts">
	import { type IEntity } from '$lib/interfaces';

	import Entity from '$lib/components/models/Entity.svelte';
	let { results = $bindable([]) }: { results: IEntity[] } = $props();
</script>

{#each results as result}
	<Entity entity={result} mode="preview" />
{:else}
	<p>No statements found</p>
{/each}
