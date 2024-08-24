<script lang="ts">
	import type { IDuplication, IStatement } from '$lib/interfaces';
	import Card, { Content } from '@smui/card';
	import NegativeButton from './buttons/NegativeButton.svelte';

	import PositiveButton from './buttons/PositiveButton.svelte';
	import { getFallbackStatement } from '$lib/state/entities.svelte';
	let { statement = getFallbackStatement() }: { statement: IStatement } = $props();

	function onContraSelected() {
		console.log('Contra selected');
	}
	function onProSelected() {
		console.log('Pro selected');
	}
</script>

<Card padded style="flex-direction: row;">
	<Card variant="outlined" padded>{statement.text}</Card>
	<NegativeButton onclick={onContraSelected} title="Select as Contra Argument" />
	<PositiveButton onclick={onProSelected} title="Select as Pro Argument" />
</Card>
