<script lang="ts">
</script>

<div class="core-style-background box-md">
	<div class="box-content">
		<div class="box-content-top">
			<div class="token-info">
				<div class="token-name">
					<div class="token-symbol"></div>
					<div class="token-tick text-sm">NECTAR</div>
				</div>
				<div class="balance text-sm">100000.1111 NTR</div>
			</div>
			<div class="tier-info">
				<div class="token-name">
					<div class="token-symbol"></div>
					<div class="token-tick text-sm">TIER A</div>
				</div>
				<div class="balance text-sm">1000 NECTAR</div>
			</div>
		</div>
		<div class="box-content-middle">
			<div class="input-box background-dark">
				<div class="input-box-top">
					<div class="input-title text-lg">Tier A</div>
					<input class="input-text" type="text" placeholder="Max 100" />
				</div>
				<div class="input-box-bottom">
					<button class="input-box-button">RESET</button>
					<button class="input-box-button">MAX</button>
				</div>
			</div>
			<div class="input-alert-wrap">
				<div class="alert-text">- your token balance is less</div>
			</div>
		</div>
		<div class="box-content-bottom">
			<div class="bottom-title text-md">Summary</div>
			<div class="bottom-content">
				<div class="text-sm">- Send 1010000 NECTAR Token</div>
				<div class="text-sm">- You can receive 100 Tier A or 100 Semi Tier A</div>
			</div>
		</div>
	</div>
</div>

<style>
	.box-content {
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		gap: 3rem;
		width: 100%;
		height: 100%;
		overflow: scroll;
		padding: 10px;
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
		gap: 1rem;
	}

	.bottom-content {
		width: 100%;
	}

	.token-info {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 1rem;
		align-items: center;
	}

	.token-name {
		display: flex;
		align-items: center;
		gap: 0.5rem;
	}

	.token-symbol {
		width: 30px;
		height: 30px;
		background-color: aliceblue;
		border-radius: 1000px;
	}

	.balance {
		text-align: end;
	}

	.tier-info {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 1rem;
		align-items: center;
	}

	.input-box {
		display: flex;
		flex-direction: column;
		height: 130px;
		align-items: center;
		justify-content: center;
		padding: 0px 3rem;
		border-radius: 10px;
	}

	.input-box-top {
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: 100%;
		height: 60px;
		border-radius: 10px;
	}

	.input-box-bottom {
		display: flex;
		gap: 1.5rem;
		width: 100%;
		justify-content: flex-end;
	}

	.input-text {
		width: 50%;
		border: none;
		background-color: transparent;
		color: white;
		font-size: 1.5rem;
		text-align: right;
		font-weight: 500;
	}

	.input-box-button {
		color: var(--gray);
		font-size: 0.9rem;
	}

	.input-alert-wrap {
		display: flex;
		height: 1rem;
	}

	.alert-text {
		color: var(--error-alert);
		width: 100%;
		text-align: right;
	}

	@media (max-width: 1280px) {
		/* FHD 대응 */
	}

	@media (max-width: 1024px) {
		/* 태블릿 대응 */
	}

	@media (max-width: 768px) {
		/* 모바일 대응 */
		.box-content {
			gap: 2rem;
			overflow: scroll;
			padding: 0px;
		}

		.input-box-button {
			color: var(--gray);
			font-size: 0.8rem;
		}

		.alert-text {
			font-size: 0.9rem;
		}
	}

	@media (max-width: 480px) {
		/* 모바일 대응 */
		.box-content {
			gap: 2rem;
			overflow: scroll;
			padding: 0px;
		}

		.input-box {
			display: flex;
			flex-direction: column;
			height: 130px;
			align-items: center;
			justify-content: center;
			padding: 0px 2rem;
			border-radius: 10px;
		}

		.alert-text {
			font-size: 0.8rem;
		}
	}
</style>
