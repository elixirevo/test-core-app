<script lang="ts">
	//
</script>

<div class="content-wrap">
	<div class="core-style-background box-md">
		<div class="background-dark description">ㅁㄴㅇ</div>
		<div class="button-wrap">
			<button class="background-light test-button">
				<div class="test-button-text text-sm">Test</div>
			</button>
			<button class="background-light test-button">
				<div class="test-button-text text-sm">Test</div>
			</button>
		</div>
	</div>
</div>

<style>
	/*  */
	.description {
		width: 100%;
		height: 200px;
		overflow: scroll;
		padding: 1rem;
		border-radius: 10px;
	}

	.test-button {
		width: 170px;
		height: 40px;
		padding: 0.5rem;
		display: flex;
		justify-content: center;
		clip-path: polygon(13% 0, 100% 0, 100% 50%, 87% 100%, 0 100%, 0% 50%);
	}

	.button-wrap {
		display: flex;
		gap: 10px;
		justify-content: flex-end;
		width: 100%;
		box-sizing: border-box;
	}
</style>
