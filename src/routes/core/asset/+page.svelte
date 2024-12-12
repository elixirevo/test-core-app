<script lang="ts">
	import WalletSummary from '$lib/components/core/walletSummary.svelte';
	import AssetList from '$lib/components/core/assetList.svelte';

	const walletAssetList = [
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
	<WalletSummary />
	<AssetList {walletAssetList} />
</div>
