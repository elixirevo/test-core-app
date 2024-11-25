<script lang="ts">
	import { goto } from '$app/navigation';
	import LoginModal from '$lib/components/login/loginModal.svelte';

	import logo from '$lib/assets/logo/logo.png';
	import profileImage from '$lib/assets/test/profile_image.png';

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
		{ name: 'dashboard', link: '/test' },
		{ name: 'drops', link: '/test' },
		{ name: 'core', link: '/test' },
		{ name: 'gear', link: '/test' },
		{ name: 'launchpad', link: '/test' },
		{ name: 'refferal', link: '/test' },
		{ name: 'docs', link: '/test' }
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
		<img src={logo} alt="Logo" width="50" height="50" />
	</div>
	<div class="menu-wrap">
		{#each navMenu as item}
			<div class="menu-content">
				<a href={item.link}>{item.name.toUpperCase()}</a>
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
	}

	.menu-content {
		padding: 0 16px;
		font-weight: var(--font-emphasis);
		font-size: 1rem;
	}

	.menu-content a:hover {
		color: var(--primary-color);
	}

	.menu-content a:focus {
		color: var(--primary-color);
	}

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
		.menu-content {
			padding: 0 12px;
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
			padding: 0px 30px;
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
