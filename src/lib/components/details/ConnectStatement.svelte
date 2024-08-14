<script lang="ts">
	import { getArgumentsFor } from '$lib/state/entities.svelte';
	import BorderlessButton from '../buttons/BorderlessButton.svelte';
	import PositiveButton from '../buttons/PositiveButton.svelte';
	import PopUpModal from '../PopUpModal.svelte';
	import StatementSearchResult from '../searchresult/StatementSearchResult.svelte';
	import TabNav from '../TabNav.svelte';
	let { open }: { open: boolean } = $props();
	let selected = $state('Pros');
</script>

<PopUpModal {open} title="Connect this Statement">
	<BorderlessButton>Add Argument</BorderlessButton>
	<BorderlessButton>Add This As Argument</BorderlessButton>
</PopUpModal>
