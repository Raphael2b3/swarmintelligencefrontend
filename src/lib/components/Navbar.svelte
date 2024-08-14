<script>
	import Card from '@smui/card';
	import Searchbar from './Searchbar.svelte';
	import BurgerMenuButton from './buttons/iconbuttons/BurgerMenuButton.svelte';
	let { onMenuClick, onSearch } = $props();
</script>

<Card style="width: 100%; flex-direction: row; display: flex; padding: 5px;">
	<BurgerMenuButton onclick={onMenuClick}></BurgerMenuButton>
	<div style="width:100%">
		<Searchbar></Searchbar>
	</div>
</Card>
