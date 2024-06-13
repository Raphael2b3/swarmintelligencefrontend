<script lang="ts">
	import type { IDuplication, IStatement, IVoteValue } from '$lib/interfaces';
	import { getEntity, voteForEntity } from '$lib/state/entities.svelte';
	import { Button } from 'flowbite-svelte';
	import Statement from '../statement/Statement.svelte';

	let { duplication }: { duplication: IDuplication } = $props();
	let voteValue = $state(duplication.userVote);

	function internOnVote(n: IVoteValue) {
		voteValue = duplication.userVote = n;
		voteForEntity(duplication.id, 'duplication', n);
	}
</script>

<h2>Duplication</h2>
<Statement statement={getEntity(duplication.statementA, 'statement') as IStatement} />
<Button color="green" outline={voteValue === 1} onclick={() => internOnVote(1)}>True</Button>
<Button color="red" outline={voteValue === -1} onclick={() => internOnVote(-1)}>False</Button>

<Statement statement={getEntity(duplication.statementB, 'statement') as IStatement} />
