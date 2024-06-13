<script lang="ts">
	import { type IStatement, type IVoteValue } from '$lib/interfaces';
	import Progressbar from '$lib/components/base/Progressbar.svelte';
	import { Button, Card, Dropdown, DropdownDivider, DropdownItem } from 'flowbite-svelte';
	import {
		CirclePlusSolid,
		DotsHorizontalOutline,
		DotsVerticalOutline,
		StarOutline,
		StarSolid
	} from 'flowbite-svelte-icons';
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

<Card
	size="xl"
	title="Click to Open Statement"
	class=" flex flex-col gap-2 p-4 m-4 rounded-lg shadow-lg dark:bg-slate-800 dark:text-white"
>
	<div class="flex flex-row">
		<div class="flex justify-center p-4 w-full">
			{statement.text}
		</div>
		<DotsVerticalOutline class="dots-menu dark:text-white" />
		<Dropdown triggeredBy=".dots-menu">
			<DropdownItem href="/duplication/{statement.id}">Duplication</DropdownItem>
			<DropdownItem onclick={watch}>Watch</DropdownItem>
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
	<div class="flex justify-around px-4 w-full gap-3">
		<Button color="green" outline={voteValue === -1} onclick={() => internOnVote(1)}>True</Button>
		<div class="flex flex-col items-center gap-3">
			<a
				class=" rounded-md p-2 outline hover:bg-slate-700 shadow-md"
				href="/statement/{statement.id}">Open Details</a
			>
			<Button href="/argument/{statement.id}" class="!p-2"
				><CirclePlusSolid class="w-6 h-6" />
				add Argument
			</Button>
			{#if stared}
				<StarSolid class="w-6 h-6" onclick={watch} />
			{:else}
				<StarOutline class="w-6 h-6" color="grey" onclick={watch} />
			{/if}
		</div>
		<Button color="red" outline={voteValue === 1} onclick={() => internOnVote(-1)}>False</Button>
	</div>
</Card>
