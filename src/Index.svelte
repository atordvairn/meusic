<script>
  import { supabase } from "./lib/supabase";

  //logos
  import { mdiGoogle, mdiGithub, mdiTwitter } from "@mdi/js";

  import MusicApp from "./music__app/MusicAPP.svelte";
  import { Button, MaterialApp, Icon } from "svelte-materialify";

  async function signup(provider) {
    const { user, session, error } = await supabase.auth.signIn({
      provider: provider,
    });
  }

  //get the users
  let user = supabase.auth.user();

  supabase.auth.onAuthStateChange((event, session) => {
    user = supabase.auth.user();
  });
</script>

<MaterialApp>
  <div class="m-3">
    {#if !user}
      <h3 class="display-5">continue with:</h3>
      <div class="m-2 containertext-center">
        <Button
          on:click={() => {
            signup("github");
          }}
        >
          <Icon class="mr-2" path={mdiGithub} size={20} />
          github
        </Button>
        <Button
          on:click={() => {
            signup("google");
          }}
        >
          <Icon class="mr-2" path={mdiGoogle} size={20} />
          google
        </Button>
      </div>
    {:else}
      <MusicApp />
    {/if}
  </div>
</MaterialApp>
