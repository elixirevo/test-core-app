<script lang="ts">
  import { navMenuState } from '$lib/states/nav.svelte';
	const { menuList } = $props();
</script>

<div class="vision-style-background nav-menu" class:open={navMenuState.value}>
	<div class="menu-content">
		<a href="/dashboard">DASHBOARD</a>
	</div>
</div>

<style>
	.nav-menu {
		position: absolute;
		top: 70px;
		left: 0;
		width: 100vw;
		max-height: 0;
		z-index: 100;
		overflow: scroll;
		transition: max-height 0.5s ease-out;
		backdrop-filter: blur(10px);
		-webkit-backdrop-filter: blur(10px);
	}

	.nav-menu .menu-content {
		height: calc(100dvh - 70px);
	}

	.nav-menu.open {
		max-height: calc(100dvh - 70px);
	}
	@media (max-width: 1280px) {
		/* FHD 대응 */
	}

	@media (max-width: 1024px) {
		/* 태블릿 대응 */
	}

	@media (max-width: 768px) {
		/* 모바일 대응 */
		.nav-menu {
			top: 60px;
		}

		.nav-menu .menu-content {
			height: calc(100dvh - 60px);
		}

		.nav-menu.open {
			max-height: calc(100dvh - 60px);
		}
	}

	@media (max-width: 480px) {
		/* 모바일 대응 */
	}
</style>
