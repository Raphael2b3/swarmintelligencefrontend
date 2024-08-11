<script lang="ts">
	import Button from '@smui/button';
	let { onclick } = $$props;
</script>

<Button {onclick}>
	<slot />
</Button>
