<script>
	import { quintOut } from 'svelte/easing';
	import { fly, slide } from 'svelte/transition';
</script>

<div
	class="container"
	transition:fly|global={{
		delay: 250,
		duration: 300,
		x: -100,
		y: 200,
		opacity: 0.3,
		easing: quintOut
	}}
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
