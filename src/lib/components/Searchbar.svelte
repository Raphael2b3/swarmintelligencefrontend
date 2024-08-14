<script lang="ts">
	import { Input } from '@smui/textfield';
	import Paper from '@smui/paper';
	import Fab from '@smui/fab';
	import { Icon } from '@smui/common';

	let value = '';

	function doSearch(event: Event) {
		alert('Search for ' + value);
		event.preventDefault();
	}
</script>

<form
	onsubmit={doSearch}
	style="
		display: flex;
		justify-content: center;
		align-items: center;
		
		"
>
	<Paper class="solo-paper" elevation={6}>
		<Icon class="material-icons">search</Icon>
		<Input bind:value placeholder="Search" class="solo-input" />
	</Paper>
	<Fab disabled={value === ''} color="primary" mini class="solo-fab">
		<Icon class="material-icons">arrow_forward</Icon>
	</Fab>
</form>

<style>
	* :global(.solo-paper) {
		display: flex;
		align-items: center;
		flex-direction: row;
		flex-grow: 1;
		max-width: 600px;
		margin: 0 12px;
		padding: 0 12px;
		height: 48px;
	}
	* :global(.solo-paper > *) {
		display: inline-block;
		margin: 0 12px;
	}
	* :global(.solo-input) {
		flex-grow: 1;
		color: var(--mdc-theme-on-surface, #000);
	}
	* :global(.solo-input::placeholder) {
		color: var(--mdc-theme-on-surface, #000);
		opacity: 0.6;
	}
	* :global(.solo-fab) {
		flex-shrink: 0;
	}
</style>
