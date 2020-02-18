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

<span style="background-color: {color}" on:click={enter}>
	<div class="number">{id}</div>
	<div class="char">{char}</div>
	<div class="symbol">{element.symbol}</div>
</span>

<style>
	span {
		display: inline-block;
		padding: 0.2vw 0.1vw;
		margin: 0;
		width: 5vw;
		text-align: center;
		color: white;
		font-size: 2vw;
	}
	.number { font-size: 50%; }
	.symbol { font-size: 50%; }



</style>