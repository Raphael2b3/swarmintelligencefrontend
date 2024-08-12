<script>
	import Card from '@smui/card';
	import Textfield from './form/Textfield.svelte';
	import NegativeButton from './buttons/NegativeButton.svelte';
	import PositiveButton from './buttons/PositiveButton.svelte';
	import PrimaryButton from './buttons/PrimaryButton.svelte';
	import SecondaryButton from './buttons/SecondaryButton.svelte';
	let text = $state('It is True that, ');
	let tags = $state('cool, stuff');

	function onContraSelected() {
		console.log('False selected');
	}
	function onProSelected() {
		console.log('True selected');
	}

	function onCancel() {
		console.log('Cancel');
	}

	function onSave() {
		console.log('Save');
	}
</script>

<Card padded>
	<p>Create Statement</p>
	<Textfield bind:value={text} title="Statement"></Textfield>
	<div style="display: flex; flex-direction: row;">
		<NegativeButton onclick={onContraSelected} title="False" />
		<PositiveButton onclick={onProSelected} title="True" />
	</div>
	<p>Tags</p>
	<Textfield bind:value={tags} title="Tags"></Textfield>
	<div style="display: flex; flex-direction: row;">
		<SecondaryButton onclick={onCancel} title="Cancel" />
		<PrimaryButton onclick={onSave} title="Save" />
	</div>
</Card>
