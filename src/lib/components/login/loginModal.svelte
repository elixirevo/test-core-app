<script lang="ts">
	import logo from '$lib/assets/logo/logo.png';
	import Box from '$lib/assets/ui/box.png';
	import { fly } from 'svelte/transition';
	import Google from '../icons/GoogleLogo.svelte';
	import Mail from '../icons/mail.svelte';
	import XIcon from '../icons/XLogo.svelte';
	import XMark from '../icons/XMark.svelte';
	import ChevronLeft from '../icons/chevronLeft.svelte';
	let step = 1;
</script>

<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_static_element_interactions -->
<div class="modal-wrap">
	<div class="modal-box">
		<img class="modal-box-image" src={Box} alt="img" />
		{#if step === 1}
			<div class="modal-content-wrap">
				<div class="modal-head">
					<div class="button-wrap">
						<button class="icon-button" on:click>
							<XMark />
						</button>
					</div>
					<div class="logo">
						<img src={logo} alt="Logo" width="40" height="40" />
					</div>
					<div class="modal-title text-sm">
						<h2>Log In / Sign Up</h2>
					</div>
				</div>
				<div class="modal-body">
					<div class="background-dark modal-item">
						<div class="icon-wrap">
							<Mail />
						</div>
						<input class="input-text" type="text" placeholder="Email" />
						<button
							class="normal-button"
							on:click={() => {
								step = 2;
							}}
						>
							Submit
						</button>
					</div>
					<button class="background-dark modal-item">
						<div class="icon-wrap">
							<Google />
						</div>
						<div class="method-title">Google</div>
					</button>
					<button class="background-dark modal-item">
						<div class="icon-wrap">
							<XIcon />
						</div>
						<div class="method-title">X</div>
					</button>
				</div>
			</div>
		{/if}
		{#if step === 2}
			<div class="modal-content-wrap" transition:fly={{ x: 200, duration: 200 }}>
				<div class="modal-head">
					<div class="button-wrap">
						<button
							class="icon-button"
							on:click={() => {
								step = 1;
							}}
						>
							<ChevronLeft />
						</button>
					</div>
					<div class="modal-title text-xs">
						<h2>Email Login</h2>
					</div>
					<div class="text">Enter confirmation code</div>
					<div class="text">
						Please check test@gmail.com for an email from privy.io and enter your code below.
					</div>
				</div>
				<div class="modal-body">
					<div class="email-verify-box">
						{#each new Array(6) as _, i}
							{@render verifyCodeBox()}
						{/each}
					</div>
					<div class="submit-button-wrap">
						<button class="core-button background-dark">Submit</button>
					</div>
				</div>
			</div>
		{/if}
	</div>
</div>

{#snippet verifyCodeBox()}
	<div class="email-verify-input-box background-dark">
		<input class="input-text" type="text" />
	</div>
{/snippet}

<style>
	.modal-box {
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;
		width: 400px;
		min-height: 500px;
		margin: 0px 10px;
		backdrop-filter: blur(40px);
		clip-path: polygon(17% 0, 100% 0, 100% 91%, 82% 100%, 0 100%, 0 9%);
	}

	.modal-box-image {
		width: 400px;
		min-height: 500px;
		position: relative;
	}

	.modal-content-wrap {
		position: absolute;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: flex-start;
		width: 100%;
		height: 100%;
		padding: 22px;
		padding-bottom: 50px;
		gap: 4rem;
	}

	.modal-head {
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;
		width: 100%;
		gap: 0.5rem;
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
		gap: 2rem;
	}

	.modal-item {
		display: flex;
		align-items: center;
		width: 100%;
		height: 50px;
		padding: 10px;
		border-radius: 10px;
		gap: 10px;
	}

	.icon-wrap {
		max-width: 26px;
		max-height: 26px;
	}

	.input-text {
		width: 100%;
		border: none;
		background-color: transparent;
		color: white;
		font-size: 1rem;
		font-weight: 400;
	}

	.text {
		text-align: center;
	}

	.email-verify-box {
		display: flex;
		width: 100%;
		gap: 10px;
	}

	.email-verify-input-box {
		display: flex;
		width: 50px;
		min-height: 60px;
	}

	.email-verify-input-box input {
		font-size: 40px;
		text-align: center;
	}

	.submit-button-wrap {
		display: flex;
		justify-content: center;
		width: 100%;
	}
</style>
