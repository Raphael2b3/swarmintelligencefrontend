<script lang="ts">
	import type { IDuplication, IStatement } from '$lib/interfaces';
	import Card, { Content } from '@smui/card';
	import Ripple from '@smui/ripple';

	let { statement }: { statement: IStatement } = $props();
</script>

<div use:Ripple={{ surface: true, color: 'primary' }} tabindex="0" role="button">
	<Card padded>
		<Card variant="outlined" padded>{statement.text}</Card>
	</Card>
</div>
