<div id="wallpaper">
	<div class="wallpaper" />
	<div>
		<h3>RadheShyam</h3>
		<h4>Soul of Radheshyam</h4>
	</div>
	<div class="perfect">
		<div class="perfect-play">
			<i class="fas fa-play" />
		</div>
		<div class="perfect-pause">
			<i class="fas fa-pause" />
		</div>
	</div>
</div>

<style lang="scss">
	#wallpaper {
		width: 100%;
		min-height: 60px;
		padding: 10px 5px;
		background: var(--system-transparent-color-secondary);
		border-radius: 13px;
		backdrop-filter: blur(20px);
		display: flex;
		flex-direction: row;
		align-items: center;
		gap: 10px;
		justify-content: flex-start;
		padding-left: 30px;
		padding: 15px;
		padding-left: 20px;
		h3 {
			font-size: 1.1rem;
		}
		h4 {
			margin-top: -0.5rem;
			font-weight: 400;
		}
		.wallpaper {
			width: 70px;
			height: 70px;
			background: url('/music/radheshyam.webp') no-repeat center center;
			transition: background 0.3s ease;
			background-size: cover;
			border-radius: 10px;
		}
		.perfect {
			position: fixed;
			right: 20px;
			background: var(--system-transparent-color-primary-op);
			padding: 5px;
			height: 30px;
			width: 30px;
			border-radius: 50%;
		}
		.perfect .perfect-play,
		.perfect .perfect-pause {
			width: 100%;
			height: 100%;
			display: flex;
			align-items: center;
			justify-content: center;
		}
		.perfect .perfect-pause {
			display: none;
		}
	}
</style>
