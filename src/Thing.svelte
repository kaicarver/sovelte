<script>
	export let color;
	export let char;
	export let id;

	function enter() {
		hovering = true;
		console.log("enter", this)
	}

	function leave() {
		console.log("leave", this)
		hovering = false;
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