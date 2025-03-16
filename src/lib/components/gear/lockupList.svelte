<script lang="ts">
</script>

<div class="core-style-background box-md">
	<div class="box-title">
		<div class="text-md">Lockup list</div>
	</div>
	<div class="box-content">
		{#each [1, 2, 3, 4, 5, 6] as item, index}
			<div class="sub-box {index % 2 === 1 ? `background-light` : `background-dark`}">
				<div class="sub-box-content">
					<div class="category">30D</div>
					<div class="date">24.10.22 ~ 24.11.22</div>
				</div>
				<div class="sub-box-content">
					<div class="chain">
						<div class="chain-logo"></div>
						<div class="chain-name">Ethereum</div>
					</div>
					<div class="balance">100 cSTABLE</div>
				</div>
				<div class="sub-box-content">
					<div class="tx-info-hash">tx info 0x1231313.....12312</div>
					<div class="category">D-30</div>
				</div>
			</div>
		{/each}
	</div>
</div>

<style>
	/*  */
	.box-md {
		padding: 1.5rem 2rem 4rem 2rem;
		gap: 1.5rem;
	}
	.box-title {
		width: 100%;
		display: flex;
		justify-content: flex-end;
	}
	.box-content {
		display: flex;
		flex-direction: column;
		gap: 1.1rem;
		width: 100%;
		height: 100%;
		overflow: scroll;
	}

	.sub-box {
		display: flex;
		flex-direction: column;
		height: 130px;
		padding: 1rem 2rem;
		border-radius: 8px;
		gap: 1rem;
	}
	.sub-box-content {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.category {
		background-color: var(--primary-color-opacity);
		width: auto;
		height: fit-content;
		text-align: center;
		padding: 4px 6px;
		font-size: 0.8rem;
		border-radius: 4px;
	}

	.date {
		font-size: 0.8rem;
	}

	.chain {
		display: flex;
		align-items: center;
		gap: 0.5rem;
	}

	.chain-logo {
		width: 20px;
		height: 20px;
		background-color: var(--light);
		border-radius: 50%;
	}

	.chain-name {
		font-size: 1rem;
	}

	.tx-info {
		font-size: 0.9rem;
	}

	.tx-info-hash {
		font-size: 0.9rem;
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
