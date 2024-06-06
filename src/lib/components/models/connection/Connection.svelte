<script lang="ts">
	import type { IConnection, IStatement } from '$lib/interfaces';
	import Progressbar from '$lib/components/base/Progressbar.svelte';
	import Statement from '$lib/components/models/statement/Statement.svelte';
	import { getEntity } from '$lib/state/entities.svelte';
	let { connection }: { connection: IConnection } = $props();
</script>

<h2>Connection</h2>
<Statement statement={getEntity(connection.argument, 'statement') as IStatement} />
is a good argument {connection.isProArgument ? 'for' : 'against'} the statement
<Progressbar value={connection.weight}></Progressbar>
<Statement statement={getEntity(connection.argument, 'statement') as IStatement} />
