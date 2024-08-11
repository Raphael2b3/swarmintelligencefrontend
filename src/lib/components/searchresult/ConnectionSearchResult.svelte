<script lang="ts">
	import type { IConnection, IStatement } from '$lib/interfaces';
	import { getEntity } from '$lib/state/entities.svelte';
	import Card, { Content } from '@smui/card';
	import BorderlessButton from '../buttons/BorderlessButton.svelte';

	let { connection }: { connection: IConnection } = $props();
	let thesis = getEntity(connection.thesis, 'statement') as IStatement;
	let argument = getEntity(connection.argument, 'statement') as IStatement;
</script>

<Card padded
	>Thesis
	<Card variant="outlined" padded>{thesis.text}</Card>
	{connection.isProArgument ? 'Pro Argument' : 'Con Argument'}
	<Card variant="outlined" padded>{argument.text}</Card>
</Card>
