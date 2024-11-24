<script setup lang="ts">
import { useCarousel } from './useCarousel'
import type { WithClassAsProps } from './interface'
import { cn } from '@/lib/utils'

defineOptions({
  inheritAttrs: false,
})

const props = defineProps<WithClassAsProps & { isVisible?: boolean } & { isHeightFull?: boolean }>()

const { carouselRef, orientation } = useCarousel()
</script>

<template>
  <div
    ref="carouselRef"
    class="overflow-hidden"
    :class="{ 'overflow-visible': isVisible, 'h-full': isHeightFull }"
  >
    <div
      :class="cn('flex', orientation === 'horizontal' ? '-ml-4' : '-mt-4 flex-col', props.class)"
      v-bind="$attrs"
    >
      <slot />
    </div>
  </div>
</template>
