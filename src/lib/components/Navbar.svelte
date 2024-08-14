<script>
	import Card from '@smui/card';
	import Searchbar from './Searchbar.svelte';
	import BurgerMenuButton from './buttons/iconbuttons/BurgerMenuButton.svelte';
</script>

<Card style="width: 100%; flex-direction: row; display: flex;">
	<BurgerMenuButton></BurgerMenuButton>
	<Searchbar></Searchbar>
</Card>
