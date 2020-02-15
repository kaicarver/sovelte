<script>
	export let color;
	export let char;
	export let simp;
	export let id;
	export let value = '';
	export let element;
	let hovering;

	function enter() {
		hovering = true;
		let zhspace = "　"; // space character in Chinese, same width as a character
		//zhspace = "*"
		let label = char === simp ? char + zhspace + zhspace: char + zhspace + simp;
		// just a hack until I find a cleaner way to do this
		value = { element: element, label: label };
	}

	function leave() {
		hovering = false;
		value = '　';
	}
</script>

<span on:mouseenter={enter} on:mouseleave={leave} on:click={enter}>
	<span style="background-color: {color}">{id}<br>{char}<br>{element.symbol}</span>
</span>

<style>
	span {
		display: inline-block;
		padding: 0.2em 0.1em;
		margin: 0 0.2em 0.2em 0;
		width: 2em;
		text-align: center;
		border-radius: 0.2em;
		color: white;
	}
</style>