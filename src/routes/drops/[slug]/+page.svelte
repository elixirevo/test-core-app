<script lang="ts">
	import ProjectInfo from '$lib/components/drops/projectInfo.svelte';
	import ProjectMain from '$lib/components/drops/projectMain.svelte';
	import ProjectSupportForm from '$lib/components/drops/projectSupportForm.svelte';
	import ProjectSupportInfo from '$lib/components/drops/projectSupportInfo.svelte';
</script>

<div class="content-wrap">
	<div class="top-space">
		<ProjectMain />
	</div>
	<div class="bottom-space">
		<ProjectInfo />
		<div class="bottom-right">
			<ProjectSupportInfo />
			<ProjectSupportForm />
		</div>
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

	.bottom-space {
		display: flex;
		justify-content: center;
		width: 100%;
		gap: 2rem;
	}

	.bottom-right {
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: flex-start;
		gap: 2rem;
	}
</style>
