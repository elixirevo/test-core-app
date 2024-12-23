<script lang="ts">
	//
</script>

<div class="core-style-background box-md">
	<div class="box-content">
		<div class="box-content-top">
			<div class="text-md">Found 5 Assets</div>
			<div class="text-md">that received tiers in this wallet</div>
		</div>
		<div class="box-content-middle">
			<div class="text-sm">You have</div>
			<div class="text-lg">12 Tier A</div>
			<div class="text-lg">113 Tier B</div>
			<div class="text-lg">8 Tier E</div>
			<div class="text-sm">NFT & FT Asset</div>
		</div>
		<div class="box-content-bottom">
			<div class="text-md">Choose your NFT & FT and trade for Tier NFT</div>
		</div>
	</div>
</div>

<style>
	.box-content {
		display: flex;
		flex-direction: column;
		justify-content: center;
		gap: 3rem;
		width: 100%;
		height: 100%;
		overflow: scroll;
	}

	.box-content-middle {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.box-content-bottom {
		display: flex;
		flex-direction: column;
		gap: 1rem;
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
			width: 100%;
			min-height: 500px;
			box-sizing: border-box;
		}

		.box-content {
			display: flex;
			flex-direction: column;
			gap: 3rem;
			width: 100%;
			height: 100%;
			overflow: scroll;
		}
	}

	@media (max-width: 480px) {
		/* 모바일 대응 */
	}
</style>
