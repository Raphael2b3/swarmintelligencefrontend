<script>
	import { page } from '$app/stores';
	import { RefreshOutline } from 'flowbite-svelte-icons';
	import '../app.css';
	import { Navbar, NavBrand, NavLi, NavUl, NavHamburger, Button } from 'flowbite-svelte';
	import { clearCache } from '$lib/state/entities.svelte';
	let { children } = $props();
	let activeUrl = $derived($page.url.pathname);
</script>

<Navbar class="px-2 sm:px-4 py-2.5 w-full z-20 top-0 start-0 border-b">
	<NavBrand href="/">
		<img src="/images/favicon.png" class="me-3 h-6 sm:h-9" alt="Flowbite Logo" />
		<span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white"
			>Swarmintelligence</span
		>
	</NavBrand>
	<NavHamburger />
	<NavUl {activeUrl}>
		<NavLi href="/" active={true}>Home</NavLi>
		<NavLi href="/history">History</NavLi>
		<NavLi href="/help">About</NavLi>
		<NavLi href="/help">Navbar</NavLi>
	</NavUl>
	<Button>
		Clear Cache
		<RefreshOutline onclick={clearCache}></RefreshOutline>
	</Button>
</Navbar>

<div class="m-5">
	{@render children()}
</div>
