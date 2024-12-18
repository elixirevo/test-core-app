<script lang="ts">
	import WalletSummary from '$lib/components/core/walletSummary.svelte';
	import AssetList from '$lib/components/core/assetList.svelte';

	const walletAssetList = [
		{
			id: 1,
			tier: 'Tier S',
			title: 'Clones Never Die'
		},
		{
			id: 2,
			tier: 'Tier A',
			title: 'Clones Never Die'
		},
		{
			id: 3,
			tier: 'Tier B',
			title: 'Clones Never Die'
		},
		{
			id: 4,
			tier: 'Tier C',
			title: 'Clones Never Die'
		},
		{
			id: 5,
			tier: 'Tier D',
			title: 'Clones Never Die'
		}
	];
</script>

<div class="content-wrap">
	<WalletSummary />
	<AssetList {walletAssetList} />
</div>
