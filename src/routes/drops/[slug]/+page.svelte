<script lang="ts">
	import ProjectMain from '$lib/components/drops/projectMain.svelte';
</script>

<div class="content-wrap">
	<div class="top-space">
		<ProjectMain />
	</div>
	<div class="bottom-space">
		<!--  -->
	</div>
</div>

<style>
	/*  */
	.content-wrap {
		flex-direction: column;
		justify-content: flex-start;
		align-items: flex-start;
	}

	.top-space {
		width: 100%;
	}
</style>
