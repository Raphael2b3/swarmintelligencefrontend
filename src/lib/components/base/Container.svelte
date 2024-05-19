<script>
	import { quintOut } from 'svelte/easing';
	import { slide } from 'svelte/transition';
</script>

<div
	class="container"
	transition:slide={{ delay: 250, duration: 300, easing: quintOut, axis: 'x' }}
>
	<slot />
</div>

<style>
	.container {
		margin: 1rem;
		display: flex;
		padding: 1rem;
		background-color: rgb(255, 255, 255);
		flex-direction: column;
		align-items: center;
		justify-content: center;
		box-shadow: 1px 1px 1rem rgb(24, 23, 23);
		border-radius: 1rem;
	}
</style>
