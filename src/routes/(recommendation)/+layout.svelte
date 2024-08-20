<script>
	import BorderlessButton from '$lib/components/buttons/BorderlessButton.svelte';
	import FlyOutMenu from '$lib/components/FlyOutMenu.svelte';
	import Navbar from '$lib/components/Navbar.svelte';
	let openedflyout = $state(true);
	function onMenuClick() {
		openedflyout = !openedflyout;
	}
</script>

<div style="height: 100vh; display:flex; flex-direction: column;">
	<Navbar {onMenuClick} onSearch={() => {}}></Navbar>
	<FlyOutMenu bind:open={openedflyout}>
		<BorderlessButton>Login</BorderlessButton>
		<BorderlessButton>Register</BorderlessButton>
		<BorderlessButton>Settings</BorderlessButton>
		<BorderlessButton>About</BorderlessButton>
	</FlyOutMenu>
	<slot />
</div>
