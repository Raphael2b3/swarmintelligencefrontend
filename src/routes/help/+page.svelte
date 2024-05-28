<script lang="ts">
	import { Button } from 'flowbite-svelte';
	import Checkbox from '$lib/components/base/Checkbox.svelte';

	let group: any[] = $state([1, 2]);
</script>

<div class="flex gap-2">
	<Checkbox bind:group value={1}>One</Checkbox>
	<Checkbox bind:group value={2}>Two</Checkbox>
	<Checkbox bind:group value={3}>Three</Checkbox>
</div>
<div
	class="my-2 border border-gray-200 dark:border-gray-700 rounded-lg p-2 w-44 dark:text-gray-400"
>
	Group: {group}
</div>
<Button onclick={() => (group.length = 0)}>Clear</Button>
