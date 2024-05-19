<script>
	import Searchfield from '$lib/components/base/Searchfield.svelte';
	import RecommendationView from '$lib/components/views/RecommendationView.svelte';

	let isEmpty = $state(true);
</script>

<Searchfield bind:isEmpty onResult={(data) => {}}></Searchfield>

<RecommendationView />
