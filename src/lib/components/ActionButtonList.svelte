<script>
	import ExpandButton from './buttons/iconbuttons/ExpandButton.svelte';
	import { scale } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
	let expanded = $state(false);
	$effect(() => {
		console.log(expanded);
	});
</script>

<div class="container">
	<ExpandButton bind:expanded></ExpandButton>
	{#if expanded}
		<slot></slot>
	{/if}
	<!-- Slot für dynamische Inhalte -->

	<!-- Slot für dynamische Inhalte -->
</div>

<style>
	.container {
		position: absolute;
		background-color: rgba(148, 148, 148, 0.269);
		border-radius: 10000px;
		bottom: 20%;
		right: 4%;
		display: flex;
		flex-direction: column;
		align-items: flex-end;
		gap: 10px; /* Abstand zwischen den Items */
		z-index: 10; /* Stellt sicher, dass die Liste über dem Inhalt liegt */
		transition: 200ms;
	}
</style>
