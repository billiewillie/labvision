import { defineEventHandler } from "h3";
import { useRuntimeConfig } from "#imports";
export default defineEventHandler(async (e) => {
  return {
    runtimeConfig: useRuntimeConfig(e).public["nuxt-link-checker"]
  };
});
