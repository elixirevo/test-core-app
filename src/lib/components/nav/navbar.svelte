<script lang="ts">
	import { onMount } from 'svelte';
	import LoginModal from '$lib/components/login/loginModal.svelte';

	import logo from '$lib/assets/logo/logo.png';
	import profileImage from '$lib/assets/test/profile_image.png';
	import { afterNavigate, beforeNavigate } from '$app/navigation';

	let navHiddenContentActive = false;

	beforeNavigate(() => {
		navHiddenContentActive = false;
	});
	afterNavigate(() => {
		setTimeout(() => {
			navHiddenContentActive = true;
		}, 1000);
	});

	const loginInfo = {
		isLogin: false,
		userName: 'John_Doe',
		walletAddress: '0x123456789AB'
	};

	const walletInfo = {
		isConnected: false,
		walletAddress: '0x123456789AB'
	};

	const navMenu = [
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

{#if loginInfo.isLogin}
	<LoginModal
		on:click={() => {
			loginInfo.isLogin = !loginInfo.isLogin;
		}}
	/>
{/if}

<nav class="vision-style-background">
	<div class="logo-wrap">
		<a href="/">
			<img src={logo} alt="Logo" width="50" height="50" />
		</a>
	</div>
	<div class="menu-wrap">
		{#each navMenu as menu}
			<div class="menu-content">
				<a href={menu.link}>{menu.name.toUpperCase()}</a>
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
	{#if loginInfo.isLogin}
		<div class="user-wrap">
			<div class="user-box">
				<div class="user-profile-image">
					<img class="user-profile-image" src={profileImage} alt="profile-img" />
				</div>
				<div class="user-profile-info">
					<div class="user-name">@John_Doe</div>
					{#if walletInfo.isConnected}
						<div class="user-wallet">0x123456789AB</div>
					{:else}
						<!-- 지갑연결 구현 -->
						<button class="user-wallet-connect">Wallet Connect</button>
					{/if}
				</div>
			</div>
		</div>
	{:else}
		<div class="user-wrap">
			<button
				class="middle-button"
				on:click={() => {
					loginInfo.isLogin = true;
				}}
			>
				Log In
			</button>
		</div>
	{/if}
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

	/* .menu-link:focus {
		background-color: var(--primary-color);
		color: #302779;
	} */

	.user-wrap {
		display: flex;
		justify-content: center;
		align-items: center;
		/* background-color: green; */
	}

	.user-box {
		display: flex;
		width: 100%;
		height: 50px;
		/* background-color: aquamarine; */
		align-items: center;
		gap: 1rem;
	}

	.user-profile-image {
		display: flex;
		width: 50px;
		height: 50px;
	}

	.user-profile-image img {
		width: 100%;
	}

	.user-profile-info {
		display: flex;
		flex-grow: 1;
		flex-direction: column;
		font-size: 1.15rem;
		height: 46px;
		justify-content: space-between;
	}

	.user-name {
		font-size: 1.1rem;
		font-weight: var(--font-emphasis);
	}

	.user-wallet {
		font-size: 1rem;
		height: 20px;
		font-weight: 300;
	}

	.user-wallet-connect {
		width: 100%;
		background-color: blue;
		padding: 1px 4px;
		border-radius: 5px;
		font-size: 0.95rem;
		font-weight: 500;
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
		.user-box {
			height: 40px;
			gap: 0.8rem;
		}
		.user-profile-image {
			width: 40px;
			height: 40px;
		}
		.user-profile-info {
			height: 36px;
		}
		.user-name {
			font-size: 0.9rem;
		}

		.user-wallet {
			font-size: 0.8rem;
			height: 20px;
		}

		.user-wallet-connect {
			font-size: 0.8rem;
		}
	}

	@media (max-width: 1024px) {
		nav {
			height: 70px;
			padding: 0px 28px;
			grid-template-columns: 100px;
			gap: 0px;
		}
		.menu-wrap {
			display: none;
		}
		.user-wrap {
			display: none;
		}
	}

	@media (max-width: 768px) {
		/* 모바일 대응 */
		nav {
			height: 60px;
			padding: 0px 20px;
		}
		.user-profile-image {
			width: 30px;
			height: 30px;
		}
	}

	@media (max-width: 480px) {
		/* 모바일 대응 */
	}
</style>
