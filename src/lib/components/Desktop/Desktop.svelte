<script lang="ts" context="module">
	import Dock from '../Dock/Dock.svelte';
	import Menubar from '../Menubar/Menubar.svelte';
	import Context from '../Context/Context.svelte';
</script>

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
	<Menubar />
	<Dock />
	<Context />
</main>
