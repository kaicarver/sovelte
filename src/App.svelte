<script>
  import Thing from "./Thing.svelte";
  import Credits from "./Credits.svelte";

  export let name;

  import * as obj from "./test.json";
  console.log("obj:", obj);

  import * as obj2 from "./PeriodicTableJSON.json";
  let elements = obj2.elements;
  console.log("elements:", elements);

  let colors = ["#0d0887", "#6a00a8", "#b12a90", "#e16462", "#fca636"];

  let things = obj.default;
  things.forEach((t, i) => {
    t.color = colors[i % colors.length];
    t.id = i + 1;
  });

  let current = "　<br>　<br>　";
</script>

<style>
  h1 {
    color: green;
  }
  .detail {
    font-size: 2em;
  }
</style>

<h1>Hey {name}!</h1>

<div class="detail">{@html current.element ? current.label + "<br>" + current.element.name : current }</div>

<p>
  {#each things as thing (thing.id)}
    <Thing bind:value={current} {...thing} element={elements[thing.id - 1]}/>
  {/each}
</p>

<p>This rocks.</p>

<Credits/>
