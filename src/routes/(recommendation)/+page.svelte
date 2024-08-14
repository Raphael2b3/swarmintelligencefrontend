<script lang="ts">
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
	import Checkbox from '$lib/components/form/Checkbox.svelte';
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
	import type { IFilterOptions } from '$lib/interfaces';
	import Navbar from '$lib/components/Navbar.svelte';
	import ArgumentsStatement from '$lib/components/details/ArgumentsStatement.svelte';
	import ConnectStatement from '$lib/components/details/ConnectStatement.svelte';
	import MoreOptionsConnection from '$lib/components/details/MoreOptionsConnection.svelte';
	import MoreOptionsDuplication from '$lib/components/details/MoreOptionsDuplication.svelte';
	import MoreOptionsStatement from '$lib/components/details/MoreOptionsStatement.svelte';
	import ThesisStatement from '$lib/components/details/ThesisStatement.svelte';
	import TabNav from '$lib/components/TabNav.svelte';
	import StatementSearchResultOnlyText from '$lib/components/searchresult/StatementSearchResultOnlyText.svelte';

	let filterOptions: IFilterOptions = $state({
		entitytype: ['statement'],
		controversial: true,
		sortByTruth: 'asc',
		sortByVotes: 'desc',
		tags: ['foo'],
		_tagstring: ''
	});

	let open = $state(true);
</script>

<div style="display: flex; flex-direction: column;">
	-------------------- Icon Buttons --------------------
	<div style="display:flex; gap: 3px; flex-direction: column;">
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
	<div style="display:flex; gap: 3px; flex-direction: column;">
		<BorderlessButton title="Borderless Button"></BorderlessButton>
		<NegativeButton title="Negative Button"></NegativeButton>
		<PositiveButton title="Positive Button"></PositiveButton>
		<PrimaryButton title="Primary Button"></PrimaryButton>
		<SecondaryButton title="Secondary Button"></SecondaryButton>
	</div>
	-------------------- Form --------------------
	<div style="display:flex; gap: 3px; flex-direction: column;">
		<Checkbox title="Checkbox"></Checkbox>
		<DropdownSelect></DropdownSelect>
		<Slider></Slider>
		<Textfield></Textfield>
	</div>
	-------------------- Search Result --------------------
	<div style="display:flex; gap: 3px; flex-direction: column;">
		<ConnectionSearchResult connection={getFallbackConnection()}></ConnectionSearchResult>
		<DuplicationSearchResult duplication={getFallbackDuplication()}></DuplicationSearchResult>
		<StatementSearchResult statement={getFallbackStatement()}></StatementSearchResult>
		<StatementSearchResultOnlyText statement={getFallbackStatement()}
		></StatementSearchResultOnlyText>
	</div>
	-------------------- Common --------------------
	<div style="display:flex; gap: 3px; flex-direction: column;">
		<ActionButtonList></ActionButtonList>
		<ArgumentSelectableStatement statement={getFallbackStatement()}></ArgumentSelectableStatement>
		<CreateStatement></CreateStatement>
		<ExpandableFilter bind:options={filterOptions}></ExpandableFilter>
		<FlyOutMenu></FlyOutMenu>
		<Navbar></Navbar>
		<PopUpModal {open}>test</PopUpModal>
		<RecommendationFilter></RecommendationFilter>
		<ScrollableRichText></ScrollableRichText>
		<Searchbar></Searchbar>
		<TabNav></TabNav>
		<ThesisSelectableStatement statement={getFallbackStatement()}></ThesisSelectableStatement>
	</div>
	-------------------- Details --------------------
	<div style="display:flex; gap: 3px; flex-direction: column;">
		<ArgumentsStatement open={true} statementid="1"></ArgumentsStatement>
		<ConnectStatement></ConnectStatement>
		<MoreOptionsConnection></MoreOptionsConnection>
		<MoreOptionsDuplication></MoreOptionsDuplication>
		<MoreOptionsStatement></MoreOptionsStatement>
		<ThesisStatement open={true} statementid="1"></ThesisStatement>
	</div>
</div>
