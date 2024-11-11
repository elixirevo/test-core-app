<script lang="ts">
	import '$lib/styles/reset.css';
	import '$lib/styles/global.css';
	import '$lib/styles/fonts.css';
	import '$lib/styles/button.css';
	import '$lib/styles/box.css';
	import Nav from '$lib/components/nav/index.svelte';
</script>

<div class="background">
	<Nav />
	<slot />
</div>

<style>
	.background {
		background-image: url('$lib/images/background/main.png');
		background-size: cover;
		background-position: center;
		height: 100vh;
		overflow: scroll;
	}
</style>
