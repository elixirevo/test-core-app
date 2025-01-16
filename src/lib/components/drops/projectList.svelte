<script lang="ts">
	import thumbnailImage from '$lib/assets/test/thumbnail.png';
</script>

<div class="list-wrap">
	<div class="list-menu-wrap">
		<div class="menu-button-wrap">
			<button class="text-sm">All Drops</button>
			<button class="text-sm">Supported Drops</button>
		</div>
		<hr />
	</div>
	<div class="list-item-wrap">
		{#each [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13] as item}
			<button class="item-box">
				<img class="thumbnail-image" src={thumbnailImage} alt="img" />
				<div class="item-title text-md">Project Name</div>
				<div class="item-description">
					Project DescriptionProject DescriptionProject DescriptionProject DescriptionProject
					DescriptionProject DescriptionProject Description
				</div>
			</button>
		{/each}
	</div>
</div>

<style>
	.list-wrap {
		width: 100%;
		display: flex;
		flex-direction: column;
		gap: 2rem;
	}

	.list-menu-wrap {
		width: 100%;
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.menu-button-wrap {
		display: flex;
		gap: 2rem;
	}

	.list-item-wrap {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(330px, 1fr));
		flex-direction: row;
		flex-wrap: wrap;
		width: 100%;
		justify-content: flex-start;
		align-items: flex-start;
		gap: 1rem;
	}

	.item-box {
		display: flex;
		flex-direction: column;
		width: 100%;
		background: rgba(0, 185, 176, 0.3);
		height: 280px;
		padding: 0.8rem;
		gap: 0.5rem;
	}

	.thumbnail-image {
		width: 100%;
		height: 140px;
		object-fit: cover;
	}

	.item-description {
		text-align: start;
	}
</style>
