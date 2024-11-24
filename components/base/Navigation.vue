<script
  setup
  lang="ts">

import NAVIGATION from '~/data/navigation'

defineProps<{
  ulClass?: string
  linkClass?: string
}>()
</script>

<template>
  <nav>
    <ul :class="ulClass">
      <li
        v-for="item in NAVIGATION"
        :key="item.id">
        <NuxtLink
          :to="item.href"
          :class="linkClass"
          :aria-label="item.title">
          {{ item.title }}
        </NuxtLink>
      </li>
    </ul>
  </nav>

</template>