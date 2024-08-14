<script lang="ts">
	import SegmentedButton, { Segment } from '@smui/segmented-button';
	import { Label } from '@smui/common';
	type OwnProps = {
		choices?: string[];
		selected?: string;
	};
	let { choices = ['option1', 'option2'], selected = $bindable() }: OwnProps = $props();
</script>

<!--
  Note: segments must be unique. (They cannot === each other.)
  If you need to show the same value, use keyed segments.
-->
<SegmentedButton segments={choices} let:segment singleSelect bind:selected>
	<!-- Note: the `segment` property is required! -->
	<Segment {segment}>
		<Label>{segment}</Label>
	</Segment>
</SegmentedButton>
