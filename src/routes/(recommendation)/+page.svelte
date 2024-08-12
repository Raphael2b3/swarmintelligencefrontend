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
	import CheckBox from '$lib/components/form/CheckBox.svelte';
	import DropdownSelect from '$lib/components/form/DropdownSelect.svelte';
	import Slider from '$lib/components/form/Slider.svelte';
	import Textfield from '$lib/components/form/Textfield.svelte';
	import ConnectionSearchResult from '$lib/components/searchresult/ConnectionSearchResult.svelte';
	import DuplicationSearchResult from '$lib/components/searchresult/DuplicationSearchResult.svelte';
	import StatementSearchResult from '$lib/components/searchresult/StatementSearchResult.svelte';
	import {
		getFallbackConnection,
		getFallbackDuplication,
		getFallbackStatement
	} from '$lib/state/entities.svelte';
	import ActionButtonList from '$lib/components/ActionButtonList.svelte';
	import ArgumentSelectableStatement from '$lib/components/ArgumentSelectableStatement.svelte';
	import CreateStatement from '$lib/components/CreateStatement.svelte';
	import ExpandableFilter from '$lib/components/ExpandableFilter.svelte';
	import FlyOutMenu from '$lib/components/FlyOutMenu.svelte';
	import PopUpModal from '$lib/components/PopUpModal.svelte';
	import RecommendationFilter from '$lib/components/RecommendationFilter.svelte';
	import ScrollableRichText from '$lib/components/ScrollableRichText.svelte';
	import Searchbar from '$lib/components/Searchbar.svelte';
	import ThesisSelectableStatement from '$lib/components/ThesisSelectableStatement.svelte';
	import TabNav from '$lib/components/TabNav.svelte';
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
	-------------------- Form --------------------
	<CheckBox title="Checkbox"></CheckBox>
	<DropdownSelect></DropdownSelect>
	<Slider></Slider>
	<Textfield></Textfield>
	-------------------- Search Result --------------------
	<ConnectionSearchResult connection={getFallbackConnection()}></ConnectionSearchResult>
	<DuplicationSearchResult duplication={getFallbackDuplication()}></DuplicationSearchResult>
	<StatementSearchResult statement={getFallbackStatement()}></StatementSearchResult>
	-------------------- Common --------------------
	<ActionButtonList></ActionButtonList>
	<ArgumentSelectableStatement statement={getFallbackStatement()}></ArgumentSelectableStatement>
	<CreateStatement></CreateStatement>
	<ExpandableFilter></ExpandableFilter>
	<FlyOutMenu></FlyOutMenu>
	<PopUpModal></PopUpModal>
	<RecommendationFilter></RecommendationFilter>
	<ScrollableRichText></ScrollableRichText>
	<Searchbar></Searchbar>
	<TabNav></TabNav>
	<ThesisSelectableStatement></ThesisSelectableStatement>
</div>
