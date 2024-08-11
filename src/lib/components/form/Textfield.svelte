<script lang="ts">
	import Textfield from '@smui/textfield';
	import Icon from '@smui/textfield/icon';
	import HelperText from '@smui/textfield/helper-text';

	let { valueA = '', title = 'Texfield' } = $$props;
</script>

<Textfield variant="outlined" bind:value={valueA} label={title}>
	<HelperText slot="helper">Helper Text</HelperText>
</Textfield>
