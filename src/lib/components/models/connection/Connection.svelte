<script lang="ts">
	import type { IConnection } from '$lib/interfaces';
	import Progressbar from '$lib/components/base/Progressbar.svelte';
	import Statement from '$lib/components/models/statement/Statement.svelte';
	let { connection }: { connection: IConnection } = $props();
</script>

<h2>Connection</h2>
<Statement statement={connection.argument} />
is a good argument for or against
<Progressbar value={connection.weight}></Progressbar>
<Statement statement={connection.thesis} />
