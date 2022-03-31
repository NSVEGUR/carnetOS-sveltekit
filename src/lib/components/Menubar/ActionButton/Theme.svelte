<div id="theme">
	<div class="mode">
		<div class="mode-glyph">
			<i class="fas fa-adjust" />
		</div>
		<div>Dark mode</div>
	</div>
	<div class="focus">
		<div class="focus-glyph">
			<i class="fas fa-moon" />
		</div>
		<div>Focus</div>
	</div>
</div>

<style lang="scss">
	#theme {
		width: 100%;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		.mode,
		.focus {
			width: 153px;
			min-height: 60px;
			padding: 10px 5px;
			background: var(--system-transparent-color-secondary);
			border-radius: 13px;
			backdrop-filter: blur(20px);
			display: flex;
			flex-direction: row;
			align-items: center;
			gap: 10px;
			justify-content: center;
		}
		.mode div:first-child,
		.focus div:first-child {
			background: var(--system-transparent-color-primary-op);
			padding: 5px;
			height: 30px;
			width: 30px;
			border-radius: 50%;
			display: grid;
			place-items: center;
		}
		.mode div:first-child {
			background: var(--system-color);
		}
	}
</style>
