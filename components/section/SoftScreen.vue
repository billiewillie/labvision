<script
  setup
  lang="ts">
const {$gsap, $ScrollTrigger} = useNuxtApp()
import {onMounted, watch} from 'vue'
const {$viewport} = useNuxtApp()

watch($viewport.breakpoint, (newBreakpoint, oldBreakpoint) => {
  console.log('Breakpoint updated:', oldBreakpoint, '->', newBreakpoint)
})
onMounted(() => {
  if (
    $viewport.breakpoint.dep?.computed.value === 'desktopMedium'
    || $viewport.breakpoint.dep?.computed.value === 'desktopWide'
  ) {
    const images = $gsap.utils.toArray('.soft-panel:not(.soft-purple)');

    images.forEach((image, i) => {
      const tl = $gsap.timeline({
        scrollTrigger: {
          trigger: ".soft-black",
          start: () => "top -" + (window.innerHeight * (i + 0.5)),
          end: () => "+=" + window.innerHeight,
          scrub: true,
          toggleActions: "play none reverse none",
          invalidateOnRefresh: true,
        }
      })
      tl.to(image, {height: 0});
    });

    $gsap.set(".soft-panel-text", {zIndex: (i, target, targets) => targets.length - i});

    const texts = $gsap.utils.toArray('.soft-panel-text');

    texts.forEach((text, i) => {
      const tl = $gsap.timeline({
        scrollTrigger: {
          trigger: ".soft-black",
          start: () => "top -" + (window.innerHeight * i),
          end: () => "+=" + window.innerHeight,
          scrub: true,
          toggleActions: "play none reverse none",
          invalidateOnRefresh: true,
        }
      })

      tl
        .to(text, {duration: 0.33, opacity: 1, y: "40%"})
        .to(text, {duration: 0.33, opacity: 0, y: "0%"}, 0.66)
    })

    $ScrollTrigger.create({
      trigger: ".soft-black",
      scrub: true,
      pin: true,
      start: () => "top top",
      end: () => "+=" + ((images.length + 1) * window.innerHeight),
      invalidateOnRefresh: true,
    });
  }
})
</script>

<template>
  <section
    id="flowexpert"
    class="py-24 scroll-mt-16 text-white">
    <div class="container soft-black grid grid-cols-1 xl:grid-cols-2 gap-8">
      <div class="flex relative overflow-hidden top-0 h-[80vh] flex-col gap-8">
        <NuxtImg
          format="webp"
          class="soft-panel z-0 opacity-0 absolute top-[160px] left-0 w-full h-[70vh] m-auto object-contain"
          alt="Программное обеспечение FlowExpert"
          title="Программное обеспечение FlowExpert"
          src="/img/monitor.webp"/>
        <NuxtImg
          format="webp"
          class="soft-panel z-0 opacity-0 absolute top-[160px] left-0 w-full h-[70vh] m-auto object-contain"
          alt="Программное обеспечение FlowExpert"
          title="Программное обеспечение FlowExpert"
          src="/img/monitor.webp"/>
        <NuxtImg
          format="webp"
          class="soft-panel !z-10 soft-purple absolute top-[160px] left-0 w-full h-[70vh] m-auto object-contain"
          alt="Программное обеспечение FlowExpert"
          title="Программное обеспечение FlowExpert"
          src="/img/monitor.webp"/>
      </div>
      <div class="soft-text-wrap relative top-0 left-0 right-0 bottom-0 w-full h-[80vh] xl:pl-8">
        <div class="soft-panel-text absolute top-0 left-0 right-0 bottom-0 w-full h-full opacity-0 translate-y-full z-10 flex flex-col gap-4">
          <h2 class="text-[36px] xl:text-[40px] leading-[1.1] font-extralight">
            Возможность использования готовых протоколов сбора и анализа данных
          </h2>
          <p>для рутинных лабораторных исследований иммунного статуса:</p>
          <ul class="list-disc pl-4 marker:text-primary">
            <li>6-цветный протокол для подсчета Т-,B-,NK- лимфоцитов</li>
            <li>4-цветный протокол для оценки количества CD4-и СD8-лимфоцитов</li>
          </ul>
        </div>
        <div class="soft-panel-text absolute top-0 left-0 right-0 bottom-0 w-full h-full opacity-0 translate-y-full z-10 flex flex-col gap-4">
          <h2 class="text-[36px] xl:text-[40px] leading-[1.1] font-extralight">
            Открытое программное обеспечение
          </h2>
          <p>позволяющее настроить протокол под любые совместимые реагенты</p>
        </div>
        <div class="soft-panel-text absolute top-0 left-0 right-0 bottom-0 w-full h-full opacity-0 translate-y-full z-10 flex flex-col gap-4">
          <h2 class="text-[36px] xl:text-[40px] leading-[1.1] font-extralight">
            Первое программное обеспечение для проточного цитометра полностью на русском языке
          </h2>
          <p>обеспечивает удобство и доступность для пользователей. Оно предлагает интуитивно понятный
            интерфейс, что упрощает обучение и работу с системой. Специалисты могут сосредоточиться на
            проведении исследований, не отвлекаясь на языковые барьеры.</p>
        </div>
      </div>
    </div>
  </section>
</template>