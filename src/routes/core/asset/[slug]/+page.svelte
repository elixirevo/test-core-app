<script lang="ts">
	import NftList from '$lib/components/core/nftList.svelte';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();

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

<div class="content-wrap">
	<NftList {userNftList} />
</div>

<style>
</style>
