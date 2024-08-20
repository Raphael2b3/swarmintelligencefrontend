<script lang="ts">
	import type { IConnection } from '$lib/interfaces';
	import ActionButtonList from '../ActionButtonList.svelte';
	import FavouriteButton from '../buttons/iconbuttons/FavouriteButton.svelte';
	import ShareButton from '../buttons/iconbuttons/ShareButton.svelte';
	import Slider from '../form/Slider.svelte';
	import ScrollableRichText from '../ScrollableRichText.svelte';

	let { connection }: { connection: IConnection } = $props();
	let value = $state(0.5);
	let value_indicator = $derived((value * 100).toFixed(2) + '%');
	const arg_type_str = connection.isProArgument ? 'Pro' : 'Contra';
</script>

<h5>Thesis</h5>
<ScrollableRichText></ScrollableRichText>
<h5>{arg_type_str} Argument</h5>
<ScrollableRichText></ScrollableRichText>
<ActionButtonList>
	<FavouriteButton></FavouriteButton>
	<ShareButton></ShareButton>
</ActionButtonList>
This is Actually a good {arg_type_str} Argument

<div
	style="flex:1 ; display:flex; flex-direction: column; align-items: center; justify-content: space-around;"
>
	{value_indicator}

	<div style="width:100%;  display: flex; align-items: center;">
		bad

		<Slider bind:value></Slider>
		good
	</div>
</div>
