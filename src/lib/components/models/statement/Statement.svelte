<script lang="ts">
	import { type IStatement, type IVoteValue } from '$lib/interfaces';
	import Progressbar from '$lib/components/base/Progressbar.svelte';

	import { voteForEntity } from '$lib/state/entities.svelte';
	let {
		statement,
		showTruth = false
	}: {
		statement: IStatement;
		showTruth?: boolean;
	} = $props();
	let stared = $state(statement.stared);
	let voteValue = $state(statement.userVote);

	function internOnVote(n: IVoteValue) {
		voteValue = statement.userVote = n;
		voteForEntity(statement.id, 'statement', n);
	}
	function watch() {
		stared = !stared || false;
	}
</script>

a
<div
	title="Click to Open Statement"
	class=" flex flex-col gap-2 p-4 m-4 rounded-lg shadow-lg dark:bg-slate-800 dark:text-white"
>
	<div class="flex flex-row">
		<div class="flex justify-center p-4 w-full">
			{statement.text}
		</div>
		<i class="material-icons w-5 h-5 ms-5">menu</i>
		<select>
			<option value="/duplication/{statement.id}">Duplication</option>
			<option onclick={watch}>Watch</option>
		</select>
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
		<button color="green" onclick={() => internOnVote(1)}>True</button>
		<div class="flex flex-col items-center gap-3">
			<a
				class=" rounded-md p-2 outline hover:bg-slate-700 shadow-md"
				href="/statement/{statement.id}">Open Details</a
			>
			<a href="/argument/{statement.id}" class="!p-2">
				<i class="material-icons w-6 h-6">add_circle</i>
				add Argument
			</a>
			{#if stared}
				<i class="material-icons w-6 h-6">star</i>
			{:else}
				<i class="material-icons w-6 h-6">star_border</i>
			{/if}
		</div>
		<button color="red" onclick={() => internOnVote(-1)}>False</button>
	</div>
</div>
