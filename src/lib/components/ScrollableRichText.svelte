<script lang="ts">
	import Textfield from '@smui/textfield';
	import HelperText from '@smui/textfield/helper-text';

	let value =
		'Large Text Field with Helper Text and no Resizing Allowed (rows=4, cols=24) - Textfield Component from SMUI Svelte Kit Library 		 ';
</script>

<div class="margins">
	<Textfield
		textarea
		bind:value
		label="Label"
		input$rows={4}
		input$cols={24}
		input$resizable={false}
	>
		<HelperText slot="helper">Helper Text</HelperText>
	</Textfield>
</div>
