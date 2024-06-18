<script lang="ts">
	import type { Snippet } from 'svelte';

	let { title, children }: { title: string; children: Snippet } = $props();
	let open = $state(false);
</script>

<div class="dropdown relative">
	<button onclick={() => (open = !open)}>{title}</button>
	{#if open}
		<div class="absolute left-0 top-10 flex flex-col items-start rounded bg-white p-3 shadow-lg">
			{@render children()}
		</div>
	{/if}
</div>
