<script>
  import Thing from "./Thing.svelte";

  export let name;
  let count = 0;
  $: doubled = count * 2;

  function handleClick() {
    count += 1;
  }

  let things = [
    { id: 1, char: "氫", color: "#0d0887" },
    { id: 2, char: "氦", color: "#6a00a8" },
    { id: 3, char: "鋰", color: "#b12a90" },
    { id: 4, char: "鈹", color: "#e16462" },
    { id: 5, char: "硼", color: "#fca636" }
  ];

  function handleClick2() {
    things = things.slice(1);
  }
</script>

<style>
  h1 {
    color: green;
  }
</style>

<h1>Hey {name}!!!!!!!</h1>

<button on:click={handleClick}>
  Clicked {count} {count === 1 ? 'time' : 'times'}
</button>

<p>{count} doubled is {doubled}</p>

<button on:click={handleClick2}>Remove first thing</button>

{#each things as thing (thing.id)}
  <Thing {...thing} />
{/each}

<p>This rocks.</p>

<a href="https://github.com/kaicarver/sovelte">Source</a>
