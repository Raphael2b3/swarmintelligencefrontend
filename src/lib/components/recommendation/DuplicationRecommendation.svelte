<script>
	import { getFallbackConnection, getFallbackDuplication } from '$lib/state/entities.svelte';
	import ActionButtonList from '../ActionButtonList.svelte';
	import FavouriteButton from '../buttons/iconbuttons/FavouriteButton.svelte';
	import ShareButton from '../buttons/iconbuttons/ShareButton.svelte';
	import NegativeButton from '../buttons/NegativeButton.svelte';
	import PositiveButton from '../buttons/PositiveButton.svelte';
	import ScrollableRichText from '../ScrollableRichText.svelte';
	
	let  {duplication= getFallbackDuplication()} = $props()
</script>

<h5>The Statement</h5>
<ScrollableRichText></ScrollableRichText>

<h5>Is the same as</h5>
<ScrollableRichText></ScrollableRichText>
<ActionButtonList>
	<FavouriteButton></FavouriteButton>
	<ShareButton></ShareButton>
</ActionButtonList>
<div style="display: flex; flex: 1; align-items: center; flex-direction: row; gap: 1%;">
	<NegativeButton title="Is The Same"></NegativeButton>
	<PositiveButton title="Is Different"></PositiveButton>
</div>
