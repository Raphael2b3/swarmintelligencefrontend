<script lang="ts">
	import Textfield from '@smui/textfield';
	import HelperText from '@smui/textfield/helper-text';

	let value =
		'Large Text Field with Helper Text and no Resizing Allowed (rows=4, cols=24) - Textfield Component from SMUI Svelte Kit Library 		 ';
</script>

<Textfield
	style="flex:1"
	input$readonly
	onclick={() => {
		console.log('clicked');
	}}
	helperLine$style="width: 100%;"
	textarea
	bind:value
	label="Statement"
>
	<HelperText slot="helper">Helper Text</HelperText>
</Textfield>
