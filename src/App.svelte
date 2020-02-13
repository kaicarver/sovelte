<script>
  import Thing from "./Thing.svelte";

  export let name;
  let count = 0;
  $: doubled = count * 2;

  function handleClick() {
    count += 1;
  }

  // try to import JSON as-is...
  import * as obj from './test.json';
  console.log("obj:", obj);

  let colors = ["#0d0887", "#6a00a8", "#b12a90", "#e16462", "#fca636"];

  let things = obj.default;
  things.forEach((t, i) => {
    t.color = colors[i % colors.length];
    t.id = i + 1;
  });

  function handleClick2() {
    things = things.slice(1);
  }
  let current = '　';
  $: view = current ? current : "current is not set";
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

<p>
  {#each things as thing (thing.id)}
    <Thing bind:value={current} {...thing} />
  {/each}
</p>

<h1>{current}</h1>

<p>This rocks.</p>

<a href="https://github.com/kaicarver/sovelte">Source on Github</a> /
<a href="https://zh.wikipedia.org/wiki/%E5%85%83%E7%B4%A0%E5%91%A8%E6%9C%9F%E8%A1%A8#%E5%85%83%E7%B4%A0%E9%80%B1%E6%9C%9F%E8%A1%A8">Periodic Table in Chinese on Wikipedia</a> /
<a href="https://github.com/Bowserinator/Periodic-Table-JSON#periodic-table-json">Periodic Table JSON by Bowserinator</a>

