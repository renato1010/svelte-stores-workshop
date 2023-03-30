import { writable } from "svelte/store";

export type ColorSchema = "light" | "dark";
export type LanguageSetting = "en" | "es";
export type FontSize = 12 | 14 | 16 | 18 | 20 | 22 | 24;

export type SettingsStore = {
  colorSchema: ColorSchema;
  language: LanguageSetting;
  fontSize: FontSize;
};

const defaultSettings: SettingsStore = {
  colorSchema: "dark",
  language: "en",
  fontSize: 12,
};
function createSettingsStore() {
  const { subscribe, set, update } = writable<SettingsStore>({...defaultSettings});
  return {
    subscribe,
    set,
    update,
    updateSetting: <K extends keyof SettingsStore>(setting: K, value: SettingsStore[K]) => {
      update((settings) => ({ ...settings, [setting]: value }));
    },
    toggleColorSchema: () => {
      update((settings) => ({
        ...settings,
        colorSchema: settings.colorSchema === "light" ? "dark" : "light",
      }));
    },
    reset: () => set({ ...defaultSettings }),
  };
}
const settingsStore = createSettingsStore();

// export const { reset, set, subscribe, toggleColorSchema, update, updateSetting } = createSettingsStore();
export { settingsStore };
