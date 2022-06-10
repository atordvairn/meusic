<script>
  import { mdiSearchWeb } from "@mdi/js";
  import axios from "axios";
  import { TextField, Icon, Button } from "svelte-materialify";
  import { navigate } from "svelte-navigator";

  //vars
  let query;
  let results = [];
</script>

<div class="m-2 d-flex gap-2">
  <TextField bind:value={query}>Search Songs</TextField>
  <span
    on:click={() => {
      axios
        .get("https://jiosaavn-api-1-kappa.vercel.app/search?query=" + query)
        .then((res) => {
          let data = res.data;
          results = data.results;
        });
    }}
  >
    <Icon path={mdiSearchWeb} />
  </span>
</div>
{#each results as song}
  <div
    on:click={() => {
      navigate("/listen/" + song.id);
    }}
  >
    <div class="m-1 gap-2 d-flex">
      <img src={song.images["50x50"]} class="rounded img" alt="" />
      <span class="flex-column">
        <div class="text-subtitle-1">
          {song.title}
        </div>
        <div class="text-muted">
          {song.album}
        </div>
      </span>
    </div>
  </div>
{/each}

<style global>
  .img {
    width: 40px;
    height: 40px;
    aspect-ratio: 1/1;
  }
</style>
