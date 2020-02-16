<script>
  export let yuansu;
</script>

<style>
  div {
    color: darkblue;
    font-size: 1.5em;
    font-weight: bold;
  }
</style>

<div>
  {@html yuansu ? yuansu.element.name + '<br>' + yuansu.label : 'hover over an element for info, <br>traditional character,<br>simplified character (if different)</span>'}
</div>
