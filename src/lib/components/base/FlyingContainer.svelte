<script>
	import { quintOut } from 'svelte/easing';
	import { fly, slide } from 'svelte/transition';
</script>

<div
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
