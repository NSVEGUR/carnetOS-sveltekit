<!-- svelte-ignore a11y-invalid-attribute -->

<li class="menu-icons menu-icon-2">
	<a href="" class="dont-ref">Tatkal</a>
	<div class="drop">
		<div class="drop-link">
			<a href="" class="dont-ref">Available Tickets</a>
		</div>
		<div class="drop-div" />
		<div class="drop-link"><a href="" class="dont-ref">Routes</a></div>
		<div class="drop-div" />
		<div class="drop-link"><a href="" class="dont-ref">Pricing</a></div>
		<div class="drop-link"><a href="" class="dont-ref">Hide Others</a></div>
		<div><a href="" class="not-active">Show All</a></div>
	</div>
</li>

<style lang="scss">
	li {
		list-style: none;
		position: relative;
		border-radius: 5px;
		margin: 1px 0;
		transition: all 0.3s ease;
		a {
			color: var(--system-text-color);
			font-size: 13px;
			font-weight: 500;
			padding: 0px 8px;
		}
		.drop-link:hover a {
			color: var(--system-text-color-op);
		}
		.not-active {
			color: var(--system-transparent-color-secondary-op);
		}
	}
</style>
