<script lang="ts">
	import ExpandButton from './buttons/iconbuttons/ExpandButton.svelte';
	import { scale } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';

	import { accordion } from '$lib/animations/accordion';
	let expanded = $state(false);
</script>

<div class="container">
	<div
		use:accordion={expanded}
		style=" 
				display: flex; 
				flex-direction: column; 
				overflow: hidden;"
	>
		<slot></slot>
	</div>

	<ExpandButton bind:expanded></ExpandButton>
	<!-- Slot für dynamische Inhalte -->

	<!-- Slot für dynamische Inhalte -->
</div>

<style>
	.container {
		position: absolute;
		/* background-color: rgba(148, 148, 148, 0.269); */
		background-color: rgba(180, 180, 180, 0.304);
		border-radius: 10000rem;
		bottom: 15rem;
		right: 3rem;
		display: flex;
		flex-direction: column;
		align-items: flex-end; /* Abstand zwischen den Items */
		z-index: 10; /* Stellt sicher, dass die Liste über dem Inhalt liegt */
		transition: height 200ms;
		overflow: hidden;
	}
</style>
