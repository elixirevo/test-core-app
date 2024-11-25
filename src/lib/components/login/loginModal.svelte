<script lang="ts">
	import logo from '$lib/assets/logo/logo.png';
</script>

<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_static_element_interactions -->
<div class="modal-wrap" on:click|self>
	<div class="vision-style-background vision-box modal-box">
		<div class="modal-head">
			<div class="button-wrap">
				<button class="icon-button" on:click>X</button>
			</div>
			<div class="logo">
				<img src={logo} alt="Logo" width="50" height="50" />
			</div>
			<div class="modal-title">
				<h2>Log In / Sign Up</h2>
			</div>
		</div>
		<div class="modal-body">
			<div class="vision-style-background-dark modal-item">
				<div class="method-title">Email</div>
			</div>
			<div class="vision-style-background-dark modal-item">
				<div class="method-title">google</div>
			</div>
			<div class="vision-style-background-dark modal-item">
				<div class="method-title">twitter</div>
			</div>
		</div>
	</div>
</div>

<style>
	.modal-box {
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;
		backdrop-filter: blur(40px);
		gap: 50px;
		width: 400px;
		min-height: 400px;
	}

	.modal-head {
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;
		width: 100%;
	}

	.button-wrap {
		display: flex;
		justify-content: flex-end;
		width: 100%;
	}

	.modal-body {
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;
		width: 100%;
		gap: 10px;
	}

	.modal-item {
		display: flex;
		align-items: center;
		width: 100%;
		height: 50px;
		padding: 10px;
		border-radius: 11.1236px;
	}
</style>
