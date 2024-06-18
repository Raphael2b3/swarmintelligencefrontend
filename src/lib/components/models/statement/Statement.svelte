<script lang="ts">
	import { type IStatement, type IVoteValue } from '$lib/interfaces';
	import Progressbar from '$lib/components/base/Progressbar.svelte';

	import { voteForEntity } from '$lib/state/entities.svelte';
	import Dropdown from '$lib/components/base/Dropdown.svelte';
	import NewArgument from '$lib/components/views/NewArgument.svelte';
	let {
		statement,
		showTruth = false
	}: {
		statement: IStatement;
		showTruth?: boolean;
	} = $props();
	let stared = $state(statement.stared);
	let voteValue = $state(statement.userVote);
	let open = $state(false);
	function internOnVote(n: IVoteValue) {
		voteValue = statement.userVote = n;
		voteForEntity(statement.id, 'statement', n);
	}
	function watch() {
		stared = !stared || false;
	}
</script>

<div class=" m-4 flex flex-col gap-2 rounded-lg p-4 shadow-lg dark:bg-slate-800 dark:text-white">
	<div class="flex flex-row items-center">
		<div class="flex w-full justify-center p-4">
			{statement.text}
		</div>
		<Dropdown title="" icon="menu">
			<a href="/duplication/{statement.id}">Duplication</a>
			<a
				class=" rounded-md p-2 shadow-md outline hover:bg-slate-700"
				href="/statement/{statement.id}">Open Details</a
			>
		</Dropdown>
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
		<button class=" bg-green-600" onclick={() => internOnVote(1)}>True</button>
		<div class="flex flex-col items-center gap-3">
			<NewArgument {statement} />
			<button onclick={watch} class="flex items-center gap-1">
				WATCH
				{#if stared}
					<i class="material-icons h-6 w-6">star</i>
				{:else}
					<i class="material-icons h-6 w-6">star_border</i>
				{/if}
			</button>
		</div>
		<button class="bg-red-500" onclick={() => internOnVote(-1)}>False</button>
	</div>
</div>
