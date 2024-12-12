<script lang="ts">
	import { navMenuState } from '$lib/states/nav.svelte';
	import { capitalizeFirstLetter } from '$lib/util/text';
	const { menuList } = $props();
</script>

<div class="vision-style-background nav-menu" class:open={navMenuState.value}>
	<div class="menu-wrap">
		{#each menuList as menu}
			<div class="menu-content">
				<a href={menu.link}>{menu.name.toUpperCase()}</a>
				{#if menu.children.length > 0}
					{#each menu.children as childrenMenu}
						<div class="menu-child-content">
							<a href={childrenMenu.link}>{capitalizeFirstLetter(childrenMenu.name)}</a>
						</div>
					{/each}
				{/if}
			</div>
		{/each}
		<br />
	</div>
</div>

<style>
	.nav-menu {
		display: none;
	}

	.menu-wrap {
		display: flex;
		padding: 2rem 1rem;
		flex-direction: column;
		justify-content: flex-start;
		width: 100%;
		gap: 2rem;
	}

	.menu-content {
		display: flex;
		flex-direction: column;
		gap: 0.3rem;
	}

	.menu-content a {
		font-size: 2rem;
		font-weight: 800;
	}

	.menu-child-content {
		display: flex;
		flex-direction: column;
	}

	.menu-child-content a {
		font-size: 1.5rem;
		font-weight: 700;
	}

	.bottom-space {
		display: block;
		width: 200px;
		height: 200px;
	}

	@media (max-width: 1280px) {
		/* FHD 대응 */
	}

	@media (max-width: 1024px) {
		/* 태블릿 대응 */
		.nav-menu {
			display: block;
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

		.nav-menu .menu-wrap {
			height: calc(100dvh - 70px);
		}

		.nav-menu.open {
			max-height: calc(100dvh - 70px);
		}
	}

	@media (max-width: 768px) {
		/* 모바일 대응 */
		.nav-menu {
			top: 60px;
		}

		.nav-menu .menu-wrap {
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
