<script lang="ts">
	import type { IVoteValue } from '$lib/interfaces';
	import { createStatement } from '$lib/state/entities.svelte';

	// create a new statement
	let text = $state('');
	let tagstring = $state('');
	let tags = $derived(tagstring.split(' '));

	let voteValue: IVoteValue = $state(0);
	function internOnVote(n: IVoteValue) {
		voteValue = n;
	}
	let open = $state(false);
</script>

{#if open}
	<dialog>
		<label for="textarea-id" class="mb-2">Statement</label>
		<textarea id="textarea-id" rows="4" name="message" bind:value={text}></textarea>
		<label for="tags">Tags</label>
		<input bind:value={tagstring} placeholder="Seperate Tags with Space" name="tags" id="tags" />
		<button color="green" onclick={() => internOnVote(1)}>True</button>
		<button color="red" onclick={() => internOnVote(-1)}>False</button>
		<form method="dialog">
			<button onclick={() => createStatement(text, tags, voteValue)}>Create Statement</button>
		</form>
	</dialog>
{:else}
	<button
		onclick={() => {
			open = !open;
		}}>Didnt find your Statement? Create it! Click</button
	>
{/if}
