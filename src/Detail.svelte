<script>
  export let yuansu;
</script>

<style>
  div {
    color: darkblue;
    font-size: 1.8vw;
    font-weight: bold;
    height: 13vw;
  }
</style>

<div>
  {@html yuansu ? yuansu.label + '<br>' + yuansu.element.summary : 'traditional character, and<br>simplified character (if different)<p>Click any element for info</span>'}
</div>
