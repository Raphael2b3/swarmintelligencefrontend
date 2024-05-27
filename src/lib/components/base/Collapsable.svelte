<script lang="ts">
	import type { Snippet } from 'svelte';

	let { children }: { children: Snippet } = $props();
	let collapsed = $state(true);
	function change() {}
</script>

<button onclick={change}>expand</button>
{#if !collapsed}
	{@render children()}
{/if}
