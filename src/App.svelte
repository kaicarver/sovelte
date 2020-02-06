<script>
  export let name;
  let count = 0;
  $: doubled = count * 2;

  function handleClick() {
    count += 1;
  }
</script>

<style>
  h1 {
  color: green;
  }
</style>

<h1>Hey {name}!</h1>

<button on:click={handleClick}>
  Clicked {count} {count === 1 ? 'time' : 'times'}
</button>

<p>{count} doubled is {doubled}</p>

<p>This rocks.</p>
