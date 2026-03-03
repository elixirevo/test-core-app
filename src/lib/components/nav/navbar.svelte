<script lang="ts">
	import { afterNavigate, beforeNavigate } from '$app/navigation';
	import { navMenuState } from '$lib/states/nav.svelte';
	import ChevronDownIcon from '$lib/components/icons/ChevronDown.svelte';
	import logo from '$lib/assets/logo/logo.png';
	import profileImage from '$lib/assets/test/profile_image.png';
	import { FRONT_PATH } from '$lib/constants/frontPath';
	import UserProfile from './userProfile.svelte';

	const { userInfo, walletInfo, menuList } = $props();
	let navHiddenContentActive = $state(false);

	beforeNavigate(() => {
		navHiddenContentActive = false;
	});

	afterNavigate(() => {
		setTimeout(() => {
			navHiddenContentActive = true;
		}, 1000);
	});

	$effect(() => {
		console.log('navMenuState', navMenuState.value);
	});
</script>

<nav class="vision-style-background">
	<div class="logo-wrap">
		<a href={FRONT_PATH.ROOT}>
			<img src={logo} alt="Logo" width="50" height="50" />
		</a>
	</div>
	<div class="menu-mobile-wrap">
		<button class="menu-mobile-content" onclick={navMenuState.switchNavMenu}>
			<div class="menu-title">TheCore.Fi</div>
			<div class="menu-icon" class:rotated={navMenuState.value}>
				<ChevronDownIcon />
			</div>
		</button>
	</div>
	<div class="menu-wrap">
		{#each menuList as menu}
			<div class="menu-content">
				{#if menu.link.includes('http')}
					<a href={menu.link} target="_blank">{menu.name.toUpperCase()}</a>
				{:else}
					<a href={menu.link}>{menu.name.toUpperCase()}</a>
				{/if}
				{#if menu.children.length > 0}
					<div class={navHiddenContentActive ? 'menu-hidden-content text-xs' : 'disable'}>
						{#each menu.children as childrenMenu}
							<a class="menu-link" href={childrenMenu.link}>{childrenMenu.name.toUpperCase()}</a>
						{/each}
					</div>
				{/if}
			</div>
		{/each}
	</div>
	<UserProfile {userInfo} {walletInfo} {profileImage} />
</nav>

<style>
	nav {
		backdrop-filter: blur(10px);
		-webkit-backdrop-filter: blur(10px);
		position: sticky;
		width: 100vw;
		height: 70px;
		top: 0;
		padding: 0px 48px;
		display: grid;
		grid-template-columns: 200px 1fr 200px;
		gap: 10px;
		z-index: 10;
	}

	.logo-wrap {
		display: flex;
		align-items: center;
		/* background-color: red; */
	}

	.logo-wrap img {
		width: 36px;
	}

	.menu-mobile-wrap {
		display: none;
	}

	.menu-wrap {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 32px;
	}

	.menu-content {
		position: relative;
		font-weight: var(--font-emphasis);
		font-size: 1rem;
		padding: 22px 0;
	}

	.menu-content a:hover {
		color: var(--primary-color);
	}

	.menu-content a:focus {
		color: var(--primary-color);
	}

	.menu-hidden-content {
		display: flex;
		flex-direction: column;
		gap: 6px;
		position: absolute;
		top: 60px;
		left: 0;
		width: 230px;
		height: 180px;
		padding: 28px 30px;
		background-image: url('$lib/assets/ui/box_sm2.png');
		background-size: contain;
		background-repeat: no-repeat;
		opacity: 0;
		transition: opacity 0.1s linear;
		transition-delay: 0.2s;
		pointer-events: none;
	}

	.menu-content:hover .menu-hidden-content,
	.menu-hidden-content:hover {
		opacity: 1;
		pointer-events: auto;
	}

	.menu-link {
		width: 100%;
		padding: 4px 8px;
		border-radius: 5px;
		font-weight: 800;
	}

	.menu-link:hover {
		background-color: var(--primary-color) !important;
		color: #302779 !important;
	}

	@media (max-width: 1280px) {
		/* fhd 대응 */
		nav {
			grid-template-columns: 160px 1fr 160px;
		}
		.menu-wrap {
			gap: 24px;
		}
		.menu-content {
			font-size: 0.85rem;
		}
	}

	@media (max-width: 1024px) {
		nav {
			height: 70px;
			padding: 0px 28px;
			grid-template-columns: 50px 1fr 100px;
			gap: 0px;
		}

		.menu-mobile-wrap {
			display: flex;
		}

		.menu-mobile-content {
			display: flex;
			align-items: center;
			position: relative;
			font-weight: var(--font-emphasis);
			font-size: 1rem;
			padding: 0px;
			gap: 4px;
		}

		.menu-title {
			font-size: 1.2rem;
			font-weight: 500;
		}

		.menu-icon {
			display: flex;
			width: 30px;
			height: 30px;
			transition: transform 0.5s;
		}

		.rotated {
			transform: rotate(-180deg);
		}

		.menu-wrap {
			display: none;
		}
	}

	@media (max-width: 768px) {
		/* 모바일 대응 */
		nav {
			height: 60px;
			padding: 0px 30px;
		}
	}

	@media (max-width: 480px) {
		/* 모바일 대응 */
		nav {
			height: 60px;
			padding: 0px 20px;
		}
	}

	@media (max-height: 500px) {
		/* 높이 대응 */
		nav {
			height: 60px;
			padding: 0px 30px;
		}
	}
</style>
