<script lang="ts">
	import Select, { Option } from '@smui/select';

	let { options = [], value } = $$props;
</script>

<Select bind:value label="Select Menu">
	{#each options as option}
		<Option value={option}>{option}</Option>
	{:else}
		No Values
	{/each}
</Select>
