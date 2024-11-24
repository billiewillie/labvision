<script
  lang="ts"
  setup>
import type { HTMLAttributes } from 'vue'
import type { LabelProps } from 'radix-vue'
import { useFormField } from './useFormField'
import { cn } from '@/lib/utils'
import { Label } from '@/components/ui/label'

const props = defineProps<{ forId: string } & { class?: HTMLAttributes['class'] }>()

const { error } = useFormField()
</script>

<template>
  <Label
    :class="cn(
      error && 'text-destructive',
      props.class,
    )"
    :for="forId"
  >
    <slot />
  </Label>
</template>
