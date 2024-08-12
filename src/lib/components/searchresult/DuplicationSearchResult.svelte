<script lang="ts">
	import type { IDuplication, IStatement } from '$lib/interfaces';
	import { getEntity } from '$lib/state/entities.svelte';
	import Card, { Content } from '@smui/card';
	import Ripple from '@smui/ripple';

	let { duplication }: { duplication: IDuplication } = $props();

	let a = getEntity(duplication.statementA, 'statement') as IStatement;
	let b = getEntity(duplication.statementB, 'statement') as IStatement;
</script>

<div use:Ripple={{ surface: true, color: 'primary' }} tabindex="0" role="button">
	<Card padded>
		<Card variant="outlined" padded>{a.text}</Card>
		equal to
		<Card variant="outlined" padded>{b.text}</Card>
	</Card>
</div>
