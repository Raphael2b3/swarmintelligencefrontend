<script lang="ts">
	import type { IDuplication, IStatement } from '$lib/interfaces';
	import { getEntity } from '$lib/state/entities.svelte';
	import Card, { Content } from '@smui/card';
	import BorderlessButton from '../buttons/BorderlessButton.svelte';
	import Ripple from '@smui/ripple';

	let { statement }: { statement: IStatement } = $props();
</script>

<div use:Ripple={{ surface: true, color: 'primary' }} tabindex="0" role="button">
	<Card padded>
		<Card variant="outlined" padded>{statement.text}</Card>
	</Card>
</div>
