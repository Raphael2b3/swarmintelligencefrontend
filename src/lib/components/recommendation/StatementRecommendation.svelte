<script>
	import ActionButtonList from '../ActionButtonList.svelte';
	import ConnectButton from '../buttons/iconbuttons/ConnectButton.svelte';
	import FavouriteButton from '../buttons/iconbuttons/FavouriteButton.svelte';
	import OpenDetailsButton from '../buttons/iconbuttons/OpenDetailsButton.svelte';
	import ShareButton from '../buttons/iconbuttons/ShareButton.svelte';
	import ShowMoreButton from '../buttons/iconbuttons/ShowMoreButton.svelte';
	import NegativeButton from '../buttons/NegativeButton.svelte';
	import PositiveButton from '../buttons/PositiveButton.svelte';
	import ScrollableRichText from '../ScrollableRichText.svelte';
</script>

<ScrollableRichText></ScrollableRichText>
<ActionButtonList>
	<ShowMoreButton></ShowMoreButton>
	<FavouriteButton></FavouriteButton>
	<ShareButton></ShareButton>
	<ConnectButton></ConnectButton>
	<OpenDetailsButton></OpenDetailsButton>
</ActionButtonList>
<div style="display: flex; flex-direction: row;">
	<NegativeButton title="False"></NegativeButton>
	<PositiveButton title="True"></PositiveButton>
</div>
