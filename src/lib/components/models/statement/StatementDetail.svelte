<script lang="ts">
	import { type IStatement } from '$lib/interfaces';
	import Statement from './Statement.svelte';
	let { statement }: { statement: IStatement } = $props();
</script>

<Statement {statement} showTruth></Statement>
Arguments
