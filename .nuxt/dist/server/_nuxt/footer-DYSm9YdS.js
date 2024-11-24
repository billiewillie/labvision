import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs } from "vue/server-renderer";
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
import "class-variance-authority";
import "radix-vue";
import "clsx";
import "tailwind-merge";
import "lucide-vue-next";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<footer${ssrRenderAttrs(mergeProps({ class: "bg-foreground py-12 text-white" }, _attrs))}><div class="container grid grid-cols-1 lg:grid-cols-2 gap-8"><div class="flex flex-col gap-4"><p>Общество с ограниченной ответственностью «Лабвижн»</p><address class="flex flex-col gap-4 not-italic"> 197022, г. Санкт-Петербург, вн.тер.г. Муниципальный округ Аптекарский остров, ул. Льва Толстого, д. 9, лит. А, помещ. 5‑H. </address><a href="tel:88005508357" class="hover:underline underline-offset-4">Телефон: 8-800-550-83-57</a><a href="mailto:general@labvision.me" class="hover:underline underline-offset-4">E-mail: general@labvision.me</a></div><div class="flex xl:justify-end"><span class="opacity-60 text-[18px] font-extralight">Labvision 2024 ©</span></div></div></footer>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/app/footer.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const footer = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  footer as default
};
//# sourceMappingURL=footer-DYSm9YdS.js.map
