<script lang="ts">
	import Textfield from '@smui/textfield';
	import Icon from '@smui/textfield/icon';
	import HelperText from '@smui/textfield/helper-text';

	let { value = '', title = 'Texfield' } = $$props;
</script>

<Textfield variant="outlined" bind:value label={title}>
	<HelperText slot="helper">Helper Text</HelperText>
</Textfield>
