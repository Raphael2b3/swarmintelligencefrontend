<script lang="ts">
	import { type IStatement } from '$lib/interfaces';
	import Container from '$lib/components/base/Container.svelte';
	import Progressbar from '$lib/components/base/Progressbar.svelte';
	let { statement, showTruth }: { statement: IStatement; showTruth: boolean } = $props();
</script>

<div style="display: flex; ">
	<h2>Statement {showTruth}</h2>
	<button>Open Details</button>
</div>

<p>{statement.text}</p>

{#if showTruth}
	Votes: {statement.numberOfVotes} <br />
	{#if statement.voteRatio}
		Truth: {statement.voteRatio * 100}%

		<Progressbar value={statement.voteRatio} disabled></Progressbar>
	{/if}
	{#if statement.voteRatio}
		Last Season Truth: {statement.lastSeasonTruth * 100}%

		<Progressbar value={statement.lastSeasonTruth} disabled></Progressbar>
	{/if}
{/if}
<div>
	<button>Thats True</button>
	<button>Thats False</button>
</div>
