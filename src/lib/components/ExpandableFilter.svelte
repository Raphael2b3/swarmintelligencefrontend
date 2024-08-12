<script lang="ts">
	import type { IConnection, IStatement } from '$lib/interfaces';
	import { getEntity } from '$lib/state/entities.svelte';
	import Card from '@smui/card';
	import Ripple from '@smui/ripple';

	let { connection }: { connection: IConnection } = $props();
</script>

<div use:Ripple={{ surface: true, color: 'primary' }} tabindex="0" role="button">
	<Card padded variant="outlined"></Card>
</div>
