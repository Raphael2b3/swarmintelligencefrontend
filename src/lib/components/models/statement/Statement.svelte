<script lang="ts">
	import { type IStatement } from '$lib/interfaces';
	import Progressbar from '$lib/components/base/Progressbar.svelte';
	import { Button, Card } from 'flowbite-svelte';
	let { statement, showTruth = false }: { statement: IStatement; showTruth?: boolean } = $props();
</script>

<Card>
	<div style="display: flex; ">
		<h2>Statement {showTruth}</h2>
		<button>Open Details</button>
	</div>

	{statement.text}

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
		<Button>Thats True</Button>
		<Button>Thats False</Button>
	</div>
</Card>
