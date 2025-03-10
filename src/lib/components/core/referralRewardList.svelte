<script lang="ts">
</script>

<div class="core-style-background box-md">
	<div class="box-title">
		<div class="text-md">Reward claim list</div>
	</div>
	<div class="box-content">
		{#each [1, 2, 3, 4, 5, 6, 7] as item}
			<div class="list-item">
				<div class="sector">
					<div class="numbering text-sm">1</div>
				</div>
				<div class="sector">
					<div class="balance text-sm">100 cSTABLE</div>
				</div>
				<div class="sector align-end">
					<button class="claim-button">claim</button>
				</div>
			</div>
		{/each}
	</div>
</div>

<style>
	/*  */
	.box-md {
		height: 400px;
		padding: 1rem 2rem 3rem 2rem;
		margin-bottom: 1rem;
		gap: 1rem;
	}

	.box-title {
		width: 100%;
		display: flex;
		justify-content: flex-end;
	}

	.box-content {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		width: 100%;
		height: 100%;
		overflow: scroll;
	}

	.list-item {
		display: grid;
		grid-template-columns: 0.5fr 2fr 0.5fr;
		width: 100%;
		height: auto;
		padding: 0.6rem;
		gap: 1rem;
		background-color: var(--light);
		border-radius: 0.5rem;
	}

	.sector {
		display: flex;
		align-items: center;
	}

	.claim-button {
		background-color: var(--dark);
		width: 4rem;
		text-align: center;
		padding: 0.2rem 0rem;
		border-radius: 4px;
		font-size: 1rem;
	}

	.align-end {
		display: flex;
		justify-content: flex-end;
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
