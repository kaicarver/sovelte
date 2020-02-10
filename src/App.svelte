<script>
  import Thing from "./Thing.svelte";

  export let name;
  let count = 0;
  $: doubled = count * 2;

  function handleClick() {
    count += 1;
  }

  let colors = ["#0d0887", "#6a00a8", "#b12a90", "#e16462", "#fca636"];

  let things = [
    { char: "氫", simp: "氢" },
    { char: "氦", simp: "氦" },
    { char: "鋰", simp: "锂" },
    { char: "鈹", simp: "铍" },
    { char: "硼", simp: "硼" },
    { char: "碳", simp: "碳" },
    { char: "氮", simp: "氮" },
    { char: "氧", simp: "氧" },
    { char: "氟", simp: "氟" },
    { char: "氖", simp: "氖" },
    { char: "鈉", simp: "钠" },
    { char: "鎂", simp: "镁" },
    { char: "鋁", simp: "铝" },
    { char: "矽", simp: "硅" },
    { char: "磷", simp: "磷" },
    { char: "硫", simp: "硫" },
    { char: "氯", simp: "氯" },
    { char: "氬", simp: "氩" },
    { char: "鉀", simp: "钾" },
    { char: "鈣", simp: "钙" },
    { char: "鈧", simp: "钪" },
    { char: "鈦", simp: "钛" },
    { char: "釩", simp: "钒" },
    { char: "鉻", simp: "铬" },
    { char: "錳", simp: "锰" },
    { char: "鐵", simp: "铁" },
    { char: "鈷", simp: "钴" },
    { char: "鎳", simp: "镍" },
    { char: "銅", simp: "铜" },
    { char: "鋅", simp: "锌" },
    { char: "鎵", simp: "镓" },
    { char: "鍺", simp: "锗" },
    { char: "砷", simp: "砷" },
    { char: "硒", simp: "硒" },
    { char: "溴", simp: "溴" },
    { char: "氪", simp: "氪" },
    { char: "銣", simp: "铷" },
    { char: "鍶", simp: "锶" },
    { char: "釔", simp: "钇" },
    { char: "鋯", simp: "锆" },
    { char: "鈮", simp: "铌" },
    { char: "鉬", simp: "钼" },
    { char: "鎝", simp: "锝" },
    { char: "釕", simp: "钌" },
    { char: "銠", simp: "铑" },
    { char: "鈀", simp: "钯" },
    { char: "銀", simp: "银" },
    { char: "鎘", simp: "镉" },
    { char: "銦", simp: "铟" },
    { char: "錫", simp: "锡" },
    { char: "銻", simp: "锑" },
    { char: "碲", simp: "碲" },
    { char: "碘", simp: "碘" },
    { char: "氙", simp: "氙" },
    { char: "銫", simp: "铯" },
    { char: "鋇", simp: "钡" },
    { char: "鑭", simp: "镧" },
    { char: "鈰", simp: "铈" },
    { char: "鐠", simp: "镨" },
    { char: "釹", simp: "钕" },
    { char: "鉕", simp: "钷" },
    { char: "釤", simp: "钐" },
    { char: "銪", simp: "铕" },
    { char: "釓", simp: "钆" },
    { char: "鋱", simp: "铽" },
    { char: "鏑", simp: "镝" },
    { char: "鈥", simp: "钬" },
    { char: "鉺", simp: "铒" },
    { char: "銩", simp: "铥" },
    { char: "鐿", simp: "镱" },
    { char: "鎦", simp: "镥" },
    { char: "鉿", simp: "铪" },
    { char: "鉭", simp: "钽" },
    { char: "鎢", simp: "钨" },
    { char: "錸", simp: "铼" },
    { char: "鋨", simp: "锇" },
    { char: "銥", simp: "铱" },
    { char: "鉑", simp: "铂" },
    { char: "金", simp: "金" },
    { char: "汞", simp: "汞" },
    { char: "鉈", simp: "铊" },
    { char: "鉛", simp: "铅" },
    { char: "鉍", simp: "铋" },
    { char: "釙", simp: "钋" },
    { char: "砈", simp: "砹" },
    { char: "氡", simp: "氡" },
    { char: "鍅", simp: "钫" },
    { char: "鐳", simp: "镭" },
    { char: "錒", simp: "锕" },
    { char: "釷", simp: "钍" },
    { char: "鏷", simp: "镤" },
    { char: "鈾", simp: "铀" },
    { char: "錼", simp: "镎" },
    { char: "鈽", simp: "钚" },
    { char: "鋂", simp: "镅" },
    { char: "鋦", simp: "锔" },
    { char: "鉳", simp: "锫" },
    { char: "鉲", simp: "锎" },
    { char: "鑀", simp: "锿" },
    { char: "鐨", simp: "镄" },
    { char: "鍆", simp: "钔" },
    { char: "鍩", simp: "锘" },
    { char: "鐒", simp: "铹" },
    { char: "鑪", simp: "𬬻" },
    { char: "𨧀", simp: "𬭊" },
    { char: "𨭎", simp: "𬭳" },
    { char: "𨨏", simp: "𬭛" },
    { char: "𨭆", simp: "𬭶" },
    { char: "䥑", simp: "鿏" },
    { char: "鐽", simp: "𫟼" },
    { char: "錀", simp: "𬬭" },
    { char: "鎶", simp: "鿔" },
    { char: "鉨", simp: "鿭" },
    { char: "鈇", simp: "𫓧" },
    { char: "鏌", simp: "镆" },
    { char: "鉝", simp: "𫟷" },
    { char: "鿬", simp: "鿬" },
    { char: "鿫", simp: "鿫" }
  ];
  things.forEach((t, i) => {
    t.color = colors[i % colors.length];
    t.id = i + 1;
  });

  function handleClick2() {
    things = things.slice(1);
  }
  let current;
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
<a href="https://zh.wikipedia.org/wiki/%E5%85%83%E7%B4%A0%E5%91%A8%E6%9C%9F%E8%A1%A8#%E5%85%83%E7%B4%A0%E9%80%B1%E6%9C%9F%E8%A1%A8">Periodic Table in Chinese on Wikipedia</a>

