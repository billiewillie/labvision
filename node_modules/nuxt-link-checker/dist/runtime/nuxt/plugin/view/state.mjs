import { useLocalStorage } from "@vueuse/core";
export const linkDb = useLocalStorage("nuxt-link-checker:links", {});
