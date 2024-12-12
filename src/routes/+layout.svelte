<script lang="ts">
	import '$lib/styles/reset.css';
	import '$lib/styles/global.css';
	import '$lib/styles/fonts.css';
	import '$lib/styles/ui.css';
	import Nav from '$lib/components/nav/index.svelte';
	import BackgroundTop from '$lib/components/graphic/backgroundTop.svelte';
</script>

<div class="background">
	<BackgroundTop />
	<Nav />
	<slot />
	<div class="background-bottom-wrap">
		<div class="left-image"></div>
		<div class="middle-line"></div>
		<div class="right-image"></div>
	</div>
</div>

<style>
	.background {
		background-image: url('$lib/assets/background/main.png');
		background-size: cover;
		background-position: center;
		height: 100%;
		overflow: scroll;
		display: grid;
		grid-template-rows: 60px;
		gap: 65px;
	}

	.background-bottom-wrap {
		display: none;
		width: 100%;
		height: 50px;
		background-color: #00fff2;
		position: absolute;
		bottom: 0px;
		z-index: 0;
	}

	@media (max-width: 1280px) {
		/* FHD 대응 */
	}

	@media (max-width: 1024px) {
		/* 태블릿 대응 */
		.background-bottom-wrap {
			display: none;
		}
	}

	@media (max-width: 768px) {
		/* 모바일 대응 */
		.background {
			gap: 45px;
		}
	}

	@media (max-width: 480px) {
		/* 모바일 대응 */
	}
</style>
