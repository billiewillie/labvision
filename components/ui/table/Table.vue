<script
  setup
  lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'

const props = defineProps<{
  class?: HTMLAttributes['class']
  transition?: number
}>()

const table = ref<HTMLElement | null>(null)
const valueOfTransition = ref<number>(0)

function scrollTable() {
  if (props.transition === 0) {
    table.value.scrollLeft -= -valueOfTransition.value
  } else {
    valueOfTransition.value = props.transition
    table.value.scrollLeft = -props.transition
  }
}

watch(() => props.transition, scrollTable)
</script>

<template>
  <div
    ref="table"
    class="relative w-full scroll-smooth overflow-hidden rounded-lg">
    <table :class="cn('w-full caption-bottom text-sm', props.class)">
      <slot />
    </table>
  </div>
</template>
