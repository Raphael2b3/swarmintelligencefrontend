<script lang="ts">
	import { getArgumentsFor } from '$lib/state/entities.svelte';
	import PopUpModal from '../PopUpModal.svelte';
	import StatementSearchResult from '../searchresult/StatementSearchResult.svelte';
	import TabNav from '../TabNav.svelte';
	let { open, statementid }: { open: boolean; statementid: string } = $props();
	let selected = $state('Pros');
	let args = getArgumentsFor(statementid);
</script>

<PopUpModal {open} title="Arguments">
	<TabNav choices={['Pros', 'Cons']} bind:selected></TabNav>
	{#if selected === 'Pros'}
		<p>Pros</p>
		{#each args.pros as pro_arg}
			<StatementSearchResult statement={pro_arg} />
		{/each}
	{:else}
		<p>Cons</p>
		{#each args.cons as con_arg}
			<StatementSearchResult statement={con_arg} />
		{/each}
	{/if}
</PopUpModal>
