<script>
  import { Router, Link, Route } from "svelte-navigator";

  import Index from "./Index.svelte";
  import Account from "./Account.svelte";
  import Header from "./Header.svelte";
  import Player from "./music__app/Player.svelte";
</script>

<Router>
  <Header />
  <Route path="/">
    <Index />
  </Route>
  <Route path="/listen/:id" let:params>
    <Player id={params.id} />
  </Route>
  <Route path="/account">
    <Account />
  </Route>
</Router>
