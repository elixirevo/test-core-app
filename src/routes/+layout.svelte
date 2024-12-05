<script lang="ts">
	import '$lib/styles/reset.css';
	import '$lib/styles/global.css';
	import '$lib/styles/fonts.css';
	import '$lib/styles/ui.css';
	import Navbar from '$lib/components/nav/navBar.svelte';
</script>

<div class="background">
	<div class="background-top-wrap">
		<div class="left-line"></div>
		<div class="middle-line"></div>
		<div class="right-line"></div>
	</div>
	<Navbar />
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
	.background-top-wrap {
		display: grid;
		grid-template-columns: 6fr 15px 3fr;
		width: 100%;
		height: 15px;
		position: absolute;
		top: 100px;
		padding: 0px 30px;
	}

	.background-top-wrap .left-line {
		width: 100%;
		height: 15px;
		border-top: 1px solid #00fff2;
		border-radius: 1px;
		opacity: 0.6;
	}

	.background-top-wrap .middle-line {
		width: 100%;
		height: 21.5px;
		position: relative;
	}

	.background-top-wrap .middle-line::before {
		content: '';
		position: absolute;
		top: 1px;
		left: -1px;
		width: 100%;
		height: 100%;
		border-left: 1.5px solid transparent;
		border-left: 1.5px solid #00fff2;
		transform: rotate(-47deg);
		transform-origin: top left;
		border-radius: 1px;
		opacity: 0.6;
	}

	.background-top-wrap .right-line {
		width: 100%;
		height: 15px;
		border-bottom: 1px solid #00fff2;
		border-radius: 1px;
		opacity: 0.6;
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

	.footer {
		width: 100%;
		height: 50px;
		background-color: #00fff2;
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
		.background-top-wrap {
			height: 15px;
			top: 80px;
			padding: 0px 15px;
		}
	}

	@media (max-width: 480px) {
		/* 모바일 대응 */
	}
</style>
