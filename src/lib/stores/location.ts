import { readable } from "svelte/store";

const location = readable<{ latitude: number; longitude: number } | null>(null, (set) => {
  let watchId: number;
  if (navigator?.geolocation?.watchPosition ?? false) {
    watchId = navigator.geolocation.watchPosition(
      (position) => {
        console.log({ position });
        const {
          coords: { latitude, longitude },
        } = position;
        set({ latitude, longitude });
      },
      (e) => {
        console.error({ e });
      },
      { maximumAge: 60_000, timeout: 5_000, enableHighAccuracy: true }
    );
  }
  return () => {
    if (navigator?.geolocation?.clearWatch ?? false) {
      navigator.geolocation.clearWatch(watchId);
      set(null);
    }
  };
});

export { location };
