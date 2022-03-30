import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';
import svelte from 'rollup-plugin-svelte';

/**  @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: preprocess(),
	onwarn: (warning, handler) => {
		const { code } = warning;
		if (code === 'css-unused-selector') return;

		handler(warning);
	},
	kit: {
		adapter: adapter()
	},
	plugins: [
		svelte({
			preprocess: preprocess()
		})
	]
};

export default config;
