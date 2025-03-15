<script lang="ts">
</script>

<div class="core-style-background box-md">
	<div class="box-content">
		<div class="sector">
			<div class="select-box background-dark">
				<div class="select-box-top">Network</div>
				<div class="select-box-bottom">Arbitrum</div>
			</div>
		</div>
		<div class="sector">
			<div class="input-box background-dark">
				<div class="input-box-top">
					<div class="input-title text-lg">cStable</div>
					<input class="input-text" type="text" placeholder="Max 100" />
				</div>
				<div class="input-box-bottom">
					<button class="input-box-button">RESET</button>
					<button class="input-box-button">MAX</button>
				</div>
			</div>
		</div>
		<div class="sector">
			<div class="button-box background-dark">
				<div class="button-box-top">Lockup period</div>
				<div class="button-box-bottom">
					<button class="button-box-button emphasis-button">30D</button>
					<button class="button-box-button background-light">60D</button>
					<button class="button-box-button background-light">90D</button>
					<button class="button-box-button background-light">180D</button>
					<button class="button-box-button background-light">270D</button>
					<button class="button-box-button background-light">1Y</button>
					<button class="button-box-button background-light">2Y</button>
					<button class="button-box-button background-light">3Y</button>
					<button class="button-box-button background-light">4Y</button>
				</div>
			</div>
		</div>
		<div class="sector">
			<div class="sub-box background-dark">
				<div class="sub-box-title">Lockup info</div>
				<div class="sub-box-content">
					<div class="sub-box-item">amount</div>
					<div class="sub-box-element">100,000 cSTABLE</div>
				</div>
				<div class="sub-box-content">
					<div class="sub-box-item">duration</div>
					<div class="sub-box-element">1 year</div>
				</div>
				<div class="sub-box-content">
					<div class="sub-box-item">end date</div>
					<div class="sub-box-element">2025.10.02</div>
				</div>
				<div class="sub-box-content">
					<div class="sub-box-item">immediately receive gear point</div>
					<div class="sub-box-element">100,000 GP</div>
				</div>
				<div class="sub-box-content">
					<div class="sub-box-item">total receive gear point</div>
					<div class="sub-box-element">100,000,000 GP</div>
				</div>
			</div>
		</div>

		<div class="sector">
			<button class="core-button emphasis-button">Wrap</button>
		</div>
	</div>
</div>

<style>
	/*  */
	.box-content {
		display: flex;
		flex-direction: column;
		gap: 1.1rem;
		width: 100%;
		height: 100%;
		overflow: scroll;
	}

	.sector {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 100%;
		gap: 0.5rem;
	}

	.select-box {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		width: 100%;
		padding: 0.5rem 1rem;
		border-radius: 8px;
		background-color: var(--dark);
	}

	.select-box-top {
		display: flex;
		align-items: flex-start;
		font-size: 0.7rem;
	}

	.select-box-bottom {
		display: flex;
		justify-content: flex-end;
		align-items: center;
		width: 100%;
		font-size: 1rem;
		font-weight: 500;
		margin-bottom: 0.7rem;
	}

	.input-box {
		display: flex;
		flex-direction: column;
		width: 100%;
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

	.button-box {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		gap: 0.5rem;
		width: 100%;
		padding: 0.5rem 1rem;
		border-radius: 8px;
		background-color: var(--dark);
	}

	.button-box-top {
		display: flex;
		align-items: flex-start;
		font-size: 0.7rem;
	}

	.button-box-bottom {
		display: flex;
		flex-wrap: wrap;
		justify-content: flex-start;
		align-items: center;
		gap: 0.5rem;
		width: 100%;
		font-size: 1rem;
		font-weight: 500;
		margin-bottom: 0.7rem;
	}

	.button-box-button {
		width: 2.5rem;
		text-align: center;
		padding: 0.2rem 0rem;
		border-radius: 1rem;
		font-size: 0.8rem;
	}

	.sub-box {
		display: flex;
		flex-direction: column;
		width: 100%;
		padding: 1rem 2rem;
		border-radius: 8px;
		gap: 0.5rem;
	}

	.sub-box-title {
		font-size: 1rem;
		font-weight: 500;
	}

	.sub-box-content {
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-size: 0.9rem;
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
