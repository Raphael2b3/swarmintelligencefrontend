<script lang="ts">
	import { getArgumentsFor, getThesisFor } from '$lib/state/entities.svelte';
	import PopUpModal from '../PopUpModal.svelte';
	import StatementSearchResult from '../searchresult/StatementSearchResult.svelte';
	import TabNav from '../TabNav.svelte';
	let { open, statementid }: { open: boolean; statementid: string } = $props();
	let selected = $state('Pros');
	let thesis = getThesisFor(statementid);
</script>

<PopUpModal {open}>
	<TabNav choices={['Pros', 'Cons']} bind:selected></TabNav>
	{#if selected === 'Pros'}
		<p>Pros</p>
		{#each thesis.pros as pro_arg}
			<StatementSearchResult statement={pro_arg} />
		{/each}
	{:else}
		<p>Cons</p>
		{#each thesis.cons as con_arg}
			<StatementSearchResult statement={con_arg} />
		{/each}
	{/if}
</PopUpModal>
