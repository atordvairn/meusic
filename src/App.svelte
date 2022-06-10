<script>
  import { Router, Link, Route } from "svelte-navigator";

  import Index from "./Index.svelte";
  import Account from "./Account.svelte";
  import Header from "./Header.svelte";
</script>

<Router>
  <Header />
  <Route path="/">
    <Index />
  </Route>
  <Route path="/account">
    <Account />
  </Route>
</Router>
