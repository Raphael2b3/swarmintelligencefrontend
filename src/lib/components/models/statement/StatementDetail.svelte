<script lang="ts">
	import { type IStatement } from '$lib/interfaces';
	import Container from '$lib/components/base/Container.svelte';
	import Progressbar from '$lib/components/base/Progressbar.svelte';
	import Statement from './Statement.svelte';
	let { statement }: { statement: IStatement } = $props();
</script>

<Container>
	<Statement {statement} showTruth></Statement>
	Arguments
</Container>

<style>
</style>
