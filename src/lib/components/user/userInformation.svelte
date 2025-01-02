<script lang="ts">
	import Plus from '../icons/Plus.svelte';
</script>

<div class="core-style-background box-md">
	<div class="box-title">
		<div class="text-sm">User Information</div>
	</div>
	<div class="box-content">
		<div class="box-top">
			<div class="user-image">
				<button class="image-upload">
					<Plus />
				</button>
			</div>
		</div>
		<div class="box-middle">
			<div class="user-info-item">
				<div class="user-info-title text-sm">Email</div>
				<div class="input-box background-dark">
					<input class="input-text" type="text" placeholder="Your Email" />
				</div>
			</div>
			<div class="user-info-item">
				<div class="user-info-title text-sm">Name</div>
				<div class="input-box background-dark">
					<input class="input-text" type="text" placeholder="Your Name" />
				</div>
			</div>
			<div class="user-info-item">
				<div class="user-info-title text-sm">KYC</div>
				<div class="input-box background-dark">You are not verified</div>
			</div>
			<div class="user-info-item">
				<div class="user-info-title text-sm">Wallet</div>
				<div class="input-box background-dark">
					<input class="input-text" type="text" placeholder="Your Name" />
				</div>
			</div>
		</div>
		<div class="box-bottom">
			<div class="button-wrap">
				<button class="background-light core-button">
					<div class="text-sm">Cancle</div>
				</button>
				<button class="background-light core-button emphasis-button">
					<div class="text-sm">Save</div>
				</button>
			</div>
		</div>
	</div>
</div>

<style>
	.box-content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: flex-start;
		gap: 1.5rem;
		width: 100%;
		height: 100%;
		overflow: scroll;
	}

	.box-top {
		display: flex;
		justify-content: center;
		width: 100%;
	}

	.box-middle {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1rem;
		width: 100%;
	}

	.box-bottom {
		display: flex;
		justify-content: center;
		width: 100%;
	}

	.user-image {
		background-color: gray;
		width: 80px;
		height: 80px;
		min-height: 80px;
		border-radius: 100px;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.image-upload {
		width: 30px;
		height: 30px;
	}

	.user-info-item {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		width: 60%;
	}

	.input-box {
		display: flex;
		flex-direction: column;
		height: 40px;
		justify-content: center;
		padding: 0px 1rem;
		border-radius: 10px;
	}

	.input-text {
		width: 100%;
		border: none;
		background-color: transparent;
		color: white;
		font-size: 1rem;
		font-weight: 400;
	}

	.button-wrap {
		display: flex;
		width: 60%;
		justify-content: space-between;
		align-items: center;
		gap: 1rem;
	}

	.button-wrap button {
		width: 100%;
	}

	@media (max-width: 1280px) {
		/* FHD 대응 */
	}

	@media (max-width: 1024px) {
		/* 태블릿 대응 */
	}

	@media (max-width: 768px) {
		.user-info-item {
			width: 80%;
		}

		.button-wrap {
			width: 80%;
		}
	}

	@media (max-width: 480px) {
		.user-info-item {
			width: 100%;
		}

		.button-wrap {
			width: 100%;
		}
	}
</style>
