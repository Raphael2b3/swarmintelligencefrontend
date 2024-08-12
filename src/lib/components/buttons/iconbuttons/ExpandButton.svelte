<script lang="ts">
	import IconButton from '@smui/icon-button';
	let { expanded = $bindable(false) } = $props();
</script>

<IconButton
	class="material-icons"
	onclick={() => {
		expanded = !expanded;
	}}>{expanded ? 'arrow_drop_up' : 'arrow_drop_down'}</IconButton
>
