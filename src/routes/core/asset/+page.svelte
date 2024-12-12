<script lang="ts">
	import sampleCollectionImage from '$lib/assets/collection/sample.jpg';

	const sampleCollections = [
		{
			tier: 'Tier S',
			title: 'Clones Never Die'
		},
		{
			tier: 'Tier A',
			title: 'Clones Never Die'
		},
		{
			tier: 'Tier B',
			title: 'Clones Never Die'
		},
		{
			tier: 'Tier C',
			title: 'Clones Never Die'
		},
		{
			tier: 'Tier D',
			title: 'Clones Never Die'
		}
	];
</script>

<div class="content-wrap">
	<div class="core-style-background box-md">
		<div class="box-content">
			<div class="box-content-top">
				<div class="text-md">Found 5 Assets</div>
				<div class="text-md">that received tiers in this wallet</div>
			</div>
			<div class="box-content-middle">
				<div class="text-sm">You have</div>
				<div class="text-lg">12 Tier A</div>
				<div class="text-lg">113 Tier B</div>
				<div class="text-lg">8 Tier E</div>
				<div class="text-sm">NFT & FT Asset</div>
			</div>
			<div class="box-content-bottom">
				<div class="text-md">Choose your NFT & FT and trade for Tier NFT</div>
			</div>
		</div>
	</div>
	<div class="core-style-background box-md">
		<div class="box-title">
			<div class="text-md">Select your NFT & FT Asset</div>
		</div>
		<div class="box-content">
			<div class="box-content-bottom">
				{#each sampleCollections as item}
					<button
						class="asset-box"
						type="button"
						on:click={() => {
							alert('hello');
						}}
					>
						<div class="asset-tier text-sm">{item.tier}</div>
						<div class="asset-title text-md">{item.title}</div>
					</button>
				{/each}
			</div>
		</div>
	</div>
	<!-- <div class="vision-style-background vision-box md-box">
		<h1>Welcome to SvelteKit</h1>
		asdad
		<h4>asdassd</h4>
	</div> -->
</div>

<style>
	.box-title {
		width: 100%;
		display: flex;
		justify-content: center;
	}

	.box-content {
		display: flex;
		flex-direction: column;
		gap: 4rem;
		width: 100%;
		height: 75%;
		overflow: scroll;
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

	.asset-box {
		position: relative;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		width: 100%;
		height: 90px;
		background: linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
			url('/src/lib/assets/collection/sample.jpg');
		background-position: center;
		background-size: cover;
		background-repeat: no-repeat;
		cursor: pointer;
		&:before {
			content: '';
			position: absolute;
			width: 10%;
			height: 100%;
			background-image: linear-gradient(90deg, rgb(0, 0, 0, 0.5) 0%, transparent 100%);
		}
		&:after {
			content: '';
			position: absolute;
			right: 0;
			width: 10%;
			height: 100%;
			background-image: linear-gradient(90deg, transparent 0%, rgb(0, 0, 0, 0.5) 100%);
		}
	}

	.asset-tier {
		width: 100%;
		display: flex;
		justify-content: flex-end;
		padding: 10px 50px;
	}

	.asset-title {
		width: 100%;
		display: flex;
		justify-content: flex-start;
		padding: 10px 50px;
	}

	@media (max-width: 1280px) {
		/* FHD 대응 */
	}

	@media (max-width: 1024px) {
		/* 태블릿 대응 */
	}

	@media (max-width: 768px) {
		/* 모바일 대응 */
		.box-md {
			width: 100%;
			min-height: 500px;
			box-sizing: border-box;
		}

		.box-content {
			display: flex;
			flex-direction: column;
			gap: 3rem;
			width: 100%;
			height: 80%;
			overflow: scroll;
		}
	}

	@media (max-width: 480px) {
		/* 모바일 대응 */
	}
</style>
