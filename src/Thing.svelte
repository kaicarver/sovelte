<script>
	export let color;
	export let char;
	export let id;
	export let value = '';
	let hovering;

	function enter() {
		hovering = true;
		value = char;
	}

	function leave() {
		hovering = false;
		value = 'x';
	}
</script>

<p on:mouseenter={enter} on:mouseleave={leave}>
	<span style="background-color: {color}">{char} {id}</span>
</p>

<style>
	span {
		display: inline-block;
		padding: 0.2em 0.5em;
		margin: 0 0.2em 0.2em 0;
		width: 4em;
		text-align: center;
		border-radius: 0.2em;
		color: white;
	}
</style>