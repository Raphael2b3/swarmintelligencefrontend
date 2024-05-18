<script lang="ts">
	import { searchForStatement } from '$lib/database';

	let searchTerm = $state('Suchen ja');
	let { onResult }: { onResult: (data: any[]) => void } = $props();
	function search() {
		console.log(`Searching for: ${searchTerm}`);
		// Implement your search logic here

		onResult(searchForStatement(searchTerm));
	}
</script>

<div class="search-container">
	<input class="search-input" type="text" bind:value={searchTerm} placeholder="Search..." />
	<button class="search-button" onclick={search}>Search</button>
</div>

<style>
	.search-container {
		display: flex;
		justify-content: center;
		padding: 20px;
	}

	.search-input {
		flex-grow: 1;
		padding: 10px;
		border: 1px solid #ccc;
		border-radius: 4px;
	}

	.search-button {
		margin-left: 10px;
		padding: 10px 20px;
		background-color: #007bff;
		color: white;
		border: none;
		border-radius: 4px;
		cursor: pointer;
	}

	.search-button:hover {
		background-color: #0056b3;
	}
</style>
