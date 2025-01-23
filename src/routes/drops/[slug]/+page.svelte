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
		<div class="bottom-left">
			<ProjectInfo />
		</div>
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

	.bottom-left {
		display: flex;
		justify-content: flex-start;
		align-items: flex-start;
	}

	.bottom-right {
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: flex-start;
		gap: 2rem;
	}

	@media (max-width: 1280px) {
		/* FHD 대응 */
		.bottom-left {
			width: 50%;
		}

		.bottom-right {
			width: 50%;
		}
	}

	@media (max-width: 1024px) {
		/* 태블릿 대응 */
		.bottom-left {
			width: 50%;
		}

		.bottom-right {
			width: 50%;
		}
	}

	@media (max-width: 768px) {
		/* 모바일 대응 */
		.bottom-space {
			display: flex;
			flex-direction: column;
			justify-content: center;
			width: 100%;
			gap: 2rem;
		}

		.bottom-left {
			width: 100%;
		}

		.bottom-right {
			display: flex;
			flex-direction: column;
			justify-content: flex-start;
			align-items: flex-start;
			gap: 2rem;
			width: 100%;
		}
	}

	@media (max-width: 480px) {
		/* 모바일 대응 */
	}
</style>
