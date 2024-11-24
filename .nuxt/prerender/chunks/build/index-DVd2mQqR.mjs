import { _ as __nuxt_component_4, a as __nuxt_component_1 } from './RainbowButton-CjW1cabr.mjs';
import { useSSRContext, defineComponent, ref, provide, createElementBlock, mergeProps, unref, withCtx, renderSlot, createVNode, toValue, createTextVNode, getCurrentInstance, watch, nextTick, computed, inject } from 'file:///Users/belinovich/Desktop/web/labvision/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderSlot, ssrRenderComponent, ssrGetDynamicModelProps, ssrInterpolate, ssrRenderAttr } from 'file:///Users/belinovich/Desktop/web/labvision/node_modules/vue/server-renderer/index.mjs';
import emblaCarouselVue from 'file:///Users/belinovich/Desktop/web/labvision/node_modules/embla-carousel-vue/esm/embla-carousel-vue.esm.js';
import { _ as _export_sfc, c as cn, a as useRuntimeConfig, t as toast, u as useNuxtApp } from './server.mjs';
import { ChevronLeft, ChevronRight } from 'file:///Users/belinovich/Desktop/web/labvision/node_modules/lucide-vue-next/dist/cjs/lucide-vue-next.js';
import { cva } from 'file:///Users/belinovich/Desktop/web/labvision/node_modules/class-variance-authority/dist/index.mjs';
import { Primitive, useId as useId$1, Slot } from 'file:///Users/belinovich/Desktop/web/labvision/node_modules/radix-vue/dist/index.js';
import { ErrorMessage, useForm, Field, FieldContextKey, useIsFieldValid, useIsFieldDirty, useIsFieldTouched, useFieldError } from 'file:///Users/belinovich/Desktop/web/labvision/node_modules/vee-validate/dist/vee-validate.js';
import { toTypedSchema } from 'file:///Users/belinovich/Desktop/web/labvision/node_modules/@vee-validate/zod/dist/vee-validate-zod.js';
import * as z from 'file:///Users/belinovich/Desktop/web/labvision/node_modules/zod/lib/index.mjs';
import { p as publicAssetsURL } from '../_/renderer.mjs';
import 'file:///Users/belinovich/Desktop/web/labvision/node_modules/@unhead/shared/dist/index.mjs';
import 'file:///Users/belinovich/Desktop/web/labvision/node_modules/ofetch/dist/node.mjs';
import 'file:///Users/belinovich/Desktop/web/labvision/node_modules/hookable/dist/index.mjs';
import 'file:///Users/belinovich/Desktop/web/labvision/node_modules/unctx/dist/index.mjs';
import 'file:///Users/belinovich/Desktop/web/labvision/node_modules/h3/dist/index.mjs';
import 'file:///Users/belinovich/Desktop/web/labvision/node_modules/unhead/dist/index.mjs';
import 'file:///Users/belinovich/Desktop/web/labvision/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file:///Users/belinovich/Desktop/web/labvision/node_modules/ufo/dist/index.mjs';
import 'file:///Users/belinovich/Desktop/web/labvision/node_modules/radix3/dist/index.mjs';
import 'file:///Users/belinovich/Desktop/web/labvision/node_modules/defu/dist/defu.mjs';
import 'file:///Users/belinovich/Desktop/web/labvision/node_modules/clsx/dist/clsx.mjs';
import 'file:///Users/belinovich/Desktop/web/labvision/node_modules/tailwind-merge/dist/bundle-mjs.mjs';
import 'file:///Users/belinovich/Desktop/web/labvision/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file:///Users/belinovich/Desktop/web/labvision/node_modules/devalue/index.js';
import 'file:///Users/belinovich/Desktop/web/labvision/node_modules/@unhead/ssr/dist/index.mjs';
import '../runtime.mjs';
import 'file:///Users/belinovich/Desktop/web/labvision/node_modules/destr/dist/index.mjs';
import 'file:///Users/belinovich/Desktop/web/labvision/node_modules/unenv/runtime/fetch/index.mjs';
import 'file:///Users/belinovich/Desktop/web/labvision/node_modules/klona/dist/index.mjs';
import 'file:///Users/belinovich/Desktop/web/labvision/node_modules/scule/dist/index.mjs';
import 'file:///Users/belinovich/Desktop/web/labvision/node_modules/ohash/dist/index.mjs';
import 'file:///Users/belinovich/Desktop/web/labvision/node_modules/unstorage/dist/index.mjs';
import 'file:///Users/belinovich/Desktop/web/labvision/node_modules/unstorage/drivers/fs.mjs';
import 'file:///Users/belinovich/Desktop/web/labvision/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file:///Users/belinovich/Desktop/web/labvision/node_modules/unstorage/drivers/lru-cache.mjs';
import 'node:fs';
import 'node:url';
import 'file:///Users/belinovich/Desktop/web/labvision/node_modules/pathe/dist/index.mjs';
import 'file:///Users/belinovich/Desktop/web/labvision/node_modules/ipx/dist/index.mjs';

const localProvidedStateMap = /* @__PURE__ */ new WeakMap();
const provideLocal = (key, value) => {
  var _a;
  const instance = (_a = getCurrentInstance()) == null ? void 0 : _a.proxy;
  if (instance == null)
    throw new Error("provideLocal must be called in setup");
  if (!localProvidedStateMap.has(instance))
    localProvidedStateMap.set(instance, /* @__PURE__ */ Object.create(null));
  const localProvidedState = localProvidedStateMap.get(instance);
  localProvidedState[key] = value;
  provide(key, value);
};
const injectLocal = (...args) => {
  var _a;
  const key = args[0];
  const instance = (_a = getCurrentInstance()) == null ? void 0 : _a.proxy;
  if (instance == null)
    throw new Error("injectLocal must be called in setup");
  if (localProvidedStateMap.has(instance) && key in localProvidedStateMap.get(instance))
    return localProvidedStateMap.get(instance)[key];
  return inject(...args);
};
function createInjectionState(composable, options) {
  const key = Symbol(composable.name || "InjectionState");
  const defaultValue = void 0;
  const useProvidingState = (...args) => {
    const state = composable(...args);
    provideLocal(key, state);
    return state;
  };
  const useInjectedState = () => injectLocal(key, defaultValue);
  return [useProvidingState, useInjectedState];
}
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
const [useProvideCarousel, useInjectCarousel] = createInjectionState(
  ({
    opts,
    orientation,
    plugins
  }, emits) => {
    const [emblaNode, emblaApi] = emblaCarouselVue({
      ...opts,
      axis: orientation === "horizontal" ? "x" : "y"
    }, plugins);
    function scrollPrev() {
      var _a;
      (_a = emblaApi.value) == null ? void 0 : _a.scrollPrev();
    }
    function scrollNext() {
      var _a;
      (_a = emblaApi.value) == null ? void 0 : _a.scrollNext();
    }
    const canScrollNext = ref(true);
    const canScrollPrev = ref(true);
    return { carouselRef: emblaNode, carouselApi: emblaApi, canScrollPrev, canScrollNext, scrollPrev, scrollNext, orientation };
  }
);
function useCarousel() {
  const carouselState = useInjectCarousel();
  if (!carouselState)
    throw new Error("useCarousel must be used within a <Carousel />");
  return carouselState;
}
const _sfc_main$c = /* @__PURE__ */ defineComponent({
  __name: "Carousel",
  __ssrInlineRender: true,
  props: {
    opts: {},
    plugins: {},
    orientation: { default: "horizontal" },
    class: {}
  },
  emits: ["init-api"],
  setup(__props, { expose: __expose, emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const carouselArgs = useProvideCarousel(props, emits);
    __expose(carouselArgs);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: unref(cn)("relative", props.class),
        role: "region",
        "aria-roledescription": "carousel",
        tabindex: "0"
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", unref(carouselArgs), null, _push, _parent);
      _push(`</div>`);
    };
  }
});
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/carousel/Carousel.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
const _sfc_main$b = /* @__PURE__ */ defineComponent({
  ...{
    inheritAttrs: false
  },
  __name: "CarouselContent",
  __ssrInlineRender: true,
  props: {
    class: {},
    isVisible: { type: Boolean },
    isHeightFull: { type: Boolean }
  },
  setup(__props) {
    const props = __props;
    const { carouselRef, orientation } = useCarousel();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        ref_key: "carouselRef",
        ref: carouselRef,
        class: ["overflow-hidden", { "overflow-visible": _ctx.isVisible, "h-full": _ctx.isHeightFull }]
      }, _attrs))}><div${ssrRenderAttrs(mergeProps({
        class: unref(cn)("flex", unref(orientation) === "horizontal" ? "-ml-4" : "-mt-4 flex-col", props.class)
      }, _ctx.$attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/carousel/CarouselContent.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const _sfc_main$a = /* @__PURE__ */ defineComponent({
  __name: "CarouselItem",
  __ssrInlineRender: true,
  props: {
    class: {}
  },
  setup(__props) {
    const props = __props;
    const { orientation } = useCarousel();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        role: "group",
        "aria-roledescription": "slide",
        class: unref(cn)(
          "min-w-0 shrink-0 grow-0 basis-full",
          unref(orientation) === "horizontal" ? "pl-4" : "pt-4",
          props.class
        )
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
});
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/carousel/CarouselItem.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  __name: "Button",
  __ssrInlineRender: true,
  props: {
    variant: {},
    size: {},
    class: {},
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(Primitive), mergeProps({
        as: _ctx.as,
        "as-child": _ctx.asChild,
        class: unref(cn)(unref(buttonVariants)({ class: void 0, className: void 0, variant: _ctx.variant, size: _ctx.size }), props.class)
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
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/button/Button.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-primary bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-10 px-4 py-2",
        xs: "h-7 rounded px-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "CarouselPrevious",
  __ssrInlineRender: true,
  props: {
    class: {}
  },
  setup(__props) {
    const props = __props;
    const { orientation, canScrollPrev, scrollPrev } = useCarousel();
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(_sfc_main$9), mergeProps({
        disabled: !unref(canScrollPrev),
        class: unref(cn)(
          "touch-manipulation absolute h-8 w-8 rounded-full p-0 border-foreground bg-transparent",
          unref(orientation) === "horizontal" ? "-left-12 top-1/2 -translate-y-1/2" : "-top-12 left-1/2 -translate-x-1/2 rotate-90",
          props.class
        ),
        variant: "outline",
        onClick: unref(scrollPrev),
        "aria-label": "previous"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, () => {
              _push2(ssrRenderComponent(unref(ChevronLeft), { class: "h-6 w-6" }, null, _parent2, _scopeId));
            }, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default", {}, () => [
                createVNode(unref(ChevronLeft), { class: "h-6 w-6" })
              ])
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/carousel/CarouselPrevious.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "CarouselNext",
  __ssrInlineRender: true,
  props: {
    class: {}
  },
  setup(__props) {
    const props = __props;
    const { orientation, canScrollNext, scrollNext } = useCarousel();
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(_sfc_main$9), mergeProps({
        disabled: !unref(canScrollNext),
        class: unref(cn)(
          "touch-manipulation absolute h-8 w-8 rounded-full p-0 border-foreground bg-transparent",
          unref(orientation) === "horizontal" ? "-right-12 top-1/2 -translate-y-1/2" : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90",
          props.class
        ),
        variant: "outline",
        onClick: unref(scrollNext),
        "aria-label": "next"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, () => {
              _push2(ssrRenderComponent(unref(ChevronRight), { class: "h-6 w-6" }, null, _parent2, _scopeId));
            }, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default", {}, () => [
                createVNode(unref(ChevronRight), { class: "h-6 w-6" })
              ])
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/carousel/CarouselNext.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
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
        class: unref(cn)("flex h-10 w-full border-b border-input bg-foreground px-3 py-2 text-sm text-white ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50", props.class)
      }, _attrs), mergeProps(_temp0, ssrGetDynamicModelProps(_temp0, unref(modelValue)))))}>`);
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/input/Input.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
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
        class: unref(cn)("flex min-h-20 w-full border-b text-white border-input bg-foreground px-3 py-2 text-sm placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50 focus:border-none", props.class)
      }, _attrs), "textarea")}>${ssrInterpolate(unref(modelValue))}</textarea>`);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/textarea/Textarea.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const FORM_ITEM_INJECTION_KEY = Symbol();
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
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
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/form/FormItem.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
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
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
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
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/form/FormControl.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
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
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/form/FormMessage.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
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
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "contactForm",
  __ssrInlineRender: true,
  setup(__props) {
    useRuntimeConfig().public;
    const nameId = useId("$b0sWEKjD5v");
    const contactId = useId("$MqBCKLJYWz");
    const cityId = useId("$NMS9KUyklX");
    const messageId = useId("$USQIABCTSd");
    useId("$8LhzuIEANh");
    const formSchema = toTypedSchema(z.object({
      name: z.string({ message: "\u041E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0435 \u043F\u043E\u043B\u0435" }).min(2, { message: "\u041C\u0438\u043D\u0438\u043C\u0430\u043B\u044C\u043D\u0430\u044F \u0434\u043B\u0438\u043D\u0430 2 \u0441\u0438\u043C\u0432\u043E\u043B\u0430" }).max(50, { message: "\u041C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u0430\u044F \u0434\u043B\u0438\u043D\u0430 50 \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432" }),
      contact: z.string({ message: "\u041E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0435 \u043F\u043E\u043B\u0435" }).min(2, { message: "\u041C\u0438\u043D\u0438\u043C\u0430\u043B\u044C\u043D\u0430\u044F \u0434\u043B\u0438\u043D\u0430 2 \u0441\u0438\u043C\u0432\u043E\u043B\u0430" }).max(50, { message: "\u041C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u0430\u044F \u0434\u043B\u0438\u043D\u0430 50 \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432" }),
      city: z.string().min(2, { message: "\u041C\u0438\u043D\u0438\u043C\u0430\u043B\u044C\u043D\u0430\u044F \u0434\u043B\u0438\u043D\u0430 2 \u0441\u0438\u043C\u0432\u043E\u043B\u0430" }).max(50, { message: "\u041C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u0430\u044F \u0434\u043B\u0438\u043D\u0430 50 \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432" }).optional(),
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
          description: "\u0417\u0430\u044F\u0432\u043A\u0430 \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0430!"
        });
      } else {
        toast({
          description: "\u041F\u0440\u043E\u0438\u0437\u043E\u0448\u043B\u0430 \u043E\u0448\u0438\u0431\u043A\u0430!",
          variant: "destructive"
        });
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Input = _sfc_main$6;
      const _component_Textarea = _sfc_main$5;
      const _component_BaseRainbowButton = __nuxt_component_4;
      _push(`<form${ssrRenderAttrs(mergeProps({ class: "flex flex-col gap-8 bg-foreground w-full max-w-[400px]" }, _attrs))}><div class="grid gap-8">`);
      _push(ssrRenderComponent(unref(Field), { name: "name" }, {
        default: withCtx(({ componentField }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(_sfc_main$4), null, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(_sfc_main$3), null, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_Input, mergeProps({
                          type: "text",
                          name: "name",
                          id: unref(nameId),
                          placeholder: "\u0424\u0418\u041E"
                        }, componentField), null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_Input, mergeProps({
                            type: "text",
                            name: "name",
                            id: unref(nameId),
                            placeholder: "\u0424\u0418\u041E"
                          }, componentField), null, 16, ["id"])
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(_sfc_main$2), null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(_sfc_main$3), null, {
                      default: withCtx(() => [
                        createVNode(_component_Input, mergeProps({
                          type: "text",
                          name: "name",
                          id: unref(nameId),
                          placeholder: "\u0424\u0418\u041E"
                        }, componentField), null, 16, ["id"])
                      ]),
                      _: 2
                    }, 1024),
                    createVNode(unref(_sfc_main$2))
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(_sfc_main$4), null, {
                default: withCtx(() => [
                  createVNode(unref(_sfc_main$3), null, {
                    default: withCtx(() => [
                      createVNode(_component_Input, mergeProps({
                        type: "text",
                        name: "name",
                        id: unref(nameId),
                        placeholder: "\u0424\u0418\u041E"
                      }, componentField), null, 16, ["id"])
                    ]),
                    _: 2
                  }, 1024),
                  createVNode(unref(_sfc_main$2))
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
            _push2(ssrRenderComponent(unref(_sfc_main$4), null, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(_sfc_main$3), null, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_Input, mergeProps({
                          type: "text",
                          name: "contact",
                          id: unref(contactId),
                          placeholder: "E-mail \u0438\u043B\u0438 \u0442\u0435\u043B\u0435\u0444\u043E\u043D"
                        }, componentField), null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_Input, mergeProps({
                            type: "text",
                            name: "contact",
                            id: unref(contactId),
                            placeholder: "E-mail \u0438\u043B\u0438 \u0442\u0435\u043B\u0435\u0444\u043E\u043D"
                          }, componentField), null, 16, ["id"])
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(_sfc_main$2), null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(_sfc_main$3), null, {
                      default: withCtx(() => [
                        createVNode(_component_Input, mergeProps({
                          type: "text",
                          name: "contact",
                          id: unref(contactId),
                          placeholder: "E-mail \u0438\u043B\u0438 \u0442\u0435\u043B\u0435\u0444\u043E\u043D"
                        }, componentField), null, 16, ["id"])
                      ]),
                      _: 2
                    }, 1024),
                    createVNode(unref(_sfc_main$2))
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(_sfc_main$4), null, {
                default: withCtx(() => [
                  createVNode(unref(_sfc_main$3), null, {
                    default: withCtx(() => [
                      createVNode(_component_Input, mergeProps({
                        type: "text",
                        name: "contact",
                        id: unref(contactId),
                        placeholder: "E-mail \u0438\u043B\u0438 \u0442\u0435\u043B\u0435\u0444\u043E\u043D"
                      }, componentField), null, 16, ["id"])
                    ]),
                    _: 2
                  }, 1024),
                  createVNode(unref(_sfc_main$2))
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
            _push2(ssrRenderComponent(unref(_sfc_main$4), null, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(_sfc_main$3), null, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_Input, mergeProps({
                          type: "tel",
                          name: "city",
                          id: unref(cityId),
                          placeholder: "\u0413\u043E\u0440\u043E\u0434"
                        }, componentField), null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_Input, mergeProps({
                            type: "tel",
                            name: "city",
                            id: unref(cityId),
                            placeholder: "\u0413\u043E\u0440\u043E\u0434"
                          }, componentField), null, 16, ["id"])
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(_sfc_main$2), null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(_sfc_main$3), null, {
                      default: withCtx(() => [
                        createVNode(_component_Input, mergeProps({
                          type: "tel",
                          name: "city",
                          id: unref(cityId),
                          placeholder: "\u0413\u043E\u0440\u043E\u0434"
                        }, componentField), null, 16, ["id"])
                      ]),
                      _: 2
                    }, 1024),
                    createVNode(unref(_sfc_main$2))
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(_sfc_main$4), null, {
                default: withCtx(() => [
                  createVNode(unref(_sfc_main$3), null, {
                    default: withCtx(() => [
                      createVNode(_component_Input, mergeProps({
                        type: "tel",
                        name: "city",
                        id: unref(cityId),
                        placeholder: "\u0413\u043E\u0440\u043E\u0434"
                      }, componentField), null, 16, ["id"])
                    ]),
                    _: 2
                  }, 1024),
                  createVNode(unref(_sfc_main$2))
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
            _push2(ssrRenderComponent(unref(_sfc_main$4), null, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(_sfc_main$3), null, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_Textarea, mergeProps({
                          placeholder: "\u0421\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435",
                          name: "message",
                          id: unref(messageId),
                          class: "resize-none h-full"
                        }, componentField), null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_Textarea, mergeProps({
                            placeholder: "\u0421\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435",
                            name: "message",
                            id: unref(messageId),
                            class: "resize-none h-full"
                          }, componentField), null, 16, ["id"])
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(_sfc_main$2), null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(_sfc_main$3), null, {
                      default: withCtx(() => [
                        createVNode(_component_Textarea, mergeProps({
                          placeholder: "\u0421\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435",
                          name: "message",
                          id: unref(messageId),
                          class: "resize-none h-full"
                        }, componentField), null, 16, ["id"])
                      ]),
                      _: 2
                    }, 1024),
                    createVNode(unref(_sfc_main$2))
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(_sfc_main$4), null, {
                default: withCtx(() => [
                  createVNode(unref(_sfc_main$3), null, {
                    default: withCtx(() => [
                      createVNode(_component_Textarea, mergeProps({
                        placeholder: "\u0421\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435",
                        name: "message",
                        id: unref(messageId),
                        class: "resize-none h-full"
                      }, componentField), null, 16, ["id"])
                    ]),
                    _: 2
                  }, 1024),
                  createVNode(unref(_sfc_main$2))
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
            _push2(`\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C `);
          } else {
            return [
              createTextVNode("\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></form>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/base/contactForm.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _imports_0 = publicAssetsURL("/img/first-screen-poster.webp");
const _imports_1 = publicAssetsURL("/video/video-1.mp4");
const _imports_2 = publicAssetsURL("/video/video-2.mp4");
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtImg = __nuxt_component_1;
  const _component_Carousel = _sfc_main$c;
  const _component_CarouselContent = _sfc_main$b;
  const _component_CarouselItem = _sfc_main$a;
  const _component_CarouselPrevious = _sfc_main$8;
  const _component_CarouselNext = _sfc_main$7;
  const _component_BaseContactForm = _sfc_main$1;
  _push(`<main${ssrRenderAttrs(_attrs)}><section class="relative"><video class="absolute z-10 w-full left-0 top-0 h-full object-cover object-center" loop muted autoplay playsinline${ssrRenderAttr("poster", _imports_0)}><source${ssrRenderAttr("src", _imports_1)} type="video/mp4"></video><div class="absolute z-20 w-full left-0 top-0 h-full bg-black/60"></div><div class="container h-[calc(100vh-90px)] relative z-20 flex flex-col gap-4 lg:gap-4 items-center justify-center"><h1 class="~text-[22px]/[30px] md:~text-[40px]/[60px] lg:~text-[60px]/[70px] xl:text-[88px] uppercase font-bold text-white/70 leading-none text-center"> \u043F\u0440\u043E\u0442\u043E\u0447\u043D\u0430\u044F \u0446\u0438\u0442\u043E\u043C\u0435\u0442\u0440\u0438\u044F </h1><p class="~text-[18px]/[24px] md:~text-[30px]/[40px] lg:~text-[40px]/[50px] xl:text-[62px] uppercase font-light text-white/70 leading-none text-center"> \u0431\u0435\u0437 \u0433\u0440\u0430\u043D\u0438\u0446 \u0438 \u043E\u0433\u0440\u0430\u043D\u0438\u0447\u0435\u043D\u0438\u0439 </p></div></section><section class="py-16 lg:pb-0 lg:pt-24 scroll-mt-16" id="cellriver"><div class="container grid xl:grid-cols-2 justify-between"><div>`);
  _push(ssrRenderComponent(_component_NuxtImg, {
    class: "w-full flex justify-center",
    format: "webp",
    alt: "\u041F\u0440\u043E\u0442\u043E\u0447\u043D\u044B\u0439 \u0446\u0438\u0442\u043E\u043C\u0435\u0442\u0440 CELLRIVER",
    title: "\u041F\u0440\u043E\u0442\u043E\u0447\u043D\u044B\u0439 \u0446\u0438\u0442\u043E\u043C\u0435\u0442\u0440 CELLRIVER",
    src: "/img/item-photo-1.webp"
  }, null, _parent));
  _push(`</div><div class="xl:pl-16 flex flex-col gap-6"><h2 class="text-[50px] font-extralight leading-[55px]">\u041F\u0440\u043E\u0442\u043E\u0447\u043D\u044B\u0439 \u0446\u0438\u0442\u043E\u043C\u0435\u0442\u0440 <span class="text-primary">CELLRIVER</span></h2><p class="text-[18px]">\u041F\u0435\u0440\u0432\u044B\u0439 \u0440\u043E\u0441\u0441\u0438\u0439\u0441\u043A\u0438\u0439 \u043F\u0440\u043E\u0442\u043E\u0447\u043D\u044B\u0439 \u0446\u0438\u0442\u043E\u043C\u0435\u0442\u0440 \u0434\u043B\u044F\xA0\u0448\u0438\u0440\u043E\u043A\u043E\u0433\u043E \u043A\u0440\u0443\u0433\u0430 \u043D\u0430\u0443\u0447\u043D\u044B\u0445 \u0438\u0441\u0441\u043B\u0435\u0434\u043E\u0432\u0430\u043D\u0438\u0439, \u0441\u043A\u0440\u0438\u043D\u0438\u043D\u0433\u043E\u0432\u044B\u0445 \u0438\u0441\u0441\u043B\u0435\u0434\u043E\u0432\u0430\u043D\u0438\u0439 \u0438\xA0\u0444\u0430\u0440\u043C\u0430\u0446\u0435\u0432\u0442\u0438\u0447\u0435\u0441\u043A\u0438\u0445 \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043E\u043A*.</p><p class="text-[30px] font-light leading-[35px] text-primary">\u0421\u043E\u0437\u0434\u0430\u043D \u0441 \u0443\u0447\u0451\u0442\u043E\u043C \u0430\u043A\u0442\u0443\u0430\u043B\u044C\u043D\u044B\u0445 \u0442\u0440\u0435\u0431\u043E\u0432\u0430\u043D\u0438\u0439 \u0438 \u043C\u0438\u0440\u043E\u0432\u044B\u0445 \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043E\u0432 \u043E\u0442\u0440\u0430\u0441\u043B\u0438.</p><p class="text-[18px]">\u041C\u043E\u0434\u0435\u043B\u044C, \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u0430\u043D\u043D\u0430\u044F \u0434\u043B\u044F\xA0\u043A\u043B\u0438\u043D\u0438\u0447\u0435\u0441\u043A\u043E\u0433\u043E \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u044F, \u043D\u0430\u0445\u043E\u0434\u0438\u0442\u0441\u044F \u0432\xA0\u043F\u0440\u043E\u0446\u0435\u0441\u0441\u0435 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438.</p></div></div></section><section class="py-16 lg:py-24 bg-foreground text-white"><div class="container"><ul class="grid grid-cols-2 lg:grid-cols-3 gap-y-8 lg:gap-y-16 gap-x-16 lg:gap-x-24"><li class="flex flex-col gap-4 ~text-[16px]/[20px]">`);
  _push(ssrRenderComponent(_component_NuxtImg, {
    width: "72",
    class: "w-[72px] h-[80px]",
    src: "/icons/service-icon-1.svg"
  }, null, _parent));
  _push(`<p>\u041F\u0440\u043E\u0438\u0437\u0432\u0435\u0434\u0435\u043D\u043E \u0432\xA0\u0420\u043E\u0441\u0441\u0438\u0438</p></li><li class="flex flex-col gap-4 ~text-[16px]/[20px]">`);
  _push(ssrRenderComponent(_component_NuxtImg, {
    width: "72",
    class: "w-[72px] h-[80px]",
    src: "/icons/service-icon-2.svg"
  }, null, _parent));
  _push(`<p>\u0422\u0449\u0430\u0442\u0435\u043B\u044C\u043D\u044B\u0439 \u043A\u043E\u043D\u0442\u0440\u043E\u043B\u044C \u043A\u0430\u0436\u0434\u043E\u0433\u043E \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u0430 \u0432\xA0\u0441\u0438\u0441\u0442\u0435\u043C\u0435</p></li><li class="flex flex-col gap-4 ~text-[16px]/[20px]">`);
  _push(ssrRenderComponent(_component_NuxtImg, {
    width: "72",
    class: "w-[72px] h-[80px]",
    src: "/icons/service-icon-3.svg"
  }, null, _parent));
  _push(`<p>\u041A\u043E\u0440\u043E\u0442\u043A\u0438\u0435 \u0441\u0440\u043E\u043A\u0438 \u043F\u043E\u0441\u0442\u0430\u0432\u043A\u0438</p></li><li class="flex flex-col gap-4 ~text-[16px]/[20px]">`);
  _push(ssrRenderComponent(_component_NuxtImg, {
    width: "72",
    class: "w-[72px] h-[80px]",
    src: "/icons/service-icon-4.svg"
  }, null, _parent));
  _push(`<p>\u041F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u043D\u043E\u0435 \u043E\u0431\u0435\u0441\u043F\u0435\u0447\u0435\u043D\u0438\u0435 \u043D\u0430\xA0\u0440\u0443\u0441\u0441\u043A\u043E\u043C\xA0\u044F\u0437\u044B\u043A\u0435</p></li><li class="flex flex-col gap-4 ~text-[16px]/[20px]">`);
  _push(ssrRenderComponent(_component_NuxtImg, {
    width: "72",
    class: "w-[72px] h-[80px]",
    src: "/icons/service-icon-5.svg"
  }, null, _parent));
  _push(`<p>\u0420\u0430\u0441\u0448\u0438\u0440\u0435\u043D\u043D\u0430\u044F \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0430 \u0433\u0430\u0440\u0430\u043D\u0442\u0438\u0439\u043D\u043E\u0433\u043E \u043E\u0431\u0441\u043B\u0443\u0436\u0438\u0432\u0430\u043D\u0438\u044F</p></li><li class="flex flex-col gap-4 ~text-[16px]/[20px]">`);
  _push(ssrRenderComponent(_component_NuxtImg, {
    width: "72",
    class: "w-[72px] h-[80px]",
    src: "/icons/service-icon-6.svg"
  }, null, _parent));
  _push(`<p>\u041D\u0430\u043B\u0438\u0447\u0438\u0435 \u0441\u043A\u043B\u0430\u0434\u0430 \u0437\u0430\u043F\u0447\u0430\u0441\u0442\u0435\u0439 \u0432\xA0\u0420\u0424</p></li></ul></div></section><section class="py-16 lg:pt-24 lg:pb-0"><div class="container grid grid-cols-1 xl:grid-cols-2 gap-28 xl:gap-4 justify-between"><div class="xl:pr-12">`);
  _push(ssrRenderComponent(_component_Carousel, { class: "relative w-full" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_CarouselContent, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_CarouselItem, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<div${_scopeId3}><h2 class="~text-[40px]/[48px] leading-[1.1] xl:text-[48px] font-extralight mb-8"${_scopeId3}><span class="text-primary"${_scopeId3}>\u0421\u043E\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u043E\u0435 \u0438\xA0\u043D\u0430\u0434\u0435\u0436\u043D\u043E\u0435</span> \u043A\u043E\u043D\u0441\u0442\u0440\u0443\u043A\u0442\u0438\u0432\u043D\u043E\u0435 \u0440\u0435\u0448\u0435\u043D\u0438\u0435</h2><p class="text-[20px]"${_scopeId3}>\u041A\u043E\u043D\u0441\u0442\u0440\u0443\u043A\u0446\u0438\u044F \u043F\u0440\u0438\u0431\u043E\u0440\u0430 \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u0435\u0442 \u0432\u0441\u0435\u043C \u0441\u0430\u043C\u044B\u043C \u0441\u043E\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u044B\u043C \u0442\u0435\u043D\u0434\u0435\u043D\u0446\u0438\u044F\u043C \u0438 \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u0430\u043C \u0438 \u043E\u0440\u0438\u0435\u043D\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0430 \u043D\u0430 \u043C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u0443\u044E \u0433\u0438\u0431\u043A\u043E\u0441\u0442\u044C \u0432 \u0440\u0435\u0448\u0435\u043D\u0438\u0438 \u0440\u0430\u0437\u043B\u0438\u0447\u043D\u044B\u0445 \u0438\u0441\u0441\u043B\u0435\u0434\u043E\u0432\u0430\u0442\u0435\u043B\u044C\u0441\u043A\u0438\u0445 \u0438 \u0440\u0443\u0442\u0438\u043D\u043D\u044B\u0445 \u0437\u0430\u0434\u0430\u0447</p></div>`);
                  } else {
                    return [
                      createVNode("div", null, [
                        createVNode("h2", { class: "~text-[40px]/[48px] leading-[1.1] xl:text-[48px] font-extralight mb-8" }, [
                          createVNode("span", { class: "text-primary" }, "\u0421\u043E\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u043E\u0435 \u0438\xA0\u043D\u0430\u0434\u0435\u0436\u043D\u043E\u0435"),
                          createTextVNode(" \u043A\u043E\u043D\u0441\u0442\u0440\u0443\u043A\u0442\u0438\u0432\u043D\u043E\u0435 \u0440\u0435\u0448\u0435\u043D\u0438\u0435")
                        ]),
                        createVNode("p", { class: "text-[20px]" }, "\u041A\u043E\u043D\u0441\u0442\u0440\u0443\u043A\u0446\u0438\u044F \u043F\u0440\u0438\u0431\u043E\u0440\u0430 \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u0435\u0442 \u0432\u0441\u0435\u043C \u0441\u0430\u043C\u044B\u043C \u0441\u043E\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u044B\u043C \u0442\u0435\u043D\u0434\u0435\u043D\u0446\u0438\u044F\u043C \u0438 \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u0430\u043C \u0438 \u043E\u0440\u0438\u0435\u043D\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0430 \u043D\u0430 \u043C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u0443\u044E \u0433\u0438\u0431\u043A\u043E\u0441\u0442\u044C \u0432 \u0440\u0435\u0448\u0435\u043D\u0438\u0438 \u0440\u0430\u0437\u043B\u0438\u0447\u043D\u044B\u0445 \u0438\u0441\u0441\u043B\u0435\u0434\u043E\u0432\u0430\u0442\u0435\u043B\u044C\u0441\u043A\u0438\u0445 \u0438 \u0440\u0443\u0442\u0438\u043D\u043D\u044B\u0445 \u0437\u0430\u0434\u0430\u0447")
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_CarouselItem, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<div${_scopeId3}><h2 class="~text-[40px]/[48px] leading-[1.1] xl:text-[48px] font-extralight mb-8"${_scopeId3}> \u0414\u043E\u0441\u0442\u0443\u043F\u043D\u044B\u0435 \u043A\u043E\u043D\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438 \u043F\u0440\u043E\u0442\u043E\u0447\u043D\u043E\u0433\u043E \u0446\u0438\u0442\u043E\u043C\u0435\u0442\u0440\u0430 <span class="text-primary"${_scopeId3}>CELLRIVER</span></h2><ul class="list-disc pl-4 marker:text-primary"${_scopeId3}><li${_scopeId3}>2 \u043B\u0430\u0437\u0435\u0440\u0430, 6 \u0444\u043B\u044E\u043E\u0440\u0435\u0441\u0446\u0435\u043D\u0442\u043D\u044B\u0445 \u043A\u0430\u043D\u0430\u043B\u043E\u0432 \u0434\u0435\u0442\u0435\u043A\u0446\u0438\u0438</li><li${_scopeId3}>3 \u043B\u0430\u0437\u0435\u0440\u0430, 14 \u0444\u043B\u044E\u043E\u0440\u0435\u0441\u0446\u0435\u043D\u0442\u043D\u044B\u0445 \u043A\u0430\u043D\u0430\u043B\u043E\u0432 \u0434\u0435\u0442\u0435\u043A\u0446\u0438\u0438</li></ul></div>`);
                  } else {
                    return [
                      createVNode("div", null, [
                        createVNode("h2", { class: "~text-[40px]/[48px] leading-[1.1] xl:text-[48px] font-extralight mb-8" }, [
                          createTextVNode(" \u0414\u043E\u0441\u0442\u0443\u043F\u043D\u044B\u0435 \u043A\u043E\u043D\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438 \u043F\u0440\u043E\u0442\u043E\u0447\u043D\u043E\u0433\u043E \u0446\u0438\u0442\u043E\u043C\u0435\u0442\u0440\u0430 "),
                          createVNode("span", { class: "text-primary" }, "CELLRIVER")
                        ]),
                        createVNode("ul", { class: "list-disc pl-4 marker:text-primary" }, [
                          createVNode("li", null, "2 \u043B\u0430\u0437\u0435\u0440\u0430, 6 \u0444\u043B\u044E\u043E\u0440\u0435\u0441\u0446\u0435\u043D\u0442\u043D\u044B\u0445 \u043A\u0430\u043D\u0430\u043B\u043E\u0432 \u0434\u0435\u0442\u0435\u043A\u0446\u0438\u0438"),
                          createVNode("li", null, "3 \u043B\u0430\u0437\u0435\u0440\u0430, 14 \u0444\u043B\u044E\u043E\u0440\u0435\u0441\u0446\u0435\u043D\u0442\u043D\u044B\u0445 \u043A\u0430\u043D\u0430\u043B\u043E\u0432 \u0434\u0435\u0442\u0435\u043A\u0446\u0438\u0438")
                        ])
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_CarouselItem, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<div${_scopeId3}><h2 class="~text-[40px]/[48px] leading-[1.1] xl:text-[48px] font-extralight mb-8"${_scopeId3}> \u041B\u0430\u0432\u0438\u043D\u043D\u044B\u0435 \u0444\u043E\u0442\u043E\u0434\u0438\u043E\u0434\u044B \u0432 \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u0444\u043E\u0442\u043E\u0434\u0435\u0442\u0435\u043A\u0442\u043E\u0440\u043E\u0432 </h2><ul class="list-disc pl-4 marker:text-primary"${_scopeId3}><li${_scopeId3}>\u043C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u043E \u0432\u044B\u0441\u043E\u043A\u0430\u044F \u0447\u0443\u0432\u0441\u0442\u0432\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u044C</li><li${_scopeId3}>\u043D\u0438\u0437\u043A\u0438\u0439 \u0443\u0440\u043E\u0432\u0435\u043D\u044C \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u043E\u0433\u043E \u0448\u0443\u043C\u0430</li><li${_scopeId3}>\u043D\u0430\u043F\u0440\u044F\u0436\u0435\u043D\u0438\u0435 \u043D\u0430 \u0434\u0435\u0442\u0435\u043A\u0442\u043E\u0440\u0430\u0445 \u0444\u0438\u043A\u0441\u0438\u0440\u043E\u0432\u0430\u043D\u043E</li><li${_scopeId3}>\u043D\u0435\u0442 \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E\u0441\u0442\u0438 \u043D\u0430\u0441\u0442\u0440\u0430\u0438\u0432\u0430\u0442\u044C \u0441\u043F\u0435\u0446\u0438\u0444\u0438\u0447\u0435\u0441\u043A\u043E\u0435 \u0434\u043B\u044F \u043E\u0431\u0440\u0430\u0437\u0446\u043E\u0432 \u0440\u0430\u0437\u043B\u0438\u0447\u043D\u044B\u0445 \u0442\u0438\u043F\u043E\u0432 \u043D\u0430\u043F\u0440\u044F\u0436\u0435\u043D\u0438\u0435</li><li${_scopeId3}>\u0430\u0431\u0441\u043E\u043B\u044E\u0442\u043D\u0430\u044F \u043B\u0438\u043D\u0435\u0439\u043D\u043E\u0441\u0442\u044C \u0432 \u0448\u0438\u0440\u043E\u043A\u043E\u043C \u0434\u0438\u0430\u043F\u0430\u0437\u043E\u043D\u0435</li><li${_scopeId3}>\u043F\u0440\u0435\u0434\u0441\u043A\u0430\u0437\u0443\u0435\u043C\u0430\u044F \u0444\u043B\u044E\u043E\u0440\u0435\u0441\u0446\u0435\u043D\u0442\u043D\u0430\u044F \u043A\u043E\u043C\u043F\u0435\u043D\u0441\u0430\u0446\u0438\u044F \u043D\u0435\u0437\u0430\u0432\u0438\u0441\u0438\u043C\u043E \u043E\u0442 \u0440\u0430\u0441\u043F\u043E\u043B\u043E\u0436\u0435\u043D\u0438\u044F \u043F\u043E\u043F\u0443\u043B\u044F\u0446\u0438\u0438</li></ul></div>`);
                  } else {
                    return [
                      createVNode("div", null, [
                        createVNode("h2", { class: "~text-[40px]/[48px] leading-[1.1] xl:text-[48px] font-extralight mb-8" }, " \u041B\u0430\u0432\u0438\u043D\u043D\u044B\u0435 \u0444\u043E\u0442\u043E\u0434\u0438\u043E\u0434\u044B \u0432 \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u0444\u043E\u0442\u043E\u0434\u0435\u0442\u0435\u043A\u0442\u043E\u0440\u043E\u0432 "),
                        createVNode("ul", { class: "list-disc pl-4 marker:text-primary" }, [
                          createVNode("li", null, "\u043C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u043E \u0432\u044B\u0441\u043E\u043A\u0430\u044F \u0447\u0443\u0432\u0441\u0442\u0432\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u044C"),
                          createVNode("li", null, "\u043D\u0438\u0437\u043A\u0438\u0439 \u0443\u0440\u043E\u0432\u0435\u043D\u044C \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u043E\u0433\u043E \u0448\u0443\u043C\u0430"),
                          createVNode("li", null, "\u043D\u0430\u043F\u0440\u044F\u0436\u0435\u043D\u0438\u0435 \u043D\u0430 \u0434\u0435\u0442\u0435\u043A\u0442\u043E\u0440\u0430\u0445 \u0444\u0438\u043A\u0441\u0438\u0440\u043E\u0432\u0430\u043D\u043E"),
                          createVNode("li", null, "\u043D\u0435\u0442 \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E\u0441\u0442\u0438 \u043D\u0430\u0441\u0442\u0440\u0430\u0438\u0432\u0430\u0442\u044C \u0441\u043F\u0435\u0446\u0438\u0444\u0438\u0447\u0435\u0441\u043A\u043E\u0435 \u0434\u043B\u044F \u043E\u0431\u0440\u0430\u0437\u0446\u043E\u0432 \u0440\u0430\u0437\u043B\u0438\u0447\u043D\u044B\u0445 \u0442\u0438\u043F\u043E\u0432 \u043D\u0430\u043F\u0440\u044F\u0436\u0435\u043D\u0438\u0435"),
                          createVNode("li", null, "\u0430\u0431\u0441\u043E\u043B\u044E\u0442\u043D\u0430\u044F \u043B\u0438\u043D\u0435\u0439\u043D\u043E\u0441\u0442\u044C \u0432 \u0448\u0438\u0440\u043E\u043A\u043E\u043C \u0434\u0438\u0430\u043F\u0430\u0437\u043E\u043D\u0435"),
                          createVNode("li", null, "\u043F\u0440\u0435\u0434\u0441\u043A\u0430\u0437\u0443\u0435\u043C\u0430\u044F \u0444\u043B\u044E\u043E\u0440\u0435\u0441\u0446\u0435\u043D\u0442\u043D\u0430\u044F \u043A\u043E\u043C\u043F\u0435\u043D\u0441\u0430\u0446\u0438\u044F \u043D\u0435\u0437\u0430\u0432\u0438\u0441\u0438\u043C\u043E \u043E\u0442 \u0440\u0430\u0441\u043F\u043E\u043B\u043E\u0436\u0435\u043D\u0438\u044F \u043F\u043E\u043F\u0443\u043B\u044F\u0446\u0438\u0438")
                        ])
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_CarouselItem, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<div${_scopeId3}><h2 class="~text-[40px]/[48px] leading-[1.1] xl:text-[48px] font-extralight mb-8"${_scopeId3}> \u0428\u043F\u0440\u0438\u0446\u0435\u0432\u043E\u0439 \u043D\u0430\u0441\u043E\u0441, \u0443\u043F\u0440\u0430\u0432\u043B\u044F\u044E\u0449\u0438\u0439 \u043F\u043E\u0434\u0430\u0447\u0435\u0439 \u043E\u0431\u0440\u0430\u0437\u0446\u0430 </h2><ul class="list-disc pl-4 marker:text-primary"${_scopeId3}><li${_scopeId3}>\u043D\u0438\u0437\u043A\u0438\u0439 \u0443\u0440\u043E\u0432\u0435\u043D\u044C \u0448\u0443\u043C\u0430</li><li${_scopeId3}>\u043F\u043B\u0430\u0432\u043D\u0430\u044F \u043F\u043E\u0434\u0430\u0447\u0430 \u043E\u0431\u0440\u0430\u0437\u0446\u0430</li><li${_scopeId3}> \u0432\u043E\u043B\u044E\u043C\u0435\u0442\u0440\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u0430\u043D\u0430\u043B\u0438\u0437 \u0430\u0431\u0441\u043E\u043B\u044E\u0442\u043D\u044B\u0445 \u043A\u043E\u043D\u0446\u0435\u043D\u0442\u0440\u0430\u0446\u0438\u0439 \u0431\u0435\u0437\xA0\u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u044F \u0434\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0445\xA0 \u0440\u0435\u0444\u0435\u0440\u0435\u043D\u0441\u043D\u044B\u0445 \xA0\u0447\u0430\u0441\u0442\u0438\u0446 </li></ul></div>`);
                  } else {
                    return [
                      createVNode("div", null, [
                        createVNode("h2", { class: "~text-[40px]/[48px] leading-[1.1] xl:text-[48px] font-extralight mb-8" }, " \u0428\u043F\u0440\u0438\u0446\u0435\u0432\u043E\u0439 \u043D\u0430\u0441\u043E\u0441, \u0443\u043F\u0440\u0430\u0432\u043B\u044F\u044E\u0449\u0438\u0439 \u043F\u043E\u0434\u0430\u0447\u0435\u0439 \u043E\u0431\u0440\u0430\u0437\u0446\u0430 "),
                        createVNode("ul", { class: "list-disc pl-4 marker:text-primary" }, [
                          createVNode("li", null, "\u043D\u0438\u0437\u043A\u0438\u0439 \u0443\u0440\u043E\u0432\u0435\u043D\u044C \u0448\u0443\u043C\u0430"),
                          createVNode("li", null, "\u043F\u043B\u0430\u0432\u043D\u0430\u044F \u043F\u043E\u0434\u0430\u0447\u0430 \u043E\u0431\u0440\u0430\u0437\u0446\u0430"),
                          createVNode("li", null, " \u0432\u043E\u043B\u044E\u043C\u0435\u0442\u0440\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u0430\u043D\u0430\u043B\u0438\u0437 \u0430\u0431\u0441\u043E\u043B\u044E\u0442\u043D\u044B\u0445 \u043A\u043E\u043D\u0446\u0435\u043D\u0442\u0440\u0430\u0446\u0438\u0439 \u0431\u0435\u0437\xA0\u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u044F \u0434\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0445\xA0 \u0440\u0435\u0444\u0435\u0440\u0435\u043D\u0441\u043D\u044B\u0445 \xA0\u0447\u0430\u0441\u0442\u0438\u0446 ")
                        ])
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_CarouselItem, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<div${_scopeId3}><h2 class="~text-[40px]/[48px] leading-[1.1] xl:text-[48px] font-extralight mb-8"${_scopeId3}> \u0422\u0432\u0435\u0440\u0434\u043E\u0442\u0435\u043B\u044C\u043D\u044B\u0435 \u043B\u0430\u0437\u0435\u0440\u044B </h2><ul class="list-disc pl-4 marker:text-primary"${_scopeId3}><li${_scopeId3}>488 \u043D\u043C, 638 \u043D\u043C, 405 \u043D\u043C</li><li${_scopeId3}>\u043E\u043F\u0442\u0438\u043C\u0438\u0437\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u043E\u0439 \u043C\u043E\u0449\u043D\u043E\u0441\u0442\u0438, \u043F\u043E\u0437\u0432\u043E\u043B\u044F\u044E\u0449\u0438\u0435 \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0442\u044C \u0440\u0430\u0431\u043E\u0442\u0443 \u0441\xA0\u0431\u043E\u043B\u044C\u0448\u0438\u043D\u0441\u0442\u0432\u043E\u043C \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u044B\u0445 \u0444\u043B\u044E\u043E\u0440\u043E\u0445\u0440\u043E\u043C\u043E\u0432 \u0438\xA0\u0444\u043B\u044E\u043E\u0440\u0435\u0441\u0446\u0435\u043D\u0442\u043D\u044B\u0445 \u0431\u0435\u043B\u043A\u043E\u0432 </li></ul></div>`);
                  } else {
                    return [
                      createVNode("div", null, [
                        createVNode("h2", { class: "~text-[40px]/[48px] leading-[1.1] xl:text-[48px] font-extralight mb-8" }, " \u0422\u0432\u0435\u0440\u0434\u043E\u0442\u0435\u043B\u044C\u043D\u044B\u0435 \u043B\u0430\u0437\u0435\u0440\u044B "),
                        createVNode("ul", { class: "list-disc pl-4 marker:text-primary" }, [
                          createVNode("li", null, "488 \u043D\u043C, 638 \u043D\u043C, 405 \u043D\u043C"),
                          createVNode("li", null, "\u043E\u043F\u0442\u0438\u043C\u0438\u0437\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u043E\u0439 \u043C\u043E\u0449\u043D\u043E\u0441\u0442\u0438, \u043F\u043E\u0437\u0432\u043E\u043B\u044F\u044E\u0449\u0438\u0435 \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0442\u044C \u0440\u0430\u0431\u043E\u0442\u0443 \u0441\xA0\u0431\u043E\u043B\u044C\u0448\u0438\u043D\u0441\u0442\u0432\u043E\u043C \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u044B\u0445 \u0444\u043B\u044E\u043E\u0440\u043E\u0445\u0440\u043E\u043C\u043E\u0432 \u0438\xA0\u0444\u043B\u044E\u043E\u0440\u0435\u0441\u0446\u0435\u043D\u0442\u043D\u044B\u0445 \u0431\u0435\u043B\u043A\u043E\u0432 ")
                        ])
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_CarouselItem, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<div${_scopeId3}><h2 class="~text-[40px]/[48px] leading-[1.1] xl:text-[48px] font-extralight mb-8"${_scopeId3}> \u0428\u0438\u0440\u043E\u043A\u0438\u0439 \u0432\u044B\u0431\u043E\u0440 \u0432\u0430\u0440\u0438\u0430\u043D\u0442\u043E\u0432 \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0438 \u043E\u0431\u0440\u0430\u0437\u0446\u0430 </h2><ul class="list-disc pl-4 marker:text-primary"${_scopeId3}><li${_scopeId3}>\u041E\u0442\u0434\u0435\u043B\u044C\u043D\u044B\u0435 \u043F\u0440\u043E\u0431\u0438\u0440\u043A\u0438 \u043E\u0431\u044A\u0435\u043C\u043E\u043C 5, 2 \u0438\xA01,5\xA0\u043C\u043B</li><li${_scopeId3}>\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430 \u043F\u0440\u043E\u0431\u0438\u0440\u043E\u043A \u0433\u0440\u0443\u043F\u043F\u043E\u0439 \u0434\u043E\xA040\xA0\u0435\u0434\u0438\u043D\u0438\u0446</li><li${_scopeId3}>96-\u043B\u0443\u043D\u043E\u0447\u043D\u044B\u0439 \u043F\u043B\u0430\u043D\u0448\u0435\u0442 (\u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439/\u0433\u043B\u0443\u0431\u043E\u043A\u0438\u0439, \u0441\xA0U-\u043E\u0431\u0440\u0430\u0437\u043D\u044B\u043C/V-\u043E\u0431\u0440\u0430\u0437\u043D\u044B\u043C \u0438\u043B\u0438\xA0\u043F\u043B\u043E\u0441\u043A\u0438\u043C \u0434\u043D\u043E\u043C)</li></ul></div>`);
                  } else {
                    return [
                      createVNode("div", null, [
                        createVNode("h2", { class: "~text-[40px]/[48px] leading-[1.1] xl:text-[48px] font-extralight mb-8" }, " \u0428\u0438\u0440\u043E\u043A\u0438\u0439 \u0432\u044B\u0431\u043E\u0440 \u0432\u0430\u0440\u0438\u0430\u043D\u0442\u043E\u0432 \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0438 \u043E\u0431\u0440\u0430\u0437\u0446\u0430 "),
                        createVNode("ul", { class: "list-disc pl-4 marker:text-primary" }, [
                          createVNode("li", null, "\u041E\u0442\u0434\u0435\u043B\u044C\u043D\u044B\u0435 \u043F\u0440\u043E\u0431\u0438\u0440\u043A\u0438 \u043E\u0431\u044A\u0435\u043C\u043E\u043C 5, 2 \u0438\xA01,5\xA0\u043C\u043B"),
                          createVNode("li", null, "\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430 \u043F\u0440\u043E\u0431\u0438\u0440\u043E\u043A \u0433\u0440\u0443\u043F\u043F\u043E\u0439 \u0434\u043E\xA040\xA0\u0435\u0434\u0438\u043D\u0438\u0446"),
                          createVNode("li", null, "96-\u043B\u0443\u043D\u043E\u0447\u043D\u044B\u0439 \u043F\u043B\u0430\u043D\u0448\u0435\u0442 (\u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439/\u0433\u043B\u0443\u0431\u043E\u043A\u0438\u0439, \u0441\xA0U-\u043E\u0431\u0440\u0430\u0437\u043D\u044B\u043C/V-\u043E\u0431\u0440\u0430\u0437\u043D\u044B\u043C \u0438\u043B\u0438\xA0\u043F\u043B\u043E\u0441\u043A\u0438\u043C \u0434\u043D\u043E\u043C)")
                        ])
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_CarouselItem, null, {
                  default: withCtx(() => [
                    createVNode("div", null, [
                      createVNode("h2", { class: "~text-[40px]/[48px] leading-[1.1] xl:text-[48px] font-extralight mb-8" }, [
                        createVNode("span", { class: "text-primary" }, "\u0421\u043E\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u043E\u0435 \u0438\xA0\u043D\u0430\u0434\u0435\u0436\u043D\u043E\u0435"),
                        createTextVNode(" \u043A\u043E\u043D\u0441\u0442\u0440\u0443\u043A\u0442\u0438\u0432\u043D\u043E\u0435 \u0440\u0435\u0448\u0435\u043D\u0438\u0435")
                      ]),
                      createVNode("p", { class: "text-[20px]" }, "\u041A\u043E\u043D\u0441\u0442\u0440\u0443\u043A\u0446\u0438\u044F \u043F\u0440\u0438\u0431\u043E\u0440\u0430 \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u0435\u0442 \u0432\u0441\u0435\u043C \u0441\u0430\u043C\u044B\u043C \u0441\u043E\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u044B\u043C \u0442\u0435\u043D\u0434\u0435\u043D\u0446\u0438\u044F\u043C \u0438 \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u0430\u043C \u0438 \u043E\u0440\u0438\u0435\u043D\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0430 \u043D\u0430 \u043C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u0443\u044E \u0433\u0438\u0431\u043A\u043E\u0441\u0442\u044C \u0432 \u0440\u0435\u0448\u0435\u043D\u0438\u0438 \u0440\u0430\u0437\u043B\u0438\u0447\u043D\u044B\u0445 \u0438\u0441\u0441\u043B\u0435\u0434\u043E\u0432\u0430\u0442\u0435\u043B\u044C\u0441\u043A\u0438\u0445 \u0438 \u0440\u0443\u0442\u0438\u043D\u043D\u044B\u0445 \u0437\u0430\u0434\u0430\u0447")
                    ])
                  ]),
                  _: 1
                }),
                createVNode(_component_CarouselItem, null, {
                  default: withCtx(() => [
                    createVNode("div", null, [
                      createVNode("h2", { class: "~text-[40px]/[48px] leading-[1.1] xl:text-[48px] font-extralight mb-8" }, [
                        createTextVNode(" \u0414\u043E\u0441\u0442\u0443\u043F\u043D\u044B\u0435 \u043A\u043E\u043D\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438 \u043F\u0440\u043E\u0442\u043E\u0447\u043D\u043E\u0433\u043E \u0446\u0438\u0442\u043E\u043C\u0435\u0442\u0440\u0430 "),
                        createVNode("span", { class: "text-primary" }, "CELLRIVER")
                      ]),
                      createVNode("ul", { class: "list-disc pl-4 marker:text-primary" }, [
                        createVNode("li", null, "2 \u043B\u0430\u0437\u0435\u0440\u0430, 6 \u0444\u043B\u044E\u043E\u0440\u0435\u0441\u0446\u0435\u043D\u0442\u043D\u044B\u0445 \u043A\u0430\u043D\u0430\u043B\u043E\u0432 \u0434\u0435\u0442\u0435\u043A\u0446\u0438\u0438"),
                        createVNode("li", null, "3 \u043B\u0430\u0437\u0435\u0440\u0430, 14 \u0444\u043B\u044E\u043E\u0440\u0435\u0441\u0446\u0435\u043D\u0442\u043D\u044B\u0445 \u043A\u0430\u043D\u0430\u043B\u043E\u0432 \u0434\u0435\u0442\u0435\u043A\u0446\u0438\u0438")
                      ])
                    ])
                  ]),
                  _: 1
                }),
                createVNode(_component_CarouselItem, null, {
                  default: withCtx(() => [
                    createVNode("div", null, [
                      createVNode("h2", { class: "~text-[40px]/[48px] leading-[1.1] xl:text-[48px] font-extralight mb-8" }, " \u041B\u0430\u0432\u0438\u043D\u043D\u044B\u0435 \u0444\u043E\u0442\u043E\u0434\u0438\u043E\u0434\u044B \u0432 \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u0444\u043E\u0442\u043E\u0434\u0435\u0442\u0435\u043A\u0442\u043E\u0440\u043E\u0432 "),
                      createVNode("ul", { class: "list-disc pl-4 marker:text-primary" }, [
                        createVNode("li", null, "\u043C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u043E \u0432\u044B\u0441\u043E\u043A\u0430\u044F \u0447\u0443\u0432\u0441\u0442\u0432\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u044C"),
                        createVNode("li", null, "\u043D\u0438\u0437\u043A\u0438\u0439 \u0443\u0440\u043E\u0432\u0435\u043D\u044C \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u043E\u0433\u043E \u0448\u0443\u043C\u0430"),
                        createVNode("li", null, "\u043D\u0430\u043F\u0440\u044F\u0436\u0435\u043D\u0438\u0435 \u043D\u0430 \u0434\u0435\u0442\u0435\u043A\u0442\u043E\u0440\u0430\u0445 \u0444\u0438\u043A\u0441\u0438\u0440\u043E\u0432\u0430\u043D\u043E"),
                        createVNode("li", null, "\u043D\u0435\u0442 \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E\u0441\u0442\u0438 \u043D\u0430\u0441\u0442\u0440\u0430\u0438\u0432\u0430\u0442\u044C \u0441\u043F\u0435\u0446\u0438\u0444\u0438\u0447\u0435\u0441\u043A\u043E\u0435 \u0434\u043B\u044F \u043E\u0431\u0440\u0430\u0437\u0446\u043E\u0432 \u0440\u0430\u0437\u043B\u0438\u0447\u043D\u044B\u0445 \u0442\u0438\u043F\u043E\u0432 \u043D\u0430\u043F\u0440\u044F\u0436\u0435\u043D\u0438\u0435"),
                        createVNode("li", null, "\u0430\u0431\u0441\u043E\u043B\u044E\u0442\u043D\u0430\u044F \u043B\u0438\u043D\u0435\u0439\u043D\u043E\u0441\u0442\u044C \u0432 \u0448\u0438\u0440\u043E\u043A\u043E\u043C \u0434\u0438\u0430\u043F\u0430\u0437\u043E\u043D\u0435"),
                        createVNode("li", null, "\u043F\u0440\u0435\u0434\u0441\u043A\u0430\u0437\u0443\u0435\u043C\u0430\u044F \u0444\u043B\u044E\u043E\u0440\u0435\u0441\u0446\u0435\u043D\u0442\u043D\u0430\u044F \u043A\u043E\u043C\u043F\u0435\u043D\u0441\u0430\u0446\u0438\u044F \u043D\u0435\u0437\u0430\u0432\u0438\u0441\u0438\u043C\u043E \u043E\u0442 \u0440\u0430\u0441\u043F\u043E\u043B\u043E\u0436\u0435\u043D\u0438\u044F \u043F\u043E\u043F\u0443\u043B\u044F\u0446\u0438\u0438")
                      ])
                    ])
                  ]),
                  _: 1
                }),
                createVNode(_component_CarouselItem, null, {
                  default: withCtx(() => [
                    createVNode("div", null, [
                      createVNode("h2", { class: "~text-[40px]/[48px] leading-[1.1] xl:text-[48px] font-extralight mb-8" }, " \u0428\u043F\u0440\u0438\u0446\u0435\u0432\u043E\u0439 \u043D\u0430\u0441\u043E\u0441, \u0443\u043F\u0440\u0430\u0432\u043B\u044F\u044E\u0449\u0438\u0439 \u043F\u043E\u0434\u0430\u0447\u0435\u0439 \u043E\u0431\u0440\u0430\u0437\u0446\u0430 "),
                      createVNode("ul", { class: "list-disc pl-4 marker:text-primary" }, [
                        createVNode("li", null, "\u043D\u0438\u0437\u043A\u0438\u0439 \u0443\u0440\u043E\u0432\u0435\u043D\u044C \u0448\u0443\u043C\u0430"),
                        createVNode("li", null, "\u043F\u043B\u0430\u0432\u043D\u0430\u044F \u043F\u043E\u0434\u0430\u0447\u0430 \u043E\u0431\u0440\u0430\u0437\u0446\u0430"),
                        createVNode("li", null, " \u0432\u043E\u043B\u044E\u043C\u0435\u0442\u0440\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u0430\u043D\u0430\u043B\u0438\u0437 \u0430\u0431\u0441\u043E\u043B\u044E\u0442\u043D\u044B\u0445 \u043A\u043E\u043D\u0446\u0435\u043D\u0442\u0440\u0430\u0446\u0438\u0439 \u0431\u0435\u0437\xA0\u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u044F \u0434\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0445\xA0 \u0440\u0435\u0444\u0435\u0440\u0435\u043D\u0441\u043D\u044B\u0445 \xA0\u0447\u0430\u0441\u0442\u0438\u0446 ")
                      ])
                    ])
                  ]),
                  _: 1
                }),
                createVNode(_component_CarouselItem, null, {
                  default: withCtx(() => [
                    createVNode("div", null, [
                      createVNode("h2", { class: "~text-[40px]/[48px] leading-[1.1] xl:text-[48px] font-extralight mb-8" }, " \u0422\u0432\u0435\u0440\u0434\u043E\u0442\u0435\u043B\u044C\u043D\u044B\u0435 \u043B\u0430\u0437\u0435\u0440\u044B "),
                      createVNode("ul", { class: "list-disc pl-4 marker:text-primary" }, [
                        createVNode("li", null, "488 \u043D\u043C, 638 \u043D\u043C, 405 \u043D\u043C"),
                        createVNode("li", null, "\u043E\u043F\u0442\u0438\u043C\u0438\u0437\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u043E\u0439 \u043C\u043E\u0449\u043D\u043E\u0441\u0442\u0438, \u043F\u043E\u0437\u0432\u043E\u043B\u044F\u044E\u0449\u0438\u0435 \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0442\u044C \u0440\u0430\u0431\u043E\u0442\u0443 \u0441\xA0\u0431\u043E\u043B\u044C\u0448\u0438\u043D\u0441\u0442\u0432\u043E\u043C \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u044B\u0445 \u0444\u043B\u044E\u043E\u0440\u043E\u0445\u0440\u043E\u043C\u043E\u0432 \u0438\xA0\u0444\u043B\u044E\u043E\u0440\u0435\u0441\u0446\u0435\u043D\u0442\u043D\u044B\u0445 \u0431\u0435\u043B\u043A\u043E\u0432 ")
                      ])
                    ])
                  ]),
                  _: 1
                }),
                createVNode(_component_CarouselItem, null, {
                  default: withCtx(() => [
                    createVNode("div", null, [
                      createVNode("h2", { class: "~text-[40px]/[48px] leading-[1.1] xl:text-[48px] font-extralight mb-8" }, " \u0428\u0438\u0440\u043E\u043A\u0438\u0439 \u0432\u044B\u0431\u043E\u0440 \u0432\u0430\u0440\u0438\u0430\u043D\u0442\u043E\u0432 \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0438 \u043E\u0431\u0440\u0430\u0437\u0446\u0430 "),
                      createVNode("ul", { class: "list-disc pl-4 marker:text-primary" }, [
                        createVNode("li", null, "\u041E\u0442\u0434\u0435\u043B\u044C\u043D\u044B\u0435 \u043F\u0440\u043E\u0431\u0438\u0440\u043A\u0438 \u043E\u0431\u044A\u0435\u043C\u043E\u043C 5, 2 \u0438\xA01,5\xA0\u043C\u043B"),
                        createVNode("li", null, "\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430 \u043F\u0440\u043E\u0431\u0438\u0440\u043E\u043A \u0433\u0440\u0443\u043F\u043F\u043E\u0439 \u0434\u043E\xA040\xA0\u0435\u0434\u0438\u043D\u0438\u0446"),
                        createVNode("li", null, "96-\u043B\u0443\u043D\u043E\u0447\u043D\u044B\u0439 \u043F\u043B\u0430\u043D\u0448\u0435\u0442 (\u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439/\u0433\u043B\u0443\u0431\u043E\u043A\u0438\u0439, \u0441\xA0U-\u043E\u0431\u0440\u0430\u0437\u043D\u044B\u043C/V-\u043E\u0431\u0440\u0430\u0437\u043D\u044B\u043C \u0438\u043B\u0438\xA0\u043F\u043B\u043E\u0441\u043A\u0438\u043C \u0434\u043D\u043E\u043C)")
                      ])
                    ])
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_CarouselPrevious, { class: "left-0 top-[110%] -translate-y-0" }, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_CarouselNext, { class: "left-12 top-[110%] -translate-y-0" }, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_CarouselContent, null, {
            default: withCtx(() => [
              createVNode(_component_CarouselItem, null, {
                default: withCtx(() => [
                  createVNode("div", null, [
                    createVNode("h2", { class: "~text-[40px]/[48px] leading-[1.1] xl:text-[48px] font-extralight mb-8" }, [
                      createVNode("span", { class: "text-primary" }, "\u0421\u043E\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u043E\u0435 \u0438\xA0\u043D\u0430\u0434\u0435\u0436\u043D\u043E\u0435"),
                      createTextVNode(" \u043A\u043E\u043D\u0441\u0442\u0440\u0443\u043A\u0442\u0438\u0432\u043D\u043E\u0435 \u0440\u0435\u0448\u0435\u043D\u0438\u0435")
                    ]),
                    createVNode("p", { class: "text-[20px]" }, "\u041A\u043E\u043D\u0441\u0442\u0440\u0443\u043A\u0446\u0438\u044F \u043F\u0440\u0438\u0431\u043E\u0440\u0430 \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u0435\u0442 \u0432\u0441\u0435\u043C \u0441\u0430\u043C\u044B\u043C \u0441\u043E\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u044B\u043C \u0442\u0435\u043D\u0434\u0435\u043D\u0446\u0438\u044F\u043C \u0438 \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u0430\u043C \u0438 \u043E\u0440\u0438\u0435\u043D\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0430 \u043D\u0430 \u043C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u0443\u044E \u0433\u0438\u0431\u043A\u043E\u0441\u0442\u044C \u0432 \u0440\u0435\u0448\u0435\u043D\u0438\u0438 \u0440\u0430\u0437\u043B\u0438\u0447\u043D\u044B\u0445 \u0438\u0441\u0441\u043B\u0435\u0434\u043E\u0432\u0430\u0442\u0435\u043B\u044C\u0441\u043A\u0438\u0445 \u0438 \u0440\u0443\u0442\u0438\u043D\u043D\u044B\u0445 \u0437\u0430\u0434\u0430\u0447")
                  ])
                ]),
                _: 1
              }),
              createVNode(_component_CarouselItem, null, {
                default: withCtx(() => [
                  createVNode("div", null, [
                    createVNode("h2", { class: "~text-[40px]/[48px] leading-[1.1] xl:text-[48px] font-extralight mb-8" }, [
                      createTextVNode(" \u0414\u043E\u0441\u0442\u0443\u043F\u043D\u044B\u0435 \u043A\u043E\u043D\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438 \u043F\u0440\u043E\u0442\u043E\u0447\u043D\u043E\u0433\u043E \u0446\u0438\u0442\u043E\u043C\u0435\u0442\u0440\u0430 "),
                      createVNode("span", { class: "text-primary" }, "CELLRIVER")
                    ]),
                    createVNode("ul", { class: "list-disc pl-4 marker:text-primary" }, [
                      createVNode("li", null, "2 \u043B\u0430\u0437\u0435\u0440\u0430, 6 \u0444\u043B\u044E\u043E\u0440\u0435\u0441\u0446\u0435\u043D\u0442\u043D\u044B\u0445 \u043A\u0430\u043D\u0430\u043B\u043E\u0432 \u0434\u0435\u0442\u0435\u043A\u0446\u0438\u0438"),
                      createVNode("li", null, "3 \u043B\u0430\u0437\u0435\u0440\u0430, 14 \u0444\u043B\u044E\u043E\u0440\u0435\u0441\u0446\u0435\u043D\u0442\u043D\u044B\u0445 \u043A\u0430\u043D\u0430\u043B\u043E\u0432 \u0434\u0435\u0442\u0435\u043A\u0446\u0438\u0438")
                    ])
                  ])
                ]),
                _: 1
              }),
              createVNode(_component_CarouselItem, null, {
                default: withCtx(() => [
                  createVNode("div", null, [
                    createVNode("h2", { class: "~text-[40px]/[48px] leading-[1.1] xl:text-[48px] font-extralight mb-8" }, " \u041B\u0430\u0432\u0438\u043D\u043D\u044B\u0435 \u0444\u043E\u0442\u043E\u0434\u0438\u043E\u0434\u044B \u0432 \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u0444\u043E\u0442\u043E\u0434\u0435\u0442\u0435\u043A\u0442\u043E\u0440\u043E\u0432 "),
                    createVNode("ul", { class: "list-disc pl-4 marker:text-primary" }, [
                      createVNode("li", null, "\u043C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u043E \u0432\u044B\u0441\u043E\u043A\u0430\u044F \u0447\u0443\u0432\u0441\u0442\u0432\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u044C"),
                      createVNode("li", null, "\u043D\u0438\u0437\u043A\u0438\u0439 \u0443\u0440\u043E\u0432\u0435\u043D\u044C \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u043E\u0433\u043E \u0448\u0443\u043C\u0430"),
                      createVNode("li", null, "\u043D\u0430\u043F\u0440\u044F\u0436\u0435\u043D\u0438\u0435 \u043D\u0430 \u0434\u0435\u0442\u0435\u043A\u0442\u043E\u0440\u0430\u0445 \u0444\u0438\u043A\u0441\u0438\u0440\u043E\u0432\u0430\u043D\u043E"),
                      createVNode("li", null, "\u043D\u0435\u0442 \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E\u0441\u0442\u0438 \u043D\u0430\u0441\u0442\u0440\u0430\u0438\u0432\u0430\u0442\u044C \u0441\u043F\u0435\u0446\u0438\u0444\u0438\u0447\u0435\u0441\u043A\u043E\u0435 \u0434\u043B\u044F \u043E\u0431\u0440\u0430\u0437\u0446\u043E\u0432 \u0440\u0430\u0437\u043B\u0438\u0447\u043D\u044B\u0445 \u0442\u0438\u043F\u043E\u0432 \u043D\u0430\u043F\u0440\u044F\u0436\u0435\u043D\u0438\u0435"),
                      createVNode("li", null, "\u0430\u0431\u0441\u043E\u043B\u044E\u0442\u043D\u0430\u044F \u043B\u0438\u043D\u0435\u0439\u043D\u043E\u0441\u0442\u044C \u0432 \u0448\u0438\u0440\u043E\u043A\u043E\u043C \u0434\u0438\u0430\u043F\u0430\u0437\u043E\u043D\u0435"),
                      createVNode("li", null, "\u043F\u0440\u0435\u0434\u0441\u043A\u0430\u0437\u0443\u0435\u043C\u0430\u044F \u0444\u043B\u044E\u043E\u0440\u0435\u0441\u0446\u0435\u043D\u0442\u043D\u0430\u044F \u043A\u043E\u043C\u043F\u0435\u043D\u0441\u0430\u0446\u0438\u044F \u043D\u0435\u0437\u0430\u0432\u0438\u0441\u0438\u043C\u043E \u043E\u0442 \u0440\u0430\u0441\u043F\u043E\u043B\u043E\u0436\u0435\u043D\u0438\u044F \u043F\u043E\u043F\u0443\u043B\u044F\u0446\u0438\u0438")
                    ])
                  ])
                ]),
                _: 1
              }),
              createVNode(_component_CarouselItem, null, {
                default: withCtx(() => [
                  createVNode("div", null, [
                    createVNode("h2", { class: "~text-[40px]/[48px] leading-[1.1] xl:text-[48px] font-extralight mb-8" }, " \u0428\u043F\u0440\u0438\u0446\u0435\u0432\u043E\u0439 \u043D\u0430\u0441\u043E\u0441, \u0443\u043F\u0440\u0430\u0432\u043B\u044F\u044E\u0449\u0438\u0439 \u043F\u043E\u0434\u0430\u0447\u0435\u0439 \u043E\u0431\u0440\u0430\u0437\u0446\u0430 "),
                    createVNode("ul", { class: "list-disc pl-4 marker:text-primary" }, [
                      createVNode("li", null, "\u043D\u0438\u0437\u043A\u0438\u0439 \u0443\u0440\u043E\u0432\u0435\u043D\u044C \u0448\u0443\u043C\u0430"),
                      createVNode("li", null, "\u043F\u043B\u0430\u0432\u043D\u0430\u044F \u043F\u043E\u0434\u0430\u0447\u0430 \u043E\u0431\u0440\u0430\u0437\u0446\u0430"),
                      createVNode("li", null, " \u0432\u043E\u043B\u044E\u043C\u0435\u0442\u0440\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u0430\u043D\u0430\u043B\u0438\u0437 \u0430\u0431\u0441\u043E\u043B\u044E\u0442\u043D\u044B\u0445 \u043A\u043E\u043D\u0446\u0435\u043D\u0442\u0440\u0430\u0446\u0438\u0439 \u0431\u0435\u0437\xA0\u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u044F \u0434\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0445\xA0 \u0440\u0435\u0444\u0435\u0440\u0435\u043D\u0441\u043D\u044B\u0445 \xA0\u0447\u0430\u0441\u0442\u0438\u0446 ")
                    ])
                  ])
                ]),
                _: 1
              }),
              createVNode(_component_CarouselItem, null, {
                default: withCtx(() => [
                  createVNode("div", null, [
                    createVNode("h2", { class: "~text-[40px]/[48px] leading-[1.1] xl:text-[48px] font-extralight mb-8" }, " \u0422\u0432\u0435\u0440\u0434\u043E\u0442\u0435\u043B\u044C\u043D\u044B\u0435 \u043B\u0430\u0437\u0435\u0440\u044B "),
                    createVNode("ul", { class: "list-disc pl-4 marker:text-primary" }, [
                      createVNode("li", null, "488 \u043D\u043C, 638 \u043D\u043C, 405 \u043D\u043C"),
                      createVNode("li", null, "\u043E\u043F\u0442\u0438\u043C\u0438\u0437\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u043E\u0439 \u043C\u043E\u0449\u043D\u043E\u0441\u0442\u0438, \u043F\u043E\u0437\u0432\u043E\u043B\u044F\u044E\u0449\u0438\u0435 \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0442\u044C \u0440\u0430\u0431\u043E\u0442\u0443 \u0441\xA0\u0431\u043E\u043B\u044C\u0448\u0438\u043D\u0441\u0442\u0432\u043E\u043C \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u044B\u0445 \u0444\u043B\u044E\u043E\u0440\u043E\u0445\u0440\u043E\u043C\u043E\u0432 \u0438\xA0\u0444\u043B\u044E\u043E\u0440\u0435\u0441\u0446\u0435\u043D\u0442\u043D\u044B\u0445 \u0431\u0435\u043B\u043A\u043E\u0432 ")
                    ])
                  ])
                ]),
                _: 1
              }),
              createVNode(_component_CarouselItem, null, {
                default: withCtx(() => [
                  createVNode("div", null, [
                    createVNode("h2", { class: "~text-[40px]/[48px] leading-[1.1] xl:text-[48px] font-extralight mb-8" }, " \u0428\u0438\u0440\u043E\u043A\u0438\u0439 \u0432\u044B\u0431\u043E\u0440 \u0432\u0430\u0440\u0438\u0430\u043D\u0442\u043E\u0432 \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0438 \u043E\u0431\u0440\u0430\u0437\u0446\u0430 "),
                    createVNode("ul", { class: "list-disc pl-4 marker:text-primary" }, [
                      createVNode("li", null, "\u041E\u0442\u0434\u0435\u043B\u044C\u043D\u044B\u0435 \u043F\u0440\u043E\u0431\u0438\u0440\u043A\u0438 \u043E\u0431\u044A\u0435\u043C\u043E\u043C 5, 2 \u0438\xA01,5\xA0\u043C\u043B"),
                      createVNode("li", null, "\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430 \u043F\u0440\u043E\u0431\u0438\u0440\u043E\u043A \u0433\u0440\u0443\u043F\u043F\u043E\u0439 \u0434\u043E\xA040\xA0\u0435\u0434\u0438\u043D\u0438\u0446"),
                      createVNode("li", null, "96-\u043B\u0443\u043D\u043E\u0447\u043D\u044B\u0439 \u043F\u043B\u0430\u043D\u0448\u0435\u0442 (\u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439/\u0433\u043B\u0443\u0431\u043E\u043A\u0438\u0439, \u0441\xA0U-\u043E\u0431\u0440\u0430\u0437\u043D\u044B\u043C/V-\u043E\u0431\u0440\u0430\u0437\u043D\u044B\u043C \u0438\u043B\u0438\xA0\u043F\u043B\u043E\u0441\u043A\u0438\u043C \u0434\u043D\u043E\u043C)")
                    ])
                  ])
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          createVNode(_component_CarouselPrevious, { class: "left-0 top-[110%] -translate-y-0" }),
          createVNode(_component_CarouselNext, { class: "left-12 top-[110%] -translate-y-0" })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="lg:pb-12 flex flex-col gap-8">`);
  _push(ssrRenderComponent(_component_NuxtImg, {
    format: "webp",
    alt: "\u041F\u0440\u043E\u0442\u043E\u0447\u043D\u044B\u0439 \u0446\u0438\u0442\u043E\u043C\u0435\u0442\u0440 CELLRIVER",
    title: "\u041F\u0440\u043E\u0442\u043E\u0447\u043D\u044B\u0439 \u0446\u0438\u0442\u043E\u043C\u0435\u0442\u0440 CELLRIVER",
    src: "/img/item-photo-2.webp"
  }, null, _parent));
  _push(`</div></div></section><section class="py-16 lg:py-24 bg-foreground text-white"><div class="container relative grid lg:grid-cols-3 lg:grid-rows-2 gap-8 lg:gap-16"><div class="flex flex-col gap-4 lg:gap-8"><h2 class="text-[36px] leading-[1.1] lg:text-[40px] font-extralight"><span class="text-primary">\u0410\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0430\u044F</span> \u043F\u043E\u0434\u0430\u0447\u0430 \u043E\u0431\u0440\u0430\u0437\u0446\u043E\u0432 </h2><p>\u0410\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0437\u0430\u0446\u0438\u044F \u043F\u0440\u043E\u0446\u0435\u0441\u0441\u0430 \u043F\u043E\u0434\u0430\u0447\u0438 \u043E\u0431\u0440\u0430\u0437\u0446\u043E\u0432 \u043E\u0441\u0432\u043E\u0431\u043E\u0436\u0434\u0430\u0435\u0442 \u0438\u0441\u0441\u043B\u0435\u0434\u043E\u0432\u0430\u0442\u0435\u043B\u044F \u043E\u0442 \u0432\u044B\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u044F \u0440\u0443\u0442\u0438\u043D\u043D\u044B\u0445 \u043F\u0440\u043E\u0446\u0435\u0434\u0443\u0440 \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0438 \u043E\u0431\u0440\u0430\u0437\u0446\u043E\u0432 \u043F\u0440\u0438 \u0432\u044B\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u0438 \u0441\u0435\u0440\u0438\u0439\u043D\u044B\u0445 \u0438\u0441\u0441\u043B\u0435\u0434\u043E\u0432\u0430\u043D\u0438\u0439, \u0430 \u0442\u0430\u043A\u0436\u0435 \u0441\u043D\u0438\u0436\u0430\u0435\u0442 \u043A\u043E\u043D\u0442\u0430\u043A\u0442 \u0441 \u043F\u043E\u0442\u0435\u043D\u0446\u0438\u0430\u043B\u044C\u043D\u043E \u0438\u043D\u0444\u0438\u0446\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u043C\u0438 \u043E\u0431\u0440\u0430\u0437\u0446\u0430\u043C\u0438</p><div class="flex-col flex gap-2"><p class="text-primary">\u041F\u0440\u043E\u0431\u044B \u043C\u043E\u0433\u0443\u0442 \u0431\u044B\u0442\u044C \u0437\u0430\u0433\u0440\u0443\u0436\u0435\u043D\u044B \u0432:</p><ul class="list-disc pl-4 marker:text-primary"><li>\u041F\u0440\u043E\u0431\u0438\u0440\u043A\u0438 \u043C\u0430\u043B\u044B\u0445 \u043E\u0431\u044A\u0435\u043C\u043E\u0432 \u043E\u0442 1,5 \u043C\u043B</li><li>96-\u043B\u0443\u0447\u043D\u044B\u0435 \u043F\u043B\u0430\u043D\u0448\u0435\u0442\u044B</li><li>\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0435 \u0446\u0438\u0442\u043E\u043C\u0435\u0442\u0440\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u043F\u0440\u043E\u0431\u0438\u0440\u043A\u0438</li></ul></div></div><div class="flex flex-col gap-4 lg:gap-8"><h2 class="text-[36px] leading-[1.1] lg:text-[40px] font-extralight"><span class="text-primary">\u041A\u043E\u043C\u043F\u0430\u043A\u0442\u043D\u044B\u0439</span> \u0440\u0430\u0437\u043C\u0435\u0440 \u043A\u043E\u0440\u043F\u0443\u0441\u0430 </h2><p>\u041F\u0440\u043E\u0442\u043E\u0447\u043D\u044B\u0439 \u0446\u0438\u0442\u043E\u043C\u0435\u0442\u0440 CELLRIVER \u0431\u043B\u0430\u0433\u043E\u0434\u0430\u0440\u044F \u043A\u043E\u043C\u043F\u0430\u043A\u0442\u043D\u043E\u043C\u0443 \u0440\u0430\u0437\u043C\u0435\u0440\u0443 \u043C\u043E\u0436\u0435\u0442 \u0431\u044B\u0442\u044C\xA0\u0440\u0430\u0437\u043C\u0435\u0449\u0435\u043D \u0432\xA0\u043F\u043E\u043C\u0435\u0449\u0435\u043D\u0438\u0438 \u043B\u044E\u0431\u043E\u0433\u043E \u0440\u0430\u0437\u043C\u0435\u0440\u0430 \u0438\u043B\u0438\xA0\u0434\u0430\u0436\u0435 \u0432\xA0\u043B\u0430\u043C\u0438\u043D\u0430\u0440\u043D\u043E-\u043F\u043E\u0442\u043E\u043A\u043E\u0432\u043E\u043C \u0448\u043A\u0430\u0444\u0443.</p><p>\u041A\u043B\u0430\u0441\u0441\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u0438\xA0\u043B\u0430\u043A\u043E\u043D\u0438\u0447\u043D\u044B\u0439 \u0434\u0438\u0437\u0430\u0439\u043D \u043F\u0440\u0438\u0431\u043E\u0440\u0430 \u043B\u0435\u0433\u043A\u043E \u0438\u043D\u0442\u0435\u0433\u0440\u0438\u0440\u0443\u0435\u0442\u0441\u044F \u0432\xA0\u0443\u0436\u0435\xA0\u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u044E\u0449\u0443\u044E \u043B\u0430\u0431\u043E\u0440\u0430\u0442\u043E\u0440\u043D\u0443\u044E \u0438\u043D\u0444\u0440\u0430\u0441\u0442\u0440\u0443\u043A\u0442\u0443\u0440\u0443, \u043E\u0431\u0435\u0441\u043F\u0435\u0447\u0438\u0432\u0430\u044F \u0432\u044B\u0441\u043E\u043A\u0438\u0439 \u0443\u0440\u043E\u0432\u0435\u043D\u044C \u0443\u0434\u043E\u0431\u0441\u0442\u0432\u0430 \u0438\xA0\u044D\u0440\u0433\u043E\u043D\u043E\u043C\u0438\u043A\u0438.</p></div><div class="hidden lg:flex lg:row-span-2"></div><div class="flex flex-col gap-4 lg:gap-8"><h2 class="text-[36px] leading-[1.1] lg:text-[40px] font-extralight"><span class="text-primary">\u041D\u0438\u0437\u043A\u0438\u0439 \u0443\u0440\u043E\u0432\u0435\u043D\u044C</span> \u0448\u0443\u043C\u0430 \u0440\u0430\u0431\u043E\u0442\u044B \u043F\u0440\u0438\u0431\u043E\u0440\u0430 </h2><p>\u041D\u0438\u0437\u043A\u0438\u0439 \u0443\u0440\u043E\u0432\u0435\u043D\u044C \u0448\u0443\u043C\u0430 \u0432\u043E\xA0\u0432\u0440\u0435\u043C\u044F \u0440\u0430\u0431\u043E\u0442\u044B \u043F\u0440\u043E\u0442\u043E\u0447\u043D\u043E\u0433\u043E \u0446\u0438\u0442\u043E\u043C\u0435\u0442\u0440\u0430 \u043F\u043E\u0432\u044B\u0448\u0430\u0435\u0442 \u043A\u043E\u043C\u0444\u043E\u0440\u0442 \u0440\u0430\u0431\u043E\u0442\u044B \u0432\xA0\u043B\u0430\u0431\u043E\u0440\u0430\u0442\u043E\u0440\u0438\u0438, \u043E\u0441\u043E\u0431\u0435\u043D\u043D\u043E \u043F\u0440\u0438\xA0\u0440\u0430\u0437\u043C\u0435\u0449\u0435\u043D\u0438\u0438 \u043D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u0438\u0445 \u043F\u0440\u0438\u0431\u043E\u0440\u043E\u0432 \u0432\xA0\u043E\u0434\u043D\u043E\u043C \u043F\u043E\u043C\u0435\u0449\u0435\u043D\u0438\u0438.</p></div><div class="flex flex-col gap-4 lg:gap-8"><h2 class="text-[36px] leading-[1.1] lg:text-[40px] font-extralight"><span class="text-primary">\u0412\u043E\u043B\u044E\u043C\u0435\u0442\u0440\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u0430\u043D\u0430\u043B\u0438\u0437</span> \u043A\u043E\u043D\u0446\u0435\u043D\u0442\u0440\u0430\u0446\u0438\u0439 \u043A\u043B\u0435\u0442\u043E\u043A </h2><p>\u0422\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u044F \u0432\u043E\u043B\u044E\u043C\u0435\u0442\u0440\u0438\u0447\u0435\u0441\u043A\u043E\u0433\u043E \u0430\u043D\u0430\u043B\u0438\u0437\u0430 \u043A\u043E\u043D\u0446\u0435\u043D\u0442\u0440\u0430\u0446\u0438\u0439 \u043A\u043B\u0435\u0442\u043E\u043A \u043F\u043E\u0437\u0432\u043E\u043B\u044F\u0435\u0442 \u043F\u043E\u043B\u0443\u0447\u0430\u0442\u044C \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u044B \u0432\xA0\u0430\u0431\u0441\u043E\u043B\u044E\u0442\u043D\u044B\u0445 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0439 \u0431\u0435\u0437\xA0\u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u044F \u0434\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0445 \u0447\u0430\u0441\u0442\u0438\u0446.</p><p>\u042D\u0442\u043E \u0437\u043D\u0430\u0447\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u0443\u043F\u0440\u043E\u0449\u0430\u0435\u0442 \u043F\u043E\u0434\u0433\u043E\u0442\u043E\u0432\u043A\u0443 \u043E\u0431\u0440\u0430\u0437\u0446\u043E\u0432 \u0438\xA0\u0441\u043D\u0438\u0436\u0430\u0435\u0442 \u0441\u0435\u0431\u0435\u0441\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C \u0438\u0441\u0441\u043B\u0435\u0434\u043E\u0432\u0430\u043D\u0438\u044F.</p></div>`);
  _push(ssrRenderComponent(_component_NuxtImg, {
    format: "webp",
    class: "m-auto xl:absolute xl:left-[70%] xl:top-1/2 xl:translate-y-[-50%]",
    alt: "\u041F\u0440\u043E\u0442\u043E\u0447\u043D\u044B\u0439 \u0446\u0438\u0442\u043E\u043C\u0435\u0442\u0440 CELLRIVER",
    title: "\u041F\u0440\u043E\u0442\u043E\u0447\u043D\u044B\u0439 \u0446\u0438\u0442\u043E\u043C\u0435\u0442\u0440 CELLRIVER",
    src: "/img/item-photo-3.webp"
  }, null, _parent));
  _push(`</div></section><section class="py-16 lg:pt-24"><div class="container"><h2 class="lg:text-center mb-12 ~text-[40px]/[50px] leading-[1.1] font-extralight">\u041E\u0431\u043B\u0430\u0441\u0442\u0438 \u043F\u0440\u0438\u043C\u0435\u043D\u0435\u043D\u0438\u044F</h2><div class="grid lg:grid-cols-3 gap-8"><div class="xl:pr-12 xl:order-1 xl:pt-24"><ul class="flex flex-col gap-8 xl:text-right"><li class="flex gap-4"><p class="flex-auto order-2 xl:order-1">\u0418\u043C\u043C\u0443\u043D\u043E\u0444\u0435\u043D\u043E\u0442\u0438\u043F\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 (\u0432\xA0\u0442\u043E\u043C\xA0\u0447\u0438\u0441\u043B\u0435 \u0438\u043C\u043C\u0443\u043D\u043D\u044B\u0439 \u0441\u0442\u0430\u0442\u0443\u0441)</p><div class="xl:order-2 relative bottom-[8px] bg-[url(&#39;/icons/check.svg&#39;)] bg-contain rounded-full w-[42px] h-[42px] border border-primary flex items-center flex-shrink-0 justify-center"></div></li><li class="flex gap-4"><p class="flex-auto order-2 xl:order-1">\u0420\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0430 \u043A\u043B\u0435\u0442\u043E\u0447\u043D\u044B\u0445 \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u043E\u0432</p><div class="relative xl:order-2 bottom-[8px] bg-[url(&#39;/icons/check.svg&#39;)] bg-contain rounded-full w-[42px] h-[42px] border border-primary flex items-center flex-shrink-0 justify-center"></div></li><li class="flex gap-4"><p class="flex-auto order-2 xl:order-1">\u0424\u0443\u043D\u0434\u0430\u043C\u0435\u043D\u0442\u0430\u043B\u044C\u043D\u044B\u0435 \u0438\u0441\u0441\u043B\u0435\u0434\u043E\u0432\u0430\u043D\u0438\u044F \u0432 \u0438\u043C\u043C\u0443\u043D\u043E\u043B\u043E\u0433\u0438\u0438</p><div class="relative xl:order-2 bottom-[8px] bg-[url(&#39;/icons/check.svg&#39;)] bg-contain rounded-full w-[42px] h-[42px] border border-primary flex items-center flex-shrink-0 justify-center"></div></li></ul></div><div class="order-3 xl:order-2 flex justify-center">`);
  _push(ssrRenderComponent(_component_NuxtImg, {
    format: "webp",
    class: "w-full",
    alt: "\u041F\u0440\u043E\u0442\u043E\u0447\u043D\u044B\u0439 \u0446\u0438\u0442\u043E\u043C\u0435\u0442\u0440 CELLRIVER",
    title: "\u041F\u0440\u043E\u0442\u043E\u0447\u043D\u044B\u0439 \u0446\u0438\u0442\u043E\u043C\u0435\u0442\u0440 CELLRIVER",
    src: "/img/item-photo-4.webp"
  }, null, _parent));
  _push(`</div><div class="xl:pl-12 xl:order-3 xl:pt-24"><ul class="flex flex-col gap-8"><li class="flex gap-4"><div class="relative bottom-[8px] bg-[url(&#39;/icons/check.svg&#39;)] bg-contain rounded-full w-[42px] h-[42px] border border-primary flex items-center flex-shrink-0 justify-center"></div><p class="flex-auto">\u0418\u0441\u0441\u043B\u0435\u0434\u043E\u0432\u0430\u043D\u0438\u0435 \u043E\u043F\u0443\u0445\u043E\u043B\u0435\u0432\u044B\u0445 \u043A\u043B\u0435\u0442\u043E\u043A</p></li><li class="flex gap-4"><div class="relative bottom-[8px] bg-[url(&#39;/icons/check.svg&#39;)] bg-contain rounded-full w-[40px] h-[40px] border border-primary flex items-center flex-shrink-0 justify-center"></div><p class="flex-auto">\u0420\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0430 \u0438\xA0\u0442\u0435\u0441\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 CAR\u2011T\xA0\u043F\u0440\u043E\u0434\u0443\u043A\u0442\u043E\u0432</p></li></ul></div></div></div></section><section id="flowexpert" class="py-24 bg-foreground scroll-mt-16 text-white"><div class="container flex flex-col"><h2 class="mb-16 text-[48px] leading-[1.1] font-extralight"> \u041F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u043D\u043E\u0435 \u043E\u0431\u0435\u0441\u043F\u0435\u0447\u0435\u043D\u0438\u0435 <span>FlowExpert</span></h2><div class="grid grid-cols-1 xl:grid-cols-2 gap-8"><div class="flex flex-col gap-8">`);
  _push(ssrRenderComponent(_component_NuxtImg, {
    format: "webp",
    class: "w-full m-auto",
    alt: "\u041F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u043D\u043E\u0435 \u043E\u0431\u0435\u0441\u043F\u0435\u0447\u0435\u043D\u0438\u0435 FlowExpert",
    title: "\u041F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u043D\u043E\u0435 \u043E\u0431\u0435\u0441\u043F\u0435\u0447\u0435\u043D\u0438\u0435 FlowExpert",
    src: "/img/monitor.webp"
  }, null, _parent));
  _push(`</div>`);
  _push(ssrRenderComponent(_component_Carousel, { class: "relative w-full xl:pl-8" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_CarouselContent, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_CarouselItem, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<div class="flex flex-col gap-4"${_scopeId3}><h2 class="text-[36px] xl:text-[40px] leading-[1.1] font-extralight"${_scopeId3}> \u0412\u043E\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442\u044C \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u044F \u0433\u043E\u0442\u043E\u0432\u044B\u0445 \u043F\u0440\u043E\u0442\u043E\u043A\u043E\u043B\u043E\u0432 \u0441\u0431\u043E\u0440\u0430 \u0438\xA0\u0430\u043D\u0430\u043B\u0438\u0437\u0430 \u0434\u0430\u043D\u043D\u044B\u0445 </h2><p${_scopeId3}>\u0434\u043B\u044F \u0440\u0443\u0442\u0438\u043D\u043D\u044B\u0445 \u043B\u0430\u0431\u043E\u0440\u0430\u0442\u043E\u0440\u043D\u044B\u0445 \u0438\u0441\u0441\u043B\u0435\u0434\u043E\u0432\u0430\u043D\u0438\u0439 \u0438\u043C\u043C\u0443\u043D\u043D\u043E\u0433\u043E \u0441\u0442\u0430\u0442\u0443\u0441\u0430:</p><ul class="list-disc pl-4 marker:text-primary"${_scopeId3}><li${_scopeId3}>6-\u0446\u0432\u0435\u0442\u043D\u044B\u0439 \u043F\u0440\u043E\u0442\u043E\u043A\u043E\u043B \u0434\u043B\u044F \u043F\u043E\u0434\u0441\u0447\u0435\u0442\u0430 \u0422-,B-,NK- \u043B\u0438\u043C\u0444\u043E\u0446\u0438\u0442\u043E\u0432</li><li${_scopeId3}>4-\u0446\u0432\u0435\u0442\u043D\u044B\u0439 \u043F\u0440\u043E\u0442\u043E\u043A\u043E\u043B \u0434\u043B\u044F \u043E\u0446\u0435\u043D\u043A\u0438 \u043A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u0430 CD4-\u0438 \u0421D8-\u043B\u0438\u043C\u0444\u043E\u0446\u0438\u0442\u043E\u0432</li></ul></div>`);
                  } else {
                    return [
                      createVNode("div", { class: "flex flex-col gap-4" }, [
                        createVNode("h2", { class: "text-[36px] xl:text-[40px] leading-[1.1] font-extralight" }, " \u0412\u043E\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442\u044C \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u044F \u0433\u043E\u0442\u043E\u0432\u044B\u0445 \u043F\u0440\u043E\u0442\u043E\u043A\u043E\u043B\u043E\u0432 \u0441\u0431\u043E\u0440\u0430 \u0438\xA0\u0430\u043D\u0430\u043B\u0438\u0437\u0430 \u0434\u0430\u043D\u043D\u044B\u0445 "),
                        createVNode("p", null, "\u0434\u043B\u044F \u0440\u0443\u0442\u0438\u043D\u043D\u044B\u0445 \u043B\u0430\u0431\u043E\u0440\u0430\u0442\u043E\u0440\u043D\u044B\u0445 \u0438\u0441\u0441\u043B\u0435\u0434\u043E\u0432\u0430\u043D\u0438\u0439 \u0438\u043C\u043C\u0443\u043D\u043D\u043E\u0433\u043E \u0441\u0442\u0430\u0442\u0443\u0441\u0430:"),
                        createVNode("ul", { class: "list-disc pl-4 marker:text-primary" }, [
                          createVNode("li", null, "6-\u0446\u0432\u0435\u0442\u043D\u044B\u0439 \u043F\u0440\u043E\u0442\u043E\u043A\u043E\u043B \u0434\u043B\u044F \u043F\u043E\u0434\u0441\u0447\u0435\u0442\u0430 \u0422-,B-,NK- \u043B\u0438\u043C\u0444\u043E\u0446\u0438\u0442\u043E\u0432"),
                          createVNode("li", null, "4-\u0446\u0432\u0435\u0442\u043D\u044B\u0439 \u043F\u0440\u043E\u0442\u043E\u043A\u043E\u043B \u0434\u043B\u044F \u043E\u0446\u0435\u043D\u043A\u0438 \u043A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u0430 CD4-\u0438 \u0421D8-\u043B\u0438\u043C\u0444\u043E\u0446\u0438\u0442\u043E\u0432")
                        ])
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_CarouselItem, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<div class="flex flex-col gap-4"${_scopeId3}><h2 class="text-[36px] xl:text-[40px] leading-[1.1] font-extralight"${_scopeId3}> \u041E\u0442\u043A\u0440\u044B\u0442\u043E\u0435 \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u043D\u043E\u0435 \u043E\u0431\u0435\u0441\u043F\u0435\u0447\u0435\u043D\u0438\u0435 </h2><p${_scopeId3}>\u043F\u043E\u0437\u0432\u043E\u043B\u044F\u044E\u0449\u0435\u0435 \u043D\u0430\u0441\u0442\u0440\u043E\u0438\u0442\u044C \u043F\u0440\u043E\u0442\u043E\u043A\u043E\u043B \u043F\u043E\u0434 \u043B\u044E\u0431\u044B\u0435 \u0441\u043E\u0432\u043C\u0435\u0441\u0442\u0438\u043C\u044B\u0435 \u0440\u0435\u0430\u0433\u0435\u043D\u0442\u044B</p></div>`);
                  } else {
                    return [
                      createVNode("div", { class: "flex flex-col gap-4" }, [
                        createVNode("h2", { class: "text-[36px] xl:text-[40px] leading-[1.1] font-extralight" }, " \u041E\u0442\u043A\u0440\u044B\u0442\u043E\u0435 \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u043D\u043E\u0435 \u043E\u0431\u0435\u0441\u043F\u0435\u0447\u0435\u043D\u0438\u0435 "),
                        createVNode("p", null, "\u043F\u043E\u0437\u0432\u043E\u043B\u044F\u044E\u0449\u0435\u0435 \u043D\u0430\u0441\u0442\u0440\u043E\u0438\u0442\u044C \u043F\u0440\u043E\u0442\u043E\u043A\u043E\u043B \u043F\u043E\u0434 \u043B\u044E\u0431\u044B\u0435 \u0441\u043E\u0432\u043C\u0435\u0441\u0442\u0438\u043C\u044B\u0435 \u0440\u0435\u0430\u0433\u0435\u043D\u0442\u044B")
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_CarouselItem, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<div class="flex flex-col gap-4"${_scopeId3}><h2 class="text-[36px] xl:text-[40px] leading-[1.1] font-extralight"${_scopeId3}> \u041F\u0435\u0440\u0432\u043E\u0435 \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u043D\u043E\u0435 \u043E\u0431\u0435\u0441\u043F\u0435\u0447\u0435\u043D\u0438\u0435 \u0434\u043B\u044F \u043F\u0440\u043E\u0442\u043E\u0447\u043D\u043E\u0433\u043E \u0446\u0438\u0442\u043E\u043C\u0435\u0442\u0440\u0430 \u043F\u043E\u043B\u043D\u043E\u0441\u0442\u044C\u044E \u043D\u0430 \u0440\u0443\u0441\u0441\u043A\u043E\u043C \u044F\u0437\u044B\u043A\u0435 </h2><p${_scopeId3}>\u043E\u0431\u0435\u0441\u043F\u0435\u0447\u0438\u0432\u0430\u0435\u0442 \u0443\u0434\u043E\u0431\u0441\u0442\u0432\u043E \u0438 \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u043E\u0441\u0442\u044C \u0434\u043B\u044F \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0435\u0439. \u041E\u043D\u043E \u043F\u0440\u0435\u0434\u043B\u0430\u0433\u0430\u0435\u0442 \u0438\u043D\u0442\u0443\u0438\u0442\u0438\u0432\u043D\u043E \u043F\u043E\u043D\u044F\u0442\u043D\u044B\u0439 \u0438\u043D\u0442\u0435\u0440\u0444\u0435\u0439\u0441, \u0447\u0442\u043E \u0443\u043F\u0440\u043E\u0449\u0430\u0435\u0442 \u043E\u0431\u0443\u0447\u0435\u043D\u0438\u0435 \u0438 \u0440\u0430\u0431\u043E\u0442\u0443 \u0441 \u0441\u0438\u0441\u0442\u0435\u043C\u043E\u0439. \u0421\u043F\u0435\u0446\u0438\u0430\u043B\u0438\u0441\u0442\u044B \u043C\u043E\u0433\u0443\u0442 \u0441\u043E\u0441\u0440\u0435\u0434\u043E\u0442\u043E\u0447\u0438\u0442\u044C\u0441\u044F \u043D\u0430 \u043F\u0440\u043E\u0432\u0435\u0434\u0435\u043D\u0438\u0438 \u0438\u0441\u0441\u043B\u0435\u0434\u043E\u0432\u0430\u043D\u0438\u0439, \u043D\u0435 \u043E\u0442\u0432\u043B\u0435\u043A\u0430\u044F\u0441\u044C \u043D\u0430 \u044F\u0437\u044B\u043A\u043E\u0432\u044B\u0435 \u0431\u0430\u0440\u044C\u0435\u0440\u044B.</p></div>`);
                  } else {
                    return [
                      createVNode("div", { class: "flex flex-col gap-4" }, [
                        createVNode("h2", { class: "text-[36px] xl:text-[40px] leading-[1.1] font-extralight" }, " \u041F\u0435\u0440\u0432\u043E\u0435 \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u043D\u043E\u0435 \u043E\u0431\u0435\u0441\u043F\u0435\u0447\u0435\u043D\u0438\u0435 \u0434\u043B\u044F \u043F\u0440\u043E\u0442\u043E\u0447\u043D\u043E\u0433\u043E \u0446\u0438\u0442\u043E\u043C\u0435\u0442\u0440\u0430 \u043F\u043E\u043B\u043D\u043E\u0441\u0442\u044C\u044E \u043D\u0430 \u0440\u0443\u0441\u0441\u043A\u043E\u043C \u044F\u0437\u044B\u043A\u0435 "),
                        createVNode("p", null, "\u043E\u0431\u0435\u0441\u043F\u0435\u0447\u0438\u0432\u0430\u0435\u0442 \u0443\u0434\u043E\u0431\u0441\u0442\u0432\u043E \u0438 \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u043E\u0441\u0442\u044C \u0434\u043B\u044F \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0435\u0439. \u041E\u043D\u043E \u043F\u0440\u0435\u0434\u043B\u0430\u0433\u0430\u0435\u0442 \u0438\u043D\u0442\u0443\u0438\u0442\u0438\u0432\u043D\u043E \u043F\u043E\u043D\u044F\u0442\u043D\u044B\u0439 \u0438\u043D\u0442\u0435\u0440\u0444\u0435\u0439\u0441, \u0447\u0442\u043E \u0443\u043F\u0440\u043E\u0449\u0430\u0435\u0442 \u043E\u0431\u0443\u0447\u0435\u043D\u0438\u0435 \u0438 \u0440\u0430\u0431\u043E\u0442\u0443 \u0441 \u0441\u0438\u0441\u0442\u0435\u043C\u043E\u0439. \u0421\u043F\u0435\u0446\u0438\u0430\u043B\u0438\u0441\u0442\u044B \u043C\u043E\u0433\u0443\u0442 \u0441\u043E\u0441\u0440\u0435\u0434\u043E\u0442\u043E\u0447\u0438\u0442\u044C\u0441\u044F \u043D\u0430 \u043F\u0440\u043E\u0432\u0435\u0434\u0435\u043D\u0438\u0438 \u0438\u0441\u0441\u043B\u0435\u0434\u043E\u0432\u0430\u043D\u0438\u0439, \u043D\u0435 \u043E\u0442\u0432\u043B\u0435\u043A\u0430\u044F\u0441\u044C \u043D\u0430 \u044F\u0437\u044B\u043A\u043E\u0432\u044B\u0435 \u0431\u0430\u0440\u044C\u0435\u0440\u044B.")
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_CarouselItem, null, {
                  default: withCtx(() => [
                    createVNode("div", { class: "flex flex-col gap-4" }, [
                      createVNode("h2", { class: "text-[36px] xl:text-[40px] leading-[1.1] font-extralight" }, " \u0412\u043E\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442\u044C \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u044F \u0433\u043E\u0442\u043E\u0432\u044B\u0445 \u043F\u0440\u043E\u0442\u043E\u043A\u043E\u043B\u043E\u0432 \u0441\u0431\u043E\u0440\u0430 \u0438\xA0\u0430\u043D\u0430\u043B\u0438\u0437\u0430 \u0434\u0430\u043D\u043D\u044B\u0445 "),
                      createVNode("p", null, "\u0434\u043B\u044F \u0440\u0443\u0442\u0438\u043D\u043D\u044B\u0445 \u043B\u0430\u0431\u043E\u0440\u0430\u0442\u043E\u0440\u043D\u044B\u0445 \u0438\u0441\u0441\u043B\u0435\u0434\u043E\u0432\u0430\u043D\u0438\u0439 \u0438\u043C\u043C\u0443\u043D\u043D\u043E\u0433\u043E \u0441\u0442\u0430\u0442\u0443\u0441\u0430:"),
                      createVNode("ul", { class: "list-disc pl-4 marker:text-primary" }, [
                        createVNode("li", null, "6-\u0446\u0432\u0435\u0442\u043D\u044B\u0439 \u043F\u0440\u043E\u0442\u043E\u043A\u043E\u043B \u0434\u043B\u044F \u043F\u043E\u0434\u0441\u0447\u0435\u0442\u0430 \u0422-,B-,NK- \u043B\u0438\u043C\u0444\u043E\u0446\u0438\u0442\u043E\u0432"),
                        createVNode("li", null, "4-\u0446\u0432\u0435\u0442\u043D\u044B\u0439 \u043F\u0440\u043E\u0442\u043E\u043A\u043E\u043B \u0434\u043B\u044F \u043E\u0446\u0435\u043D\u043A\u0438 \u043A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u0430 CD4-\u0438 \u0421D8-\u043B\u0438\u043C\u0444\u043E\u0446\u0438\u0442\u043E\u0432")
                      ])
                    ])
                  ]),
                  _: 1
                }),
                createVNode(_component_CarouselItem, null, {
                  default: withCtx(() => [
                    createVNode("div", { class: "flex flex-col gap-4" }, [
                      createVNode("h2", { class: "text-[36px] xl:text-[40px] leading-[1.1] font-extralight" }, " \u041E\u0442\u043A\u0440\u044B\u0442\u043E\u0435 \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u043D\u043E\u0435 \u043E\u0431\u0435\u0441\u043F\u0435\u0447\u0435\u043D\u0438\u0435 "),
                      createVNode("p", null, "\u043F\u043E\u0437\u0432\u043E\u043B\u044F\u044E\u0449\u0435\u0435 \u043D\u0430\u0441\u0442\u0440\u043E\u0438\u0442\u044C \u043F\u0440\u043E\u0442\u043E\u043A\u043E\u043B \u043F\u043E\u0434 \u043B\u044E\u0431\u044B\u0435 \u0441\u043E\u0432\u043C\u0435\u0441\u0442\u0438\u043C\u044B\u0435 \u0440\u0435\u0430\u0433\u0435\u043D\u0442\u044B")
                    ])
                  ]),
                  _: 1
                }),
                createVNode(_component_CarouselItem, null, {
                  default: withCtx(() => [
                    createVNode("div", { class: "flex flex-col gap-4" }, [
                      createVNode("h2", { class: "text-[36px] xl:text-[40px] leading-[1.1] font-extralight" }, " \u041F\u0435\u0440\u0432\u043E\u0435 \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u043D\u043E\u0435 \u043E\u0431\u0435\u0441\u043F\u0435\u0447\u0435\u043D\u0438\u0435 \u0434\u043B\u044F \u043F\u0440\u043E\u0442\u043E\u0447\u043D\u043E\u0433\u043E \u0446\u0438\u0442\u043E\u043C\u0435\u0442\u0440\u0430 \u043F\u043E\u043B\u043D\u043E\u0441\u0442\u044C\u044E \u043D\u0430 \u0440\u0443\u0441\u0441\u043A\u043E\u043C \u044F\u0437\u044B\u043A\u0435 "),
                      createVNode("p", null, "\u043E\u0431\u0435\u0441\u043F\u0435\u0447\u0438\u0432\u0430\u0435\u0442 \u0443\u0434\u043E\u0431\u0441\u0442\u0432\u043E \u0438 \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u043E\u0441\u0442\u044C \u0434\u043B\u044F \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0435\u0439. \u041E\u043D\u043E \u043F\u0440\u0435\u0434\u043B\u0430\u0433\u0430\u0435\u0442 \u0438\u043D\u0442\u0443\u0438\u0442\u0438\u0432\u043D\u043E \u043F\u043E\u043D\u044F\u0442\u043D\u044B\u0439 \u0438\u043D\u0442\u0435\u0440\u0444\u0435\u0439\u0441, \u0447\u0442\u043E \u0443\u043F\u0440\u043E\u0449\u0430\u0435\u0442 \u043E\u0431\u0443\u0447\u0435\u043D\u0438\u0435 \u0438 \u0440\u0430\u0431\u043E\u0442\u0443 \u0441 \u0441\u0438\u0441\u0442\u0435\u043C\u043E\u0439. \u0421\u043F\u0435\u0446\u0438\u0430\u043B\u0438\u0441\u0442\u044B \u043C\u043E\u0433\u0443\u0442 \u0441\u043E\u0441\u0440\u0435\u0434\u043E\u0442\u043E\u0447\u0438\u0442\u044C\u0441\u044F \u043D\u0430 \u043F\u0440\u043E\u0432\u0435\u0434\u0435\u043D\u0438\u0438 \u0438\u0441\u0441\u043B\u0435\u0434\u043E\u0432\u0430\u043D\u0438\u0439, \u043D\u0435 \u043E\u0442\u0432\u043B\u0435\u043A\u0430\u044F\u0441\u044C \u043D\u0430 \u044F\u0437\u044B\u043A\u043E\u0432\u044B\u0435 \u0431\u0430\u0440\u044C\u0435\u0440\u044B.")
                    ])
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_CarouselPrevious, { class: "left-0 xl:left-8 top-[110%] xl:top-[60%] -translate-y-0 border-background" }, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_CarouselNext, { class: "left-12 xl:left-20 top-[110%] xl:top-[60%] -translate-y-0 border-background" }, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_CarouselContent, null, {
            default: withCtx(() => [
              createVNode(_component_CarouselItem, null, {
                default: withCtx(() => [
                  createVNode("div", { class: "flex flex-col gap-4" }, [
                    createVNode("h2", { class: "text-[36px] xl:text-[40px] leading-[1.1] font-extralight" }, " \u0412\u043E\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442\u044C \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u044F \u0433\u043E\u0442\u043E\u0432\u044B\u0445 \u043F\u0440\u043E\u0442\u043E\u043A\u043E\u043B\u043E\u0432 \u0441\u0431\u043E\u0440\u0430 \u0438\xA0\u0430\u043D\u0430\u043B\u0438\u0437\u0430 \u0434\u0430\u043D\u043D\u044B\u0445 "),
                    createVNode("p", null, "\u0434\u043B\u044F \u0440\u0443\u0442\u0438\u043D\u043D\u044B\u0445 \u043B\u0430\u0431\u043E\u0440\u0430\u0442\u043E\u0440\u043D\u044B\u0445 \u0438\u0441\u0441\u043B\u0435\u0434\u043E\u0432\u0430\u043D\u0438\u0439 \u0438\u043C\u043C\u0443\u043D\u043D\u043E\u0433\u043E \u0441\u0442\u0430\u0442\u0443\u0441\u0430:"),
                    createVNode("ul", { class: "list-disc pl-4 marker:text-primary" }, [
                      createVNode("li", null, "6-\u0446\u0432\u0435\u0442\u043D\u044B\u0439 \u043F\u0440\u043E\u0442\u043E\u043A\u043E\u043B \u0434\u043B\u044F \u043F\u043E\u0434\u0441\u0447\u0435\u0442\u0430 \u0422-,B-,NK- \u043B\u0438\u043C\u0444\u043E\u0446\u0438\u0442\u043E\u0432"),
                      createVNode("li", null, "4-\u0446\u0432\u0435\u0442\u043D\u044B\u0439 \u043F\u0440\u043E\u0442\u043E\u043A\u043E\u043B \u0434\u043B\u044F \u043E\u0446\u0435\u043D\u043A\u0438 \u043A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u0430 CD4-\u0438 \u0421D8-\u043B\u0438\u043C\u0444\u043E\u0446\u0438\u0442\u043E\u0432")
                    ])
                  ])
                ]),
                _: 1
              }),
              createVNode(_component_CarouselItem, null, {
                default: withCtx(() => [
                  createVNode("div", { class: "flex flex-col gap-4" }, [
                    createVNode("h2", { class: "text-[36px] xl:text-[40px] leading-[1.1] font-extralight" }, " \u041E\u0442\u043A\u0440\u044B\u0442\u043E\u0435 \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u043D\u043E\u0435 \u043E\u0431\u0435\u0441\u043F\u0435\u0447\u0435\u043D\u0438\u0435 "),
                    createVNode("p", null, "\u043F\u043E\u0437\u0432\u043E\u043B\u044F\u044E\u0449\u0435\u0435 \u043D\u0430\u0441\u0442\u0440\u043E\u0438\u0442\u044C \u043F\u0440\u043E\u0442\u043E\u043A\u043E\u043B \u043F\u043E\u0434 \u043B\u044E\u0431\u044B\u0435 \u0441\u043E\u0432\u043C\u0435\u0441\u0442\u0438\u043C\u044B\u0435 \u0440\u0435\u0430\u0433\u0435\u043D\u0442\u044B")
                  ])
                ]),
                _: 1
              }),
              createVNode(_component_CarouselItem, null, {
                default: withCtx(() => [
                  createVNode("div", { class: "flex flex-col gap-4" }, [
                    createVNode("h2", { class: "text-[36px] xl:text-[40px] leading-[1.1] font-extralight" }, " \u041F\u0435\u0440\u0432\u043E\u0435 \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u043D\u043E\u0435 \u043E\u0431\u0435\u0441\u043F\u0435\u0447\u0435\u043D\u0438\u0435 \u0434\u043B\u044F \u043F\u0440\u043E\u0442\u043E\u0447\u043D\u043E\u0433\u043E \u0446\u0438\u0442\u043E\u043C\u0435\u0442\u0440\u0430 \u043F\u043E\u043B\u043D\u043E\u0441\u0442\u044C\u044E \u043D\u0430 \u0440\u0443\u0441\u0441\u043A\u043E\u043C \u044F\u0437\u044B\u043A\u0435 "),
                    createVNode("p", null, "\u043E\u0431\u0435\u0441\u043F\u0435\u0447\u0438\u0432\u0430\u0435\u0442 \u0443\u0434\u043E\u0431\u0441\u0442\u0432\u043E \u0438 \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u043E\u0441\u0442\u044C \u0434\u043B\u044F \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0435\u0439. \u041E\u043D\u043E \u043F\u0440\u0435\u0434\u043B\u0430\u0433\u0430\u0435\u0442 \u0438\u043D\u0442\u0443\u0438\u0442\u0438\u0432\u043D\u043E \u043F\u043E\u043D\u044F\u0442\u043D\u044B\u0439 \u0438\u043D\u0442\u0435\u0440\u0444\u0435\u0439\u0441, \u0447\u0442\u043E \u0443\u043F\u0440\u043E\u0449\u0430\u0435\u0442 \u043E\u0431\u0443\u0447\u0435\u043D\u0438\u0435 \u0438 \u0440\u0430\u0431\u043E\u0442\u0443 \u0441 \u0441\u0438\u0441\u0442\u0435\u043C\u043E\u0439. \u0421\u043F\u0435\u0446\u0438\u0430\u043B\u0438\u0441\u0442\u044B \u043C\u043E\u0433\u0443\u0442 \u0441\u043E\u0441\u0440\u0435\u0434\u043E\u0442\u043E\u0447\u0438\u0442\u044C\u0441\u044F \u043D\u0430 \u043F\u0440\u043E\u0432\u0435\u0434\u0435\u043D\u0438\u0438 \u0438\u0441\u0441\u043B\u0435\u0434\u043E\u0432\u0430\u043D\u0438\u0439, \u043D\u0435 \u043E\u0442\u0432\u043B\u0435\u043A\u0430\u044F\u0441\u044C \u043D\u0430 \u044F\u0437\u044B\u043A\u043E\u0432\u044B\u0435 \u0431\u0430\u0440\u044C\u0435\u0440\u044B.")
                  ])
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          createVNode(_component_CarouselPrevious, { class: "left-0 xl:left-8 top-[110%] xl:top-[60%] -translate-y-0 border-background" }),
          createVNode(_component_CarouselNext, { class: "left-12 xl:left-20 top-[110%] xl:top-[60%] -translate-y-0 border-background" })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></section><section id="service" class="py-16 lg:py-24 scroll-mt-16"><div class="container flex flex-col gap-12"><h2 class="text-[50px] leading-[1.1] font-extralight">\u0422\u0435\u0445\u043D\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u0441\u0435\u0440\u0432\u0438\u0441</h2><ul class="grid grid-cols-2 lg:grid-cols-3 gap-y-8 lg:gap-y-16 gap-x-8 lg:gap-x-16"><li class="flex flex-col gap-4 text-[20px]">`);
  _push(ssrRenderComponent(_component_NuxtImg, {
    width: "72",
    class: "w-[72px] h-[80px]",
    src: "/icons/service-icon-7.svg"
  }, null, _parent));
  _push(`<h3 class="text-primary text-[18px]">\u041E\u043F\u0435\u0440\u0430\u0442\u0438\u0432\u043D\u0430\u044F \u0442\u0435\u0445\u043D\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u043A\u0430</h3><p class="~text-[14px]/[16px]">\u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u0435 \u0438\xA0\u0437\u0430\u043F\u0447\u0430\u0441\u0442\u0438 \u0434\u043B\u044F\xA0\u043F\u0440\u043E\u0442\u043E\u0447\u043D\u044B\u0445 \u0446\u0438\u0442\u043E\u043C\u0435\u0442\u0440\u043E\u0432\xA0 \u0432\xA0\u043D\u0430\u043B\u0438\u0447\u0438\u0438 \u043D\u0430\xA0\u0441\u043A\u043B\u0430\u0434\u0435 \u0432\xA0\u0421\u0430\u043D\u043A\u0442\u2011\u041F\u0435\u0442\u0435\u0440\u0431\u0443\u0440\u0433\u0435</p></li><li class="flex flex-col gap-4 text-[20px]">`);
  _push(ssrRenderComponent(_component_NuxtImg, {
    width: "72",
    class: "w-[72px] h-[80px]",
    src: "/icons/service-icon-9.svg"
  }, null, _parent));
  _push(`<h3 class="text-primary text-[18px]">\u0411\u044B\u0441\u0442\u0440\u0430\u044F \u0440\u0435\u0430\u043A\u0446\u0438\u044F \u043D\u0430 \u0437\u0430\u043F\u0440\u043E\u0441\u044B</h3><p class="~text-[14px]/[16px]">\u043D\u0430\u043B\u0438\u0447\u0438\u0435 \u043A\u0432\u0430\u043B\u0438\u0444\u0438\u0446\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u043E\u0439 \u043A\u043E\u043C\u0430\u043D\u0434\u044B \u0442\u0435\u0445\u043D\u0438\u0447\u0435\u0441\u043A\u043E\u0439 \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u043A\u0438 \u043F\u043E\u0437\u0432\u043E\u043B\u044F\u0435\u0442 \u0431\u044B\u0441\u0442\u0440\u043E \u0440\u0435\u0430\u0433\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u043D\u0430\xA0\u0432\u043E\u0437\u043C\u043E\u0436\u043D\u044B\u0435 \u043F\u0440\u043E\u0431\u043B\u0435\u043C\u044B \u0441\xA0\u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u0435\u043C, \u0447\u0442\u043E\xA0\u043A\u0440\u0438\u0442\u0438\u0447\u043D\u043E \u0434\u043B\u044F\xA0\u043B\u0430\u0431\u043E\u0440\u0430\u0442\u043E\u0440\u0438\u0439, \u0433\u0434\u0435\xA0\u0432\u0440\u0435\u043C\u044F \u043C\u043E\u0436\u0435\u0442 \u0438\u0433\u0440\u0430\u0442\u044C \u0440\u0435\u0448\u0430\u044E\u0449\u0443\u044E \u0440\u043E\u043B\u044C.</p></li><li class="flex flex-col gap-4 text-[20px]">`);
  _push(ssrRenderComponent(_component_NuxtImg, {
    width: "72",
    class: "w-[72px] h-[80px]",
    src: "/icons/service-icon-10.svg"
  }, null, _parent));
  _push(`<h3 class="text-primary text-[18px]">\u041A\u043E\u043D\u0441\u0443\u043B\u044C\u0442\u0430\u0446\u0438\u0438 \u0438 \u043E\u0431\u0443\u0447\u0435\u043D\u0438\u0435</h3><p class="~text-[14px]/[16px]">\u0442\u0435\u0445\u043D\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u043A\u0430 \u043D\u0435\xA0\u0442\u043E\u043B\u044C\u043A\u043E \u0440\u0435\u0448\u0430\u0435\u0442 \u043F\u0440\u043E\u0431\u043B\u0435\u043C\u044B, \u043D\u043E\xA0\u0438\xA0\u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u0442 \u043A\u043E\u043D\u0441\u0443\u043B\u044C\u0442\u0430\u0446\u0438\u0438 \u043F\u043E\xA0\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u043E\u0439 \u044D\u043A\u0441\u043F\u043B\u0443\u0430\u0442\u0430\u0446\u0438\u0438 \u0438\xA0\u043E\u0431\u0441\u043B\u0443\u0436\u0438\u0432\u0430\u043D\u0438\u044E \u043F\u0440\u043E\u0442\u043E\u0447\u043D\u044B\u0445 \u0446\u0438\u0442\u043E\u043C\u0435\u0442\u0440\u043E\u0432, \u0447\u0442\u043E\xA0\u043F\u043E\u043C\u043E\u0433\u0430\u0435\u0442 \u043F\u0440\u0435\u0434\u043E\u0442\u0432\u0440\u0430\u0442\u0438\u0442\u044C \u043F\u043E\u043B\u043E\u043C\u043A\u0438.</p></li><li class="flex flex-col gap-4 text-[20px]">`);
  _push(ssrRenderComponent(_component_NuxtImg, {
    width: "72",
    class: "w-[72px] h-[80px]",
    src: "/icons/service-icon-11.svg"
  }, null, _parent));
  _push(`<h3 class="text-primary text-[18px]">\u041F\u0440\u043E\u0444\u0438\u043B\u0430\u043A\u0442\u0438\u043A\u0430 \u043D\u0435\u0438\u0441\u043F\u0440\u0430\u0432\u043D\u043E\u0441\u0442\u0435\u0439</h3><p class="~text-[14px]/[16px]">\u0440\u0435\u0433\u0443\u043B\u044F\u0440\u043D\u044B\u0435 \u043F\u0440\u043E\u0432\u0435\u0440\u043A\u0438 \u0438\xA0\u043F\u0440\u043E\u0444\u0438\u043B\u0430\u043A\u0442\u0438\u0447\u0435\u0441\u043A\u043E\u0435 \u043E\u0431\u0441\u043B\u0443\u0436\u0438\u0432\u0430\u043D\u0438\u0435, \u043F\u0440\u043E\u0432\u043E\u0434\u0438\u043C\u044B\u0435 \u0442\u0435\u0445\u043D\u0438\u0447\u0435\u0441\u043A\u0438\u043C\u0438 \u0441\u043F\u0435\u0446\u0438\u0430\u043B\u0438\u0441\u0442\u0430\u043C\u0438, \u043F\u043E\u043C\u043E\u0433\u0430\u044E\u0442 \u0432\u044B\u044F\u0432\u043B\u044F\u0442\u044C \u043F\u043E\u0442\u0435\u043D\u0446\u0438\u0430\u043B\u044C\u043D\u044B\u0435 \u043F\u0440\u043E\u0431\u043B\u0435\u043C\u044B \u0434\u043E\xA0\u0442\u043E\u0433\u043E, \u043A\u0430\u043A\xA0\u043E\u043D\u0438\xA0\u043F\u0440\u0438\u0432\u0435\u0434\u0443\u0442 \u043A\xA0\u0441\u0435\u0440\u044C\u0435\u0437\u043D\u044B\u043C \u0441\u0431\u043E\u044F\u043C.</p></li><li class="flex flex-col gap-4 text-[20px]">`);
  _push(ssrRenderComponent(_component_NuxtImg, {
    width: "72",
    class: "w-[72px] h-[80px]",
    src: "/icons/service-icon-12.svg"
  }, null, _parent));
  _push(`<h3 class="text-primary text-[18px]">\u0421\u043D\u0438\u0436\u0435\u043D\u0438\u0435 \u0437\u0430\u0442\u0440\u0430\u0442 \u0434\u043B\u044F \u043B\u0430\u0431\u043E\u0440\u0430\u0442\u043E\u0440\u0438\u0438</h3><p class="~text-[14px]/[16px]">\u0437\u0430\u043F\u0430\u0441 \u043A\u043E\u043C\u043F\u043B\u0435\u043A\u0442\u0443\u044E\u0449\u0438\u0445 \u043D\u0430\xA0\u0441\u043A\u043B\u0430\u0434\u0435 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438-\u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044F \u0432\xA0\u0420\u043E\u0441\u0441\u0438\u0438 \u043F\u043E\u043C\u043E\u0433\u0430\u0435\u0442 \u0438\u0437\u0431\u0435\u0436\u0430\u0442\u044C \u0434\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0445 \u0440\u0430\u0441\u0445\u043E\u0434\u043E\u0432 \u043D\u0430\xA0\u044D\u043A\u0441\u0442\u0440\u0435\u043D\u043D\u044B\u0435 \u0437\u0430\u043A\u0430\u0437\u044B \u0438\xA0\u0434\u043E\u0441\u0442\u0430\u0432\u043A\u0443 \u0438\u0437-\u0437\u0430 \u0440\u0443\u0431\u0435\u0436\u0430.</p></li><li class="flex flex-col gap-4 text-[20px]">`);
  _push(ssrRenderComponent(_component_NuxtImg, {
    width: "72",
    class: "w-[72px] h-[80px]",
    src: "/icons/service-icon-8.svg"
  }, null, _parent));
  _push(`<h3 class="text-primary text-[18px]">\u0420\u0430\u0441\u0448\u0438\u0440\u0435\u043D\u043D\u0430\u044F \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0430 \u0433\u0430\u0440\u0430\u043D\u0442\u0438\u0439\u043D\u043E\u0433\u043E \u043E\u0431\u0441\u043B\u0443\u0436\u0438\u0432\u0430\u043D\u0438\u044F</h3></li></ul></div></section><section id="contacts" class="relative z-0 overflow-hidden py-16 lg:py-24"><video class="hidden lg:flex absolute z-10 w-full left-0 top-0 h-full object-cover object-center" loop muted autoplay playsinline${ssrRenderAttr("poster", _imports_0)}><source${ssrRenderAttr("src", _imports_2)} type="video/mp4"></video><div class="absolute z-20 w-full left-0 top-0 h-full bg-gradient-to-r from-black from-35% to-black lg:to-black/50"></div><div class="container z-30 grid lg:grid-cols-2 relative"><div class="flex justify-center lg:justify-start">`);
  _push(ssrRenderComponent(_component_BaseContactForm, null, null, _parent));
  _push(`</div></div></section></main>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { index as default };
//# sourceMappingURL=index-DVd2mQqR.mjs.map
