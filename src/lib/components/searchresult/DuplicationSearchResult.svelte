<script lang="ts">
	import type { IDuplication, IStatement } from '$lib/interfaces';
	import { getEntity } from '$lib/state/entities.svelte';
	import Card, { Content } from '@smui/card';
	import BorderlessButton from '../buttons/BorderlessButton.svelte';

	let { duplication }: { duplication: IDuplication } = $props();

	let a = getEntity(duplication.statementA, 'statement') as IStatement;
	let b = getEntity(duplication.statementB, 'statement') as IStatement;
</script>

<Card padded
	>A
	<Card variant="outlined" padded>{a.text}</Card>
	B
	<Card variant="outlined" padded>{b.text}</Card>
</Card>
