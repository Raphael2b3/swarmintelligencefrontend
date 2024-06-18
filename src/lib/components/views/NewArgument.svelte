<script lang="ts">
	import { page } from '$app/stores';
	import Entity from '$lib/components/models/Entity.svelte';
	import Statement from '$lib/components/models/statement/Statement.svelte';
	import { ELoadingState, type IEntity, type IStatement } from '$lib/interfaces';
	import { getEntity, createConnectionFor } from '$lib/state/entities.svelte';
	import Searchfield from '$lib/components/base/Searchfield.svelte';

	import { goto } from '$app/navigation';
	import Progressbar from '$lib/components/base/Progressbar.svelte';
	import NewStatement from '$lib/components/views/NewStatement.svelte';
	let { statement }: { statement: IStatement } = $props();
	let results: IEntity[] = $state([]);
	let isProArgument = $state(true);
	let percentage = $state(0);

	const argumentTypes = [
		{ value: true, name: 'Pro Argument' },
		{ value: false, name: 'Contra Argument' }
	];

	const addArgument = (id: string) => {
		createConnectionFor(statement.id, id, isProArgument, percentage);
		goto('/statement/' + id);
	};
	let t = $state(0);
	let dialog: HTMLDialogElement | undefined = $state();
</script>

<button
	onclick={() => dialog?.toString()}
	class="flex items-center justify-center gap-3 text-nowrap !p-2"
>
	<i class="material-icons h-6 w-6">add_circle</i>
	add Argument
</button>
<dialog
	class="absolut top-36 z-20 flex size-1/2 flex-col items-center justify-start gap-4 self-center overflow-scroll rounded p-4 shadow-xl"
>
	Select a Statement to add as Argument
	<p class="rounded-xl border-2 p-4 shadow-lg">{statement.text}</p>
	{#if t == 0}
		<Searchfield
			bind:results
			hide_filter
			filterOptions={{
				entitytype: ['statement']
			}}
		></Searchfield>
		{#each results as result, i}
			<div class="border-b-2 p-2">
				{(result as IStatement).text}
				<button onclick={() => addArgument(result.id)}>Add this as Argument</button>
			</div>
		{:else}
			<p>Searching...</p>
		{/each}
		<NewStatement></NewStatement>
	{:else}
		What kind of Argument is this?
		<select class="mt-2" bind:value={isProArgument}>
			{#each argumentTypes as at}
				<option value={at.value}>{at.name}</option>
			{/each}
		</select>
		How much is this argument related to the thesis?
		<Progressbar bind:value={percentage}></Progressbar>
	{/if}
</dialog>
