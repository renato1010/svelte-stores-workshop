<script lang="ts">
  import { onMount } from "svelte";
  import Home from "./pages/home.svelte";
  import Settings from "./pages/settings.svelte";
  import Head from "./lib/components/head.svelte";
  let page = "home";
  type HashEvent = HashChangeEvent & {
    currentTarget: EventTarget & Window;
  };
  const onHashChange = (e?: HashEvent) => {
    let newURL = e ? new URL(e.newURL) : new URL(window.location.href);
    const newHash = newURL.hash;
    const hash = newHash.slice(2);
    page = hash ? hash : "home";
  };
  onMount(onHashChange);
</script>

<svelte:window on:hashchange={(evt) => onHashChange(evt)} />
<Head />
<main>
  <nav>
    <a on:click={() => (window.location.hash = "/")} href="#/">HOME</a>
    <a on:click={() => (window.location.hash = "/settings")} href="#/settings">SETTINGS</a>
  </nav>

  {#if page === "home"}
    <Home />
  {:else if page === "settings"}
    <Settings />
  {:else}
    <Home />
  {/if}
</main>

<style>
  main {
    display: flex;
    flex-direction: column;
    min-width: 100vw;
    min-height: 100vh;
  }
  nav {
    display: flex;
    column-gap: 2rem;
  }
  /* nav a {
	} */
  nav a:hover {
    transform: scale(1.05);
    text-decoration: underline;
  }
</style>
