<script lang="ts">
	import Button, { Label } from '@smui/button';
	let { onclick, title } = $$props;
</script>

<Button {onclick}>
	<Label>{title}</Label>
</Button>
