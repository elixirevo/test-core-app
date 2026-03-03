<script>
	import testLogo from '$lib/assets/logo/logo.png';
	import { FRONT_PATH } from '$lib/constants/frontPath';
</script>

<div class="core-style-background box-lg">
	<div class="box-title">Drops Claim History</div>
	<div class="box-content">
		{#each [1, 2, 3, 4, 5, 6, 7, 8, 9] as item}
			<div class="claim-item">
				<div class="sector">
					<div class="logo">
						<img src={testLogo} alt="logo" />
					</div>
					<div class="tick">Arbitrum</div>
				</div>
				<div class="sector">
					<div class="logo">
						<img src={testLogo} alt="logo" />
					</div>
					<div class="tick">Nectar</div>
				</div>
				<div class="sector">
					<div class="balance">1,000,000.222333</div>
				</div>
				<div class="sector align-end">
					<button class="claim-button">claim</button>
				</div>
			</div>
		{/each}
	</div>
	<div class="box-content-bottom">
		<a class="text-link" href={FRONT_PATH.ROOT}>go to claim history</a>
	</div>
</div>

<style>
	/*  */
	.box-lg {
		gap: 1rem;
	}

	.box-title {
		width: 100%;
		text-align: end;
		font-size: 2rem;
		font-weight: 500;
	}

	.box-content {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1rem;
		width: 100%;
		height: 552px;
		overflow: scroll;
	}

	.box-content-bottom {
		display: flex;
		justify-content: flex-end;
		width: 900px;
	}

	.align-end {
		display: flex;
		justify-content: flex-end;
	}

	.claim-item {
		display: grid;
		grid-template-columns: 1fr 1fr 2fr 1fr;
		width: 900px;
		height: auto;
		padding: 0.8rem;
		gap: 1rem;
		background-color: var(--light);
		border-radius: 0.5rem;
	}

	.sector {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		font-size: 1.2rem;
	}

	.logo {
		display: flex;
		justify-content: center;
		width: 1.5rem;
		height: 1.5rem;
		background-color: red;
		border-radius: 20px;
		padding: 5px;
	}

	.claim-button {
		background-color: var(--dark);
		width: 4rem;
		text-align: center;
		padding: 0.2rem 0rem;
		border-radius: 4px;
		font-size: 1rem;
	}
</style>
