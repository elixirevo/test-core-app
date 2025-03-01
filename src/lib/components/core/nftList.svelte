<script lang="ts">
	import { isOddOrEvne } from '$lib/util/num';

	const { userNftList } = $props();
</script>

<div class="core-style-background box-md">
	<div class="box-content">
		<div class="table-head background-dark">
			<div class="text-start">
				<input type="checkbox" />
			</div>
			<div class="text-start">10 / 100 보유 토큰</div>
			<div class="text-end">NFT ID</div>
		</div>
		<div class="table-body">
			{#each userNftList as item, index}
				<div class={isOddOrEvne(index) ? 'table-row background-light' : 'table-row'}>
					<div class="text-start">
						<input type="checkbox" />
					</div>
					<div class="text-start">
						<img class="nft-img" src="/src/lib/assets/collection/sample.jpg" alt="nft-img" />
						collection name #{item.id}
					</div>
					<div class="text-end">{item.id}</div>
				</div>
			{/each}
		</div>
	</div>
</div>

<style>
	.box-content {
		display: flex;
		flex-direction: column;
		width: 100%;
		height: 100%;
		overflow: scroll;
	}

	.table-head {
		display: grid;
		grid-template-columns: 30px 1fr 60px;
		height: 40px;
		min-height: 50px;
		align-items: center;
		justify-content: center;
		border-top: 1px solid var(--primary-color-opacity);
		border-bottom: 1px solid var(--primary-color-opacity);
		padding: 0px 4px;
	}

	input[type='checkbox'] {
		width: 14px;
		height: 14px;
	}

	.table-body {
		display: flex;
		flex-direction: column;
		overflow: scroll;
	}

	.table-row {
		display: grid;
		grid-template-columns: 30px 1fr 60px;
		height: 50px;
		min-height: 50px;
		align-items: center;
		padding: 0px 4px;
	}

	.nft-img {
		width: 40px;
	}

	.text-start {
		text-align: start;
	}

	.text-end {
		text-align: end;
	}

	@media (max-width: 768px) {
		/* 모바일 대응 */
		.box-md {
			width: 100%;
			min-height: 500px;
			box-sizing: border-box;
		}
	}
</style>
