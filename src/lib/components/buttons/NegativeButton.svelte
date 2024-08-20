<script lang="ts">
	import Button, { Label } from '@smui/button';
	let { onclick, title } = $$props;
</script>

<Button class="negative-button" style="flex:1" variant="raised" {onclick}>
	<Label>{title}</Label>
</Button>
