<script lang="ts">
	import Slider from '@smui/slider';

	interface SliderProps {
		value?: number;
	}
	let { value = $bindable(0.5) }: SliderProps = $props();
</script>

<Slider
	bind:value
	min={0}
	max={1}
	step={0.001}
	style="width: 100%"
	input$aria-label="Continuous slider"
/>
