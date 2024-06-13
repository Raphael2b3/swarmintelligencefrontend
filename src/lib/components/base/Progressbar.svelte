<script lang="ts">
	let { value = $bindable(), disabled }: any = $props();
	let progress = $derived(value * 100);
	let isChrome = $state(false);
	let color: 'green' | 'red' = value > 0.5 ? 'green' : 'red';

	$effect(() => {
		isChrome = navigator.userAgent.includes('Chrome');
	});
</script>

<div class="m-2 flex flex-col items-center">
	{#if !disabled}
		<input type="range" min="0" max="1" bind:value step="0.01" />
		{Math.floor(progress)}%
	{:else}
		<progress max="1" {value}>{value}</progress>
	{/if}
</div>
