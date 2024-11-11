<script lang="ts">
	import logo from '$lib/images/logo/logo.png';
	import profileImage from '$lib/images/test/profile_image.png';
</script>

<nav>
	<div class="logo-wrap">
		<img src={logo} alt="Logo" width="50" height="50" />
	</div>
	<div class="menu-wrap">
		<div class="menu-content">
			<a href="/test">Dashboard</a>
		</div>
		<div class="menu-content">
			<a href="/test">Drops</a>
		</div>
		<div class="menu-content">
			<a href="/test">Core</a>
		</div>
		<div class="menu-content">
			<a href="/test">Gear</a>
		</div>
		<div class="menu-content">
			<a href="/test">Launchpad</a>
		</div>
		<div class="menu-content">
			<a href="/test">Refferal</a>
		</div>
		<div class="menu-content">
			<a href="/test">Docs</a>
		</div>
	</div>
	<!-- <div class="user-wrap">
		<button class="middle-button"> Sign In </button>
	</div> -->
	<div class="user-wrap">
		<div class="user-box">
			<div class="user-profile-image">
				<img class="user-profile-image" src={profileImage} alt="profile-img" />
			</div>
			<div class="user-profile-info">
				<div class="user-name">@John_Doe</div>
				<div class="user-wallet">0x123456789AB</div>
				<!-- 지갑연결 구현 -->
				<!-- <button class="user-wallet-connect">Wallet Connect</button> -->
			</div>
		</div>
	</div>
</nav>

<style>
	nav {
		background-color: rgba(0, 0, 0, 0.5);
		backdrop-filter: blur(10px);
		-webkit-backdrop-filter: blur(10px);
		position: sticky;
		width: 100vw;
		height: 80px;
		top: 0;
		padding: 0px 48px;
		display: grid;
		grid-template-columns: 200px 1fr 200px;
		gap: 10px;
		z-index: 1000;
	}

	.logo-wrap {
		display: flex;
		/* justify-content: center; */
		align-items: center;
		/* background-color: red; */
	}

	.menu-wrap {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.menu-content {
		padding: 0 16px;
		font-weight: var(--font-emphasis);
		font-size: 1.1rem;
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
		font-size: 1.2rem;
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
</style>
