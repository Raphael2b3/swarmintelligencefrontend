<script lang="ts">
	import type { Snippet } from 'svelte';

	let { title, icon, children }: { title: string; icon: string; children: Snippet } = $props();
	let open = $state(false);
</script>

<div class="dropdown relative">
	<button class="flex gap-2" onclick={() => (open = !open)}
		>{title}
		{#if icon}
			<i class="material-icons h-6 w-6">{icon}</i>
		{/if}
	</button>
	{#if open}
		<div class="absolute left-0 top-10 flex flex-col items-start rounded bg-white p-3 shadow-lg">
			{@render children()}
		</div>
	{/if}
</div>
