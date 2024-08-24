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
		<BorderlessButton href="/login">Login</BorderlessButton>
		<BorderlessButton href="/register">Register</BorderlessButton>
		<BorderlessButton href="/logout">Logout</BorderlessButton>
		<BorderlessButton href="/settings">Settings</BorderlessButton>
		<BorderlessButton href="/about">About</BorderlessButton>
	</FlyOutMenu>
	<slot />
</div>
