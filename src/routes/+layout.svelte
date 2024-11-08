<script lang="ts">
	import '$lib/styles/reset.css';
	import '$lib/styles/global.css';
	import '$lib/styles/fonts.css';
	import Nav from '$lib/components/nav/index.svelte';
</script>

<div class="background">
	<Nav />
	<slot></slot>
</div>

<style>
	.background {
		background-image: url('$lib/images/background/test-main.png');
		background-size: cover;
		background-position: center;
		height: 100vh;
		overflow: scroll;
	}
</style>
