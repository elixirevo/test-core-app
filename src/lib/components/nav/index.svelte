<script lang="ts">
	// import { isMenuOpen } from '$lib/states/nav.svelte';
	import { navMenuState } from '$lib/states/nav.svelte';
	import { beforeNavigate } from '$app/navigation';
	import NavBar from '$lib/components/nav/navBar.svelte';
	import NavMenu from '$lib/components/nav/navMenu.svelte';
	import LoginModal from '../login/loginModal.svelte';

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
		{ name: 'dashboard', link: '/dashboard', children: [] },
		{ name: 'drops', link: '/test', children: [] },
		{
			name: 'core',
			link: '/core',
			children: [
				{ name: 'handover or keep', link: '/core/asset' },
				{ name: 'asset retrieve', link: '/core/retireve' },
				{ name: 'retrieve', link: '/core/retireve' },
				{ name: 'retrieve', link: '/core/retireve' }
			]
		},
		{
			name: 'gear',
			link: '/gear',
			children: [
				{ name: 'handover or keep', link: '/core/asset' },
				{ name: 'asset retrieve', link: '/core/retireve' },
				{ name: 'retrieve', link: '/core/retireve' }
			]
		},
		{ name: 'launchpad', link: '/test', children: [] },
		{ name: 'refferal', link: '/test', children: [] },
		{ name: 'docs', link: '/test', children: [] }
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
