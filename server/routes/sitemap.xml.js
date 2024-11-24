export default defineEventHandler(async (event) => {
  event.node.res.setHeader('Content-Type', 'text/xml')
  const { API_ENDPOINT } = useRuntimeConfig().public

  return await $fetch(`${API_ENDPOINT}/sitemap/generate`)
})
