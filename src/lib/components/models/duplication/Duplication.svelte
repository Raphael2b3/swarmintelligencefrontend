<script lang="ts">
	import type { IDuplication, IStatement, IVoteValue } from '$lib/interfaces';
	import { getEntity, voteForEntity } from '$lib/state/entities.svelte';
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
<button color="green" onclick={() => internOnVote(1)}>True</button>
<button color="red" onclick={() => internOnVote(-1)}>False</button>

<Statement statement={getEntity(duplication.statementB, 'statement') as IStatement} />
