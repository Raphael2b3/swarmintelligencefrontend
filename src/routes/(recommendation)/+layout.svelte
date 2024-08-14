<script>
	import FlyOutMenu from '$lib/components/FlyOutMenu.svelte';
	import Navbar from '$lib/components/Navbar.svelte';
	let openedflyout = $state(true);
	function onMenuClick() {
		openedflyout = !openedflyout;
	}
</script>

<div style="display:flex height: 100vh; width:100vi; background-color: red;">
	<Navbar {onMenuClick} onSearch={() => {}}></Navbar>
	<FlyOutMenu bind:open={openedflyout}></FlyOutMenu>
	<div style="flex-grow: 1; background-color: blue;">
		<slot />
	</div>
</div>
