<script>
  import Thing from "./Thing.svelte";
  import Detail from "./Detail.svelte";
  import Credits from "./Credits.svelte";

  import { foo } from "hanzi";

  //let hanzi = require("hanzi");
  console.log(foo.getPinyin('的'));

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

  let current;
</script>

<style>
  :global(body) {
		/* this will apply to <body> */
		margin: 0;
    padding: 50px;
	}
  h1 {
    font-size: 2vw;
    color: green;
  }
  p { text-align: center; }
</style>

<h1>Heyy {name}!</h1>

<Detail yuansu={current}/>

<p>
  {#each things as thing (thing.id)}
    <Thing bind:value={current} {...thing} element={elements[thing.id - 1]}/>
  {/each}
</p>

<Credits/>
