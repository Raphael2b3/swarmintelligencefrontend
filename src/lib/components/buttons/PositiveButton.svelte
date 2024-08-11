<script lang="ts">
	import Button, { Label } from '@smui/button';
	let { onclick, title } = $$props;
</script>

<Button class="positive-button" variant="raised" {onclick}>
	<Label>{title}</Label>
</Button>
