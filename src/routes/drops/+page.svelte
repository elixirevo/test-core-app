<script lang="ts">
	import Banner from '$lib/components/drops/banner.svelte';
	import ProjectList from '$lib/components/drops/projectList.svelte';
</script>

<div class="content-wrap">
	<Banner />
	<ProjectList />
</div>

<style>
	.content-wrap {
		flex-direction: column;
		justify-content: flex-start;
		align-items: flex-start;
	}
</style>
