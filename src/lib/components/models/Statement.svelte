<script lang="ts">
	import { type IStatement } from '$lib/interfaces';
	import Container from '../base/Container.svelte';
	let { statement }: { statement: IStatement } = $props();
</script>

<Container>
	<h2>Statement</h2>
	<p>{statement.text}</p>
	<div class="horizontal">
		<button class="true-button">Thats True</button>
		<button class="false-button">Thats False</button>
	</div>
</Container>
