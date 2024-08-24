<script lang="ts">
	import Checkbox from '@smui/checkbox';
	import FormField from '@smui/form-field';

	let { checked = null, label, group } = $$props;
</script>

<FormField>
	<Checkbox bind:checked />
	<span slot="label">{label}</span>
</FormField>
