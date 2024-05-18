<script lang="ts">
	import type { IConnection } from '$lib/interfaces';
	import Container from '../base/Container.svelte';
	import Progressbar from '../base/Progressbar.svelte';
	import Statement from './Statement.svelte';
	let { connection }: { connection: IConnection } = $props();
</script>

<Container>
	<h2>Connection</h2>
	<Statement statement={connection.argument} />
	is a good argument for or against
	<Progressbar value={connection.weight}></Progressbar>
	<Statement statement={connection.thesis} />
</Container>
