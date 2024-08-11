<script>
	import BackButton from '$lib/components/buttons/iconbuttons/BackButton.svelte';
	import BurgerMenuButton from '$lib/components/buttons/iconbuttons/BurgerMenuButton.svelte';
	import CancelButton from '$lib/components/buttons/iconbuttons/CancelButton.svelte';
	import ClearButton from '$lib/components/buttons/iconbuttons/ClearButton.svelte';
	import ConnectButton from '$lib/components/buttons/iconbuttons/ConnectButton.svelte';
	import ExpandButton from '$lib/components/buttons/iconbuttons/ExpandButton.svelte';
	import FavouriteButton from '$lib/components/buttons/iconbuttons/FavouriteButton.svelte';
	import OpenArgumentsButton from '$lib/components/buttons/iconbuttons/OpenArgumentsButton.svelte';
	import OpenDetailsButton from '$lib/components/buttons/iconbuttons/OpenDetailsButton.svelte';
	import OpenThesisButton from '$lib/components/buttons/iconbuttons/OpenThesisButton.svelte';
	import ShareButton from '$lib/components/buttons/iconbuttons/ShareButton.svelte';
	import ShowMoreButton from '$lib/components/buttons/iconbuttons/ShowMoreButton.svelte';
	import BorderlessButton from '$lib/components/buttons/BorderlessButton.svelte';
	import NegativeButton from '$lib/components/buttons/NegativeButton.svelte';
	import PositiveButton from '$lib/components/buttons/PositiveButton.svelte';
	import PrimaryButton from '$lib/components/buttons/PrimaryButton.svelte';
	import SecondaryButton from '$lib/components/buttons/SecondaryButton.svelte';
</script>

<div style="display: flex; flex-direction: column;">
	-------------------- Icon Buttons --------------------
	<div>
		<BackButton></BackButton>
		<BurgerMenuButton></BurgerMenuButton>
		<CancelButton></CancelButton>
		<ClearButton></ClearButton>
		<ConnectButton></ConnectButton>
		<ExpandButton></ExpandButton>
		<FavouriteButton></FavouriteButton>
		<OpenArgumentsButton></OpenArgumentsButton>
		<OpenDetailsButton></OpenDetailsButton>
		<OpenThesisButton></OpenThesisButton>
		<ShareButton></ShareButton>
		<ShowMoreButton></ShowMoreButton>
	</div>
	-------------------- Buttons --------------------
	<BorderlessButton title="Borderless Button"></BorderlessButton>
	<NegativeButton title="Negative Button"></NegativeButton>
	<PositiveButton title="Positive Button"></PositiveButton>
	<PrimaryButton title="Primary Button"></PrimaryButton>
	<SecondaryButton title="Secondary Button"></SecondaryButton>
</div>
