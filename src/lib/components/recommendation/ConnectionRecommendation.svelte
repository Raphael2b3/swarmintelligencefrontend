<script>
	import ActionButtonList from '../ActionButtonList.svelte';
	import ConnectButton from '../buttons/iconbuttons/ConnectButton.svelte';
	import FavouriteButton from '../buttons/iconbuttons/FavouriteButton.svelte';
	import OpenDetailsButton from '../buttons/iconbuttons/OpenDetailsButton.svelte';
	import ShareButton from '../buttons/iconbuttons/ShareButton.svelte';
	import ShowMoreButton from '../buttons/iconbuttons/ShowMoreButton.svelte';
	import NegativeButton from '../buttons/NegativeButton.svelte';
	import PositiveButton from '../buttons/PositiveButton.svelte';
	import Slider from '../form/Slider.svelte';
	import ScrollableRichText from '../ScrollableRichText.svelte';
</script>

<h4>Thesis</h4>
<ScrollableRichText></ScrollableRichText>

<h4>Argument</h4>
<ScrollableRichText></ScrollableRichText>
<ActionButtonList>
	<FavouriteButton></FavouriteButton>
	<ShareButton></ShareButton>
</ActionButtonList>
<Slider></Slider>
