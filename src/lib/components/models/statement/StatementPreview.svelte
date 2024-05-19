<script lang="ts">
	import { type IStatement } from '$lib/interfaces';
	import Container from '$lib/components/base/Container.svelte';
	import Progressbar from '$lib/components/base/Progressbar.svelte';
	let { statement }: { statement: IStatement } = $props();
</script>

<Container>
	<h2>Statement Detail</h2>
	<p>{statement.text}</p>
	Votes: {statement.numberOfVotes} <br />
	Truth: {statement.voteRatio}%
	<Progressbar value={statement.lastSeasonTruth}></Progressbar>
	<div class="horizontal">
		<button class="true-button">Thats True</button>
		<button class="false-button">Thats False</button>
	</div>
</Container>

<style>
</style>
