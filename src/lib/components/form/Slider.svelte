<script lang="ts">
	import Slider from '@smui/slider';
	let { value } = $$props;
</script>

<Slider bind:value min={0} max={100} step={0.001} input$aria-label="Continuous slider" />
