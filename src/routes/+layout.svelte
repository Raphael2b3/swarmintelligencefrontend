<script>
	import { page } from '$app/stores';
	import '../app.css';
	import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from 'flowbite-svelte';

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
		<NavLi href="/help">About</NavLi>
		<NavLi href="/help">Navbar</NavLi>
	</NavUl>
</Navbar>

<slot />
