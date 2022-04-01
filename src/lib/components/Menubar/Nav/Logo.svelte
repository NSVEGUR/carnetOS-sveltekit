<!-- svelte-ignore a11y-invalid-attribute -->

<div class="logo menu-icons menu-icon-1" id="logo">
	<a href="" class="logo-link dont-ref"> <i class="fab fa-apple" /></a>
	<div class="drop">
		<div class="drop-link" data-open="about" data-db="0">
			<a href="" class="dont-ref">About carnetOS</a>
		</div>
		<div class="drop-div" />
		<div class="drop-link">
			<a href="" class="dont-ref">System Preferences...</a>
		</div>
		<div class="drop-link"><a href="" class="dont-ref">Book Tickets...</a></div>
		<div class="drop-div" />
		<div class="drop-link"><a href="" class="dont-ref">Recent Items</a></div>
		<div class="drop-div" />
		<div class="drop-link"><a href="" class="dont-ref">Force Quit</a></div>
		<div class="drop-div" />
		<div class="drop-link"><a href="" class="dont-ref">Sleep</a></div>
		<div class="drop-link"><a href="" class="dont-ref">Restart...</a></div>
		<div class="drop-link"><a href="" class="dont-ref">Shutdown...</a></div>
		<div class="drop-div" />
		<div class="drop-link"><a href="" class="dont-ref">Lock Screen</a></div>
		<div class="drop-link"><a href="" class="dont-ref">Log Out User...</a></div>
	</div>
</div>

<style lang="scss">
	#logo {
		position: relative;
		color: var(--system-text-color);
		padding: 0 10px;
		margin-left: 0.7rem;
		border-radius: 3px;
		a {
			color: var(--system-text-color);
		}
		.drop a {
			padding: 10px 10px;
		}
		.drop-link:hover a {
			color: var(--system-text-color-op);
		}
		@media screen and (max-width: 1250px) {
			margin-left: 0rem;
		}
		@media screen and (max-width: 920px) {
			margin-left: -1rem;
		}
	}
</style>
