<script lang="ts">
	import logo from '$lib/images/logo/logo.png';
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
	<div class="user-wrap">
		<!--  -->
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
		font-weight: 600;
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
		background-color: green;
	}
</style>
