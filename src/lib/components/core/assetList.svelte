<script>
	import { goto } from '$app/navigation';
	import { FRONT_PATH } from '$lib/constants/frontPath';

	const { walletAssetList } = $props();
</script>

<div class="core-style-background box-md">
	<div class="box-title">
		<div class="text-md">Select your NFT & FT Asset</div>
	</div>
	<div class="box-content">
		<div class="box-content-bottom">
			{#each walletAssetList as item}
					<button
						class="asset-box"
						type="button"
						onclick={() => {
							goto(`${FRONT_PATH.CORE_ASSET}/${item.id}`);
						}}
					>
					<div class="asset-tier text-sm">{item.tier}</div>
					<div class="asset-title text-md">{item.title}</div>
				</button>
			{/each}
		</div>
	</div>
</div>

<style>
	.box-title {
		width: 100%;
		display: flex;
		justify-content: center;
	}

	.box-content {
		display: flex;
		flex-direction: column;
		gap: 3rem;
		width: 100%;
		height: 100%;
		overflow: scroll;
	}

	.box-content-bottom {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

		.asset-box {
			position: relative;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			width: 100%;
			height: 90px;
			background: linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
				url('$lib/assets/collection/sample.jpg');
		background-position: center;
		background-size: cover;
		background-repeat: no-repeat;
		cursor: pointer;
		&:before {
			content: '';
			position: absolute;
			width: 10%;
			height: 100%;
			background-image: linear-gradient(90deg, rgb(0, 0, 0, 0.5) 0%, transparent 100%);
		}
		&:after {
			content: '';
			position: absolute;
			right: 0;
			width: 10%;
			height: 100%;
			background-image: linear-gradient(90deg, transparent 0%, rgb(0, 0, 0, 0.5) 100%);
		}
	}

	.asset-tier {
		width: 100%;
		display: flex;
		justify-content: flex-end;
		padding: 10px 50px;
	}

	.asset-title {
		width: 100%;
		display: flex;
		justify-content: flex-start;
		padding: 10px 50px;
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
		.asset-tier {
			padding: 10px 26px;
		}

		.asset-title {
			padding: 10px 26px;
		}
	}
</style>
