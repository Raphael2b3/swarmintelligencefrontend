<script lang="ts">
	let { value }: any = $props();
	let style = $derived(value > 0.5 ? '--slider-color:green' : '--slider-color:red');
</script>

<input {style} type="range" min="0" max="1" bind:value readonly />
