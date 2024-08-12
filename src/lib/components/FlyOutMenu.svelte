<script>
	import Card from '@smui/card';
	import CancelButton from './buttons/iconbuttons/CancelButton.svelte';

	let { open } = $$props;

	function closeFlyout() {
		open = false;
	}
</script>

{#if open}
	<!-- svelte-ignore a11y_click_events_have_key_events -->
	<!-- svelte-ignore a11y_no_static_element_interactions -->
	<div class="backdrop show" on:click={closeFlyout}></div>
{/if}

<Card
	style="position: fixed;
		top: 0;
		left: 0;
		height: 100%;
		width: 300px;
		z-index: 10;
		transform: translateX(-100%);
		transition: transform 0.3s ease;
         {open ? 'transform: translateX(0);' : ''}"
>
	<CancelButton
		style="position: absolute;
		top: 10px;
		right: 10px;
		background: none;
		border: none;
		font-size: 24px;
		cursor: pointer;"
	></CancelButton>
	<slot></slot>
	<!-- Slot für dynamische Inhalte -->
</Card>

<style>
	.backdrop {
		position: fixed;
		top: 0;
		left: 0;
		width: 100vw;
		height: 100vh;
		background: rgba(0, 0, 0, 0.5);
		z-index: 9;
		transition: opacity 0.3s ease;
		opacity: 0;
		pointer-events: none;
	}

	.backdrop.show {
		opacity: 1;
		pointer-events: auto;
	}
</style>
