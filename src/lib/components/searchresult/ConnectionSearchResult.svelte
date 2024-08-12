<script lang="ts">
	import type { IConnection, IStatement } from '$lib/interfaces';
	import { getEntity } from '$lib/state/entities.svelte';
	import Card, { Content } from '@smui/card';
	import Ripple from '@smui/ripple';

	let { connection }: { connection: IConnection } = $props();
	let thesis = getEntity(connection.thesis, 'statement') as IStatement;
	let argument = getEntity(connection.argument, 'statement') as IStatement;
</script>

<div use:Ripple={{ surface: true, color: 'primary' }} tabindex="0" role="button">
	<Card padded
		>Thesis
		<Card variant="outlined" padded>{thesis.text}</Card>
		{connection.isProArgument ? 'Pro Argument' : 'Con Argument'}
		<Card variant="outlined" padded>{argument.text}</Card>
	</Card>
</div>
