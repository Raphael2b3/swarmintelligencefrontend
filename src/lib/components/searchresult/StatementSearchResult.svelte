<script lang="ts">
	import type { IDuplication, IStatement } from '$lib/interfaces';
	import { getEntity } from '$lib/state/entities.svelte';
	import Card, { Content } from '@smui/card';
	import BorderlessButton from '../buttons/BorderlessButton.svelte';

	let { statement }: { statement: IStatement } = $props();
</script>

<Card padded>
	<Card variant="outlined" padded>{statement.text}</Card>
</Card>
