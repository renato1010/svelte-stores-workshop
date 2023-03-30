<script lang="ts">
  import { settingsStore as settings, location } from "../lib/stores";
</script>

<article>
  <h2>HOME</h2>
  {$settings.colorSchema}
  <p>Location: <span>Lat: {$location?.latitude ?? ""}, Long: {$location?.longitude ?? ""}</span></p>
</article>

<style>
  p > span {
    font-weight: bold;
  }
</style>
