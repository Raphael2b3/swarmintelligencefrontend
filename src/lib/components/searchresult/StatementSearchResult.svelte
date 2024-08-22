<script lang="ts">
	import type { IDuplication, IStatement } from '$lib/interfaces';
	import Card, { Content } from '@smui/card';
	import Ripple from '@smui/ripple';
	import ConnectButton from '../buttons/iconbuttons/ConnectButton.svelte';
	import { getFallbackStatement } from '$lib/state/entities.svelte';

	let { statement=getFallbackStatement() }: { statement: IStatement } = $props();
</script>

<div use:Ripple={{ surface: true, color: 'primary' }} tabindex="0" role="button">
	<Card padded style="display: flex; flex-direction: row;">
		<Card variant="outlined" padded>{statement.text}</Card>
		<ConnectButton></ConnectButton>
	</Card>
</div>
