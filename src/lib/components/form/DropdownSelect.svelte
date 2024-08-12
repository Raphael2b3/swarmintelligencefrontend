<script lang="ts">
	import Select, { Option } from '@smui/select';

	let { options = [], value } = $$props;
</script>

<Select bind:value label="Select Menu">
	{#each options as option}
		<Option value={option.value}>{option.name}</Option>
	{:else}
		No Values
	{/each}
</Select>
