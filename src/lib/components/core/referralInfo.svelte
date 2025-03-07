<script lang="ts">
</script>

<div class="core-style-background box-md">
	<div class="box-content">
		<div class="box-content-top">
			<div class="info-title">Referral code</div>
			<div class="referral-code">ABCDEF</div>
		</div>
		<div class="box-content-middle">
			<div class="sub-title">Number of uses</div>
			<div class="uses-number">8</div>
		</div>
		<div class="box-content-bottom">
			<div class="sub-title">Referral Apply Link</div>
			<div class="referral-link background-dark">
				<div class="link-text">https://www.core.com/invite/ABCDEF</div>
				<button class="copy-button">copy</button>
			</div>
		</div>
	</div>
</div>

<style>
	/*  */
	.box-md {
		height: 400px;
		min-height: 400px;
		padding: 3rem 2rem;
	}

	.box-content {
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		gap: 1rem;
		width: 100%;
		height: 100%;
		overflow: scroll;
	}

	.box-content-top {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 70%;
	}

	.box-content-middle {
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: flex-start;
		gap: 0.5rem;
		width: 100%;
	}

	.box-content-bottom {
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: flex-start;
		gap: 0.5rem;
		width: 100%;
	}

	.info-title {
		font-size: 0.7rem;
		font-weight: 500;
		color: var(--gray);
	}

	.sub-title {
		font-size: 0.85rem;
		font-weight: 500;
		text-align: start;
	}

	.uses-number {
		font-size: 1.3rem;
		font-weight: 700;
	}

	.referral-code {
		font-size: 2rem;
		font-weight: 700;
		text-align: center;
		letter-spacing: 0.5rem;
	}

	.referral-link {
		display: flex;
		height: 40px;
		justify-content: space-between;
		align-items: center;
		border-radius: 6px;
		padding: 0.5rem;
		gap: 0.5rem;
		width: 100%;
	}

	.link-text {
		font-size: 0.9rem;
		font-weight: 500;
		letter-spacing: 0.1rem;
		width: 90%;
		overflow: scroll;
	}

	.copy-button {
		display: flex;
		justify-content: center;
		align-items: center;
		min-width: 60px;
		height: 100%;
		background-color: var(--primary-color-opacity);
		border-radius: 4px;
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
