<script lang="ts">
	import Checkbox from '@smui/checkbox';
	import FormField from '@smui/form-field';
	import OpenThesisButton from '../buttons/iconbuttons/OpenThesisButton.svelte';

	let { group, options } = $$props;
</script>

<FormField>
	{#each options as option}
		<Checkbox bind:group label={option.label} value={option.value} />
		<span>{option.label}</span>
	{/each}
</FormField>
