<script lang="ts">
</script>

<div class="core-style-background box-md">
	<div class="box-content">
		<div class="box-content-top">
			<div class="toggle-box">
				<button class="toggle-button emphasis-button">wrap</button>
				<button class="toggle-button background-none">unwrap</button>
			</div>
		</div>
		<div class="box-content-middle">
			<div class="sector">
				<div class="sector-title">
					<div class="text-md">Network</div>
				</div>
				<div class="select-box">ethereum</div>
			</div>
			<div class="sector">
				<div class="sector-title">
					<div class="text-md">Asset</div>
				</div>
				<div class="input-box background-dark">
					<div class="input-box-top">
						<div class="input-title text-lg">Core Points</div>
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
			<div class="sector">
				<div class="text-box background-dark">
					<div class="text-box-top">Receive address</div>
					<div class="text-box-bottom">0x1231312312313131212313123121312</div>
				</div>
			</div>
			<div class="sector">
				<div class="text-box background-dark">
					<div class="text-box-top">You will receive cSTABLE</div>
					<div class="text-box-bottom">10000 cStable</div>
				</div>
			</div>
		</div>
		<div class="box-content-bottom">
			<button class="core-button emphasis-button">Wrap</button>
		</div>
	</div>
</div>

<style>
	/*  */
	.box-content {
		display: flex;
		flex-direction: column;
		gap: 2rem;
		width: 100%;
	}

	.box-content-top {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.box-content-middle {
		display: flex;
		flex-direction: column;
		gap: 1.2rem;
		width: 100%;
	}

	.box-content-bottom {
		display: flex;
		justify-content: center;
	}

	.sector {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}

	.toggle-box {
		display: flex;
		width: 150px;
		height: 40px;
		gap: 0.5rem;
		padding: 0.4rem;
		border-radius: 8px;
		background-color: var(--dark);
	}

	.toggle-button {
		width: 100%;
		border-radius: 6px;
		font-weight: 600;
	}

	.background-none {
		background: none;
	}

	.select-box {
		display: flex;
		align-items: center;
		width: 50%;
		height: 40px;
		padding: 0.5rem 1rem;
		border-radius: 8px;
		background-color: var(--dark);
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

	.text-box {
		display: flex;
		flex-direction: column;
		width: 100%;
		/* height: 3rem; */
		padding: 0.5rem 1rem;
		border-radius: 8px;
	}

	.text-box-top {
		display: flex;
		align-items: flex-start;
		font-size: 0.7rem;
	}

	.text-box-bottom {
		display: flex;
		justify-content: flex-end;
		align-items: center;
		font-size: 1rem;
		font-weight: 500;
		margin-bottom: 0.7rem;
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
