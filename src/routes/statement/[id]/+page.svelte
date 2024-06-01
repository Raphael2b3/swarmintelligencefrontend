<script lang="ts">
	import { page } from '$app/stores';
	import Statement from '$lib/components/models/statement/Statement.svelte';
	import { type IConnection, type IStatement } from '$lib/interfaces';

	let { statement }: { statement: IStatement } = $props();
	const { id } = $page.params;
	let connections: IConnection[] = $state([]);
</script>

<Statement {statement} showTruth={true}></Statement>
