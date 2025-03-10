<script lang="ts">
	const claimInfo = {
		isCalim: false,
		network: 'arbitrum',
		tokenContractAddress: '0x1234567890',
		claimReason:
			'Core token drops season #1 Core token drops season #1 Core token drops season #1 Core token drops season #1',
		allocationPeriod: '2021-01-01 ~ 2021-12-31',
		dropsTitle: 'Core token drops season #1'
	};
</script>

<div class="core-style-background box-md">
	<div class="box-content">
		<div class="box-content-top">
			<div class="token-info background-light">
				<div class="token-symbol"></div>
				<div class="token-balance">100,000.1111 NTR</div>
			</div>
		</div>
		<div class="box-content-middle">
			<div class="claim-info">
				<div class="text-wrap">
					<div class="text-sm">Drops title</div>
					<div class="text-sm">{claimInfo.dropsTitle}</div>
				</div>
				<div class="text-wrap">
					<div class="text-sm">Period</div>
					<div class="text-sm">{claimInfo.allocationPeriod}</div>
				</div>
				<div class="text-wrap">
					<div class="text-sm">Network</div>
					<div class="text-sm">{claimInfo.network}</div>
				</div>
				<div class="text-wrap">
					<div class="text-sm">Token Contract</div>
					<div class="text-sm">{claimInfo.tokenContractAddress}</div>
				</div>
				<div class="text-wrap flex-column">
					<div class="text-sm">Reason</div>
					<div class="text-xs">{claimInfo.claimReason}</div>
				</div>
			</div>
		</div>
		<div class="box-content-bottom">
			<button class="core-button emphasis-button"> Claim </button>
		</div>
	</div>
</div>

<style>
	/*  */
	.box-md {
		height: auto;
	}

	.box-content {
		display: flex;
		flex-direction: column;
		gap: 4rem;
		width: 100%;
		height: 100%;
		overflow: scroll;
	}

	.box-content-top {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.box-content-middle {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.box-content-bottom {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1rem;
	}

	.token-info {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 1rem;
		height: 150px;
	}

	.token-symbol {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 50px;
		height: 50px;
		background-color: var(--light);
		border-radius: 50%;
	}

	.token-balance {
		font-size: 1.2rem;
		font-weight: 500;
	}

	.claim-info {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}

	.text-wrap {
		display: flex;
		justify-content: space-between;
		gap: 0.5rem;
	}

	.flex-column {
		display: flex;
		flex-direction: column;
	}

	.core-button {
		width: 50%;
	}

	@media (max-width: 1280px) {
		/* FHD 대응 */
	}

	@media (max-width: 1024px) {
		/* 태블릿 대응 */
	}

	@media (max-width: 768px) {
		/* 모바일 대응 */
	}

	@media (max-width: 480px) {
		/* 모바일 대응 */
	}
</style>
