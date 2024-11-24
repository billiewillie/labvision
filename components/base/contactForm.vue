<script
  setup
  lang="ts">
import {toast} from '@/components/ui/toast'
import {useForm} from 'vee-validate'
import {toTypedSchema} from '@vee-validate/zod'
import {
  FormControl,
  FormField,
  FormItem,
  FormMessage
} from '@/components/ui/form'
import * as z from 'zod'
import {useId, useRuntimeConfig} from '#app'

const {API_ENDPOINT}: { API_ENDPOINT: string } = useRuntimeConfig().public

const nameId = useId()
const contactId = useId()
const cityId = useId()
const messageId = useId()
const checkId = useId()

const formSchema = toTypedSchema(z.object({
  name: z
    .string({message: 'Обязательное поле'})
    .min(2, {message: 'Минимальная длина 2 символа'})
    .max(50, {message: 'Максимальная длина 50 символов'}),
  contact: z
    .string({message: 'Обязательное поле'})
    .min(2, {message: 'Минимальная длина 2 символа'})
    .max(50, {message: 'Максимальная длина 50 символов'}),
  city: z
    .string()
    .min(2, {message: 'Минимальная длина 2 символа'})
    .max(50, {message: 'Максимальная длина 50 символов'})
    .optional(),
  message: z
    .string()
    .optional(),
}))

const form = useForm({
  validationSchema: formSchema
})

const onSubmit = form.handleSubmit(async (values) => {
  const data = {
    contact: values.contact,
    name: values.name,
    text: values.message || '',
    city: values.city
  }
  console.log(data)
  const responseData = await $fetch(
    "https://labvision.bioline.ru/api/feedback",
    {
      method: 'POST',
      body: data
    }
  )
  if (responseData === '200') {
    form.resetForm()
    toast({
      description: 'Заявка отправлена!'
    })
  } else {
    toast({
      description: 'Произошла ошибка!',
      variant: 'destructive'
    })
  }
})
</script>

<template>
  <form
    @submit="onSubmit"
    class="flex flex-col gap-8 bg-background w-full max-w-[400px]">
    <div class="grid gap-8">
      <FormField
        v-slot="{ componentField }"
        name="name">
        <FormItem>
          <FormControl>
            <Input
              type="text"
              name="name"
              :id="nameId"
              placeholder="ФИО"
              v-bind="componentField"/>
          </FormControl>
          <FormMessage/>
        </FormItem>
      </FormField>
      <FormField
        v-slot="{ componentField }"
        name="contact">
        <FormItem>
          <FormControl>
            <Input
              type="text"
              name="contact"
              :id="contactId"
              placeholder="E-mail или телефон"
              v-bind="componentField"/>
          </FormControl>
          <FormMessage/>
        </FormItem>
      </FormField>
      <FormField
        v-slot="{ componentField }"
        name="city">
        <FormItem>
          <FormControl>
            <Input
              type="tel"
              name="city"
              :id="cityId"
              placeholder="Город"
              v-bind="componentField"/>
          </FormControl>
          <FormMessage/>
        </FormItem>
      </FormField>
      <FormField
        v-slot="{ componentField }"
        name="message">
        <FormItem>
          <FormControl>
                  <Textarea
                    placeholder="Сообщение"
                    name="message"
                    :id="messageId"
                    class="resize-none h-full"
                    v-bind="componentField"
                  />
          </FormControl>
          <FormMessage/>
        </FormItem>
      </FormField>
    </div>
    <div class="flex flex-col gap-8">
      <BaseRainbowButton
        type="submit"
        aria-label="submit">Отправить
      </BaseRainbowButton>
    </div>
  </form>
</template>