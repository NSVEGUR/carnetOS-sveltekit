<script lang="ts">
	import Dock from '$lib/components/Dock/Dock.svelte';
	// noiceee
</script>

<svelte:head>
	<title>carnetOS | Railway Ticket Booking App</title>
</svelte:head>
<main>
	<Dock />
</main>

<style lang="scss">
	main {
		width: 100vw;
		height: 100vh;
		overflow: hidden;
		background: url('/dark-mac-bg.jpeg') center center no-repeat;
		background-size: cover;
	}
</style>
