<script lang="ts">
  import { settingsStore as settings } from "../lib/stores/settings";
</script>

<article>
  <h2>SETTINGS</h2>
  <div class="lang">
    {#if $settings.language === "es"}
      <button
        on:click={() => {
          settings.updateSetting("language", "en");
        }}>update language to English</button
      >
    {:else}
      <button
        on:click={() => {
          settings.updateSetting("language", "es");
        }}>update language to Spanish</button
      >
    {/if}
  </div>
  <p>Lang: {$settings.language}</p>
  <button on:click={() => settings.toggleColorSchema()}>Toggle color scheme</button>
  <p>Theme: {$settings.colorSchema}</p>
  <label>
    <input bind:group={$settings.colorSchema} type="radio" name="colorSchema" value="dark" /> Dark
  </label>
  <label>
    <input bind:group={$settings.colorSchema} type="radio" name="colorSchema" value="light" /> Light
  </label>
  <hr />
  <button on:click={() => settings.reset()}>Reset to default settings</button>
  <pre>
    Current Settings: {JSON.stringify($settings)}
  </pre>
</article>

<style>
  .lang {
    padding: 1rem 0;
  }
  .lang ~ p {
    font-size: 1.4rem;
    font-weight: bold;
  }
  .lang ~ button {
    margin: 1rem 0;
  }
  hr {
    height: 1px;
    background-color: lightgray;
  }
</style>
