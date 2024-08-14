<script lang="ts">
	import BorderlessButton from '../buttons/BorderlessButton.svelte';
	import PopUpModal from '../PopUpModal.svelte';
	let { open }: { open: boolean } = $props();
	let selected = $state('Pros');
</script>

<PopUpModal {open} title="More Options">
	<BorderlessButton>Report</BorderlessButton>
	if the entity is made by you
	<BorderlessButton>Delete</BorderlessButton>
	<BorderlessButton>Edit</BorderlessButton>
</PopUpModal>
