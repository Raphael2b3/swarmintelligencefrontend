<script lang="ts">
	import Checkbox from '@smui/checkbox';
	import FormField from '@smui/form-field';

	let { checked, title } = $$props;
</script>

<FormField>
	<Checkbox bind:checked />
	<span slot="label">{title}</span>
</FormField>
