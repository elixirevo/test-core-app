<script lang="ts">
	import testImage from '$lib/assets/background/claim.png';
	import XLogo from '../icons/XLogo.svelte';
</script>

<div class="wrap">
	<div class="banner-box">
		<img src={testImage} alt="" class="banner-image" />
		<div class="banner-content">
			<div class="project-link">
				<button class="project-link-button">
					<XLogo />
				</button>
				<button class="project-link-button">
					<XLogo />
				</button>
				<button class="project-link-button">
					<XLogo />
				</button>
			</div>
		</div>
	</div>
</div>

<style>
	/*  */
	.wrap {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
	}

	.banner-box {
		display: flex;
		justify-content: flex-end;
		align-items: flex-end;
		width: 1200px;
		height: 350px;
	}

	.banner-image {
		position: relative;
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.banner-content {
		position: absolute;
		display: flex;
		gap: 1rem;
		padding: 1rem;
	}

	.project-link {
		width: 100%;
		display: flex;
		gap: 1rem;
	}

	.project-link-button {
		width: 40px;
		height: 40px;
		padding: 0.5rem;
		border-radius: 30px;
		color: var(--white);
		background-color: var(--dark);
		font-size: 1rem;
		font-weight: 500;
		cursor: pointer;
	}
</style>
