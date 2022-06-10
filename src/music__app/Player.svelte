<script>
  import axios from "axios";
  export let id;

  let song__info;
  let song__info__loaded = false;
  let song;
  let isPlaying = false;
  let currentTime = 1;

  axios
    .get("https://jiosaavn-api-1-kappa.vercel.app/song?lyrics=true&id=" + id)
    .then((res) => {
      let data = res.data;
      song__info = data;
      song = new Audio(song__info.media_url);
      song__info__loaded = true;
    });

  setInterval(() => {
    currentTime = song.currentTime;
  }, 1000);
</script>

{#if song__info__loaded}
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css"
  />
  <div class="bg" style="background-image: url('{song__info.image}')" />
  <div class="audio-container" style="color: aliceblue !important;">
    <img class="track-img" alt="" src={song__info.image} />
    <span class="h4">
      {@html song__info.song}
    </span>
    <span class="h6">
      {@html song__info.album}
    </span>
    <div class="btn-controls text-center">
      <div class="btn playpause-track">
        {#if !isPlaying}
          <i
            class="fa fa-play-circle fa-5x"
            on:click={() => {
              song.play();
              isPlaying = true;
            }}
          />
        {:else}
          <i
            class="fa fa-pause-circle fa-5x"
            on:click={() => {
              song.pause();
              song.currentTime = 0;
              isPlaying = false;
            }}
          />
        {/if}
      </div>
    </div>
    <div class="seek-container d-flex gap-2" style="color: white;">
      <div id="curr-time">{Math.round(currentTime)}<sub>s</sub></div>
      <input
        id="seek-slider"
        on:change={() => {
          song.currentTime = currentTime;
        }}
        type="range"
        min="1"
        max={song.duration}
        bind:value={currentTime}
      />
      <div id="total-time">{Math.round(song.duration)}<sub>s</sub></div>
    </div>
  </div>
{/if}

<style>
  .bg {
    position: relative;
    filter: blur(4px);
    height: 100%;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }

  .audio-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .track-img {
    border-radius: 10px;
    height: 200px;
    width: 200px;
  }

  .btn {
    cursor: pointer;
  }
</style>
