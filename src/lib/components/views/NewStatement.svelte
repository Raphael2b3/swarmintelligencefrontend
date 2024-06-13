<script lang="ts">
	import type { IVoteValue } from '$lib/interfaces';
	import { createStatement } from '$lib/state/entities.svelte';
	import { Button, Input, Label, Modal, Textarea } from 'flowbite-svelte';

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

<Modal bind:open>
	<Label for="textarea-id" class="mb-2">Statement</Label>
	<Textarea id="textarea-id" rows="4" name="message" bind:value={text} />
	<Label for="tags">Tags</Label>
	<Input bind:value={tagstring} placeholder="Seperate Tags with Space" name="tags" id="tags" />
	<Button color="green" outline={voteValue === -1} onclick={() => internOnVote(1)}>True</Button>
	<Button color="red" outline={voteValue === 1} onclick={() => internOnVote(-1)}>False</Button>
	<Button onclick={() => createStatement(text, tags, voteValue)}>Create Statement</Button>
</Modal>
{#if !open}
	<Button
		onclick={() => {
			open = !open;
		}}>Didnt find your Statement? Create it! Click</Button
	>
{/if}
