<script lang="ts">
	import Button from '@smui/button';
	let { onclick, href } = $$props;
</script>

<Button {onclick} {href}>
	<slot />
</Button>
