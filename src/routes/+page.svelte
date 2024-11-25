<script lang="ts">
	import mainVideo from '$lib/assets/video/main_pc.mp4';
	import bannerImage from '$lib/assets/logo/banner.png';
</script>

<div class="content-wrap">
	<!-- svelte-ignore element_invalid_self_closing_tag -->
	<video id="video" loop muted autoplay playsinline src={mainVideo} />
	<img src={bannerImage} alt="banner" />
</div>

<style>
	video {
		width: 100vw;
		height: 100%;
		-o-object-fit: cover;
		object-fit: cover;
	}

	.content-wrap {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100dvh;
		padding: 0px;
		position: absolute;
		top: 0;
	}

	.content-wrap img {
		position: absolute;
	}
</style>
