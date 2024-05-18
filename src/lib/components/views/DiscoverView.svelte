<script lang="ts">
	import { type IConnection, type IDuplicationMarker, type IStatement } from '$lib/interfaces';

	import Container from '../base/Container.svelte';
	import Searchfield from '../base/Searchfield.svelte';
	import StatementDetail from '../models/StatementDetail.svelte';

	let statements: IStatement[] = [];
</script>

<Searchfield onResult={(data) => (statements = data)}></Searchfield>
<Container>
	{#each statements as statement}
		<StatementDetail {statement}></StatementDetail>
	{:else}
		<p>No statements found</p>
	{/each}
</Container>
