<script lang="ts" context="module">
	export const prerender = true;
	import Dock from '$lib/components/Dock/Dock.svelte';
</script>

<svelte:head>
	<title>carnetOS | Railway Ticket Booking App</title>
</svelte:head>
<main>
	<!-- Just for loading -->
	<img
		src="/dark-mac-bg.jpeg"
		alt="wall"
		style="width: 1px; height: 1px; position: fixed; top: 0; right: 0"
	/>
	<img
		src="/light-mac-bg.jpeg"
		alt="wall"
		style="width: 1px; height: 1px; position: fixed; bottom: 0; left: 0"
	/>
	<!-- Just for loading -->
	<Dock />
</main>

<style lang="scss">
</style>
