<script lang="ts">
	import { coreState } from '$lib/states/core.svelte';
</script>

<div class="core-style-background box-md">
	<div class="box-content">
		<div class="box-content-top">
			<div class="text-lg">selected 100 NFT</div>
		</div>
		<div class="box-content-middle">
			<div class="text-md">
				If you hand over the NFT of your choice to us, you will receive 100 Tier S.
			</div>
			<div class="text-md">else If you keep the NFT of your choice, you get 100 semi Tier S.</div>
			<div class="text-md">The semi tier has an efficiency of 1/30 that of the regular tier.</div>
			<div class="text-md">
				Archived NFTs can be retrieved again by returning the semi tier in the future.
			</div>
		</div>
		<div class="box-content-bottom">
			<div class="text-md">100 Tier S: 10000 core point /hr</div>
			<div class="text-md">100 semi Tier S: 333 core point /hr</div>
		</div>
	</div>
	<div class="box-footer">
		<button
			class="background-light core-button emphasis-button"
			onclick={() => {
				coreState.value = 'HANDOVER';
			}}
		>
			<div class="text-sm">Hand Over</div>
		</button>
		<button class="background-light core-button">
			<div class="text-sm">Keep</div>
		</button>
	</div>
</div>

<style>
	.box-md {
		gap: 3rem;
	}
	.box-content {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		width: 100%;
		height: 100%;
		overflow: scroll;
		gap: 2rem;
	}

	.box-content-top {
		display: flex;
		flex-direction: column;
	}

	.box-content-middle {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}

	.box-content-bottom {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		width: 100%;
	}

	.box-footer {
		display: flex;
		gap: 1rem;
		width: 100%;
	}

	.core-button {
		width: 100%;
	}

	@media (max-width: 1280px) {
		/* FHD 대응 */
	}

	@media (max-width: 1024px) {
		/* 태블릿 대응 */
	}

	@media (max-width: 768px) {
		/* 모바일 대응 */
		.box-md {
			gap: 2rem;
		}
	}

	@media (max-width: 480px) {
		/* 모바일 대응 */
		.box-md {
			gap: 3rem;
		}
		.box-content-bottom {
			display: flex;
			flex-direction: column;
			gap: 0.5rem;
			width: 100%;
		}
	}
</style>
