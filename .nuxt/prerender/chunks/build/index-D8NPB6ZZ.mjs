import { useSSRContext, defineComponent, mergeProps, watch, withCtx, createTextVNode, ref, createVNode, h } from 'file:///Users/belinovich/Desktop/web/labvision/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent } from 'file:///Users/belinovich/Desktop/web/labvision/node_modules/vue/server-renderer/index.mjs';
import { p as publicAssetsURL } from '../_/renderer.mjs';
import { _ as __nuxt_component_1, a as __nuxt_component_4$1, b as _sfc_main$e } from './contactForm-DM4VYoTk.mjs';
import { _ as _export_sfc, u as useNuxtApp } from './server.mjs';
import { Marquee } from 'file:///Users/belinovich/Desktop/web/labvision/node_modules/vue-fast-marquee/dist/vue-fast-marquee.js';
import 'file:///Users/belinovich/Desktop/web/labvision/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file:///Users/belinovich/Desktop/web/labvision/node_modules/h3/dist/index.mjs';
import 'file:///Users/belinovich/Desktop/web/labvision/node_modules/devalue/index.js';
import 'file:///Users/belinovich/Desktop/web/labvision/node_modules/ufo/dist/index.mjs';
import 'file:///Users/belinovich/Desktop/web/labvision/node_modules/@unhead/ssr/dist/index.mjs';
import '../runtime.mjs';
import 'file:///Users/belinovich/Desktop/web/labvision/node_modules/ofetch/dist/node.mjs';
import 'file:///Users/belinovich/Desktop/web/labvision/node_modules/destr/dist/index.mjs';
import 'file:///Users/belinovich/Desktop/web/labvision/node_modules/unenv/runtime/fetch/index.mjs';
import 'file:///Users/belinovich/Desktop/web/labvision/node_modules/hookable/dist/index.mjs';
import 'file:///Users/belinovich/Desktop/web/labvision/node_modules/klona/dist/index.mjs';
import 'file:///Users/belinovich/Desktop/web/labvision/node_modules/scule/dist/index.mjs';
import 'file:///Users/belinovich/Desktop/web/labvision/node_modules/defu/dist/defu.mjs';
import 'file:///Users/belinovich/Desktop/web/labvision/node_modules/ohash/dist/index.mjs';
import 'file:///Users/belinovich/Desktop/web/labvision/node_modules/unstorage/dist/index.mjs';
import 'file:///Users/belinovich/Desktop/web/labvision/node_modules/unstorage/drivers/fs.mjs';
import 'file:///Users/belinovich/Desktop/web/labvision/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file:///Users/belinovich/Desktop/web/labvision/node_modules/unstorage/drivers/lru-cache.mjs';
import 'file:///Users/belinovich/Desktop/web/labvision/node_modules/radix3/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file:///Users/belinovich/Desktop/web/labvision/node_modules/pathe/dist/index.mjs';
import 'file:///Users/belinovich/Desktop/web/labvision/node_modules/ipx/dist/index.mjs';
import 'file:///Users/belinovich/Desktop/web/labvision/node_modules/unhead/dist/index.mjs';
import 'file:///Users/belinovich/Desktop/web/labvision/node_modules/@unhead/shared/dist/index.mjs';
import 'file:///Users/belinovich/Desktop/web/labvision/node_modules/vee-validate/dist/vee-validate.js';
import 'file:///Users/belinovich/Desktop/web/labvision/node_modules/@vee-validate/zod/dist/vee-validate-zod.js';
import 'file:///Users/belinovich/Desktop/web/labvision/node_modules/radix-vue/dist/index.js';
import 'file:///Users/belinovich/Desktop/web/labvision/node_modules/zod/lib/index.mjs';
import 'file:///Users/belinovich/Desktop/web/labvision/node_modules/unctx/dist/index.mjs';
import 'file:///Users/belinovich/Desktop/web/labvision/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file:///Users/belinovich/Desktop/web/labvision/node_modules/gsap/dist/gsap.js';
import 'file:///Users/belinovich/Desktop/web/labvision/node_modules/class-variance-authority/dist/index.mjs';
import 'file:///Users/belinovich/Desktop/web/labvision/node_modules/clsx/dist/clsx.mjs';
import 'file:///Users/belinovich/Desktop/web/labvision/node_modules/tailwind-merge/dist/bundle-mjs.mjs';
import 'file:///Users/belinovich/Desktop/web/labvision/node_modules/lucide-vue-next/dist/cjs/lucide-vue-next.js';

const _imports_0 = publicAssetsURL("/img/first-screen-poster.webp");
const _imports_1$1 = publicAssetsURL("/video/video-1.mp4");
const _sfc_main$d = /* @__PURE__ */ defineComponent({
  __name: "FirstScreen",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "relative" }, _attrs))}><video class="absolute z-10 w-full left-0 top-0 h-full object-cover object-center" loop muted autoplay playsinline${ssrRenderAttr("poster", _imports_0)}><source${ssrRenderAttr("src", _imports_1$1)} type="video/mp4"></video><div class="absolute z-20 w-full left-0 top-0 h-full bg-black/60"></div><div class="container h-[calc(100vh-90px)] relative z-20 flex flex-col gap-4 lg:gap-4 items-center justify-center"><h1 id="first-screen-title" class="~text-[22px]/[30px] relative opacity-0 -top-[50px] md:~text-[40px]/[60px] lg:~text-[60px]/[70px] xl:text-[88px] uppercase font-bold text-white/70 leading-none text-center"> \u043F\u0440\u043E\u0442\u043E\u0447\u043D\u0430\u044F \u0446\u0438\u0442\u043E\u043C\u0435\u0442\u0440\u0438\u044F </h1><p id="first-screen-subtitle" class="~text-[18px]/[24px] top-[50px] relative opacity-0 md:~text-[30px]/[40px] lg:~text-[40px]/[50px] xl:text-[62px] uppercase font-light text-white/70 leading-none text-center"> \u0431\u0435\u0437 \u0433\u0440\u0430\u043D\u0438\u0446 \u0438 \u043E\u0433\u0440\u0430\u043D\u0438\u0447\u0435\u043D\u0438\u0439 </p></div></section>`);
    };
  }
});
const _sfc_setup$d = _sfc_main$d.setup;
_sfc_main$d.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/section/FirstScreen.vue");
  return _sfc_setup$d ? _sfc_setup$d(props, ctx) : void 0;
};
const _sfc_main$c = /* @__PURE__ */ defineComponent({
  __name: "SecondScreen",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtImg = __nuxt_component_1;
      _push(`<section${ssrRenderAttrs(mergeProps({
        class: "py-16 lg:pb-0 lg:pt-24 scroll-mt-16 bg-foreground text-black",
        id: "cellriver"
      }, _attrs))}><div class="container grid xl:grid-cols-2 justify-between"><div>`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        id: "second-screen-img",
        class: "relative w-full flex justify-center opacity-0 -left-[200px]",
        format: "webp",
        alt: "\u041F\u0440\u043E\u0442\u043E\u0447\u043D\u044B\u0439 \u0446\u0438\u0442\u043E\u043C\u0435\u0442\u0440 CELLRIVER",
        title: "\u041F\u0440\u043E\u0442\u043E\u0447\u043D\u044B\u0439 \u0446\u0438\u0442\u043E\u043C\u0435\u0442\u0440 CELLRIVER",
        src: "/img/item-photo-1.webp"
      }, null, _parent));
      _push(`</div><div id="second-screen-content" class="relative xl:pl-16 opacity-0 flex flex-col gap-6 -right-[200px]"><h2 class="~text-[32px]/[50px] font-extralight leading-[1.1]"> \u041F\u0440\u043E\u0442\u043E\u0447\u043D\u044B\u0439 \u0446\u0438\u0442\u043E\u043C\u0435\u0442\u0440 <span class="text-primary">CELLRIVER</span></h2><p class="text-[18px]"> \u041F\u0435\u0440\u0432\u044B\u0439 \u0440\u043E\u0441\u0441\u0438\u0439\u0441\u043A\u0438\u0439 \u043F\u0440\u043E\u0442\u043E\u0447\u043D\u044B\u0439 \u0446\u0438\u0442\u043E\u043C\u0435\u0442\u0440 \u0434\u043B\u044F\xA0\u0448\u0438\u0440\u043E\u043A\u043E\u0433\u043E \u043A\u0440\u0443\u0433\u0430 \u043D\u0430\u0443\u0447\u043D\u044B\u0445 \u0438\u0441\u0441\u043B\u0435\u0434\u043E\u0432\u0430\u043D\u0438\u0439, \u0441\u043A\u0440\u0438\u043D\u0438\u043D\u0433\u043E\u0432\u044B\u0445 \u0438\u0441\u0441\u043B\u0435\u0434\u043E\u0432\u0430\u043D\u0438\u0439 \u0438\xA0\u0444\u0430\u0440\u043C\u0430\u0446\u0435\u0432\u0442\u0438\u0447\u0435\u0441\u043A\u0438\u0445 \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043E\u043A*. </p><p class="text-[30px] font-light leading-[35px] text-primary"> \u0421\u043E\u0437\u0434\u0430\u043D \u0441 \u0443\u0447\u0451\u0442\u043E\u043C \u0430\u043A\u0442\u0443\u0430\u043B\u044C\u043D\u044B\u0445 \u0442\u0440\u0435\u0431\u043E\u0432\u0430\u043D\u0438\u0439 \u0438 \u043C\u0438\u0440\u043E\u0432\u044B\u0445 \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043E\u0432 \u043E\u0442\u0440\u0430\u0441\u043B\u0438. </p><p class="text-[18px]"> *\u041C\u043E\u0434\u0435\u043B\u044C, \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u0430\u043D\u043D\u0430\u044F \u0434\u043B\u044F\xA0\u043A\u043B\u0438\u043D\u0438\u0447\u0435\u0441\u043A\u043E\u0433\u043E \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u044F, \u043D\u0430\u0445\u043E\u0434\u0438\u0442\u0441\u044F \u0432\xA0\u043F\u0440\u043E\u0446\u0435\u0441\u0441\u0435 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438. </p></div></div></section>`);
    };
  }
});
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/section/SecondScreen.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
const _sfc_main$b = /* @__PURE__ */ defineComponent({
  __name: "ThirdScreen",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtImg = __nuxt_component_1;
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "third-screen",
        class: "py-16 lg:py-24 text-white"
      }, _attrs))}><div class="container"><ul class="grid grid-cols-2 lg:grid-cols-3 gap-y-8 lg:gap-y-16 gap-x-16 lg:gap-x-24"><li class="relative opacity-0 third-section-item top-[100px] flex flex-col gap-4 ~text-[16px]/[20px]">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        width: "72",
        class: "w-[72px] h-[80px]",
        src: "/icons/service-icon-1.svg"
      }, null, _parent));
      _push(`<p>\u041F\u0440\u043E\u0438\u0437\u0432\u0435\u0434\u0435\u043D\u043E \u0432\xA0\u0420\u043E\u0441\u0441\u0438\u0438</p></li><li class="relative opacity-0 third-section-item top-[100px] flex flex-col gap-4 ~text-[16px]/[20px]">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        width: "72",
        class: "w-[72px] h-[80px]",
        src: "/icons/service-icon-2.svg"
      }, null, _parent));
      _push(`<p>\u0422\u0449\u0430\u0442\u0435\u043B\u044C\u043D\u044B\u0439 \u043A\u043E\u043D\u0442\u0440\u043E\u043B\u044C \u043A\u0430\u0436\u0434\u043E\u0433\u043E \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u0430 \u0432\xA0\u0441\u0438\u0441\u0442\u0435\u043C\u0435</p></li><li class="relative opacity-0 third-section-item top-[100px] flex flex-col gap-4 ~text-[16px]/[20px]">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        width: "72",
        class: "w-[72px] h-[80px]",
        src: "/icons/service-icon-3.svg"
      }, null, _parent));
      _push(`<p>\u041A\u043E\u0440\u043E\u0442\u043A\u0438\u0435 \u0441\u0440\u043E\u043A\u0438 \u043F\u043E\u0441\u0442\u0430\u0432\u043A\u0438</p></li><li class="relative opacity-0 third-section-item top-[100px] flex flex-col gap-4 ~text-[16px]/[20px]">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        width: "72",
        class: "w-[72px] h-[80px]",
        src: "/icons/service-icon-4.svg"
      }, null, _parent));
      _push(`<p>\u041F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u043D\u043E\u0435 \u043E\u0431\u0435\u0441\u043F\u0435\u0447\u0435\u043D\u0438\u0435 \u043D\u0430\xA0\u0440\u0443\u0441\u0441\u043A\u043E\u043C\xA0\u044F\u0437\u044B\u043A\u0435</p></li><li class="relative opacity-0 third-section-item top-[100px] flex flex-col gap-4 ~text-[16px]/[20px]">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        width: "72",
        class: "w-[72px] h-[80px]",
        src: "/icons/service-icon-5.svg"
      }, null, _parent));
      _push(`<p>\u0420\u0430\u0441\u0448\u0438\u0440\u0435\u043D\u043D\u0430\u044F \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0430 \u0433\u0430\u0440\u0430\u043D\u0442\u0438\u0439\u043D\u043E\u0433\u043E \u043E\u0431\u0441\u043B\u0443\u0436\u0438\u0432\u0430\u043D\u0438\u044F</p></li><li class="relative opacity-0 third-section-item top-[100px] flex flex-col gap-4 ~text-[16px]/[20px]">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        width: "72",
        class: "w-[72px] h-[80px]",
        src: "/icons/service-icon-6.svg"
      }, null, _parent));
      _push(`<p>\u041D\u0430\u043B\u0438\u0447\u0438\u0435 \u0441\u043A\u043B\u0430\u0434\u0430 \u0437\u0430\u043F\u0447\u0430\u0441\u0442\u0435\u0439 \u0432\xA0\u0420\u0424</p></li></ul></div></section>`);
    };
  }
});
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/section/ThirdScreen.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const _sfc_main$a = /* @__PURE__ */ defineComponent({
  __name: "FourthScreen",
  __ssrInlineRender: true,
  setup(__props) {
    const { $viewport } = useNuxtApp();
    watch($viewport.breakpoint, (newBreakpoint, oldBreakpoint) => {
      console.log("Breakpoint updated:", oldBreakpoint, "->", newBreakpoint);
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtImg = __nuxt_component_1;
      const _component_BaseRainbowButton = __nuxt_component_4$1;
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "fourth-screen",
        class: "bg-foreground text-black py-16"
      }, _attrs))}><div class="black container grid grid-cols-1 xl:grid-cols-2 gap-28 xl:gap-8 justify-between"><div class="text-wrap grid gap-12 relative xl:top-0 xl:left-0 xl:right-0 xl:bottom-0 w-full xl:h-[80vh]"><div class="panel-text bg-foreground xl:absolute xl:top-0 xl:left-0 xl:right-0 xl:bottom-0 xl:w-full xl:h-full xl:opacity-20 xl:translate-y-[80%] z-10"><h2 class="~text-[40px]/[48px] leading-[1.1] xl:text-[48px] font-extralight mb-8"><span class="text-primary">\u0421\u043E\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u043E\u0435 \u0438\xA0\u043D\u0430\u0434\u0435\u0436\u043D\u043E\u0435</span> \u043A\u043E\u043D\u0441\u0442\u0440\u0443\u043A\u0442\u0438\u0432\u043D\u043E\u0435 \u0440\u0435\u0448\u0435\u043D\u0438\u0435 </h2><p class="text-[20px]">\u041A\u043E\u043D\u0441\u0442\u0440\u0443\u043A\u0446\u0438\u044F \u043F\u0440\u0438\u0431\u043E\u0440\u0430 \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u0435\u0442 \u0432\u0441\u0435\u043C \u0441\u0430\u043C\u044B\u043C \u0441\u043E\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u044B\u043C \u0442\u0435\u043D\u0434\u0435\u043D\u0446\u0438\u044F\u043C \u0438 \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u0430\u043C \u0438 \u043E\u0440\u0438\u0435\u043D\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0430 \u043D\u0430 \u043C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u0443\u044E \u0433\u0438\u0431\u043A\u043E\u0441\u0442\u044C \u0432 \u0440\u0435\u0448\u0435\u043D\u0438\u0438 \u0440\u0430\u0437\u043B\u0438\u0447\u043D\u044B\u0445 \u0438\u0441\u0441\u043B\u0435\u0434\u043E\u0432\u0430\u0442\u0435\u043B\u044C\u0441\u043A\u0438\u0445 \u0438 \u0440\u0443\u0442\u0438\u043D\u043D\u044B\u0445 \u0437\u0430\u0434\u0430\u0447</p></div><div class="panel-text bg-foreground xl:absolute xl:top-0 xl:left-0 xl:right-0 xl:bottom-0 xl:w-full xl:h-full xl:opacity-0 xl:translate-y-full z-10"><h2 class="~text-[40px]/[48px] leading-[1.1] xl:text-[48px] font-extralight mb-8"> \u0414\u043E\u0441\u0442\u0443\u043F\u043D\u044B\u0435 \u043A\u043E\u043D\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438 \u043F\u0440\u043E\u0442\u043E\u0447\u043D\u043E\u0433\u043E \u0446\u0438\u0442\u043E\u043C\u0435\u0442\u0440\u0430 <span class="text-primary">CELLRIVER</span></h2><ul class="flex flex-col gap-4"><li class="flex gap-4 items-center">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        class: "object-contain",
        width: "42",
        height: "42",
        src: "/icons/check.svg"
      }, null, _parent));
      _push(`<p>2 \u043B\u0430\u0437\u0435\u0440\u0430, 6 \u0444\u043B\u044E\u043E\u0440\u0435\u0441\u0446\u0435\u043D\u0442\u043D\u044B\u0445 \u043A\u0430\u043D\u0430\u043B\u043E\u0432 \u0434\u0435\u0442\u0435\u043A\u0446\u0438\u0438</p></li><li class="flex gap-4 items-center">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        class: "object-contain",
        width: "42",
        height: "42",
        src: "/icons/check.svg"
      }, null, _parent));
      _push(`<p>3 \u043B\u0430\u0437\u0435\u0440\u0430, 14 \u0444\u043B\u044E\u043E\u0440\u0435\u0441\u0446\u0435\u043D\u0442\u043D\u044B\u0445 \u043A\u0430\u043D\u0430\u043B\u043E\u0432 \u0434\u0435\u0442\u0435\u043A\u0446\u0438\u0438</p></li></ul></div><div class="panel-text bg-foreground xl:absolute xl:top-0 xl:left-0 xl:right-0 xl:bottom-0 xl:w-full xl:h-full xl:opacity-0 xl:translate-y-full z-10 flex flex-col xl:flex-row gap-8"><div class="basis-1/2"><h2 class="~text-[18px]/[20px] leading-[1.1] mb-8 text-primary"> \u041B\u0430\u0432\u0438\u043D\u043D\u044B\u0435 \u0444\u043E\u0442\u043E\u0434\u0438\u043E\u0434\u044B \u0432 \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u0444\u043E\u0442\u043E\u0434\u0435\u0442\u0435\u043A\u0442\u043E\u0440\u043E\u0432 </h2><ul class="list-disc pl-4 marker:text-primary"><li>\u043C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u043E \u0432\u044B\u0441\u043E\u043A\u0430\u044F \u0447\u0443\u0432\u0441\u0442\u0432\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u044C</li><li>\u043D\u0438\u0437\u043A\u0438\u0439 \u0443\u0440\u043E\u0432\u0435\u043D\u044C \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u043E\u0433\u043E \u0448\u0443\u043C\u0430</li><li>\u043D\u0430\u043F\u0440\u044F\u0436\u0435\u043D\u0438\u0435 \u043D\u0430 \u0434\u0435\u0442\u0435\u043A\u0442\u043E\u0440\u0430\u0445 \u0444\u0438\u043A\u0441\u0438\u0440\u043E\u0432\u0430\u043D\u043E</li><li>\u043D\u0435\u0442 \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E\u0441\u0442\u0438 \u043D\u0430\u0441\u0442\u0440\u0430\u0438\u0432\u0430\u0442\u044C \u0441\u043F\u0435\u0446\u0438\u0444\u0438\u0447\u0435\u0441\u043A\u043E\u0435 \u0434\u043B\u044F \u043E\u0431\u0440\u0430\u0437\u0446\u043E\u0432 \u0440\u0430\u0437\u043B\u0438\u0447\u043D\u044B\u0445 \u0442\u0438\u043F\u043E\u0432 \u043D\u0430\u043F\u0440\u044F\u0436\u0435\u043D\u0438\u0435</li><li>\u0430\u0431\u0441\u043E\u043B\u044E\u0442\u043D\u0430\u044F \u043B\u0438\u043D\u0435\u0439\u043D\u043E\u0441\u0442\u044C \u0432 \u0448\u0438\u0440\u043E\u043A\u043E\u043C \u0434\u0438\u0430\u043F\u0430\u0437\u043E\u043D\u0435</li><li>\u043F\u0440\u0435\u0434\u0441\u043A\u0430\u0437\u0443\u0435\u043C\u0430\u044F \u0444\u043B\u044E\u043E\u0440\u0435\u0441\u0446\u0435\u043D\u0442\u043D\u0430\u044F \u043A\u043E\u043C\u043F\u0435\u043D\u0441\u0430\u0446\u0438\u044F \u043D\u0435\u0437\u0430\u0432\u0438\u0441\u0438\u043C\u043E \u043E\u0442 \u0440\u0430\u0441\u043F\u043E\u043B\u043E\u0436\u0435\u043D\u0438\u044F \u043F\u043E\u043F\u0443\u043B\u044F\u0446\u0438\u0438</li></ul></div><div class="basis-1/2"><h2 class="~text-[18px]/[20px] leading-[1.1] mb-8 text-primary"> \u0428\u043F\u0440\u0438\u0446\u0435\u0432\u043E\u0439 \u043D\u0430\u0441\u043E\u0441, \u0443\u043F\u0440\u0430\u0432\u043B\u044F\u044E\u0449\u0438\u0439 \u043F\u043E\u0434\u0430\u0447\u0435\u0439 \u043E\u0431\u0440\u0430\u0437\u0446\u0430 </h2><ul class="list-disc pl-4 marker:text-primary"><li>\u043D\u0438\u0437\u043A\u0438\u0439 \u0443\u0440\u043E\u0432\u0435\u043D\u044C \u0448\u0443\u043C\u0430</li><li>\u043F\u043B\u0430\u0432\u043D\u0430\u044F \u043F\u043E\u0434\u0430\u0447\u0430 \u043E\u0431\u0440\u0430\u0437\u0446\u0430</li><li>\u0432\u043E\u043B\u044E\u043C\u0435\u0442\u0440\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u0430\u043D\u0430\u043B\u0438\u0437 \u0430\u0431\u0441\u043E\u043B\u044E\u0442\u043D\u044B\u0445 \u043A\u043E\u043D\u0446\u0435\u043D\u0442\u0440\u0430\u0446\u0438\u0439 \u0431\u0435\u0437\xA0\u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u044F \u0434\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0445 \u0440\u0435\u0444\u0435\u0440\u0435\u043D\u0441\u043D\u044B\u0445 \u0447\u0430\u0441\u0442\u0438\u0446 </li></ul></div></div><div class="panel-text bg-foreground xl:absolute xl:top-0 xl:left-0 xl:right-0 xl:bottom-0 xl:w-full xl:h-full xl:opacity-0 xl:translate-y-full z-10 flex flex-col xl:flex-row gap-8"><div class="basis-1/2"><h2 class="~text-[18px]/[20px] leading-[1.1] mb-8 text-primary"> \u0422\u0432\u0435\u0440\u0434\u043E\u0442\u0435\u043B\u044C\u043D\u044B\u0435 \u043B\u0430\u0437\u0435\u0440\u044B </h2><ul class="list-disc pl-4 marker:text-primary"><li>488 \u043D\u043C, 638 \u043D\u043C, 405 \u043D\u043C</li><li>\u043E\u043F\u0442\u0438\u043C\u0438\u0437\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u043E\u0439 \u043C\u043E\u0449\u043D\u043E\u0441\u0442\u0438, \u043F\u043E\u0437\u0432\u043E\u043B\u044F\u044E\u0449\u0438\u0435 \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0442\u044C \u0440\u0430\u0431\u043E\u0442\u0443 \u0441 \u0431\u043E\u043B\u044C\u0448\u0438\u043D\u0441\u0442\u0432\u043E\u043C \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u044B\u0445 \u0444\u043B\u044E\u043E\u0440\u043E\u0445\u0440\u043E\u043C\u043E\u0432 \u0438 \u0444\u043B\u044E\u043E\u0440\u0435\u0441\u0446\u0435\u043D\u0442\u043D\u044B\u0445 \u0431\u0435\u043B\u043A\u043E\u0432 </li></ul></div><div class="basis-1/2"><h2 class="~text-[18px]/[20px] leading-[1.1] mb-8 text-primary"> \u0428\u0438\u0440\u043E\u043A\u0438\u0439 \u0432\u044B\u0431\u043E\u0440 \u0432\u0430\u0440\u0438\u0430\u043D\u0442\u043E\u0432 \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0438 \u043E\u0431\u0440\u0430\u0437\u0446\u0430 </h2><ul class="list-disc pl-4 marker:text-primary"><li>\u041E\u0442\u0434\u0435\u043B\u044C\u043D\u044B\u0435 \u043F\u0440\u043E\u0431\u0438\u0440\u043A\u0438 \u043E\u0431\u044A\u0435\u043C\u043E\u043C 5, 2\xA0\u0438\xA01,5 \u043C\u043B</li><li>\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430 \u043F\u0440\u043E\u0431\u0438\u0440\u043E\u043A \u0433\u0440\u0443\u043F\u043F\u043E\u0439 \u0434\u043E\xA040\xA0\u0435\u0434\u0438\u043D\u0438\u0446</li></ul></div></div></div><div class="flex flex-col gap-8"><div class="p-wrap relative overflow-hidden top-0 h-[50vh] xl:h-[70vh]">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        format: "webp",
        class: "panel absolute xl:top-0 left-0 w-full h-full object-cover",
        alt: "\u041F\u0440\u043E\u0442\u043E\u0447\u043D\u044B\u0439 \u0446\u0438\u0442\u043E\u043C\u0435\u0442\u0440 CELLRIVER",
        title: "\u041F\u0440\u043E\u0442\u043E\u0447\u043D\u044B\u0439 \u0446\u0438\u0442\u043E\u043C\u0435\u0442\u0440 CELLRIVER",
        src: "/img/item-photo-2.webp"
      }, null, _parent));
      _push(ssrRenderComponent(_component_NuxtImg, {
        format: "webp",
        class: "panel absolute xl:top-0 left-0 w-full h-full z-10 object-cover",
        alt: "\u041F\u0440\u043E\u0442\u043E\u0447\u043D\u044B\u0439 \u0446\u0438\u0442\u043E\u043C\u0435\u0442\u0440 CELLRIVER",
        title: "\u041F\u0440\u043E\u0442\u043E\u0447\u043D\u044B\u0439 \u0446\u0438\u0442\u043E\u043C\u0435\u0442\u0440 CELLRIVER",
        src: "/img/item-photo-6.webp"
      }, null, _parent));
      _push(ssrRenderComponent(_component_NuxtImg, {
        format: "webp",
        class: "panel absolute xl:top-0 left-0 w-full h-full object-cover",
        alt: "\u041F\u0440\u043E\u0442\u043E\u0447\u043D\u044B\u0439 \u0446\u0438\u0442\u043E\u043C\u0435\u0442\u0440 CELLRIVER",
        title: "\u041F\u0440\u043E\u0442\u043E\u0447\u043D\u044B\u0439 \u0446\u0438\u0442\u043E\u043C\u0435\u0442\u0440 CELLRIVER",
        src: "/img/item-photo-7.webp"
      }, null, _parent));
      _push(ssrRenderComponent(_component_NuxtImg, {
        format: "webp",
        class: "panel purple absolute xl:top-0 left-0 w-full h-full z-10 object-cover",
        alt: "\u041F\u0440\u043E\u0442\u043E\u0447\u043D\u044B\u0439 \u0446\u0438\u0442\u043E\u043C\u0435\u0442\u0440 CELLRIVER",
        title: "\u041F\u0440\u043E\u0442\u043E\u0447\u043D\u044B\u0439 \u0446\u0438\u0442\u043E\u043C\u0435\u0442\u0440 CELLRIVER",
        src: "/img/item-photo-8.webp"
      }, null, _parent));
      _push(`</div><div class="flex md:flex-row items-center gap-4 justify-start"><p>\u0422\u0435\u0445\u043D\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u0441\u043F\u0435\u0446\u0438\u0444\u0438\u043A\u0430\u0446\u0438\u044F</p><a download target="_blank" href="/pdf/Cellriver_Spezificazia_2024.pdf">`);
      _push(ssrRenderComponent(_component_BaseRainbowButton, { variant: "black" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u0421\u043A\u0430\u0447\u0430\u0442\u044C PDF `);
          } else {
            return [
              createTextVNode(" \u0421\u043A\u0430\u0447\u0430\u0442\u044C PDF ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</a></div></div></div></section>`);
    };
  }
});
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/section/FourthScreen.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const _sfc_main$9 = {};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs) {
  const _component_NuxtImg = __nuxt_component_1;
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "py-16 lg:py-24 bg-foreground text-white relative" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_NuxtImg, {
    format: "webp",
    class: "absolute top-0 left-0 w-full h-full object-cover z-0",
    alt: "\u041F\u0440\u043E\u0442\u043E\u0447\u043D\u044B\u0439 \u0446\u0438\u0442\u043E\u043C\u0435\u0442\u0440 CELLRIVER",
    title: "\u041F\u0440\u043E\u0442\u043E\u0447\u043D\u044B\u0439 \u0446\u0438\u0442\u043E\u043C\u0435\u0442\u0440 CELLRIVER",
    src: "/img/item-photo-5.webp"
  }, null, _parent));
  _push(`<div class="container"><h2 class="relative leading-[1] font-bold drop-shadow-xl opacity-80 uppercase ~text-[38px]/[50px] md:~text-[70px]/[80px] lg:~text-[80px]/[90px] xl:~text-[100px]/[140px] 2xl:~text-[140px]/[150px]"> \u041F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0438\u0442\u0441\u044F \u0432\xA0\u0420\u043E\u0441\u0441\u0438\u0438 </h2></div></section>`);
}
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/section/MadeInRussiaScreen.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["ssrRender", _sfc_ssrRender$3]]);
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "VideoScreen",
  __ssrInlineRender: true,
  setup(__props) {
    ref(true);
    ref(null);
    ref();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "py-16 lg:py-24 bg-foreground" }, _attrs))}><div class="container relative"><video class="video-js w-full h-auto aspect-video"></video></div></section>`);
    };
  }
});
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/section/VideoScreen.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "FifthScreen",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtImg = __nuxt_component_1;
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "fifth-screen",
        class: "py-16 lg:py-24 text-white"
      }, _attrs))}><div class="container relative grid lg:grid-cols-3 lg:grid-rows-2 gap-8 lg:gap-16"><div class="fifth-section-item relative opacity-0 top-[100px] flex flex-col gap-4 lg:gap-8"><h2 class="text-[36px] leading-[1.1] lg:text-[40px] font-extralight"><span class="text-primary">\u0410\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0430\u044F</span> \u043F\u043E\u0434\u0430\u0447\u0430 \u043E\u0431\u0440\u0430\u0437\u0446\u043E\u0432 </h2><p>\u0410\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0437\u0430\u0446\u0438\u044F \u043F\u0440\u043E\u0446\u0435\u0441\u0441\u0430 \u043F\u043E\u0434\u0430\u0447\u0438 \u043E\u0431\u0440\u0430\u0437\u0446\u043E\u0432 \u043E\u0441\u0432\u043E\u0431\u043E\u0436\u0434\u0430\u0435\u0442 \u0438\u0441\u0441\u043B\u0435\u0434\u043E\u0432\u0430\u0442\u0435\u043B\u044F \u043E\u0442 \u0432\u044B\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u044F \u0440\u0443\u0442\u0438\u043D\u043D\u044B\u0445 \u043F\u0440\u043E\u0446\u0435\u0434\u0443\u0440 \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0438 \u043E\u0431\u0440\u0430\u0437\u0446\u043E\u0432 \u043F\u0440\u0438 \u0432\u044B\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u0438 \u0441\u0435\u0440\u0438\u0439\u043D\u044B\u0445 \u0438\u0441\u0441\u043B\u0435\u0434\u043E\u0432\u0430\u043D\u0438\u0439, \u0430 \u0442\u0430\u043A\u0436\u0435 \u0441\u043D\u0438\u0436\u0430\u0435\u0442 \u043A\u043E\u043D\u0442\u0430\u043A\u0442 \u0441 \u043F\u043E\u0442\u0435\u043D\u0446\u0438\u0430\u043B\u044C\u043D\u043E \u0438\u043D\u0444\u0438\u0446\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u043C\u0438 \u043E\u0431\u0440\u0430\u0437\u0446\u0430\u043C\u0438</p><div class="flex-col flex gap-2"><p class="text-primary">\u041F\u0440\u043E\u0431\u044B \u043C\u043E\u0433\u0443\u0442 \u0431\u044B\u0442\u044C \u0437\u0430\u0433\u0440\u0443\u0436\u0435\u043D\u044B \u0432:</p><ul class="list-disc pl-4 marker:text-primary"><li>\u041F\u0440\u043E\u0431\u0438\u0440\u043A\u0438 \u043C\u0430\u043B\u044B\u0445 \u043E\u0431\u044A\u0435\u043C\u043E\u0432 \u043E\u0442 1,5 \u043C\u043B</li><li>96-\u043B\u0443\u0447\u043D\u044B\u0435 \u043F\u043B\u0430\u043D\u0448\u0435\u0442\u044B</li><li>\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0435 \u0446\u0438\u0442\u043E\u043C\u0435\u0442\u0440\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u043F\u0440\u043E\u0431\u0438\u0440\u043A\u0438</li></ul></div></div><div class="fifth-section-item relative opacity-0 top-[100px] flex flex-col gap-4 lg:gap-8"><h2 class="text-[36px] leading-[1.1] lg:text-[40px] font-extralight"><span class="text-primary">\u041A\u043E\u043C\u043F\u0430\u043A\u0442\u043D\u044B\u0439</span> \u0440\u0430\u0437\u043C\u0435\u0440 \u043A\u043E\u0440\u043F\u0443\u0441\u0430 </h2><p>\u041F\u0440\u043E\u0442\u043E\u0447\u043D\u044B\u0439 \u0446\u0438\u0442\u043E\u043C\u0435\u0442\u0440 CELLRIVER \u0431\u043B\u0430\u0433\u043E\u0434\u0430\u0440\u044F \u043A\u043E\u043C\u043F\u0430\u043A\u0442\u043D\u043E\u043C\u0443 \u0440\u0430\u0437\u043C\u0435\u0440\u0443 \u043C\u043E\u0436\u0435\u0442 \u0431\u044B\u0442\u044C\xA0\u0440\u0430\u0437\u043C\u0435\u0449\u0435\u043D \u0432\xA0\u043F\u043E\u043C\u0435\u0449\u0435\u043D\u0438\u0438 \u043B\u044E\u0431\u043E\u0433\u043E \u0440\u0430\u0437\u043C\u0435\u0440\u0430 \u0438\u043B\u0438\xA0\u0434\u0430\u0436\u0435 \u0432\xA0\u043B\u0430\u043C\u0438\u043D\u0430\u0440\u043D\u043E-\u043F\u043E\u0442\u043E\u043A\u043E\u0432\u043E\u043C \u0448\u043A\u0430\u0444\u0443.</p><p>\u041A\u043B\u0430\u0441\u0441\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u0438\xA0\u043B\u0430\u043A\u043E\u043D\u0438\u0447\u043D\u044B\u0439 \u0434\u0438\u0437\u0430\u0439\u043D \u043F\u0440\u0438\u0431\u043E\u0440\u0430 \u043B\u0435\u0433\u043A\u043E \u0438\u043D\u0442\u0435\u0433\u0440\u0438\u0440\u0443\u0435\u0442\u0441\u044F \u0432\xA0\u0443\u0436\u0435\xA0\u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u044E\u0449\u0443\u044E \u043B\u0430\u0431\u043E\u0440\u0430\u0442\u043E\u0440\u043D\u0443\u044E \u0438\u043D\u0444\u0440\u0430\u0441\u0442\u0440\u0443\u043A\u0442\u0443\u0440\u0443, \u043E\u0431\u0435\u0441\u043F\u0435\u0447\u0438\u0432\u0430\u044F \u0432\u044B\u0441\u043E\u043A\u0438\u0439 \u0443\u0440\u043E\u0432\u0435\u043D\u044C \u0443\u0434\u043E\u0431\u0441\u0442\u0432\u0430 \u0438\xA0\u044D\u0440\u0433\u043E\u043D\u043E\u043C\u0438\u043A\u0438.</p></div><div class="hidden lg:flex lg:row-span-2"></div><div class="fifth-section-item relative opacity-0 top-[100px] flex flex-col gap-4 lg:gap-8"><h2 class="text-[36px] leading-[1.1] lg:text-[40px] font-extralight"><span class="text-primary">\u041D\u0438\u0437\u043A\u0438\u0439 \u0443\u0440\u043E\u0432\u0435\u043D\u044C</span> \u0448\u0443\u043C\u0430 \u0440\u0430\u0431\u043E\u0442\u044B \u043F\u0440\u0438\u0431\u043E\u0440\u0430 </h2><p>\u041D\u0438\u0437\u043A\u0438\u0439 \u0443\u0440\u043E\u0432\u0435\u043D\u044C \u0448\u0443\u043C\u0430 \u0432\u043E\xA0\u0432\u0440\u0435\u043C\u044F \u0440\u0430\u0431\u043E\u0442\u044B \u043F\u0440\u043E\u0442\u043E\u0447\u043D\u043E\u0433\u043E \u0446\u0438\u0442\u043E\u043C\u0435\u0442\u0440\u0430 \u043F\u043E\u0432\u044B\u0448\u0430\u0435\u0442 \u043A\u043E\u043C\u0444\u043E\u0440\u0442 \u0440\u0430\u0431\u043E\u0442\u044B \u0432\xA0\u043B\u0430\u0431\u043E\u0440\u0430\u0442\u043E\u0440\u0438\u0438, \u043E\u0441\u043E\u0431\u0435\u043D\u043D\u043E \u043F\u0440\u0438\xA0\u0440\u0430\u0437\u043C\u0435\u0449\u0435\u043D\u0438\u0438 \u043D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u0438\u0445 \u043F\u0440\u0438\u0431\u043E\u0440\u043E\u0432 \u0432\xA0\u043E\u0434\u043D\u043E\u043C \u043F\u043E\u043C\u0435\u0449\u0435\u043D\u0438\u0438.</p></div><div class="fifth-section-item relative opacity-0 top-[100px] flex flex-col gap-4 lg:gap-8"><h2 class="text-[36px] leading-[1.1] lg:text-[40px] font-extralight"><span class="text-primary">\u0412\u043E\u043B\u044E\u043C\u0435\u0442\u0440\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u0430\u043D\u0430\u043B\u0438\u0437</span> \u043A\u043E\u043D\u0446\u0435\u043D\u0442\u0440\u0430\u0446\u0438\u0439 \u043A\u043B\u0435\u0442\u043E\u043A </h2><p>\u0422\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u044F \u0432\u043E\u043B\u044E\u043C\u0435\u0442\u0440\u0438\u0447\u0435\u0441\u043A\u043E\u0433\u043E \u0430\u043D\u0430\u043B\u0438\u0437\u0430 \u043A\u043E\u043D\u0446\u0435\u043D\u0442\u0440\u0430\u0446\u0438\u0439 \u043A\u043B\u0435\u0442\u043E\u043A \u043F\u043E\u0437\u0432\u043E\u043B\u044F\u0435\u0442 \u043F\u043E\u043B\u0443\u0447\u0430\u0442\u044C \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u044B \u0432\xA0\u0430\u0431\u0441\u043E\u043B\u044E\u0442\u043D\u044B\u0445 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0439 \u0431\u0435\u0437\xA0\u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u044F \u0434\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0445 \u0447\u0430\u0441\u0442\u0438\u0446.</p><p>\u042D\u0442\u043E \u0437\u043D\u0430\u0447\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u0443\u043F\u0440\u043E\u0449\u0430\u0435\u0442 \u043F\u043E\u0434\u0433\u043E\u0442\u043E\u0432\u043A\u0443 \u043E\u0431\u0440\u0430\u0437\u0446\u043E\u0432 \u0438\xA0\u0441\u043D\u0438\u0436\u0430\u0435\u0442 \u0441\u0435\u0431\u0435\u0441\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C \u0438\u0441\u0441\u043B\u0435\u0434\u043E\u0432\u0430\u043D\u0438\u044F.</p></div>`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        format: "webp",
        class: "m-auto xl:w-1/2 xl:absolute xl:left-[70%] xl:top-1/2 xl:translate-y-[-50%]",
        alt: "\u041F\u0440\u043E\u0442\u043E\u0447\u043D\u044B\u0439 \u0446\u0438\u0442\u043E\u043C\u0435\u0442\u0440 CELLRIVER",
        title: "\u041F\u0440\u043E\u0442\u043E\u0447\u043D\u044B\u0439 \u0446\u0438\u0442\u043E\u043C\u0435\u0442\u0440 CELLRIVER",
        src: "/img/item-photo-3.webp"
      }, null, _parent));
      _push(`</div></section>`);
    };
  }
});
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/section/FifthScreen.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "AreasScreen",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtImg = __nuxt_component_1;
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "areas-screen",
        class: "py-16 lg:pt-24 bg-foreground text-black"
      }, _attrs))}><div class="container"><h2 class="areas-screen-title relative opacity-0 top-[50px] lg:text-center mb-12 ~text-[40px]/[50px] leading-[1.1] font-extralight"> \u041E\u0431\u043B\u0430\u0441\u0442\u0438 \u043F\u0440\u0438\u043C\u0435\u043D\u0435\u043D\u0438\u044F </h2><div class="grid lg:grid-cols-3 gap-8"><div class="xl:pr-12 xl:order-1 xl:pt-24"><ul class="flex flex-col gap-8 xl:text-right"><li class="areas-screen-item-left opacity-0 relative -left-[100px] flex gap-4"><p class="flex-auto order-2 xl:order-1">\u0418\u043C\u043C\u0443\u043D\u043E\u0444\u0435\u043D\u043E\u0442\u0438\u043F\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 (\u0432\xA0\u0442\u043E\u043C\xA0\u0447\u0438\u0441\u043B\u0435 \u0438\u043C\u043C\u0443\u043D\u043D\u044B\u0439 \u0441\u0442\u0430\u0442\u0443\u0441)</p><div class="xl:order-2 relative bottom-[8px] bg-[url(&#39;/icons/check.svg&#39;)] bg-contain rounded-full w-[42px] h-[42px] border border-primary flex items-center flex-shrink-0 justify-center"></div></li><li class="areas-screen-item-left opacity-0 relative -left-[100px] flex gap-4"><p class="flex-auto order-2 xl:order-1">\u0420\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0430 \u043A\u043B\u0435\u0442\u043E\u0447\u043D\u044B\u0445 \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u043E\u0432</p><div class="relative xl:order-2 bottom-[8px] bg-[url(&#39;/icons/check.svg&#39;)] bg-contain rounded-full w-[42px] h-[42px] border border-primary flex items-center flex-shrink-0 justify-center"></div></li><li class="areas-screen-item-left opacity-0 relative -left-[100px] flex gap-4"><p class="flex-auto order-2 xl:order-1">\u0424\u0443\u043D\u0434\u0430\u043C\u0435\u043D\u0442\u0430\u043B\u044C\u043D\u044B\u0435 \u0438\u0441\u0441\u043B\u0435\u0434\u043E\u0432\u0430\u043D\u0438\u044F \u0432 \u0438\u043C\u043C\u0443\u043D\u043E\u043B\u043E\u0433\u0438\u0438</p><div class="relative xl:order-2 bottom-[8px] bg-[url(&#39;/icons/check.svg&#39;)] bg-contain rounded-full w-[42px] h-[42px] border border-primary flex items-center flex-shrink-0 justify-center"></div></li></ul></div><div class="order-3 xl:order-2 flex justify-center">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        format: "webp",
        class: "areas-screen-img w-full opacity-0 relative top-[100px]",
        alt: "\u041F\u0440\u043E\u0442\u043E\u0447\u043D\u044B\u0439 \u0446\u0438\u0442\u043E\u043C\u0435\u0442\u0440 CELLRIVER",
        title: "\u041F\u0440\u043E\u0442\u043E\u0447\u043D\u044B\u0439 \u0446\u0438\u0442\u043E\u043C\u0435\u0442\u0440 CELLRIVER",
        src: "/img/item-photo-4.webp"
      }, null, _parent));
      _push(`</div><div class="xl:pl-12 xl:order-3 xl:pt-24"><ul class="flex flex-col gap-8"><li class="areas-screen-item-right opacity-0 relative -right-[100px] flex gap-4"><div class="relative bottom-[8px] bg-[url(&#39;/icons/check.svg&#39;)] bg-contain rounded-full w-[42px] h-[42px] border border-primary flex items-center flex-shrink-0 justify-center"></div><p class="flex-auto">\u0418\u0441\u0441\u043B\u0435\u0434\u043E\u0432\u0430\u043D\u0438\u0435 \u043E\u043F\u0443\u0445\u043E\u043B\u0435\u0432\u044B\u0445 \u043A\u043B\u0435\u0442\u043E\u043A</p></li><li class="areas-screen-item-right opacity-0 relative -right-[100px] flex gap-4"><div class="relative bottom-[8px] bg-[url(&#39;/icons/check.svg&#39;)] bg-contain rounded-full w-[40px] h-[40px] border border-primary flex items-center flex-shrink-0 justify-center"></div><p class="flex-auto">\u0420\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0430 \u0438\xA0\u0442\u0435\u0441\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 CAR\u2011T\xA0\u043F\u0440\u043E\u0434\u0443\u043A\u0442\u043E\u0432</p></li></ul></div></div></div></section>`);
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/section/AreasScreen.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "SoftScreen",
  __ssrInlineRender: true,
  setup(__props) {
    const { $viewport } = useNuxtApp();
    watch($viewport.breakpoint, (newBreakpoint, oldBreakpoint) => {
      console.log("Breakpoint updated:", oldBreakpoint, "->", newBreakpoint);
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtImg = __nuxt_component_1;
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "flowexpert",
        class: "py-16 xl:pt-24 xl:pb-0 scroll-mt-16 text-white"
      }, _attrs))}><div class="container soft-black grid grid-cols-1 xl:grid-cols-2 gap-8"><h2 class="~text-[32px]/[50px] xl:col-span-2 font-extralight leading-[1.1]"> \u041F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u043D\u043E\u0435 \u043E\u0431\u0435\u0441\u043F\u0435\u0447\u0435\u043D\u0438\u0435 <span class="text-primary">FlowExpert</span></h2><div class="flex relative overflow-hidden xl:top-[60px] h-[40vh] xl:h-[60vh] flex-col gap-8">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        format: "webp",
        class: "soft-panel z-0 opacity-0 absolute xl:top-0 left-0 w-full h-full m-auto object-contain",
        alt: "\u041F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u043D\u043E\u0435 \u043E\u0431\u0435\u0441\u043F\u0435\u0447\u0435\u043D\u0438\u0435 FlowExpert",
        title: "\u041F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u043D\u043E\u0435 \u043E\u0431\u0435\u0441\u043F\u0435\u0447\u0435\u043D\u0438\u0435 FlowExpert",
        src: "/img/monitor.webp"
      }, null, _parent));
      _push(ssrRenderComponent(_component_NuxtImg, {
        format: "webp",
        class: "soft-panel z-0 opacity-0 absolute xl:top-0 left-0 w-full h-full m-auto object-contain",
        alt: "\u041F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u043D\u043E\u0435 \u043E\u0431\u0435\u0441\u043F\u0435\u0447\u0435\u043D\u0438\u0435 FlowExpert",
        title: "\u041F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u043D\u043E\u0435 \u043E\u0431\u0435\u0441\u043F\u0435\u0447\u0435\u043D\u0438\u0435 FlowExpert",
        src: "/img/monitor.webp"
      }, null, _parent));
      _push(ssrRenderComponent(_component_NuxtImg, {
        format: "webp",
        class: "soft-panel !z-10 soft-purple absolute xl:top-0 left-0 w-full h-full m-auto object-contain",
        alt: "\u041F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u043D\u043E\u0435 \u043E\u0431\u0435\u0441\u043F\u0435\u0447\u0435\u043D\u0438\u0435 FlowExpert",
        title: "\u041F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u043D\u043E\u0435 \u043E\u0431\u0435\u0441\u043F\u0435\u0447\u0435\u043D\u0438\u0435 FlowExpert",
        src: "/img/monitor.webp"
      }, null, _parent));
      _push(`</div><div class="soft-text-wrap relative flex flex-col gap-12 xl:top-0 left-0 right-0 bottom-0 w-full xl:h-[80vh] xl:pl-8"><div class="soft-panel-text xl:absolute xl:top-0 xl:left-0 xl:right-0 xl:bottom-0 w-full xl:h-full xl:opacity-20 xl:translate-y-[80%] z-10 flex flex-col gap-4"><h2 class="~text-[28px]/[40px] leading-[1.1] font-extralight"> \u0412\u043E\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442\u044C \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u044F \u0433\u043E\u0442\u043E\u0432\u044B\u0445 \u043F\u0440\u043E\u0442\u043E\u043A\u043E\u043B\u043E\u0432 \u0441\u0431\u043E\u0440\u0430 \u0438\xA0\u0430\u043D\u0430\u043B\u0438\u0437\u0430 \u0434\u0430\u043D\u043D\u044B\u0445 </h2><p>\u0434\u043B\u044F \u0440\u0443\u0442\u0438\u043D\u043D\u044B\u0445 \u043B\u0430\u0431\u043E\u0440\u0430\u0442\u043E\u0440\u043D\u044B\u0445 \u0438\u0441\u0441\u043B\u0435\u0434\u043E\u0432\u0430\u043D\u0438\u0439 \u0438\u043C\u043C\u0443\u043D\u043D\u043E\u0433\u043E \u0441\u0442\u0430\u0442\u0443\u0441\u0430:</p><ul class="flex flex-col gap-4"><li class="flex gap-4 items-center">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        class: "object-contain",
        width: "42",
        height: "42",
        src: "/icons/check.svg"
      }, null, _parent));
      _push(`<p>6-\u0446\u0432\u0435\u0442\u043D\u044B\u0439 \u043F\u0440\u043E\u0442\u043E\u043A\u043E\u043B \u0434\u043B\u044F \u043F\u043E\u0434\u0441\u0447\u0435\u0442\u0430 \u0422-,B-,NK- \u043B\u0438\u043C\u0444\u043E\u0446\u0438\u0442\u043E\u0432</p></li><li class="flex gap-4 items-center">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        class: "object-contain",
        width: "42",
        height: "42",
        src: "/icons/check.svg"
      }, null, _parent));
      _push(`<p>3 \u043B\u0430\u0437\u0435\u0440\u0430, 14 \u0444\u043B\u044E\u043E\u0440\u0435\u0441\u0446\u0435\u043D\u0442\u043D\u044B\u0445 \u043A\u0430\u043D\u0430\u043B\u043E\u0432 \u0434\u0435\u0442\u0435\u043A\u0446\u0438\u0438</p></li></ul></div><div class="soft-panel-text xl:absolute xl:top-0 xl:left-0 xl:right-0 xl:bottom-0 w-full xl:h-full xl:opacity-0 xl:translate-y-full z-10 flex flex-col gap-4"><h2 class="~text-[28px]/[40px] leading-[1.1] font-extralight"> \u041E\u0442\u043A\u0440\u044B\u0442\u043E\u0435 \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u043D\u043E\u0435 \u043E\u0431\u0435\u0441\u043F\u0435\u0447\u0435\u043D\u0438\u0435 </h2><p>\u043F\u043E\u0437\u0432\u043E\u043B\u044F\u044E\u0449\u0435\u0435 \u043D\u0430\u0441\u0442\u0440\u043E\u0438\u0442\u044C \u043F\u0440\u043E\u0442\u043E\u043A\u043E\u043B \u043F\u043E\u0434 \u043B\u044E\u0431\u044B\u0435 \u0441\u043E\u0432\u043C\u0435\u0441\u0442\u0438\u043C\u044B\u0435 \u0440\u0435\u0430\u0433\u0435\u043D\u0442\u044B</p></div><div class="soft-panel-text xl:absolute xl:top-0 xl:left-0 xl:right-0 xl:bottom-0 w-full xl:h-full xl:opacity-0 xl:translate-y-full z-10 flex flex-col gap-4"><h2 class="~text-[28px]/[40px] leading-[1.1] font-extralight"> \u041F\u0435\u0440\u0432\u043E\u0435 \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u043D\u043E\u0435 \u043E\u0431\u0435\u0441\u043F\u0435\u0447\u0435\u043D\u0438\u0435 \u0434\u043B\u044F \u043F\u0440\u043E\u0442\u043E\u0447\u043D\u043E\u0433\u043E \u0446\u0438\u0442\u043E\u043C\u0435\u0442\u0440\u0430 \u043F\u043E\u043B\u043D\u043E\u0441\u0442\u044C\u044E \u043D\u0430 \u0440\u0443\u0441\u0441\u043A\u043E\u043C \u044F\u0437\u044B\u043A\u0435 </h2><p> \u043E\u0431\u0435\u0441\u043F\u0435\u0447\u0438\u0432\u0430\u0435\u0442 \u0443\u0434\u043E\u0431\u0441\u0442\u0432\u043E \u0438 \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u043E\u0441\u0442\u044C \u0434\u043B\u044F \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0435\u0439. \u041E\u043D\u043E \u043F\u0440\u0435\u0434\u043B\u0430\u0433\u0430\u0435\u0442 \u0438\u043D\u0442\u0443\u0438\u0442\u0438\u0432\u043D\u043E \u043F\u043E\u043D\u044F\u0442\u043D\u044B\u0439 \u0438\u043D\u0442\u0435\u0440\u0444\u0435\u0439\u0441, \u0447\u0442\u043E \u0443\u043F\u0440\u043E\u0449\u0430\u0435\u0442 \u043E\u0431\u0443\u0447\u0435\u043D\u0438\u0435 \u0438 \u0440\u0430\u0431\u043E\u0442\u0443 \u0441 \u0441\u0438\u0441\u0442\u0435\u043C\u043E\u0439. \u0421\u043F\u0435\u0446\u0438\u0430\u043B\u0438\u0441\u0442\u044B \u043C\u043E\u0433\u0443\u0442 \u0441\u043E\u0441\u0440\u0435\u0434\u043E\u0442\u043E\u0447\u0438\u0442\u044C\u0441\u044F \u043D\u0430 \u043F\u0440\u043E\u0432\u0435\u0434\u0435\u043D\u0438\u0438 \u0438\u0441\u0441\u043B\u0435\u0434\u043E\u0432\u0430\u043D\u0438\u0439, \u043D\u0435 \u043E\u0442\u0432\u043B\u0435\u043A\u0430\u044F\u0441\u044C \u043D\u0430 \u044F\u0437\u044B\u043A\u043E\u0432\u044B\u0435 \u0431\u0430\u0440\u044C\u0435\u0440\u044B. </p></div></div></div></section>`);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/section/SoftScreen.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "ServiceScreen",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtImg = __nuxt_component_1;
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "service",
        class: "py-16 lg:py-24 scroll-mt-16 bg-foreground text-black"
      }, _attrs))}><div class="container flex flex-col gap-12"><h2 class="text-[50px] leading-[1.1] font-extralight">\u0422\u0435\u0445\u043D\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u0441\u0435\u0440\u0432\u0438\u0441</h2><ul class="grid grid-cols-2 lg:grid-cols-3 gap-y-8 lg:gap-y-16 gap-x-8 lg:gap-x-16"><li class="service-section-item relative top-[100px] opacity-0 flex flex-col gap-4 text-[20px]">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        width: "72",
        class: "w-[72px] h-[80px]",
        src: "/icons/service-icon-7.svg"
      }, null, _parent));
      _push(`<h3 class="text-primary text-[18px]">\u041E\u043F\u0435\u0440\u0430\u0442\u0438\u0432\u043D\u0430\u044F \u0442\u0435\u0445\u043D\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u043A\u0430</h3><p class="~text-[14px]/[16px]">\u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u0435 \u0438\xA0\u0437\u0430\u043F\u0447\u0430\u0441\u0442\u0438 \u0434\u043B\u044F\xA0\u043F\u0440\u043E\u0442\u043E\u0447\u043D\u044B\u0445 \u0446\u0438\u0442\u043E\u043C\u0435\u0442\u0440\u043E\u0432\xA0 \u0432\xA0\u043D\u0430\u043B\u0438\u0447\u0438\u0438 \u043D\u0430\xA0\u0441\u043A\u043B\u0430\u0434\u0435 \u0432\xA0\u0421\u0430\u043D\u043A\u0442\u2011\u041F\u0435\u0442\u0435\u0440\u0431\u0443\u0440\u0433\u0435</p></li><li class="service-section-item relative top-[100px] opacity-0 flex flex-col gap-4 text-[20px]">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        width: "72",
        class: "w-[72px] h-[80px]",
        src: "/icons/service-icon-9.svg"
      }, null, _parent));
      _push(`<h3 class="text-primary text-[18px]">\u0411\u044B\u0441\u0442\u0440\u0430\u044F \u0440\u0435\u0430\u043A\u0446\u0438\u044F \u043D\u0430 \u0437\u0430\u043F\u0440\u043E\u0441\u044B</h3><p class="~text-[14px]/[16px]">\u043D\u0430\u043B\u0438\u0447\u0438\u0435 \u043A\u0432\u0430\u043B\u0438\u0444\u0438\u0446\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u043E\u0439 \u043A\u043E\u043C\u0430\u043D\u0434\u044B \u0442\u0435\u0445\u043D\u0438\u0447\u0435\u0441\u043A\u043E\u0439 \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u043A\u0438 \u043F\u043E\u0437\u0432\u043E\u043B\u044F\u0435\u0442 \u0431\u044B\u0441\u0442\u0440\u043E \u0440\u0435\u0430\u0433\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u043D\u0430\xA0\u0432\u043E\u0437\u043C\u043E\u0436\u043D\u044B\u0435 \u043F\u0440\u043E\u0431\u043B\u0435\u043C\u044B \u0441\xA0\u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u0435\u043C, \u0447\u0442\u043E\xA0\u043A\u0440\u0438\u0442\u0438\u0447\u043D\u043E \u0434\u043B\u044F\xA0\u043B\u0430\u0431\u043E\u0440\u0430\u0442\u043E\u0440\u0438\u0439, \u0433\u0434\u0435\xA0\u0432\u0440\u0435\u043C\u044F \u043C\u043E\u0436\u0435\u0442 \u0438\u0433\u0440\u0430\u0442\u044C \u0440\u0435\u0448\u0430\u044E\u0449\u0443\u044E \u0440\u043E\u043B\u044C.</p></li><li class="service-section-item relative top-[100px] opacity-0 flex flex-col gap-4 text-[20px]">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        width: "72",
        class: "w-[72px] h-[80px]",
        src: "/icons/service-icon-10.svg"
      }, null, _parent));
      _push(`<h3 class="text-primary text-[18px]">\u041A\u043E\u043D\u0441\u0443\u043B\u044C\u0442\u0430\u0446\u0438\u0438 \u0438 \u043E\u0431\u0443\u0447\u0435\u043D\u0438\u0435</h3><p class="~text-[14px]/[16px]">\u0442\u0435\u0445\u043D\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u043A\u0430 \u043D\u0435\xA0\u0442\u043E\u043B\u044C\u043A\u043E \u0440\u0435\u0448\u0430\u0435\u0442 \u043F\u0440\u043E\u0431\u043B\u0435\u043C\u044B, \u043D\u043E\xA0\u0438\xA0\u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u0442 \u043A\u043E\u043D\u0441\u0443\u043B\u044C\u0442\u0430\u0446\u0438\u0438 \u043F\u043E\xA0\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u043E\u0439 \u044D\u043A\u0441\u043F\u043B\u0443\u0430\u0442\u0430\u0446\u0438\u0438 \u0438\xA0\u043E\u0431\u0441\u043B\u0443\u0436\u0438\u0432\u0430\u043D\u0438\u044E \u043F\u0440\u043E\u0442\u043E\u0447\u043D\u044B\u0445 \u0446\u0438\u0442\u043E\u043C\u0435\u0442\u0440\u043E\u0432, \u0447\u0442\u043E\xA0\u043F\u043E\u043C\u043E\u0433\u0430\u0435\u0442 \u043F\u0440\u0435\u0434\u043E\u0442\u0432\u0440\u0430\u0442\u0438\u0442\u044C \u043F\u043E\u043B\u043E\u043C\u043A\u0438.</p></li><li class="service-section-item relative top-[100px] opacity-0 flex flex-col gap-4 text-[20px]">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        width: "72",
        class: "w-[72px] h-[80px]",
        src: "/icons/service-icon-11.svg"
      }, null, _parent));
      _push(`<h3 class="text-primary text-[18px]">\u041F\u0440\u043E\u0444\u0438\u043B\u0430\u043A\u0442\u0438\u043A\u0430 \u043D\u0435\u0438\u0441\u043F\u0440\u0430\u0432\u043D\u043E\u0441\u0442\u0435\u0439</h3><p class="~text-[14px]/[16px]">\u0440\u0435\u0433\u0443\u043B\u044F\u0440\u043D\u044B\u0435 \u043F\u0440\u043E\u0432\u0435\u0440\u043A\u0438 \u0438\xA0\u043F\u0440\u043E\u0444\u0438\u043B\u0430\u043A\u0442\u0438\u0447\u0435\u0441\u043A\u043E\u0435 \u043E\u0431\u0441\u043B\u0443\u0436\u0438\u0432\u0430\u043D\u0438\u0435, \u043F\u0440\u043E\u0432\u043E\u0434\u0438\u043C\u044B\u0435 \u0442\u0435\u0445\u043D\u0438\u0447\u0435\u0441\u043A\u0438\u043C\u0438 \u0441\u043F\u0435\u0446\u0438\u0430\u043B\u0438\u0441\u0442\u0430\u043C\u0438, \u043F\u043E\u043C\u043E\u0433\u0430\u044E\u0442 \u0432\u044B\u044F\u0432\u043B\u044F\u0442\u044C \u043F\u043E\u0442\u0435\u043D\u0446\u0438\u0430\u043B\u044C\u043D\u044B\u0435 \u043F\u0440\u043E\u0431\u043B\u0435\u043C\u044B \u0434\u043E\xA0\u0442\u043E\u0433\u043E, \u043A\u0430\u043A\xA0\u043E\u043D\u0438\xA0\u043F\u0440\u0438\u0432\u0435\u0434\u0443\u0442 \u043A\xA0\u0441\u0435\u0440\u044C\u0435\u0437\u043D\u044B\u043C \u0441\u0431\u043E\u044F\u043C.</p></li><li class="service-section-item relative top-[100px] opacity-0 flex flex-col gap-4 text-[20px]">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        width: "72",
        class: "w-[72px] h-[80px]",
        src: "/icons/service-icon-12.svg"
      }, null, _parent));
      _push(`<h3 class="text-primary text-[18px]">\u0421\u043D\u0438\u0436\u0435\u043D\u0438\u0435 \u0437\u0430\u0442\u0440\u0430\u0442 \u0434\u043B\u044F \u043B\u0430\u0431\u043E\u0440\u0430\u0442\u043E\u0440\u0438\u0438</h3><p class="~text-[14px]/[16px]">\u0437\u0430\u043F\u0430\u0441 \u043A\u043E\u043C\u043F\u043B\u0435\u043A\u0442\u0443\u044E\u0449\u0438\u0445 \u043D\u0430\xA0\u0441\u043A\u043B\u0430\u0434\u0435 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438-\u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044F \u0432\xA0\u0420\u043E\u0441\u0441\u0438\u0438 \u043F\u043E\u043C\u043E\u0433\u0430\u0435\u0442 \u0438\u0437\u0431\u0435\u0436\u0430\u0442\u044C \u0434\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0445 \u0440\u0430\u0441\u0445\u043E\u0434\u043E\u0432 \u043D\u0430\xA0\u044D\u043A\u0441\u0442\u0440\u0435\u043D\u043D\u044B\u0435 \u0437\u0430\u043A\u0430\u0437\u044B \u0438\xA0\u0434\u043E\u0441\u0442\u0430\u0432\u043A\u0443 \u0438\u0437-\u0437\u0430 \u0440\u0443\u0431\u0435\u0436\u0430.</p></li><li class="service-section-item relative top-[100px] opacity-0 flex flex-col gap-4 text-[20px]">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        width: "72",
        class: "w-[72px] h-[80px]",
        src: "/icons/service-icon-8.svg"
      }, null, _parent));
      _push(`<h3 class="text-primary text-[18px]">\u0420\u0430\u0441\u0448\u0438\u0440\u0435\u043D\u043D\u0430\u044F \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0430 \u0433\u0430\u0440\u0430\u043D\u0442\u0438\u0439\u043D\u043E\u0433\u043E \u043E\u0431\u0441\u043B\u0443\u0436\u0438\u0432\u0430\u043D\u0438\u044F</h3></li></ul></div></section>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/section/ServiceScreen.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = {
  name: "NuxtMarquee",
  emits: ["finish", "cycleComplete"],
  props: [
    "style",
    "class",
    "autoFill",
    "play",
    "pauseOnHover",
    "pauseOnClick",
    "direction",
    "speed",
    "delay",
    "loop",
    "gradient",
    "gradientColor",
    "gradientWidth"
  ],
  setup(props, { slots, emit }) {
    return () => h(
      Marquee,
      {
        ...props,
        onCycleComplete: () => emit("cycleComplete"),
        onFinish: () => emit("finish")
      },
      slots
    );
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/nuxt-marquee/dist/runtime/components/NuxtMarquee.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  const _component_NuxtMarquee = _sfc_main$3;
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "bg-foreground" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_NuxtMarquee, { class: "py-8 gap-24" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<p class="uppercase drop-shadow-[0_0_15px_rgba(0,0,0,0.7)] text-[50px] md:text-[70px] lg:text-[80px] xl:text-[90px] font-black"${_scopeId}> \u0414\u043E\u0441\u0442\u0443\u043F\u0435\u043D \u0434\u043B\u044F \u0432\u0430\u0448\u0435\u0439 \u043B\u0430\u0431\u043E\u0440\u0430\u0442\u043E\u0440\u0438\u0438 \u043F\u0440\u044F\u043C\u043E \u0441\u0435\u0439\u0447\u0430\u0441 </p>`);
      } else {
        return [
          createVNode("p", { class: "uppercase drop-shadow-[0_0_15px_rgba(0,0,0,0.7)] text-[50px] md:text-[70px] lg:text-[80px] xl:text-[90px] font-black" }, " \u0414\u043E\u0441\u0442\u0443\u043F\u0435\u043D \u0434\u043B\u044F \u0432\u0430\u0448\u0435\u0439 \u043B\u0430\u0431\u043E\u0440\u0430\u0442\u043E\u0440\u0438\u0438 \u043F\u0440\u044F\u043C\u043E \u0441\u0435\u0439\u0447\u0430\u0441 ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</section>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/section/MarqueeScreen.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_10 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2]]);
const _imports_1 = publicAssetsURL("/video/video-2.mp4");
const _sfc_main$1 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  const _component_BaseContactForm = _sfc_main$e;
  _push(`<section${ssrRenderAttrs(mergeProps({
    id: "contacts",
    class: "relative z-0 overflow-hidden py-16 lg:py-24"
  }, _attrs))}><video class="hidden lg:flex absolute z-10 w-full left-0 top-0 h-full object-cover object-center" loop muted autoplay playsinline${ssrRenderAttr("poster", _imports_0)}><source${ssrRenderAttr("src", _imports_1)} type="video/mp4"></video><div class="absolute z-20 w-full left-0 top-0 h-full bg-gradient-to-r from-black from-35% to-black lg:to-black/50"></div><div class="container z-30 grid lg:grid-cols-2 relative"><div class="flex justify-center lg:justify-start">`);
  _push(ssrRenderComponent(_component_BaseContactForm, null, null, _parent));
  _push(`</div></div></section>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/section/ContactsScreen.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_11 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_SectionFirstScreen = _sfc_main$d;
  const _component_SectionSecondScreen = _sfc_main$c;
  const _component_SectionThirdScreen = _sfc_main$b;
  const _component_SectionFourthScreen = _sfc_main$a;
  const _component_SectionMadeInRussiaScreen = __nuxt_component_4;
  const _component_SectionVideoScreen = _sfc_main$8;
  const _component_SectionFifthScreen = _sfc_main$7;
  const _component_SectionAreasScreen = _sfc_main$6;
  const _component_SectionSoftScreen = _sfc_main$5;
  const _component_SectionServiceScreen = _sfc_main$4;
  const _component_SectionMarqueeScreen = __nuxt_component_10;
  const _component_SectionContactsScreen = __nuxt_component_11;
  _push(`<main${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_SectionFirstScreen, null, null, _parent));
  _push(ssrRenderComponent(_component_SectionSecondScreen, null, null, _parent));
  _push(ssrRenderComponent(_component_SectionThirdScreen, null, null, _parent));
  _push(ssrRenderComponent(_component_SectionFourthScreen, null, null, _parent));
  _push(ssrRenderComponent(_component_SectionMadeInRussiaScreen, null, null, _parent));
  _push(ssrRenderComponent(_component_SectionVideoScreen, null, null, _parent));
  _push(ssrRenderComponent(_component_SectionFifthScreen, null, null, _parent));
  _push(ssrRenderComponent(_component_SectionAreasScreen, null, null, _parent));
  _push(ssrRenderComponent(_component_SectionSoftScreen, null, null, _parent));
  _push(ssrRenderComponent(_component_SectionServiceScreen, null, null, _parent));
  _push(ssrRenderComponent(_component_SectionMarqueeScreen, null, null, _parent));
  _push(ssrRenderComponent(_component_SectionContactsScreen, null, null, _parent));
  _push(`</main>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { index as default };
//# sourceMappingURL=index-D8NPB6ZZ.mjs.map