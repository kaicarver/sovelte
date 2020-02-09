<script>
  import Thing from "./Thing.svelte";

  export let name;
  let count = 0;
  $: doubled = count * 2;

  function handleClick() {
    count += 1;
  }

  let colors = [ "#0d0887", "#6a00a8", "#b12a90", "#e16462", "#fca636" ];

  let things = [
    { char: "氫", },
    { char: "氦", },
    { char: "鋰", },
    { char: "鈹", },
    { char: "硼", },
    { char: "碳", },
  ];
  things.forEach((t, i) => { t.color = colors[i%colors.length]; t.id = i+1; })

  function handleClick2() {
    things = things.slice(1);
  }
  let current;
  $: view = current ? current : 'current is not set';
</script>

<style>
  h1 {
    color: green;
  }
</style>

<h1>Hey {name}!?!</h1>

<button on:click={handleClick}>
  Clicked {count} {count === 1 ? 'time' : 'times'}
</button>

<p>{count} doubled is {doubled}</p>

<button on:click={handleClick2}>Remove first thing</button>

{#each things as thing (thing.id)}
  <Thing bind:value={current} {...thing}/>
{/each}

<h1>{current}</h1>

<p>This rocks.</p>

<a href="https://github.com/kaicarver/sovelte">Source</a>
