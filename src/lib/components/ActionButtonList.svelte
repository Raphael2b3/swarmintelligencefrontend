<script lang="ts">
	import ExpandButton from './buttons/iconbuttons/ExpandButton.svelte';
	import { scale } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
	let expanded = $state(false);
	$effect(() => {
		console.log(expanded);
	});

	function accordion(node: any, isOpen: boolean) {
		let initialHeight = node.offsetHeight;
		node.style.height = isOpen ? 'auto' : 0;
		node.style.overflow = 'hidden';
		return {
			update(isOpen) {
				let animation = node.animate(
					[
						{
							height: initialHeight + 'px',
							overflow: 'hidden'
						},
						{
							height: 0,
							overflow: 'hidden'
						}
					],
					{ duration: 200, fill: 'both' }
				);
				animation.pause();
				if (!isOpen) {
					animation.play();
				} else {
					animation.reverse();
				}
			}
		};
	}
</script>

<div class="container">
	<div
		use:accordion={expanded}
		style="display: flex; 
		gap: 10px; flex-direction: column;"
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
		border-radius: 10000px;
		height: calc-size(auto);
		bottom: 20%;
		right: 4%;
		display: flex;
		flex-direction: column;
		align-items: flex-end; /* Abstand zwischen den Items */
		z-index: 10; /* Stellt sicher, dass die Liste über dem Inhalt liegt */
		transition: height 200ms;
		overflow: hidden;
	}
</style>
