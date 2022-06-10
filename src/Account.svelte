<script>
  import { supabase } from "./lib/supabase";
  import { Button } from "svelte-materialify";
  import { navigate } from "svelte-navigator";
</script>

<div class="m-3">
  <Button
    on:click={async () => {
      const { error } = await supabase.auth.signOut();
      if (error) {
        alert(error);
      }
      navigate("/");
    }}>Sign Out</Button
  >
</div>
