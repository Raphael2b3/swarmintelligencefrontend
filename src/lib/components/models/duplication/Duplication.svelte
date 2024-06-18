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

<div class="flex flex-row border-2 border-black">
	<div class="rounded bg-slate-400 p-2 shadow-lg">
		<Statement statement={getEntity(duplication.statementA, 'statement') as IStatement} />
	</div>
	<div class="flex flex-col items-center justify-center">
		<div>
			<button color="green" onclick={() => internOnVote(1)}> = Equals </button>
			<button color="red" onclick={() => internOnVote(-1)}>≠ Is Different </button>
		</div>
	</div>
	<div class="rounded bg-slate-400 p-2 shadow-lg">
		<Statement statement={getEntity(duplication.statementB, 'statement') as IStatement} />
	</div>
</div>
