<script lang="ts">
	import { type IStatement } from '$lib/interfaces';
	import Progressbar from '$lib/components/base/Progressbar.svelte';
	import Container from '$lib/components/base/Container.svelte';
	let { statement }: { statement: IStatement } = $props();
</script>

<Container>
	<div style="display: flex; ">
		<h2>Statement Preview</h2>
		<button>Open Details</button>
	</div>
	<p>{statement.text}</p>
	Votes: {statement.numberOfVotes} <br />
	{#if statement.voteRatio}
		Truth: {statement.voteRatio * 100}%

		<Progressbar value={statement.voteRatio} disabled></Progressbar>
	{/if}
	{#if statement.voteRatio}
		Last Season Truth: {statement.lastSeasonTruth * 100}%

		<Progressbar value={statement.lastSeasonTruth} disabled></Progressbar>
	{/if}
	<div class="horizontal">
		<button class="true-button">Thats True</button>
		<button class="false-button">Thats False</button>
	</div>
</Container>

<style>
</style>
