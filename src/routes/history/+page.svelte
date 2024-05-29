<script lang="ts">
	import { Button } from 'flowbite-svelte';
	import Checkbox from '$lib/components/base/Checkbox.svelte';
	import DiscoverView from '$lib/components/views/DiscoverView.svelte';
	import { historyManager } from '$lib/state/history.svelte';
</script>

<DiscoverView results={historyManager.current}></DiscoverView>
