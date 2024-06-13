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

<div
	title="Click to Open Statement"
	class=" m-4 flex flex-col gap-2 rounded-lg p-4 shadow-lg dark:bg-slate-800 dark:text-white"
>
	<div class="flex flex-row">
		<div class="flex w-full justify-center p-4">
			{statement.text}
		</div>
		<i class="material-icons ms-5 h-5 w-5">menu</i>
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
	<div class="flex w-full justify-around gap-3 px-4">
		<button color="green" onclick={() => internOnVote(1)}>True</button>
		<div class="flex flex-col items-center gap-3">
			<a
				class=" rounded-md p-2 shadow-md outline hover:bg-slate-700"
				href="/statement/{statement.id}">Open Details</a
			>
			<a href="/argument/{statement.id}" class="!p-2">
				<i class="material-icons h-6 w-6">add_circle</i>
				add Argument
			</a>
			{#if stared}
				<i class="material-icons h-6 w-6">star</i>
			{:else}
				<i class="material-icons h-6 w-6">star_border</i>
			{/if}
		</div>
		<button color="red" onclick={() => internOnVote(-1)}>False</button>
	</div>
</div>
