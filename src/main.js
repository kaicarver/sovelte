import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		name: '世界 world'
	}
});

export default app;
