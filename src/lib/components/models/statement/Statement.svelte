<script lang="ts">
	import { type IStatement, type IVoteValue } from '$lib/interfaces';
	import Progressbar from '$lib/components/base/Progressbar.svelte';
	import { Button, Card } from 'flowbite-svelte';
	import { CirclePlusSolid } from 'flowbite-svelte-icons';
	let {
		statement,
		showTruth = false
	}: {
		statement: IStatement;
		showTruth?: boolean;
	} = $props();
	let voteValue = $state(statement.userVote);

	function internOnVote(n: IVoteValue) {
		voteValue = statement.userVote = n;
	}
</script>

<Card
	size="xl"
	title="Click to Open Statement"
	class=" flex flex-col gap-2 p-4 m-4 rounded-lg shadow-lg dark:bg-slate-800 dark:text-white"
>
	<div class="flex justify-center p-4">
		{statement.text}
	</div>
	<hr />
	{#if showTruth}
		Votes: {statement.numberOfVotes}
		{#if statement.voteRatio}
			Truth: {statement.voteRatio * 100}%

			<Progressbar value={statement.voteRatio} disabled></Progressbar>
		{/if}
		{#if statement.voteRatio}
			Last Season Truth: {statement.lastSeasonTruth * 100}%

			<Progressbar value={statement.lastSeasonTruth} disabled></Progressbar>
		{/if}
	{/if}
	<div class="flex justify-around px-4 w-full gap-3">
		<Button color="green" outline={voteValue === -1} onclick={() => internOnVote(1)}
			>Thats True</Button
		>
		<div class="flex flex-col items-center">
			<a class=" rounded-md p-2 hover:bg-slate-700 shadow-md" href="/statement/{statement.id}"
				>Open Details</a
			>
			<Button
				onClick={() => {
					console.log('adding an Argument');
				}}
				class="!p-2"
				><CirclePlusSolid class="w-6 h-6" />
				add Argument
			</Button>
		</div>
		<Button color="red" outline={voteValue === 1} onclick={() => internOnVote(-1)}
			>Thats False</Button
		>
	</div>
</Card>
