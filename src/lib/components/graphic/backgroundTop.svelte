<div class="background-top-wrap">
	<div class="left-line"></div>
	<div class="middle-line"></div>
	<div class="right-line"></div>
</div>

<style>
	.background-top-wrap {
		display: grid;
		grid-template-columns: 6fr 15px 3fr;
		width: 100%;
		height: 15px;
		position: absolute;
		top: 100px;
		padding: 0px 30px;
	}

	.background-top-wrap .left-line {
		width: 100%;
		height: 15px;
		border-top: 1px solid #00fff2;
		border-radius: 1px;
		opacity: 0.6;
	}

	.background-top-wrap .middle-line {
		width: 100%;
		height: 21.5px;
		position: relative;
	}

	.background-top-wrap .middle-line::before {
		content: '';
		position: absolute;
		top: 1px;
		left: -1px;
		width: 100%;
		height: 100%;
		border-left: 1.5px solid transparent;
		border-left: 1.5px solid #00fff2;
		transform: rotate(-47deg);
		transform-origin: top left;
		border-radius: 1px;
		opacity: 0.6;
	}

	.background-top-wrap .right-line {
		width: 100%;
		height: 15px;
		border-bottom: 1px solid #00fff2;
		border-radius: 1px;
		opacity: 0.6;
	}

	@media (max-width: 768px) {
		/* 모바일 대응 */
		.background-top-wrap {
			height: 15px;
			top: 80px;
			padding: 0px 15px;
		}
	}

	@media (max-height: 500px) {
		/* 높이 대응 */
		.background-top-wrap {
			display: none;
		}
	}
</style>
