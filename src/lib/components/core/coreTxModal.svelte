<script lang="ts">
	import TxBox from '$lib/assets/ui/box_tx.png';
	import XMark from '../icons/XMark.svelte';
</script>

<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_static_element_interactions -->
<div class="modal-wrap">
	<div class="modal-box">
		<img src={TxBox} alt="img" />
		<div class="modal-content-wrap">
			<div class="modal-content-top">
				<div class="space"></div>
				<div class="modal-title text-sm">Handover asssets</div>
				<button class="icon-button" on:click>
					<XMark />
				</button>
			</div>
			<div class="modal-content-middle">
				<div class="action-box background-dark">
					<div class="action-title">Send</div>
					<div class="action-content text-md">
						<div class="asset-symbol"></div>
						<div class="asset-amount">1000 Nectar</div>
					</div>
				</div>
				<div class="action-box background-dark">
					<div class="action-title">Receive</div>
					<div class="action-content text-md">
						<div class="asset-symbol"></div>
						<div class="asset-amount">100 Tier A</div>
					</div>
				</div>
				<hr />
				<div class="tx-info-box">
					<div class="tx-info-item">
						<div class="tx-info-title">Network</div>
						<div class="tx-info-content">Arbitrum</div>
					</div>
					<div class="tx-info-item">
						<div class="tx-info-title">Network Fee</div>
						<div class="tx-info-content">0.001 eth</div>
					</div>
					<div class="tx-info-item">
						<div class="tx-info-title">Gas Price</div>
						<div class="tx-info-content">4 gwei</div>
					</div>
				</div>
			</div>
			<div class="modal-content-bottom">
				<button class="background-light core-button">
					<div class="text-sm">Approve</div>
				</button>
			</div>
		</div>
	</div>
</div>

<style>
	img {
		width: 400px;
		height: 500px;
		min-height: 500px;
		position: relative;
	}

	.modal-content-wrap {
		position: absolute;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-between;
		width: 100%;
		height: 100%;
		padding: 22px 0px 22px 22px;
		gap: 1rem;
	}

	.modal-content-top {
		display: grid;
		grid-template-columns: 30px 1fr 30px;
		width: 100%;
		padding: 0px 26px;
	}

	.modal-title {
		display: flex;
		justify-content: center;
		align-items: center;
	}
	
	.modal-content-middle {
		width: 100%;
		padding: 0px 26px;
		height: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1rem;
	}

	.modal-content-bottom {
		width: 70%;
	}

	.action-box {
		display: flex;
		flex-direction: column;
		width: 100%;
		height: 80px;
		border-radius: 10px;
		padding: 0.5rem;
	}

	.action-title {
		font-size: 0.8rem;
		font-weight: 500;
	}

	.action-content {
		display: flex;
		align-items: center;
		justify-content: flex-start;
		gap: 0.5rem;
		height: 100%;
	}

	.tx-info-box {
		display: flex;
		flex-direction: column;
		width: 100%;
		height: fit-content;
		border: 1px solid var(--light);
		border-radius: 10px;
		padding: 1rem;
		gap: 0.6rem;
	}

	.tx-info-item {
		display: flex;
		width: 100%;
		justify-content: space-between;
		align-items: center;
	}

	.tx-info-title {
		font-size: 0.8rem;
	}

	.tx-info-content {
		font-size: 0.9rem;
	}

	.modal-box {
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;
		width: 400px;
		min-height: 500px;
		margin: 0px 10px;
		backdrop-filter: blur(40px);
		clip-path: polygon(
			23% 0,
			100% 0,
			100% 91%,
			83% 100%,
			6% 100%,
			6% 52%,
			0 52%,
			0 21%,
			6% 21%,
			6% 9%
		);
	}

	.asset-symbol {
		width: 25px;
		height: 25px;
		background-color: aliceblue;
		border-radius: 1000px;
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
	}

	@media (max-width: 480px) {
		/* 모바일 대응 */
	}
</style>
