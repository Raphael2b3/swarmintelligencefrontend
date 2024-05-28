<script lang="ts">
	import type { IDuplicationMarker } from '$lib/interfaces';
	import { getStatement } from '$lib/state/entities.svelte';
	import Statement from '../statement/Statement.svelte';

	let { duplicationMarker }: { duplicationMarker: IDuplicationMarker } = $props();
</script>

<h2>DuplicationMarker</h2>
<Statement statement={getStatement(duplicationMarker.statementA)} />
<button class="true-button">Is the same as</button>
<button class="false-button">Is NOT the same as</button>

<Statement statement={getStatement(duplicationMarker.statementB)} />
