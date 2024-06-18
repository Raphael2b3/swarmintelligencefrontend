<script>
	import '../app.css';
	import { page } from '$app/stores';
	import { clearCache } from '$lib/state/entities.svelte';
	let { children } = $props();
	let activeUrl = $derived($page.url.pathname);
</script>

<nav
	class="start-0 top-0 z-20 flex w-full flex-row items-center justify-around rounded border-b px-2 py-2.5 shadow-lg sm:px-4"
>
	<a href="/" class="flex flex-row items-center">
		<img src="/images/favicon.png" class="me-3 h-6 sm:h-9" alt="Flowbite Logo" />
		<span class="self-center text-xl font-semibold dark:text-white">Swarmintelligence</span>
	</a>
	<ul class="flex w-full flex-auto flex-row justify-center gap-3">
		<li><a href="/">Home</a></li>
		<li><a href="/history">History</a></li>
		<li><a href="/about">About</a></li>
		<li><a href="/help">Help</a></li>
	</ul>
	<button onclick={clearCache} class="flex flex-col items-center justify-center">
		<i class="material-icons h-6 w-6">refresh</i>
		<span class="text-nowrap">Clear Cache</span>
	</button>
</nav>

<div class="m-5 flex flex-col items-center justify-center gap-4">
	{@render children()}
</div>
