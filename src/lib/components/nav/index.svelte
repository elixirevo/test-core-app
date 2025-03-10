<script lang="ts">
	// import { isMenuOpen } from '$lib/states/nav.svelte';
	import { navMenuState } from '$lib/states/nav.svelte';
	import { beforeNavigate } from '$app/navigation';
	import NavBar from '$lib/components/nav/navBar.svelte';
	import NavMenu from '$lib/components/nav/navMenu.svelte';
	import LoginModal from '../login/loginModal.svelte';
	import { FRONT_PATH } from '$lib/constants/frontPath';
	import { OUTSIDE_PATH } from '$lib/constants/outsidePath';

	beforeNavigate(() => {
		navMenuState.value = false;
	});

	const userInfo = $state({
		isLogin: false,
		userName: 'John_Doe',
		walletAddress: '0x123456789AB'
	});

	const walletInfo = {
		isConnected: false,
		walletAddress: '0x123456789AB'
	};

	const menuList = [
		{ name: 'dashboard', link: FRONT_PATH.DASHBOARD, children: [] },
		{
			name: 'drops',
			link: FRONT_PATH.DROPS,
			children: [
				{ name: 'claim', link: FRONT_PATH.DROPS_CLAIM },
				{ name: 'claim history', link: FRONT_PATH.DROPS_CLAIM_HISTORY }
			]
		},
		{
			name: 'core',
			link: FRONT_PATH.CORE,
			children: [
				{ name: 'handover or keep', link: FRONT_PATH.CORE_ASSET },
				{ name: 'asset retrieve', link: FRONT_PATH.CORE_RETRIEVE },
				{ name: 'sale', link: FRONT_PATH.CORE_SALE },
				{ name: 'referral', link: FRONT_PATH.CORE_REFERRAL }
			]
		},
		{
			name: 'gear',
			link: FRONT_PATH.GEAR,
			children: [
				{ name: 'mint cStable', link: FRONT_PATH.GEAR_MINT },
				{ name: 'lockup cStable', link: FRONT_PATH.GEAR_LOOKUP }
			]
		},
		{ name: 'launchpad', link: FRONT_PATH.LAUNCHPAD, children: [] },
		{ name: 'docs', link: OUTSIDE_PATH.CORE_DOCS, children: [] }
	];
</script>

{#if userInfo.isLogin}
	<LoginModal
		on:click={() => {
			userInfo.isLogin = !userInfo.isLogin;
		}}
	/>
{/if}

<NavBar {userInfo} {walletInfo} {menuList} />
<NavMenu {menuList} />
