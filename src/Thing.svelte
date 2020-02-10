<script>
	export let color;
	export let char;
	export let simp;
	export let id;
	export let value = '';
	let hovering;

	function enter() {
		hovering = true;
		value = char === simp ? char : char + ' ' + simp;
	}

	function leave() {
		hovering = false;
		value = 'x';
	}
</script>

<span on:mouseenter={enter} on:mouseleave={leave} on:click={enter}>
	<span style="background-color: {color}">{char}</span>
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