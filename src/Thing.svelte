<script>
	export let color;
	export let char;
	export let simp;
	export let id;
	export let value = '';
	export let element;

	function enter() {
		let zhspace = "　"; // space character in Chinese, same width as a character
		if (char === simp) simp = zhspace;
		let label = char + "<br>" + simp;
		// just a hack until I find a cleaner way to do this
		value = { label: label, element: element };
	}
</script>

<span on:click={enter}>
	<span style="background-color: {color}">{id}<br>{char}<br>{element.symbol}</span>
</span>

<style>
	span {
		display: inline-block;
		padding: 0.2vw 0.1vw;
		margin: 0;
		width: 3vw;
		text-align: center;
		color: white;
		font-size: 1.5vw;
	}
</style>