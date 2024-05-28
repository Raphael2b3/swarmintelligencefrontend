<script lang="ts">
	import type { IDuplicationMarker } from '$lib/interfaces';
	import Statement from '../statement/Statement.svelte';

	let { duplicationMarker }: { duplicationMarker: IDuplicationMarker } = $props();
</script>

<h2>DuplicationMarker</h2>
<Statement statement={duplicationMarker.statementA} />
<button class="true-button">Is the same as</button>
<button class="false-button">Is NOT the same as</button>

<Statement statement={duplicationMarker.statementB} />
