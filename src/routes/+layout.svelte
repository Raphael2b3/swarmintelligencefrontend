<script>
	import '../app.css';
	import { page } from '$app/stores';
	import '../app.css';
	import { clearCache } from '$lib/state/entities.svelte';
	let { children } = $props();
	let activeUrl = $derived($page.url.pathname);
</script>

<nav class="start-0 top-0 z-20 w-full border-b px-2 py-2.5 sm:px-4">
	<a href="/">
		<img src="/images/favicon.png" class="me-3 h-6 sm:h-9" alt="Flowbite Logo" />
		<span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white"
			>Swarmintelligence</span
		>
	</a>
	<ul>
		<li><a href="/">Home</a></li>
		<li><a href="/history">History</a></li>
		<li><a href="/about">About</a></li>
		<li><a href="/help">Help</a></li>
	</ul>
	<button onclick={clearCache}>
		Clear Cache
		<i class="material-icons h-6 w-6">refresh</i>
	</button>
</nav>

<div class="m-5 flex flex-col items-center justify-center">
	{@render children()}
</div>
