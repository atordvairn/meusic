<script>
  import { supabase } from "./lib/supabase";
  import { navigate } from "svelte-navigator";

  let user = supabase.auth.user();

  supabase.auth.onAuthStateChange((event, session) => {
    user = supabase.auth.user();
  });
</script>

<nav class="navbar navbar-expand-lg w-100 position-fixed">
  <div class="container-fluid">
    <span class="navbar-brand"> meusic</span>
    {#if user}
      <span>
        <div
          on:click={() => {
            navigate("/account");
          }}
        >
          <img
            width="20"
            class="rounded"
            src={user.user_metadata.avatar_url}
            alt=""
          />
          {user.user_metadata.name}
        </div>
      </span>
    {/if}
  </div>
</nav>
<br />
<br />
<br />

<style>
  nav {
    backdrop-filter: blur(8px);
  }
</style>
