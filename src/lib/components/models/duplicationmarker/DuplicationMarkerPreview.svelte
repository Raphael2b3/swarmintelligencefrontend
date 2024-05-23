<script lang="ts">
	import type { IDuplicationMarker } from '$lib/interfaces';
	import Container from '$lib/components/base/Container.svelte';
	import Statement from '../statement/Statement.svelte';
	let { duplicationMarker }: { duplicationMarker: IDuplicationMarker } = $props();
</script>

<Container>
	<h2>DuplicationMarker</h2>
	<Statement statement={duplicationMarker.statementA} />
	<button class="true-button">Is the same as</button>
	<button class="false-button">Is NOT the same as</button>

	<Statement statement={duplicationMarker.statementB} />
</Container>
