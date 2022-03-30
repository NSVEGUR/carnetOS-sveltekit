<script lang="ts">
	export let name;
</script>

<button {...$$props}>
	<slot />
	<span>{name}</span>
</button>

<style lang="scss">
	button {
		color: inherit;
		text-decoration: none;
		vertical-align: middle;

		border: 0;
		border-radius: 0;

		outline: 0;

		margin: 0;
		padding: 0;

		display: inline-flex;
		align-items: center;
		justify-content: center;

		position: relative;

		user-select: none;

		appearance: none;

		background-color: transparent;

		-webkit-tap-highlight-color: transparent;

		&:not(:disabled) {
			cursor: pointer;
		}
		span {
			position: absolute;
			top: -2rem;
			color: var(--system-text-color);
			font-weight: 500;
			background: var(--system-transparent-color-primary);
			backdrop-filter: blur(5px);
			box-shadow: var(--shadow-effect);

			padding: 0.2rem 0.5rem;

			border-radius: 0.3rem;
			display: none;
			transition: all 0.3s ease;
		}
		&:hover span {
			display: block;
		}
	}
</style>
