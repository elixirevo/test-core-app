<script lang="ts">
</script>

<div class="core-style-background box-md">
	<div class="box-content">
		<div class="box-content-top">
			<div class="input-box background-dark">
				<div class="input-box-top">
					<div class="input-title text-lg">Tier S</div>
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
			<div class="input-box-sm background-dark">
				<div class="input-box-top">
					<div class="input-title text-lg">Referral Code</div>
					<input class="input-text" type="text" placeholder="Max 100" />
				</div>
			</div>
		</div>
		<hr />
		<div class="box-content-middle">
			<div class="item-wrap">
				<div class="item text-sm">network</div>
				<div class="element text-sm">arbitrum</div>
			</div>
			<div class="item-wrap">
				<div class="item text-sm">total price</div>
				<div class="element text-sm">100,000 cSTABLE</div>
			</div>
			<div class="item-wrap">
				<div class="item text-sm">Tier S amount</div>
				<div class="element text-sm">100</div>
			</div>
		</div>
	</div>
	<div class="box-footer">
		<button class="background-light core-button emphasis-button" onclick={() => {}}>
			<div class="text-sm">Buy</div>
		</button>
	</div>
</div>

<style>
	/*  */
	.box-content {
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		gap: 2rem;
		width: 100%;
		height: 100%;
		overflow: scroll;
	}

	.box-footer {
		display: flex;
		justify-content: center;
		gap: 1rem;
		width: 100%;
	}

	.box-content-top {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.box-content-middle {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
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

	.input-box-sm {
		display: flex;
		flex-direction: column;
		height: 70px;
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
		color: var(--light);
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

	.item-wrap {
		display: flex;
		justify-content: space-between;
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
