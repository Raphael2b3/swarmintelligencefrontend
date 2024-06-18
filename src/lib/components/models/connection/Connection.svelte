<script lang="ts">
	import type { IConnection, IStatement } from '$lib/interfaces';
	import Progressbar from '$lib/components/base/Progressbar.svelte';
	import Statement from '$lib/components/models/statement/Statement.svelte';
	import { getEntity, voteForEntity } from '$lib/state/entities.svelte';

	let {
		connection,
		showStatement = 'both'
	}: { connection: IConnection; showStatement?: 'both' | 'thesis' | 'argument' } = $props();
</script>

<div class="flex w-full items-center" color={connection.isProArgument ? 'green' : 'red'}>
	{#if showStatement !== 'argument'}
		<Statement statement={getEntity(connection.thesis, 'statement') as IStatement} />
	{/if}
	<div class="flex flex-col items-center">
		is {connection.isProArgument ? 'supported' : 'refuted'} by the following argument by
		<Progressbar value={connection.weight}></Progressbar>
		<button
			onclick={() => {
				voteForEntity(connection.id, 'connection', connection.weight);
			}}>Submit</button
		>
	</div>
	{#if showStatement !== 'thesis'}
		<Statement statement={getEntity(connection.argument, 'statement') as IStatement} />
	{/if}
</div>
