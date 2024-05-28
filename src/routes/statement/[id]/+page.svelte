<script lang="ts">
	import Statement from '$lib/components/models/statement/Statement.svelte';
	import { type IConnection, type IStatement } from '$lib/interfaces';

	let { statement }: { statement: IStatement } = $props();
	let connections: IConnection[] = $state([]);
</script>

<Statement {statement} showTruth></Statement>
