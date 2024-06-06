<script lang="ts">
	import type { IDuplication, IStatement } from '$lib/interfaces';
	import { getEntity } from '$lib/state/entities.svelte';
	import Statement from '../statement/Statement.svelte';

	let { duplication }: { duplication: IDuplication } = $props();
</script>

<h2>Duplication</h2>
<Statement statement={getEntity(duplication.statementA, 'statement') as IStatement} />
<button class="true-button">Is the same as</button>
<button class="false-button">Is NOT the same as</button>

<Statement statement={getEntity(duplication.statementB, 'statement') as IStatement} />
