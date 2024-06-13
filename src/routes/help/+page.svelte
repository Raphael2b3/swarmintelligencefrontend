<script lang="ts">
	let group: any[] = $state([1, 2]);
</script>

<div class="flex gap-2">
	<input type="checkbox" bind:group value={1} name="one" />One
	<input type="checkbox" bind:group value={2} name="two" /> Two
	<input type="checkbox" bind:group value={3} name="three" /> Three
</div>
<div
	class="my-2 w-44 rounded-lg border border-gray-200 p-2 dark:border-gray-700 dark:text-gray-400"
>
	Group: {group}
</div>
<button onclick={() => (group.length = 0)}>Clear</button>
