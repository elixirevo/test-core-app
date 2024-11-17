<script lang="ts">
	import '$lib/styles/reset.css';
	import '$lib/styles/global.css';
	import '$lib/styles/fonts.css';
	import '$lib/styles/ui.css';
	import Navbar from '$lib/components/nav/navbar.svelte';
</script>

<div class="background">
	<Navbar />
	<slot />
</div>

<style>
	.background {
		background-image: url('$lib/images/background/claim.png');
		background-size: cover;
		background-position: center;
		height: 100vh;
		overflow: scroll;
	}
</style>
