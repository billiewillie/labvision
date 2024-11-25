import { ssrRenderAttrs, ssrRenderAttr } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "../server.mjs";
import "ofetch";
import "#internal/nuxt/paths";
import "hookable";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "ufo";
import "radix3";
import "defu";
import "klona";
import "devalue";
import "cookiejs";
import "gsap";
import "gsap/ScrollTrigger.js";
import "class-variance-authority";
import "radix-vue";
import "clsx";
import "tailwind-merge";
import "lucide-vue-next";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<main${ssrRenderAttrs(_attrs)}><section class="relative text-white z-0 overflow-hidden py-16 lg:py-24"><div class="container z-30 grid xl:grid-cols-2 relative gap-8 xl:gap-8"><div class="flex flex-col gap-4 xl:gap-8"><h1 class="text-primary font-light text-[50px]">Контакты</h1><p class="text-[20px]/[24px] font-bold">Общество с ограниченной ответственностью «Лабвижн»</p><address class="~text-[16px]/[20px] flex flex-col gap-4 not-italic"> 197022, г. Санкт-Петербург, вн.тер.г. Муниципальный округ Аптекарский остров, ул. Льва Толстого, д. 9, лит. А, помещ. 5‑H. </address><div><a href="tel:88005508357" class="inline-flex w-auto ~text-[16px]/[20px] hover:underline underline-offset-4 mb-4"> Телефон: 8-800-550-83-57 </a></div><div><a href="mailto:general@labvision.me" class="w-auto ~text-[16px]/[20px] hover:underline underline-offset-4"> E-mail: general@labvision.me </a></div></div><div class="overflow-hidden h-[300px] xl:h-full"><iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A50272272f0590a1ca8dfc051f3b02e0f588c6010fd6526f0e12f6d6883919310&amp;source=constructor"${ssrRenderAttr("width", `100%`)}${ssrRenderAttr("height", `100%`)} frameborder="0"></iframe></div></div></section></main>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/contacts.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const contacts = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  contacts as default
};
//# sourceMappingURL=contacts-D8woWdkr.js.map
