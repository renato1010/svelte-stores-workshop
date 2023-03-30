<script lang="ts">
  import { settingsStore as settings } from "../stores/settings";
</script>

<svelte:head>
  {#if $settings.colorSchema === "dark"}
    <style>
      :root {
        --backgroundColor: #1d1d1d;
        --textColor: #fff;
      }
    </style>
  {:else}
    <style>
      :root {
        --backgroundColor: #fff;
        --textColor: #000000;
      }
    </style>
  {/if}
</svelte:head>
