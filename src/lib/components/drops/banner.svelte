<script lang="ts">
	import { register } from 'swiper/element/bundle';
	import testImage from '$lib/assets/background/claim.png';
	register();
</script>

<div class="banner-wrap">
	<swiper-container pagination="true" speed="1000" autoplay="true">
		<swiper-slide>
			<div class="banner-box">
				<img src={testImage} loading="lazy" alt="img" />
			</div>
		</swiper-slide>
		<swiper-slide>
			<div class="banner-box">
				<img src={testImage} loading="lazy" alt="img" />
			</div>
		</swiper-slide>
		<swiper-slide>
			<div class="banner-box">
				<h1>Slide 3</h1>
			</div>
		</swiper-slide>
		<swiper-slide>
			<div class="banner-box">
				<h1>Slide 4</h1>
			</div>
		</swiper-slide>
	</swiper-container>
</div>

<style>
	.banner-wrap {
		width: 100%;
		height: 250px;
		max-height: 250px;
		overflow: hidden;
	}

	swiper-container {
		display: flex;
		width: 100%;
	}

	swiper-slide {
		min-width: 100%;
	}

	.banner-box {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		height: 250px;
		background-color: var(--gray);
	}

	swiper-container::part(bullet) {
		background-color: var(--primary-color);
	}

	swiper-container::part(bullet-active) {
		background-color: var(--primary-color);
	}
</style>
