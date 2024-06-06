<script lang="ts">
	import DiscoverView from '$lib/components/views/DiscoverView.svelte';
	import { historyManager } from '$lib/state/history.svelte';
</script>

<DiscoverView results={historyManager.current}></DiscoverView>
