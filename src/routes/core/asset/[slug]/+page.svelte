<script lang="ts">
	import AssetSummary from '$lib/components/core/assetSummary.svelte';
	import CoreTxModal from '$lib/components/core/coreTxModal.svelte';
	import FtForm from '$lib/components/core/ftForm.svelte';
	import NftList from '$lib/components/core/nftList.svelte';
	import { coreState } from '$lib/states/core.svelte';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();

	let type = 'FT';

	const userNftList = [
		{
			id: 1,
			image: '/src/lib/assets/collection/sample.jpg',
			checked: false
		},
		{
			id: 2,
			image: '/src/lib/assets/collection/sample.jpg',
			checked: false
		},
		{
			id: 3,
			image: '/src/lib/assets/collection/sample.jpg',
			checked: false
		},
		{
			id: 4,
			image: '/src/lib/assets/collection/sample.jpg',
			checked: false
		},
		{
			id: 5,
			image: '/src/lib/assets/collection/sample.jpg',
			checked: false
		},
		{
			id: 6,
			image: '/src/lib/assets/collection/sample.jpg',
			checked: false
		},
		{
			id: 7,
			image: '/src/lib/assets/collection/sample.jpg',
			checked: false
		},
		{
			id: 8,
			image: '/src/lib/assets/collection/sample.jpg',
			checked: false
		},
		{
			id: 9,
			image: '/src/lib/assets/collection/sample.jpg',
			checked: false
		},
		{
			id: 10,
			image: '/src/lib/assets/collection/sample.jpg',
			checked: false
		},
		{
			id: 11,
			image: '/src/lib/assets/collection/sample.jpg',
			checked: false
		},
		{
			id: 12,
			image: '/src/lib/assets/collection/sample.jpg',
			checked: false
		},
		{
			id: 13,
			image: '/src/lib/assets/collection/sample.jpg',
			checked: false
		},
		{
			id: 14,
			image: '/src/lib/assets/collection/sample.jpg',
			checked: false
		},
		{
			id: 15,
			image: '/src/lib/assets/collection/sample.jpg',
			checked: false
		},
		{
			id: 16,
			image: '/src/lib/assets/collection/sample.jpg',
			checked: false
		},
		{
			id: 17,
			image: '/src/lib/assets/collection/sample.jpg',
			checked: false
		},
		{
			id: 18,
			image: '/src/lib/assets/collection/sample.jpg',
			checked: false
		},
		{
			id: 19,
			image: '/src/lib/assets/collection/sample.jpg',
			checked: false
		},
		{
			id: 20,
			image: '/src/lib/assets/collection/sample.jpg',
			checked: false
		}
	];
</script>

{#if coreState.value === 'HANDOVER'}
	<CoreTxModal
		on:click={() => {
			coreState.value = 'NONE';
		}}
	/>
{:else if coreState.value === 'KEEP'}
	<!--  -->
{:else}
	<!--  -->
{/if}

<div class="content-wrap">
	{#if type === 'NFT'}
		<NftList {userNftList} />
	{:else}
		<FtForm />
	{/if}
	<AssetSummary />
</div>
