import { defineComponent, mergeProps, useSSRContext, watch, withCtx, createTextVNode, ref, h, createVNode } from "vue";
import "hookable";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent } from "vue/server-renderer";
import { publicAssetsURL } from "#internal/nuxt/paths";
import { _ as __nuxt_component_1, a as __nuxt_component_4$1, b as _sfc_main$e } from "./contactForm-DM4VYoTk.js";
import { u as useNuxtApp, _ as _export_sfc } from "../server.mjs";
import { Marquee } from "vue-fast-marquee";
import "@unhead/shared";
import "vee-validate";
import "@vee-validate/zod";
import "radix-vue";
import "zod";
import "destr";
import "klona";
import "devalue";
import "defu";
import "ofetch";
import "unctx";
import "h3";
import "unhead";
import "vue-router";
import "ufo";
import "radix3";
import "cookiejs";
import "gsap";
import "gsap/ScrollTrigger.js";
import "class-variance-authority";
import "clsx";
import "tailwind-merge";
import "lucide-vue-next";
const _imports_0 = publicAssetsURL("/img/first-screen-poster.webp");
const _imports_1$1 = publicAssetsURL("/video/video-1.mp4");
const _sfc_main$d = /* @__PURE__ */ defineComponent({
  __name: "FirstScreen",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "relative" }, _attrs))}><video class="absolute z-10 w-full left-0 top-0 h-full object-cover object-center" loop muted autoplay playsinline${ssrRenderAttr("poster", _imports_0)}><source${ssrRenderAttr("src", _imports_1$1)} type="video/mp4"></video><div class="absolute z-20 w-full left-0 top-0 h-full bg-black/60"></div><div class="container h-[calc(100vh-90px)] relative z-20 flex flex-col gap-4 lg:gap-4 items-center justify-center"><h1 id="first-screen-title" class="~text-[22px]/[30px] relative opacity-0 -top-[50px] md:~text-[40px]/[60px] lg:~text-[60px]/[70px] xl:text-[88px] uppercase font-bold text-white/70 leading-none text-center"> проточная цитометрия </h1><p id="first-screen-subtitle" class="~text-[18px]/[24px] top-[50px] relative opacity-0 md:~text-[30px]/[40px] lg:~text-[40px]/[50px] xl:text-[62px] uppercase font-light text-white/70 leading-none text-center"> без границ и ограничений </p></div></section>`);
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
        alt: "Проточный цитометр CELLRIVER",
        title: "Проточный цитометр CELLRIVER",
        src: "/img/item-photo-1.webp"
      }, null, _parent));
      _push(`</div><div id="second-screen-content" class="relative xl:pl-16 opacity-0 flex flex-col gap-6 -right-[200px]"><h2 class="~text-[32px]/[50px] font-extralight leading-[1.1]"> Проточный цитометр <span class="text-primary">CELLRIVER</span></h2><p class="text-[18px]"> Первый российский проточный цитометр для широкого круга научных исследований, скрининговых исследований и фармацевтических разработок*. </p><p class="text-[30px] font-light leading-[35px] text-primary"> Создан с учётом актуальных требований и мировых стандартов отрасли. </p><p class="text-[18px]"> *Модель, разработанная для клинического использования, находится в процессе регистрации. </p></div></div></section>`);
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
      _push(`<p>Произведено в России</p></li><li class="relative opacity-0 third-section-item top-[100px] flex flex-col gap-4 ~text-[16px]/[20px]">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        width: "72",
        class: "w-[72px] h-[80px]",
        src: "/icons/service-icon-2.svg"
      }, null, _parent));
      _push(`<p>Тщательный контроль каждого элемента в системе</p></li><li class="relative opacity-0 third-section-item top-[100px] flex flex-col gap-4 ~text-[16px]/[20px]">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        width: "72",
        class: "w-[72px] h-[80px]",
        src: "/icons/service-icon-3.svg"
      }, null, _parent));
      _push(`<p>Короткие сроки поставки</p></li><li class="relative opacity-0 third-section-item top-[100px] flex flex-col gap-4 ~text-[16px]/[20px]">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        width: "72",
        class: "w-[72px] h-[80px]",
        src: "/icons/service-icon-4.svg"
      }, null, _parent));
      _push(`<p>Программное обеспечение на русском языке</p></li><li class="relative opacity-0 third-section-item top-[100px] flex flex-col gap-4 ~text-[16px]/[20px]">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        width: "72",
        class: "w-[72px] h-[80px]",
        src: "/icons/service-icon-5.svg"
      }, null, _parent));
      _push(`<p>Расширенная программа гарантийного обслуживания</p></li><li class="relative opacity-0 third-section-item top-[100px] flex flex-col gap-4 ~text-[16px]/[20px]">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        width: "72",
        class: "w-[72px] h-[80px]",
        src: "/icons/service-icon-6.svg"
      }, null, _parent));
      _push(`<p>Наличие склада запчастей в РФ</p></li></ul></div></section>`);
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
      }, _attrs))}><div class="black container grid grid-cols-1 xl:grid-cols-2 gap-28 xl:gap-8 justify-between"><div class="text-wrap grid gap-12 relative xl:top-0 xl:left-0 xl:right-0 xl:bottom-0 w-full xl:h-[80vh]"><div class="panel-text bg-foreground xl:absolute xl:top-0 xl:left-0 xl:right-0 xl:bottom-0 xl:w-full xl:h-full xl:opacity-20 xl:translate-y-[80%] z-10"><h2 class="~text-[40px]/[48px] leading-[1.1] xl:text-[48px] font-extralight mb-8"><span class="text-primary">Современное и надежное</span> конструктивное решение </h2><p class="text-[20px]">Конструкция прибора соответствует всем самым современным тенденциям и стандартам и ориентирована на максимальную гибкость в решении различных исследовательских и рутинных задач</p></div><div class="panel-text bg-foreground xl:absolute xl:top-0 xl:left-0 xl:right-0 xl:bottom-0 xl:w-full xl:h-full xl:opacity-0 xl:translate-y-full z-10"><h2 class="~text-[40px]/[48px] leading-[1.1] xl:text-[48px] font-extralight mb-8"> Доступные конфигурации проточного цитометра <span class="text-primary">CELLRIVER</span></h2><ul class="flex flex-col gap-4"><li class="flex gap-4 items-center">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        class: "object-contain",
        width: "42",
        height: "42",
        src: "/icons/check.svg"
      }, null, _parent));
      _push(`<p>2 лазера, 6 флюоресцентных каналов детекции</p></li><li class="flex gap-4 items-center">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        class: "object-contain",
        width: "42",
        height: "42",
        src: "/icons/check.svg"
      }, null, _parent));
      _push(`<p>3 лазера, 14 флюоресцентных каналов детекции</p></li></ul></div><div class="panel-text bg-foreground xl:absolute xl:top-0 xl:left-0 xl:right-0 xl:bottom-0 xl:w-full xl:h-full xl:opacity-0 xl:translate-y-full z-10 flex flex-col xl:flex-row gap-8"><div class="basis-1/2"><h2 class="~text-[18px]/[20px] leading-[1.1] mb-8 text-primary"> Лавинные фотодиоды в качестве фотодетекторов </h2><ul class="list-disc pl-4 marker:text-primary"><li>максимально высокая чувствительность</li><li>низкий уровень электронного шума</li><li>напряжение на детекторах фиксировано</li><li>нет необходимости настраивать специфическое для образцов различных типов напряжение</li><li>абсолютная линейность в широком диапазоне</li><li>предсказуемая флюоресцентная компенсация независимо от расположения популяции</li></ul></div><div class="basis-1/2"><h2 class="~text-[18px]/[20px] leading-[1.1] mb-8 text-primary"> Шприцевой насос, управляющий подачей образца </h2><ul class="list-disc pl-4 marker:text-primary"><li>низкий уровень шума</li><li>плавная подача образца</li><li>волюметрический анализ абсолютных концентраций без использования дополнительных референсных частиц </li></ul></div></div><div class="panel-text bg-foreground xl:absolute xl:top-0 xl:left-0 xl:right-0 xl:bottom-0 xl:w-full xl:h-full xl:opacity-0 xl:translate-y-full z-10 flex flex-col xl:flex-row gap-8"><div class="basis-1/2"><h2 class="~text-[18px]/[20px] leading-[1.1] mb-8 text-primary"> Твердотельные лазеры </h2><ul class="list-disc pl-4 marker:text-primary"><li>488 нм, 638 нм, 405 нм</li><li>оптимизированной мощности, позволяющие поддерживать работу с большинством доступных флюорохромов и флюоресцентных белков </li></ul></div><div class="basis-1/2"><h2 class="~text-[18px]/[20px] leading-[1.1] mb-8 text-primary"> Широкий выбор вариантов загрузки образца </h2><ul class="list-disc pl-4 marker:text-primary"><li>Отдельные пробирки объемом 5, 2 и 1,5 мл</li><li>Загрузка пробирок группой до 40 единиц</li></ul></div></div></div><div class="flex flex-col gap-8"><div class="p-wrap relative overflow-hidden top-0 h-[50vh] xl:h-[70vh]">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        format: "webp",
        class: "panel absolute xl:top-0 left-0 w-full h-full object-cover",
        alt: "Проточный цитометр CELLRIVER",
        title: "Проточный цитометр CELLRIVER",
        src: "/img/item-photo-2.webp"
      }, null, _parent));
      _push(ssrRenderComponent(_component_NuxtImg, {
        format: "webp",
        class: "panel absolute xl:top-0 left-0 w-full h-full z-10 object-cover",
        alt: "Проточный цитометр CELLRIVER",
        title: "Проточный цитометр CELLRIVER",
        src: "/img/item-photo-6.webp"
      }, null, _parent));
      _push(ssrRenderComponent(_component_NuxtImg, {
        format: "webp",
        class: "panel absolute xl:top-0 left-0 w-full h-full object-cover",
        alt: "Проточный цитометр CELLRIVER",
        title: "Проточный цитометр CELLRIVER",
        src: "/img/item-photo-7.webp"
      }, null, _parent));
      _push(ssrRenderComponent(_component_NuxtImg, {
        format: "webp",
        class: "panel purple absolute xl:top-0 left-0 w-full h-full z-10 object-cover",
        alt: "Проточный цитометр CELLRIVER",
        title: "Проточный цитометр CELLRIVER",
        src: "/img/item-photo-8.webp"
      }, null, _parent));
      _push(`</div><div class="flex md:flex-row items-center gap-4 justify-start"><p>Техническая спецификация</p><a download target="_blank" href="/pdf/Cellriver_Spezificazia_2024.pdf">`);
      _push(ssrRenderComponent(_component_BaseRainbowButton, { variant: "black" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Скачать PDF `);
          } else {
            return [
              createTextVNode(" Скачать PDF ")
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
    alt: "Проточный цитометр CELLRIVER",
    title: "Проточный цитометр CELLRIVER",
    src: "/img/item-photo-5.webp"
  }, null, _parent));
  _push(`<div class="container"><h2 class="relative leading-[1] font-bold drop-shadow-xl opacity-80 uppercase ~text-[38px]/[50px] md:~text-[70px]/[80px] lg:~text-[80px]/[90px] xl:~text-[100px]/[140px] 2xl:~text-[140px]/[150px]"> Производится в России </h2></div></section>`);
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
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "py-16 lg:py-24 bg-foreground" }, _attrs))}><div class="container relative"><video controls playsinline${ssrRenderAttr("poster", _imports_0)}><source src="https://labvision.me/video/labvision_postproduction.mp4" type="video/mp4"></video></div></section>`);
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
      }, _attrs))}><div class="container relative grid lg:grid-cols-3 lg:grid-rows-2 gap-8 lg:gap-16"><div class="fifth-section-item relative opacity-0 top-[100px] flex flex-col gap-4 lg:gap-8"><h2 class="text-[36px] leading-[1.1] lg:text-[40px] font-extralight"><span class="text-primary">Автоматическая</span> подача образцов </h2><p>Автоматизация процесса подачи образцов освобождает исследователя от выполнения рутинных процедур загрузки образцов при выполнении серийных исследований, а также снижает контакт с потенциально инфицированными образцами</p><div class="flex-col flex gap-2"><p class="text-primary">Пробы могут быть загружены в:</p><ul class="list-disc pl-4 marker:text-primary"><li>Пробирки малых объемов от 1,5 мл</li><li>96-лучные планшеты</li><li>Стандартные цитометрические пробирки</li></ul></div></div><div class="fifth-section-item relative opacity-0 top-[100px] flex flex-col gap-4 lg:gap-8"><h2 class="text-[36px] leading-[1.1] lg:text-[40px] font-extralight"><span class="text-primary">Компактный</span> размер корпуса </h2><p>Проточный цитометр CELLRIVER благодаря компактному размеру может быть размещен в помещении любого размера или даже в ламинарно-потоковом шкафу.</p><p>Классический и лаконичный дизайн прибора легко интегрируется в уже существующую лабораторную инфраструктуру, обеспечивая высокий уровень удобства и эргономики.</p></div><div class="hidden lg:flex lg:row-span-2"></div><div class="fifth-section-item relative opacity-0 top-[100px] flex flex-col gap-4 lg:gap-8"><h2 class="text-[36px] leading-[1.1] lg:text-[40px] font-extralight"><span class="text-primary">Низкий уровень</span> шума работы прибора </h2><p>Низкий уровень шума во время работы проточного цитометра повышает комфорт работы в лаборатории, особенно при размещении нескольких приборов в одном помещении.</p></div><div class="fifth-section-item relative opacity-0 top-[100px] flex flex-col gap-4 lg:gap-8"><h2 class="text-[36px] leading-[1.1] lg:text-[40px] font-extralight"><span class="text-primary">Волюметрический анализ</span> концентраций клеток </h2><p>Технология волюметрического анализа концентраций клеток позволяет получать результаты в абсолютных значений без использования дополнительных частиц.</p><p>Это значительно упрощает подготовку образцов и снижает себестоимость исследования.</p></div>`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        format: "webp",
        class: "m-auto xl:w-1/2 xl:absolute xl:left-[70%] xl:top-1/2 xl:translate-y-[-50%]",
        alt: "Проточный цитометр CELLRIVER",
        title: "Проточный цитометр CELLRIVER",
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
      }, _attrs))}><div class="container"><h2 class="areas-screen-title relative opacity-0 top-[50px] lg:text-center mb-12 ~text-[40px]/[50px] leading-[1.1] font-extralight"> Области применения </h2><div class="grid lg:grid-cols-3 gap-8"><div class="xl:pr-12 xl:order-1 xl:pt-24"><ul class="flex flex-col gap-8 xl:text-right"><li class="areas-screen-item-left opacity-0 relative -left-[100px] flex gap-4"><p class="flex-auto order-2 xl:order-1">Иммунофенотипирование (в том числе иммунный статус)</p><div class="xl:order-2 relative bottom-[8px] bg-[url(&#39;/icons/check.svg&#39;)] bg-contain rounded-full w-[42px] h-[42px] border border-primary flex items-center flex-shrink-0 justify-center"></div></li><li class="areas-screen-item-left opacity-0 relative -left-[100px] flex gap-4"><p class="flex-auto order-2 xl:order-1">Разработка клеточных продуктов</p><div class="relative xl:order-2 bottom-[8px] bg-[url(&#39;/icons/check.svg&#39;)] bg-contain rounded-full w-[42px] h-[42px] border border-primary flex items-center flex-shrink-0 justify-center"></div></li><li class="areas-screen-item-left opacity-0 relative -left-[100px] flex gap-4"><p class="flex-auto order-2 xl:order-1">Фундаментальные исследования в иммунологии</p><div class="relative xl:order-2 bottom-[8px] bg-[url(&#39;/icons/check.svg&#39;)] bg-contain rounded-full w-[42px] h-[42px] border border-primary flex items-center flex-shrink-0 justify-center"></div></li></ul></div><div class="order-3 xl:order-2 flex justify-center">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        format: "webp",
        class: "areas-screen-img w-full opacity-0 relative top-[100px]",
        alt: "Проточный цитометр CELLRIVER",
        title: "Проточный цитометр CELLRIVER",
        src: "/img/item-photo-4.webp"
      }, null, _parent));
      _push(`</div><div class="xl:pl-12 xl:order-3 xl:pt-24"><ul class="flex flex-col gap-8"><li class="areas-screen-item-right opacity-0 relative -right-[100px] flex gap-4"><div class="relative bottom-[8px] bg-[url(&#39;/icons/check.svg&#39;)] bg-contain rounded-full w-[42px] h-[42px] border border-primary flex items-center flex-shrink-0 justify-center"></div><p class="flex-auto">Исследование опухолевых клеток</p></li><li class="areas-screen-item-right opacity-0 relative -right-[100px] flex gap-4"><div class="relative bottom-[8px] bg-[url(&#39;/icons/check.svg&#39;)] bg-contain rounded-full w-[40px] h-[40px] border border-primary flex items-center flex-shrink-0 justify-center"></div><p class="flex-auto">Разработка и тестирование CAR‑T продуктов</p></li></ul></div></div></div></section>`);
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
      }, _attrs))}><div class="container soft-black grid grid-cols-1 xl:grid-cols-2 gap-8"><h2 class="~text-[32px]/[50px] xl:col-span-2 font-extralight leading-[1.1]"> Программное обеспечение <span class="text-primary">FlowExpert</span></h2><div class="flex relative overflow-hidden xl:top-[60px] h-[40vh] xl:h-[60vh] flex-col gap-8">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        format: "webp",
        class: "soft-panel z-0 opacity-0 absolute xl:top-0 left-0 w-full h-full m-auto object-contain",
        alt: "Программное обеспечение FlowExpert",
        title: "Программное обеспечение FlowExpert",
        src: "/img/monitor.webp"
      }, null, _parent));
      _push(ssrRenderComponent(_component_NuxtImg, {
        format: "webp",
        class: "soft-panel z-0 opacity-0 absolute xl:top-0 left-0 w-full h-full m-auto object-contain",
        alt: "Программное обеспечение FlowExpert",
        title: "Программное обеспечение FlowExpert",
        src: "/img/monitor.webp"
      }, null, _parent));
      _push(ssrRenderComponent(_component_NuxtImg, {
        format: "webp",
        class: "soft-panel !z-10 soft-purple absolute xl:top-0 left-0 w-full h-full m-auto object-contain",
        alt: "Программное обеспечение FlowExpert",
        title: "Программное обеспечение FlowExpert",
        src: "/img/monitor.webp"
      }, null, _parent));
      _push(`</div><div class="soft-text-wrap relative flex flex-col gap-12 xl:top-0 left-0 right-0 bottom-0 w-full xl:h-[80vh] xl:pl-8"><div class="soft-panel-text xl:absolute xl:top-0 xl:left-0 xl:right-0 xl:bottom-0 w-full xl:h-full xl:opacity-20 xl:translate-y-[80%] z-10 flex flex-col gap-4"><h2 class="~text-[28px]/[40px] leading-[1.1] font-extralight"> Возможность использования готовых протоколов сбора и анализа данных </h2><p>для рутинных лабораторных исследований иммунного статуса:</p><ul class="flex flex-col gap-4"><li class="flex gap-4 items-center">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        class: "object-contain",
        width: "42",
        height: "42",
        src: "/icons/check.svg"
      }, null, _parent));
      _push(`<p>6-цветный протокол для подсчета Т-,B-,NK- лимфоцитов</p></li><li class="flex gap-4 items-center">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        class: "object-contain",
        width: "42",
        height: "42",
        src: "/icons/check.svg"
      }, null, _parent));
      _push(`<p>3 лазера, 14 флюоресцентных каналов детекции</p></li></ul></div><div class="soft-panel-text xl:absolute xl:top-0 xl:left-0 xl:right-0 xl:bottom-0 w-full xl:h-full xl:opacity-0 xl:translate-y-full z-10 flex flex-col gap-4"><h2 class="~text-[28px]/[40px] leading-[1.1] font-extralight"> Открытое программное обеспечение </h2><p>позволяющее настроить протокол под любые совместимые реагенты</p></div><div class="soft-panel-text xl:absolute xl:top-0 xl:left-0 xl:right-0 xl:bottom-0 w-full xl:h-full xl:opacity-0 xl:translate-y-full z-10 flex flex-col gap-4"><h2 class="~text-[28px]/[40px] leading-[1.1] font-extralight"> Первое программное обеспечение для проточного цитометра полностью на русском языке </h2><p> обеспечивает удобство и доступность для пользователей. Оно предлагает интуитивно понятный интерфейс, что упрощает обучение и работу с системой. Специалисты могут сосредоточиться на проведении исследований, не отвлекаясь на языковые барьеры. </p></div></div></div></section>`);
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
      }, _attrs))}><div class="container flex flex-col gap-12"><h2 class="text-[50px] leading-[1.1] font-extralight">Технический сервис</h2><ul class="grid grid-cols-2 lg:grid-cols-3 gap-y-8 lg:gap-y-16 gap-x-8 lg:gap-x-16"><li class="service-section-item relative top-[100px] opacity-0 flex flex-col gap-4 text-[20px]">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        width: "72",
        class: "w-[72px] h-[80px]",
        src: "/icons/service-icon-7.svg"
      }, null, _parent));
      _push(`<h3 class="text-primary text-[18px]">Оперативная техническая поддержка</h3><p class="~text-[14px]/[16px]">оборудование и запчасти для проточных цитометров  в наличии на складе в Санкт‑Петербурге</p></li><li class="service-section-item relative top-[100px] opacity-0 flex flex-col gap-4 text-[20px]">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        width: "72",
        class: "w-[72px] h-[80px]",
        src: "/icons/service-icon-9.svg"
      }, null, _parent));
      _push(`<h3 class="text-primary text-[18px]">Быстрая реакция на запросы</h3><p class="~text-[14px]/[16px]">наличие квалифицированной команды технической поддержки позволяет быстро реагировать на возможные проблемы с оборудованием, что критично для лабораторий, где время может играть решающую роль.</p></li><li class="service-section-item relative top-[100px] opacity-0 flex flex-col gap-4 text-[20px]">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        width: "72",
        class: "w-[72px] h-[80px]",
        src: "/icons/service-icon-10.svg"
      }, null, _parent));
      _push(`<h3 class="text-primary text-[18px]">Консультации и обучение</h3><p class="~text-[14px]/[16px]">техническая поддержка не только решает проблемы, но и предоставляет консультации по правильной эксплуатации и обслуживанию проточных цитометров, что помогает предотвратить поломки.</p></li><li class="service-section-item relative top-[100px] opacity-0 flex flex-col gap-4 text-[20px]">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        width: "72",
        class: "w-[72px] h-[80px]",
        src: "/icons/service-icon-11.svg"
      }, null, _parent));
      _push(`<h3 class="text-primary text-[18px]">Профилактика неисправностей</h3><p class="~text-[14px]/[16px]">регулярные проверки и профилактическое обслуживание, проводимые техническими специалистами, помогают выявлять потенциальные проблемы до того, как они приведут к серьезным сбоям.</p></li><li class="service-section-item relative top-[100px] opacity-0 flex flex-col gap-4 text-[20px]">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        width: "72",
        class: "w-[72px] h-[80px]",
        src: "/icons/service-icon-12.svg"
      }, null, _parent));
      _push(`<h3 class="text-primary text-[18px]">Снижение затрат для лаборатории</h3><p class="~text-[14px]/[16px]">запас комплектующих на складе компании-производителя в России помогает избежать дополнительных расходов на экстренные заказы и доставку из-за рубежа.</p></li><li class="service-section-item relative top-[100px] opacity-0 flex flex-col gap-4 text-[20px]">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        width: "72",
        class: "w-[72px] h-[80px]",
        src: "/icons/service-icon-8.svg"
      }, null, _parent));
      _push(`<h3 class="text-primary text-[18px]">Расширенная программа гарантийного обслуживания</h3></li></ul></div></section>`);
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
        _push2(`<p class="uppercase drop-shadow-[0_0_15px_rgba(0,0,0,0.7)] text-[50px] md:text-[70px] lg:text-[80px] xl:text-[90px] font-black"${_scopeId}> Доступен для вашей лаборатории прямо сейчас </p>`);
      } else {
        return [
          createVNode("p", { class: "uppercase drop-shadow-[0_0_15px_rgba(0,0,0,0.7)] text-[50px] md:text-[70px] lg:text-[80px] xl:text-[90px] font-black" }, " Доступен для вашей лаборатории прямо сейчас ")
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
export {
  index as default
};
//# sourceMappingURL=index-BNY7NYD6.js.map
