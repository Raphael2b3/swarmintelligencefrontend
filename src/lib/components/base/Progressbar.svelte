<script lang="ts">
	let { value, disabled }: any = $props();
	let valueBig = $derived(value * 100);
	let isChrome = $state(false);
	let style = $derived(
		`${value > 0.5 ? '--slider-color:green' : '--slider-color:red'}; --slider-value:${value};`
	);
	$effect(() => {
		isChrome = navigator.userAgent.includes('Chrome');
	});
</script>

{#if !disabled}
	<input
		{style}
		class:isChrome
		class="progress"
		type="range"
		min="0"
		max="1"
		step="0.01"
		bind:value
	/>{Math.floor(valueBig)}%
{:else}
	<div class="progress" style={'--slider-value:' + valueBig + '%'}></div>
{/if}

<style>
	:root {
		--slider-value: 50%;
	}
	/*Chrome*/
	.isChrome {
		overflow: hidden;
		appearance: none;
		background-color: gray;
	}
	.isChrome::-webkit-slider-runnable-track {
		height: 10pt;
		-webkit-appearance: none;
		color: var(--slider-color);
		margin-top: -1pt;
	}

	.isChrome::-webkit-slider-thumb {
		width: 10pt;
		-webkit-appearance: none;
		height: 10pt;
		cursor: ew-resize;
		background: #434343;
		box-shadow: -80pt 0 0 80pt var(--slider-color);
	}

	/** FF*/
	input[type='range']::-moz-range-progress {
		background-color: var(--slider-color);
	}
	input[type='range']::-moz-range-track {
		background-color: gray;
	}
	/* IE*/
	input[type='range']::-ms-fill-lower {
		background-color: var(--slider-color);
	}
	input[type='range']::-ms-fill-upper {
		background-color: gray;
	}

	input[type='range']::-ms-fill-upper {
		background-color: gray;
	}

	.progress {
		height: 10pt;
		width: 100pt;
		background: rgb(51, 195, 4);
		background: linear-gradient(
			90deg,
			rgb(1, 188, 92) var(--slider-value),
			rgb(186, 5, 5) var(--slider-value)
		);
		background-color: #434343;
	}
</style>
