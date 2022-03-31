<div id="action-sound">
	<div class="sound-glyph">
		<i class="fas fa-volume-up" />
	</div>
	<div>
		<input type="range" id="sound" class="slider" />
	</div>
</div>

<style lang="scss">
	#action-sound {
		width: 100%;
		padding: 10px 5px;
		background: var(--system-transparent-color-secondary);
		border-radius: 13px;
		backdrop-filter: blur(20px);
		min-height: 70px;
		display: flex;
		flex-direction: row;
		align-items: center;
		gap: 10px;
		justify-content: flex-start;
		padding-left: 30px;
		div:last-child {
			width: 100%;
			display: flex;
			align-items: center;
			justify-content: center;
		}
		@media screen and (-webkit-min-device-pixel-ratio: 0) {
			input[type='range'] {
				overflow: hidden;
				width: 250px;
				height: 20px;
				border-radius: 10px;
				-webkit-appearance: none;
				outline: none;
			}

			input[type='range']::-webkit-slider-runnable-track {
				height: 20px;
				-webkit-appearance: none;
				background: var(--thumb-secondary-color);
				outline: none;
			}

			input[type='range']::-webkit-slider-thumb {
				width: 20px;
				-webkit-appearance: none;
				height: 20px;
				border-radius: 50%;
				background: var(--system-text-color);
				box-shadow: -120px 20px 10px 115px var(--thumb-primary-color);
			}
		}
	}
</style>
