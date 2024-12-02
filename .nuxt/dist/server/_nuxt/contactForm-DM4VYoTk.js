import { ref, watchEffect, watch, getCurrentInstance, computed, defineComponent, h, mergeProps, unref, useSSRContext, nextTick, provide, inject, withCtx, renderSlot, toValue, createElementBlock, createVNode, createTextVNode } from "vue";
import { composableNames } from "@unhead/shared";
import { i as injectHead, r as resolveUnrefHeadInput, p as parseSize, e as useImage, f as prerenderStaticImages, u as useNuxtApp, d as cn, _ as _export_sfc, t as toast } from "../server.mjs";
import { ssrRenderAttrs, ssrRenderSlot, ssrGetDynamicModelProps, ssrInterpolate, ssrRenderComponent } from "vue/server-renderer";
import { FieldContextKey, useIsFieldValid, useIsFieldDirty, useIsFieldTouched, useFieldError, ErrorMessage, useForm, Field } from "vee-validate";
import { toTypedSchema } from "@vee-validate/zod";
import { useId as useId$1, Slot } from "radix-vue";
import * as z from "zod";
import "hookable";
import "destr";
import "klona";
import "devalue";
import "defu";
import "#internal/nuxt/paths";
function useHead(input, options = {}) {
  const head = options.head || injectHead();
  if (head) {
    if (!head.ssr)
      return clientUseHead(head, input, options);
    return head.push(input, options);
  }
}
function clientUseHead(head, input, options = {}) {
  const deactivated = ref(false);
  const resolvedInput = ref({});
  watchEffect(() => {
    resolvedInput.value = deactivated.value ? {} : resolveUnrefHeadInput(input);
  });
  const entry = head.push(resolvedInput.value, options);
  watch(resolvedInput, (e) => {
    entry.patch(e);
  });
  getCurrentInstance();
  return entry;
}
const coreComposableNames = [
  "injectHead"
];
({
  "@unhead/vue": [...coreComposableNames, ...composableNames]
});
const baseImageProps = {
  // input source
  src: { type: String, default: void 0 },
  // modifiers
  format: { type: String, default: void 0 },
  quality: { type: [Number, String], default: void 0 },
  background: { type: String, default: void 0 },
  fit: { type: String, default: void 0 },
  modifiers: { type: Object, default: void 0 },
  // options
  preset: { type: String, default: void 0 },
  provider: { type: String, default: void 0 },
  sizes: { type: [Object, String], default: void 0 },
  densities: { type: String, default: void 0 },
  preload: {
    type: [Boolean, Object],
    default: void 0
  },
  // <img> attributes
  width: { type: [String, Number], default: void 0 },
  height: { type: [String, Number], default: void 0 },
  alt: { type: String, default: void 0 },
  referrerpolicy: { type: String, default: void 0 },
  usemap: { type: String, default: void 0 },
  longdesc: { type: String, default: void 0 },
  ismap: { type: Boolean, default: void 0 },
  loading: {
    type: String,
    default: void 0,
    validator: (val) => ["lazy", "eager"].includes(val)
  },
  crossorigin: {
    type: [Boolean, String],
    default: void 0,
    validator: (val) => ["anonymous", "use-credentials", "", true, false].includes(val)
  },
  decoding: {
    type: String,
    default: void 0,
    validator: (val) => ["async", "auto", "sync"].includes(val)
  },
  // csp
  nonce: { type: [String], default: void 0 }
};
const useBaseImage = (props) => {
  const options = computed(() => {
    return {
      provider: props.provider,
      preset: props.preset
    };
  });
  const attrs = computed(() => {
    return {
      width: parseSize(props.width),
      height: parseSize(props.height),
      alt: props.alt,
      referrerpolicy: props.referrerpolicy,
      usemap: props.usemap,
      longdesc: props.longdesc,
      ismap: props.ismap,
      crossorigin: props.crossorigin === true ? "anonymous" : props.crossorigin || void 0,
      loading: props.loading,
      decoding: props.decoding,
      nonce: props.nonce
    };
  });
  const $img = useImage();
  const modifiers = computed(() => {
    return {
      ...props.modifiers,
      width: parseSize(props.width),
      height: parseSize(props.height),
      format: props.format,
      quality: props.quality || $img.options.quality,
      background: props.background,
      fit: props.fit
    };
  });
  return {
    options,
    attrs,
    modifiers
  };
};
const imgProps = {
  ...baseImageProps,
  placeholder: { type: [Boolean, String, Number, Array], default: void 0 },
  placeholderClass: { type: String, default: void 0 }
};
const __nuxt_component_1 = defineComponent({
  name: "NuxtImg",
  props: imgProps,
  emits: ["load", "error"],
  setup: (props, ctx) => {
    const $img = useImage();
    const _base = useBaseImage(props);
    const placeholderLoaded = ref(false);
    const imgEl = ref();
    const sizes = computed(() => $img.getSizes(props.src, {
      ..._base.options.value,
      sizes: props.sizes,
      densities: props.densities,
      modifiers: {
        ..._base.modifiers.value,
        width: parseSize(props.width),
        height: parseSize(props.height)
      }
    }));
    const attrs = computed(() => {
      const attrs2 = { ..._base.attrs.value, "data-nuxt-img": "" };
      if (!props.placeholder || placeholderLoaded.value) {
        attrs2.sizes = sizes.value.sizes;
        attrs2.srcset = sizes.value.srcset;
      }
      return attrs2;
    });
    const placeholder = computed(() => {
      let placeholder2 = props.placeholder;
      if (placeholder2 === "") {
        placeholder2 = true;
      }
      if (!placeholder2 || placeholderLoaded.value) {
        return false;
      }
      if (typeof placeholder2 === "string") {
        return placeholder2;
      }
      const size = Array.isArray(placeholder2) ? placeholder2 : typeof placeholder2 === "number" ? [placeholder2, placeholder2] : [10, 10];
      return $img(props.src, {
        ..._base.modifiers.value,
        width: size[0],
        height: size[1],
        quality: size[2] || 50,
        blur: size[3] || 3
      }, _base.options.value);
    });
    const mainSrc = computed(
      () => props.sizes ? sizes.value.src : $img(props.src, _base.modifiers.value, _base.options.value)
    );
    const src = computed(() => placeholder.value ? placeholder.value : mainSrc.value);
    if (props.preload) {
      const isResponsive = Object.values(sizes.value).every((v) => v);
      useHead({
        link: [{
          rel: "preload",
          as: "image",
          nonce: props.nonce,
          ...!isResponsive ? { href: src.value } : {
            href: sizes.value.src,
            imagesizes: sizes.value.sizes,
            imagesrcset: sizes.value.srcset
          },
          ...typeof props.preload !== "boolean" && props.preload.fetchPriority ? { fetchpriority: props.preload.fetchPriority } : {}
        }]
      });
    }
    if (process.env.prerender) {
      prerenderStaticImages(src.value, sizes.value.srcset);
    }
    const nuxtApp = useNuxtApp();
    nuxtApp.isHydrating;
    return () => h("img", {
      ref: imgEl,
      ...{ onerror: "this.setAttribute('data-error', 1)" },
      ...attrs.value,
      ...ctx.attrs,
      class: props.placeholder && !placeholderLoaded.value ? [props.placeholderClass] : void 0,
      src: src.value
    });
  }
});
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "RainbowButton",
  __ssrInlineRender: true,
  props: {
    type: {},
    ariaLabel: {},
    variant: {},
    class: {}
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<button${ssrRenderAttrs(mergeProps({
        type: props.type,
        "aria-label": props.ariaLabel,
        class: ["rainbow-button", unref(cn)(props.variant === "black" ? "black" : "", props.class)]
      }, _attrs))} data-v-9030f131>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</button>`);
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/base/RainbowButton.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-9030f131"]]);
typeof WorkerGlobalScope !== "undefined" && globalThis instanceof WorkerGlobalScope;
const isDef = (val) => typeof val !== "undefined";
function cloneFnJSON(source) {
  return JSON.parse(JSON.stringify(source));
}
function useVModel(props, key, emit, options = {}) {
  var _a, _b, _c;
  const {
    clone = false,
    passive = false,
    eventName,
    deep = false,
    defaultValue,
    shouldEmit
  } = options;
  const vm = getCurrentInstance();
  const _emit = emit || (vm == null ? void 0 : vm.emit) || ((_a = vm == null ? void 0 : vm.$emit) == null ? void 0 : _a.bind(vm)) || ((_c = (_b = vm == null ? void 0 : vm.proxy) == null ? void 0 : _b.$emit) == null ? void 0 : _c.bind(vm == null ? void 0 : vm.proxy));
  let event = eventName;
  event = event || `update:${key.toString()}`;
  const cloneFn = (val) => !clone ? val : typeof clone === "function" ? clone(val) : cloneFnJSON(val);
  const getValue2 = () => isDef(props[key]) ? cloneFn(props[key]) : defaultValue;
  const triggerEmit = (value) => {
    if (shouldEmit) {
      if (shouldEmit(value))
        _emit(event, value);
    } else {
      _emit(event, value);
    }
  };
  if (passive) {
    const initialValue = getValue2();
    const proxy = ref(initialValue);
    let isUpdating = false;
    watch(
      () => props[key],
      (v) => {
        if (!isUpdating) {
          isUpdating = true;
          proxy.value = cloneFn(v);
          nextTick(() => isUpdating = false);
        }
      }
    );
    watch(
      proxy,
      (v) => {
        if (!isUpdating && (v !== props[key] || deep))
          triggerEmit(v);
      },
      { deep }
    );
    return proxy;
  } else {
    return computed({
      get() {
        return getValue2();
      },
      set(value) {
        triggerEmit(value);
      }
    });
  }
}
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "Input",
  __ssrInlineRender: true,
  props: {
    defaultValue: {},
    modelValue: {},
    class: {}
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const modelValue = useVModel(props, "modelValue", emits, {
      passive: true,
      defaultValue: props.defaultValue
    });
    return (_ctx, _push, _parent, _attrs) => {
      let _temp0;
      _push(`<input${ssrRenderAttrs((_temp0 = mergeProps({
        class: unref(cn)("outline-none flex h-10 w-full border-b border-input bg-background px-3 py-2 text-sm text-white ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50", props.class)
      }, _attrs), mergeProps(_temp0, ssrGetDynamicModelProps(_temp0, unref(modelValue)))))}>`);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/input/Input.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "Textarea",
  __ssrInlineRender: true,
  props: {
    class: {},
    defaultValue: {},
    modelValue: {}
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const modelValue = useVModel(props, "modelValue", emits, {
      passive: true,
      defaultValue: props.defaultValue
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<textarea${ssrRenderAttrs(mergeProps({
        class: unref(cn)("outline-none flex min-h-20 w-full border-b text-white border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50", props.class)
      }, _attrs), "textarea")}>${ssrInterpolate(unref(modelValue))}</textarea>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/textarea/Textarea.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const FORM_ITEM_INJECTION_KEY = Symbol();
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "FormItem",
  __ssrInlineRender: true,
  props: {
    class: {}
  },
  setup(__props) {
    const props = __props;
    const id = useId$1();
    provide(FORM_ITEM_INJECTION_KEY, id);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: unref(cn)("space-y-2", props.class)
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/form/FormItem.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
function useFormField() {
  const fieldContext = inject(FieldContextKey);
  const fieldItemContext = inject(FORM_ITEM_INJECTION_KEY);
  const fieldState = {
    valid: useIsFieldValid(),
    isDirty: useIsFieldDirty(),
    isTouched: useIsFieldTouched(),
    error: useFieldError()
  };
  if (!fieldContext)
    throw new Error("useFormField should be used within <FormField>");
  const { name } = fieldContext;
  const id = fieldItemContext;
  return {
    id,
    name,
    formItemId: `${id}-form-item`,
    formDescriptionId: `${id}-form-item-description`,
    formMessageId: `${id}-form-item-message`,
    ...fieldState
  };
}
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "FormControl",
  __ssrInlineRender: true,
  setup(__props) {
    const { error, formItemId, formDescriptionId, formMessageId } = useFormField();
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(Slot), mergeProps({
        id: unref(formItemId),
        "aria-describedby": !unref(error) ? `${unref(formDescriptionId)}` : `${unref(formDescriptionId)} ${unref(formMessageId)}`,
        "aria-invalid": !!unref(error)
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/form/FormControl.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "FormMessage",
  __ssrInlineRender: true,
  setup(__props) {
    const { name, formMessageId } = useFormField();
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(ErrorMessage), mergeProps({
        id: unref(formMessageId),
        as: "p",
        name: toValue(unref(name)),
        class: "text-sm font-medium text-destructive"
      }, _attrs), null, _parent));
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/form/FormMessage.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const clientOnlySymbol = Symbol.for("nuxt:client-only");
defineComponent({
  name: "ClientOnly",
  inheritAttrs: false,
  // eslint-disable-next-line vue/require-prop-types
  props: ["fallback", "placeholder", "placeholderTag", "fallbackTag"],
  setup(_, { slots, attrs }) {
    const mounted = ref(false);
    provide(clientOnlySymbol, true);
    return (props) => {
      var _a;
      if (mounted.value) {
        return (_a = slots.default) == null ? void 0 : _a.call(slots);
      }
      const slot = slots.fallback || slots.placeholder;
      if (slot) {
        return slot();
      }
      const fallbackStr = props.fallback || props.placeholder || "";
      const fallbackTag = props.fallbackTag || props.placeholderTag || "span";
      return createElementBlock(fallbackTag, attrs, fallbackStr);
    };
  }
});
const ATTR_KEY = "data-n-ids";
const SEPARATOR = "-";
function useId(key) {
  var _a;
  if (typeof key !== "string") {
    throw new TypeError("[nuxt] [useId] key must be a string.");
  }
  key = `n${key.slice(1)}`;
  const nuxtApp = useNuxtApp();
  const instance = getCurrentInstance();
  if (!instance) {
    throw new TypeError("[nuxt] `useId` must be called within a component setup function.");
  }
  nuxtApp._id || (nuxtApp._id = 0);
  instance._nuxtIdIndex || (instance._nuxtIdIndex = {});
  (_a = instance._nuxtIdIndex)[key] || (_a[key] = 0);
  const instanceIndex = key + SEPARATOR + instance._nuxtIdIndex[key]++;
  {
    const ids = JSON.parse(instance.attrs[ATTR_KEY] || "{}");
    ids[instanceIndex] = key + SEPARATOR + nuxtApp._id++;
    instance.attrs[ATTR_KEY] = JSON.stringify(ids);
    return ids[instanceIndex];
  }
}
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "contactForm",
  __ssrInlineRender: true,
  emits: ["closeDialog"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const nameId = useId("$b0sWEKjD5v");
    const contactId = useId("$MqBCKLJYWz");
    const cityId = useId("$NMS9KUyklX");
    const messageId = useId("$USQIABCTSd");
    useId("$8LhzuIEANh");
    const formSchema = toTypedSchema(z.object({
      name: z.string({ message: "Обязательное поле" }).min(2, { message: "Минимальная длина 2 символа" }).max(50, { message: "Максимальная длина 50 символов" }),
      contact: z.string({ message: "Обязательное поле" }).min(2, { message: "Минимальная длина 2 символа" }).max(50, { message: "Максимальная длина 50 символов" }),
      city: z.string().min(2, { message: "Минимальная длина 2 символа" }).max(50, { message: "Максимальная длина 50 символов" }).optional(),
      message: z.string().optional()
    }));
    const form = useForm({
      validationSchema: formSchema
    });
    form.handleSubmit(async (values) => {
      const data = {
        contact: values.contact,
        name: values.name,
        text: values.message || "",
        city: values.city
      };
      console.log(data);
      const responseData = await $fetch(
        "https://labvision.bioline.ru/api/feedback",
        {
          method: "POST",
          body: data
        }
      );
      if (responseData === "200") {
        form.resetForm();
        toast({
          description: "Ваше сообщение отправлено!",
          variant: "success"
        });
        emit("closeDialog");
      } else {
        toast({
          description: "Произошла ошибка!",
          variant: "destructive"
        });
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Input = _sfc_main$5;
      const _component_Textarea = _sfc_main$4;
      const _component_BaseRainbowButton = __nuxt_component_4;
      _push(`<form${ssrRenderAttrs(mergeProps({ class: "flex flex-col gap-8 bg-background w-full max-w-[440px]" }, _attrs))}><div class="grid gap-8">`);
      _push(ssrRenderComponent(unref(Field), { name: "name" }, {
        default: withCtx(({ componentField }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(_sfc_main$3), null, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(_sfc_main$2), null, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_Input, mergeProps({
                          type: "text",
                          name: "name",
                          id: unref(nameId),
                          placeholder: "ФИО"
                        }, componentField), null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_Input, mergeProps({
                            type: "text",
                            name: "name",
                            id: unref(nameId),
                            placeholder: "ФИО"
                          }, componentField), null, 16, ["id"])
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(_sfc_main$1), null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(_sfc_main$2), null, {
                      default: withCtx(() => [
                        createVNode(_component_Input, mergeProps({
                          type: "text",
                          name: "name",
                          id: unref(nameId),
                          placeholder: "ФИО"
                        }, componentField), null, 16, ["id"])
                      ]),
                      _: 2
                    }, 1024),
                    createVNode(unref(_sfc_main$1))
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(_sfc_main$3), null, {
                default: withCtx(() => [
                  createVNode(unref(_sfc_main$2), null, {
                    default: withCtx(() => [
                      createVNode(_component_Input, mergeProps({
                        type: "text",
                        name: "name",
                        id: unref(nameId),
                        placeholder: "ФИО"
                      }, componentField), null, 16, ["id"])
                    ]),
                    _: 2
                  }, 1024),
                  createVNode(unref(_sfc_main$1))
                ]),
                _: 2
              }, 1024)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(Field), { name: "contact" }, {
        default: withCtx(({ componentField }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(_sfc_main$3), null, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(_sfc_main$2), null, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_Input, mergeProps({
                          type: "text",
                          name: "contact",
                          id: unref(contactId),
                          placeholder: "E-mail или телефон"
                        }, componentField), null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_Input, mergeProps({
                            type: "text",
                            name: "contact",
                            id: unref(contactId),
                            placeholder: "E-mail или телефон"
                          }, componentField), null, 16, ["id"])
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(_sfc_main$1), null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(_sfc_main$2), null, {
                      default: withCtx(() => [
                        createVNode(_component_Input, mergeProps({
                          type: "text",
                          name: "contact",
                          id: unref(contactId),
                          placeholder: "E-mail или телефон"
                        }, componentField), null, 16, ["id"])
                      ]),
                      _: 2
                    }, 1024),
                    createVNode(unref(_sfc_main$1))
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(_sfc_main$3), null, {
                default: withCtx(() => [
                  createVNode(unref(_sfc_main$2), null, {
                    default: withCtx(() => [
                      createVNode(_component_Input, mergeProps({
                        type: "text",
                        name: "contact",
                        id: unref(contactId),
                        placeholder: "E-mail или телефон"
                      }, componentField), null, 16, ["id"])
                    ]),
                    _: 2
                  }, 1024),
                  createVNode(unref(_sfc_main$1))
                ]),
                _: 2
              }, 1024)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(Field), { name: "city" }, {
        default: withCtx(({ componentField }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(_sfc_main$3), null, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(_sfc_main$2), null, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_Input, mergeProps({
                          type: "tel",
                          name: "city",
                          id: unref(cityId),
                          placeholder: "Город"
                        }, componentField), null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_Input, mergeProps({
                            type: "tel",
                            name: "city",
                            id: unref(cityId),
                            placeholder: "Город"
                          }, componentField), null, 16, ["id"])
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(_sfc_main$1), null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(_sfc_main$2), null, {
                      default: withCtx(() => [
                        createVNode(_component_Input, mergeProps({
                          type: "tel",
                          name: "city",
                          id: unref(cityId),
                          placeholder: "Город"
                        }, componentField), null, 16, ["id"])
                      ]),
                      _: 2
                    }, 1024),
                    createVNode(unref(_sfc_main$1))
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(_sfc_main$3), null, {
                default: withCtx(() => [
                  createVNode(unref(_sfc_main$2), null, {
                    default: withCtx(() => [
                      createVNode(_component_Input, mergeProps({
                        type: "tel",
                        name: "city",
                        id: unref(cityId),
                        placeholder: "Город"
                      }, componentField), null, 16, ["id"])
                    ]),
                    _: 2
                  }, 1024),
                  createVNode(unref(_sfc_main$1))
                ]),
                _: 2
              }, 1024)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(Field), { name: "message" }, {
        default: withCtx(({ componentField }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(_sfc_main$3), null, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(_sfc_main$2), null, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_Textarea, mergeProps({
                          placeholder: "Сообщение",
                          name: "message",
                          id: unref(messageId),
                          class: "resize-none h-full"
                        }, componentField), null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_Textarea, mergeProps({
                            placeholder: "Сообщение",
                            name: "message",
                            id: unref(messageId),
                            class: "resize-none h-full"
                          }, componentField), null, 16, ["id"])
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(_sfc_main$1), null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(_sfc_main$2), null, {
                      default: withCtx(() => [
                        createVNode(_component_Textarea, mergeProps({
                          placeholder: "Сообщение",
                          name: "message",
                          id: unref(messageId),
                          class: "resize-none h-full"
                        }, componentField), null, 16, ["id"])
                      ]),
                      _: 2
                    }, 1024),
                    createVNode(unref(_sfc_main$1))
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(_sfc_main$3), null, {
                default: withCtx(() => [
                  createVNode(unref(_sfc_main$2), null, {
                    default: withCtx(() => [
                      createVNode(_component_Textarea, mergeProps({
                        placeholder: "Сообщение",
                        name: "message",
                        id: unref(messageId),
                        class: "resize-none h-full"
                      }, componentField), null, 16, ["id"])
                    ]),
                    _: 2
                  }, 1024),
                  createVNode(unref(_sfc_main$1))
                ]),
                _: 2
              }, 1024)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="flex flex-col gap-8">`);
      _push(ssrRenderComponent(_component_BaseRainbowButton, {
        type: "submit",
        "aria-label": "submit"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Отправить `);
          } else {
            return [
              createTextVNode("Отправить ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></form>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/base/contactForm.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  __nuxt_component_1 as _,
  __nuxt_component_4 as a,
  _sfc_main as b
};
//# sourceMappingURL=contactForm-DM4VYoTk.js.map
