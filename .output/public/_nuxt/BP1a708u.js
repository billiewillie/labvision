import{p as V,d as m,b as w,o as p,c as x,u as h,a as t,e as l,f as C,w as A,g as q,h as I,t as W,_ as j,r as b,i as S,n as R,j as T,k as F,F as H,l as M,m as P,q as D}from"./BBfjFY1K.js";import{_ as $,a as K,b as U}from"./DDxuI5Ox.js";const N=V("/img/first-screen-poster.webp"),G=V("/video/video-1.mp4"),J={class:"relative"},Q=t("video",{class:"absolute z-10 w-full left-0 top-0 h-full object-cover object-center",loop:"",muted:"",autoplay:"",playsinline:"",poster:N},[t("source",{src:G,type:"video/mp4"})],-1),X=t("div",{class:"absolute z-20 w-full left-0 top-0 h-full bg-black/60"},null,-1),Y=t("div",{class:"container h-[calc(100vh-90px)] relative z-20 flex flex-col gap-4 lg:gap-4 items-center justify-center"},[t("h1",{id:"first-screen-title",class:"~text-[22px]/[30px] relative opacity-0 -top-[50px] md:~text-[40px]/[60px] lg:~text-[60px]/[70px] xl:text-[88px] uppercase font-bold text-white/70 leading-none text-center"}," проточная цитометрия "),t("p",{id:"first-screen-subtitle",class:"~text-[18px]/[24px] top-[50px] relative opacity-0 md:~text-[30px]/[40px] lg:~text-[40px]/[50px] xl:text-[62px] uppercase font-light text-white/70 leading-none text-center"}," без границ и ограничений ")],-1),Z=[Q,X,Y],tt=m({__name:"FirstScreen",setup(e){const{$gsap:i}=h();return w(()=>{i.to("#first-screen-title",{opacity:1,duration:.5,y:50,delay:.2}),i.to("#first-screen-subtitle",{opacity:1,duration:.5,y:-50,delay:.6})}),(s,c)=>(p(),x("section",J,Z))}}),et={class:"py-16 lg:pb-0 lg:pt-24 scroll-mt-16 bg-foreground text-black",id:"cellriver"},lt={class:"container grid xl:grid-cols-2 justify-between"},st=C('<div id="second-screen-content" class="relative xl:pl-16 opacity-0 flex flex-col gap-6 -right-[200px]"><h2 class="~text-[32px]/[50px] font-extralight leading-[1.1]"> Проточный цитометр <span class="text-primary">CELLRIVER</span></h2><p class="text-[18px]"> Первый российский проточный цитометр для широкого круга научных исследований, скрининговых исследований и фармацевтических разработок*. </p><p class="text-[30px] font-light leading-[35px] text-primary"> Создан с учётом актуальных требований и мировых стандартов отрасли. </p><p class="text-[18px]"> *Модель, разработанная для клинического использования, находится в процессе регистрации. </p></div>',1),ot=m({__name:"SecondScreen",setup(e){const{$gsap:i}=h();return w(()=>{const s=i.timeline({scrollTrigger:{trigger:"#cellriver",start:"top 70%",toggleActions:"play none none none"}});s.to("#second-screen-img",{opacity:1,left:0,duration:1}),s.to("#second-screen-content",{opacity:1,right:0,duration:1},"<")}),(s,c)=>{const o=$;return p(),x("section",et,[t("div",lt,[t("div",null,[l(o,{id:"second-screen-img",class:"relative w-full flex justify-center opacity-0 -left-[200px]",format:"webp",alt:"Проточный цитометр CELLRIVER",title:"Проточный цитометр CELLRIVER",src:"/img/item-photo-1.webp"})]),st])])}}}),it={id:"third-screen",class:"py-16 lg:py-24 text-white"},at={class:"container"},ct={class:"grid grid-cols-2 lg:grid-cols-3 gap-y-8 lg:gap-y-16 gap-x-16 lg:gap-x-24"},nt={class:"relative opacity-0 third-section-item top-[100px] flex flex-col gap-4 ~text-[16px]/[20px]"},rt=t("p",null,"Произведено в России",-1),pt={class:"relative opacity-0 third-section-item top-[100px] flex flex-col gap-4 ~text-[16px]/[20px]"},xt=t("p",null,"Тщательный контроль каждого элемента в системе",-1),dt={class:"relative opacity-0 third-section-item top-[100px] flex flex-col gap-4 ~text-[16px]/[20px]"},gt=t("p",null,"Короткие сроки поставки",-1),ut={class:"relative opacity-0 third-section-item top-[100px] flex flex-col gap-4 ~text-[16px]/[20px]"},_t=t("p",null,"Программное обеспечение на русском языке",-1),ft={class:"relative opacity-0 third-section-item top-[100px] flex flex-col gap-4 ~text-[16px]/[20px]"},ht=t("p",null,"Расширенная программа гарантийного обслуживания",-1),mt={class:"relative opacity-0 third-section-item top-[100px] flex flex-col gap-4 ~text-[16px]/[20px]"},vt=t("p",null,"Наличие склада запчастей в РФ",-1),yt=m({__name:"ThirdScreen",setup(e){const{$gsap:i}=h();return w(()=>{i.timeline({scrollTrigger:{trigger:"#third-screen",start:"top 70%",toggleActions:"play none none none"}}).to(".third-section-item",{duration:.5,y:-100,opacity:1,stagger:.2,delay:.2})}),(s,c)=>{const o=$;return p(),x("section",it,[t("div",at,[t("ul",ct,[t("li",nt,[l(o,{width:"72",class:"w-[72px] h-[80px]",src:"/icons/service-icon-1.svg"}),rt]),t("li",pt,[l(o,{width:"72",class:"w-[72px] h-[80px]",src:"/icons/service-icon-2.svg"}),xt]),t("li",dt,[l(o,{width:"72",class:"w-[72px] h-[80px]",src:"/icons/service-icon-3.svg"}),gt]),t("li",ut,[l(o,{width:"72",class:"w-[72px] h-[80px]",src:"/icons/service-icon-4.svg"}),_t]),t("li",ft,[l(o,{width:"72",class:"w-[72px] h-[80px]",src:"/icons/service-icon-5.svg"}),ht]),t("li",mt,[l(o,{width:"72",class:"w-[72px] h-[80px]",src:"/icons/service-icon-6.svg"}),vt])])])])}}}),bt={id:"fourth-screen",class:"bg-foreground text-black py-16"},wt={class:"black container grid grid-cols-1 xl:grid-cols-2 gap-28 xl:gap-8 justify-between"},$t={class:"text-wrap grid gap-12 relative xl:top-0 xl:left-0 xl:right-0 xl:bottom-0 w-full xl:h-[80vh]"},kt=t("div",{class:"panel-text bg-foreground xl:absolute xl:top-0 xl:left-0 xl:right-0 xl:bottom-0 xl:w-full xl:h-full xl:opacity-20 xl:translate-y-[80%] z-10"},[t("h2",{class:"~text-[40px]/[48px] leading-[1.1] xl:text-[48px] font-extralight mb-8"},[t("span",{class:"text-primary"},"Современное и надежное"),I(" конструктивное решение ")]),t("p",{class:"text-[20px]"},"Конструкция прибора соответствует всем самым современным тенденциям и стандартам и ориентирована на максимальную гибкость в решении различных исследовательских и рутинных задач")],-1),Rt={class:"panel-text bg-foreground xl:absolute xl:top-0 xl:left-0 xl:right-0 xl:bottom-0 xl:w-full xl:h-full xl:opacity-0 xl:translate-y-full z-10"},Et=t("h2",{class:"~text-[40px]/[48px] leading-[1.1] xl:text-[48px] font-extralight mb-8"},[I(" Доступные конфигурации проточного цитометра "),t("span",{class:"text-primary"},"CELLRIVER")],-1),St={class:"flex flex-col gap-4"},Ct={class:"flex gap-4 items-center"},Lt=t("p",null,"2 лазера, 6 флюоресцентных каналов детекции",-1),It={class:"flex gap-4 items-center"},jt=t("p",null,"3 лазера, 14 флюоресцентных каналов детекции",-1),zt=C('<div class="panel-text bg-foreground xl:absolute xl:top-0 xl:left-0 xl:right-0 xl:bottom-0 xl:w-full xl:h-full xl:opacity-0 xl:translate-y-full z-10 flex flex-col xl:flex-row gap-8"><div class="basis-1/2"><h2 class="~text-[18px]/[20px] leading-[1.1] mb-8 text-primary"> Лавинные фотодиоды в качестве фотодетекторов </h2><ul class="list-disc pl-4 marker:text-primary"><li>максимально высокая чувствительность</li><li>низкий уровень электронного шума</li><li>напряжение на детекторах фиксировано</li><li>нет необходимости настраивать специфическое для образцов различных типов напряжение</li><li>абсолютная линейность в широком диапазоне</li><li>предсказуемая флюоресцентная компенсация независимо от расположения популяции</li></ul></div><div class="basis-1/2"><h2 class="~text-[18px]/[20px] leading-[1.1] mb-8 text-primary"> Шприцевой насос, управляющий подачей образца </h2><ul class="list-disc pl-4 marker:text-primary"><li>низкий уровень шума</li><li>плавная подача образца</li><li>волюметрический анализ абсолютных концентраций без использования дополнительных референсных частиц </li></ul></div></div><div class="panel-text bg-foreground xl:absolute xl:top-0 xl:left-0 xl:right-0 xl:bottom-0 xl:w-full xl:h-full xl:opacity-0 xl:translate-y-full z-10 flex flex-col xl:flex-row gap-8"><div class="basis-1/2"><h2 class="~text-[18px]/[20px] leading-[1.1] mb-8 text-primary"> Твердотельные лазеры </h2><ul class="list-disc pl-4 marker:text-primary"><li>488 нм, 638 нм, 405 нм</li><li>оптимизированной мощности, позволяющие поддерживать работу с большинством доступных флюорохромов и флюоресцентных белков </li></ul></div><div class="basis-1/2"><h2 class="~text-[18px]/[20px] leading-[1.1] mb-8 text-primary"> Широкий выбор вариантов загрузки образца </h2><ul class="list-disc pl-4 marker:text-primary"><li>Отдельные пробирки объемом 5, 2 и 1,5 мл</li><li>Загрузка пробирок группой до 40 единиц</li></ul></div></div>',2),Ft={class:"flex flex-col gap-8"},Vt={class:"p-wrap relative overflow-hidden top-0 h-[50vh] xl:h-[70vh]"},At={class:"flex md:flex-row items-center gap-4 justify-start"},Nt=t("p",null,"Техническая спецификация",-1),Bt=m({__name:"FourthScreen",setup(e){function i(){W({description:"PDF успешно скачан!",variant:"success"})}const{$gsap:s,$ScrollTrigger:c}=h(),{$viewport:o}=h();return A(o.breakpoint,(n,a)=>{console.log("Breakpoint updated:",a,"->",n)}),w(()=>{var n,a,r;if(((n=o.breakpoint.dep)==null?void 0:n.computed.value)==="desktop"||((a=o.breakpoint.dep)==null?void 0:a.computed.value)==="desktopMedium"||((r=o.breakpoint.dep)==null?void 0:r.computed.value)==="desktopWide"){s.set(".panel",{zIndex:(d,u,v)=>v.length-d});const _=s.utils.toArray(".panel:not(.purple)");_.forEach((d,u)=>{s.timeline({scrollTrigger:{trigger:".black",start:()=>"top -"+window.innerHeight*(u+.5),end:()=>"+="+window.innerHeight,scrub:!0,toggleActions:"play none reverse none",invalidateOnRefresh:!0}}).to(d,{height:0})}),s.set(".panel-text",{zIndex:(d,u,v)=>v.length-d}),s.utils.toArray(".panel-text").forEach((d,u)=>{s.timeline({scrollTrigger:{trigger:".black",start:()=>"top -"+window.innerHeight*u,end:()=>"+="+window.innerHeight,scrub:!0,toggleActions:"play none reverse none",invalidateOnRefresh:!0}}).to(d,{duration:.33,opacity:1,y:"30%"}).to(d,{duration:.33,opacity:0,y:"0%"},.66)}),c.create({trigger:".black",scrub:!0,pin:!0,start:()=>"top 130",end:()=>"+="+(_.length+1)*window.innerHeight,invalidateOnRefresh:!0})}}),(n,a)=>{const r=$,_=K;return p(),x("section",bt,[t("div",wt,[t("div",$t,[kt,t("div",Rt,[Et,t("ul",St,[t("li",Ct,[l(r,{class:"object-contain",width:"42",height:"42",src:"/icons/check.svg"}),Lt]),t("li",It,[l(r,{class:"object-contain",width:"42",height:"42",src:"/icons/check.svg"}),jt])])]),zt]),t("div",Ft,[t("div",Vt,[l(r,{format:"webp",class:"panel absolute xl:top-0 left-0 w-full h-full object-cover",alt:"Проточный цитометр CELLRIVER",title:"Проточный цитометр CELLRIVER",src:"/img/item-photo-2.webp"}),l(r,{format:"webp",class:"panel absolute xl:top-0 left-0 w-full h-full z-10 object-cover",alt:"Проточный цитометр CELLRIVER",title:"Проточный цитометр CELLRIVER",src:"/img/item-photo-6.webp"}),l(r,{format:"webp",class:"panel absolute xl:top-0 left-0 w-full h-full object-cover",alt:"Проточный цитометр CELLRIVER",title:"Проточный цитометр CELLRIVER",src:"/img/item-photo-7.webp"}),l(r,{format:"webp",class:"panel purple absolute xl:top-0 left-0 w-full h-full z-10 object-cover",alt:"Проточный цитометр CELLRIVER",title:"Проточный цитометр CELLRIVER",src:"/img/item-photo-8.webp"})]),t("div",At,[Nt,t("a",{download:"",onClick:i,target:"_blank",href:"/pdf/Cellriver_Spezificazia_2024.pdf"},[l(_,{variant:"black"},{default:q(()=>[I(" Скачать PDF ")]),_:1})])])])])])}}}),Ot={},Tt={class:"py-16 lg:py-24 bg-foreground text-white relative"},Ht=t("div",{class:"container"},[t("h2",{class:"relative leading-[1] font-bold drop-shadow-xl opacity-80 uppercase ~text-[38px]/[50px] md:~text-[70px]/[80px] lg:~text-[80px]/[90px] xl:~text-[100px]/[140px] 2xl:~text-[140px]/[150px]"}," Производится в России ")],-1);function Mt(e,i){const s=$;return p(),x("section",Tt,[l(s,{format:"webp",class:"absolute top-0 left-0 w-full h-full object-cover z-0",alt:"Проточный цитометр CELLRIVER",title:"Проточный цитометр CELLRIVER",src:"/img/item-photo-5.webp"}),Ht])}const qt=j(Ot,[["render",Mt]]),Wt={class:"py-16 lg:py-24 bg-foreground"},Pt={class:"container relative"},Dt=t("source",{src:"https://labvision.me/video/labvision_postproduction.mp4",type:"video/mp4"},null,-1),Kt=[Dt],Ut=m({__name:"VideoScreen",setup(e){const i=b(!0),s=b(null);function c(o){var n,a;i.value?(a=s.value)==null||a.pause():(n=s.value)==null||n.play(),i.value=!i.value}return(o,n)=>(p(),x("section",Wt,[t("div",Pt,[t("video",{ref_key:"video",ref:s,controls:"",playsinline:"",onClick:n[0]||(n[0]=a=>c()),poster:N},Kt,512)])]))}}),Gt={id:"fifth-screen",class:"py-16 lg:py-24 text-white"},Jt={class:"container relative grid lg:grid-cols-3 lg:grid-rows-2 gap-8 lg:gap-16"},Qt=C('<div class="fifth-section-item relative opacity-0 top-[100px] flex flex-col gap-4 lg:gap-8"><h2 class="text-[36px] leading-[1.1] lg:text-[40px] font-extralight"><span class="text-primary">Автоматическая</span> подача образцов </h2><p>Автоматизация процесса подачи образцов освобождает исследователя от выполнения рутинных процедур загрузки образцов при выполнении серийных исследований, а также снижает контакт с потенциально инфицированными образцами</p><div class="flex-col flex gap-2"><p class="text-primary">Пробы могут быть загружены в:</p><ul class="list-disc pl-4 marker:text-primary"><li>Пробирки малых объемов от 1,5 мл</li><li>96-лучные планшеты</li><li>Стандартные цитометрические пробирки</li></ul></div></div><div class="fifth-section-item relative opacity-0 top-[100px] flex flex-col gap-4 lg:gap-8"><h2 class="text-[36px] leading-[1.1] lg:text-[40px] font-extralight"><span class="text-primary">Компактный</span> размер корпуса </h2><p>Проточный цитометр CELLRIVER благодаря компактному размеру может быть размещен в помещении любого размера или даже в ламинарно-потоковом шкафу.</p><p>Классический и лаконичный дизайн прибора легко интегрируется в уже существующую лабораторную инфраструктуру, обеспечивая высокий уровень удобства и эргономики.</p></div><div class="hidden lg:flex lg:row-span-2"></div><div class="fifth-section-item relative opacity-0 top-[100px] flex flex-col gap-4 lg:gap-8"><h2 class="text-[36px] leading-[1.1] lg:text-[40px] font-extralight"><span class="text-primary">Низкий уровень</span> шума работы прибора </h2><p>Низкий уровень шума во время работы проточного цитометра повышает комфорт работы в лаборатории, особенно при размещении нескольких приборов в одном помещении.</p></div><div class="fifth-section-item relative opacity-0 top-[100px] flex flex-col gap-4 lg:gap-8"><h2 class="text-[36px] leading-[1.1] lg:text-[40px] font-extralight"><span class="text-primary">Волюметрический анализ</span> концентраций клеток </h2><p>Технология волюметрического анализа концентраций клеток позволяет получать результаты в абсолютных значений без использования дополнительных частиц.</p><p>Это значительно упрощает подготовку образцов и снижает себестоимость исследования.</p></div>',5),Xt=m({__name:"FifthScreen",setup(e){const{$gsap:i}=h();return w(()=>{i.timeline({scrollTrigger:{trigger:"#fifth-screen",start:"top 70%",toggleActions:"play none none none"}}).to(".fifth-section-item",{duration:.5,y:-100,opacity:1,stagger:.2,delay:.2})}),(s,c)=>{const o=$;return p(),x("section",Gt,[t("div",Jt,[Qt,l(o,{format:"webp",class:"m-auto xl:w-1/2 xl:absolute xl:left-[70%] xl:top-1/2 xl:translate-y-[-50%]",alt:"Проточный цитометр CELLRIVER",title:"Проточный цитометр CELLRIVER",src:"/img/item-photo-3.webp"})])])}}}),Yt={id:"areas-screen",class:"py-16 lg:pt-24 bg-foreground text-black"},Zt={class:"container"},te=t("h2",{class:"areas-screen-title relative opacity-0 top-[50px] lg:text-center mb-12 ~text-[40px]/[50px] leading-[1.1] font-extralight"}," Области применения ",-1),ee={class:"grid lg:grid-cols-3 gap-8"},le=C('<div class="xl:pr-12 xl:order-1 xl:pt-24"><ul class="flex flex-col gap-8 xl:text-right"><li class="areas-screen-item-left opacity-0 relative -left-[100px] flex gap-4"><p class="flex-auto order-2 xl:order-1">Иммунофенотипирование (в том числе иммунный статус)</p><div class="xl:order-2 relative bottom-[8px] bg-[url(&#39;/icons/check.svg&#39;)] bg-contain rounded-full w-[42px] h-[42px] border border-primary flex items-center flex-shrink-0 justify-center"></div></li><li class="areas-screen-item-left opacity-0 relative -left-[100px] flex gap-4"><p class="flex-auto order-2 xl:order-1">Разработка клеточных продуктов</p><div class="relative xl:order-2 bottom-[8px] bg-[url(&#39;/icons/check.svg&#39;)] bg-contain rounded-full w-[42px] h-[42px] border border-primary flex items-center flex-shrink-0 justify-center"></div></li><li class="areas-screen-item-left opacity-0 relative -left-[100px] flex gap-4"><p class="flex-auto order-2 xl:order-1">Фундаментальные исследования в иммунологии</p><div class="relative xl:order-2 bottom-[8px] bg-[url(&#39;/icons/check.svg&#39;)] bg-contain rounded-full w-[42px] h-[42px] border border-primary flex items-center flex-shrink-0 justify-center"></div></li></ul></div>',1),se={class:"order-3 xl:order-2 flex justify-center"},oe=C('<div class="xl:pl-12 xl:order-3 xl:pt-24"><ul class="flex flex-col gap-8"><li class="areas-screen-item-right opacity-0 relative -right-[100px] flex gap-4"><div class="relative bottom-[8px] bg-[url(&#39;/icons/check.svg&#39;)] bg-contain rounded-full w-[42px] h-[42px] border border-primary flex items-center flex-shrink-0 justify-center"></div><p class="flex-auto">Исследование опухолевых клеток</p></li><li class="areas-screen-item-right opacity-0 relative -right-[100px] flex gap-4"><div class="relative bottom-[8px] bg-[url(&#39;/icons/check.svg&#39;)] bg-contain rounded-full w-[40px] h-[40px] border border-primary flex items-center flex-shrink-0 justify-center"></div><p class="flex-auto">Разработка и тестирование CAR‑T продуктов</p></li></ul></div>',1),ie=m({__name:"AreasScreen",setup(e){const{$gsap:i}=h();return w(()=>{const s=i.timeline({scrollTrigger:{trigger:"#areas-screen",start:"top 70%",toggleActions:"play none none none"}});s.to(".areas-screen-item-left",{duration:.5,x:100,opacity:1,stagger:.2,delay:.2}),s.to(".areas-screen-item-right",{duration:.5,x:-100,opacity:1,stagger:.2},"<"),s.to(".areas-screen-img",{duration:.5,y:-100,opacity:1},"<"),s.to(".areas-screen-title",{y:-50,delay:-.3,opacity:1,duration:.5})}),(s,c)=>{const o=$;return p(),x("section",Yt,[t("div",Zt,[te,t("div",ee,[le,t("div",se,[l(o,{format:"webp",class:"areas-screen-img w-full opacity-0 relative top-[100px]",alt:"Проточный цитометр CELLRIVER",title:"Проточный цитометр CELLRIVER",src:"/img/item-photo-4.webp"})]),oe])])])}}}),ae={id:"flowexpert",class:"py-16 xl:pt-24 xl:pb-0 scroll-mt-16 text-white"},ce={class:"container soft-black grid grid-cols-1 xl:grid-cols-2 gap-8"},ne=t("h2",{class:"~text-[32px]/[50px] xl:col-span-2 font-extralight leading-[1.1]"},[I(" Программное обеспечение "),t("span",{class:"text-primary"},"FlowExpert")],-1),re={class:"flex relative overflow-hidden xl:top-[60px] h-[40vh] xl:h-[60vh] flex-col gap-8"},pe={class:"soft-text-wrap relative flex flex-col gap-12 xl:top-0 left-0 right-0 bottom-0 w-full xl:h-[80vh] xl:pl-8"},xe={class:"soft-panel-text xl:absolute xl:top-0 xl:left-0 xl:right-0 xl:bottom-0 w-full xl:h-full xl:opacity-20 xl:translate-y-[80%] z-10 flex flex-col gap-4"},de=t("h2",{class:"~text-[28px]/[40px] leading-[1.1] font-extralight"}," Возможность использования готовых протоколов сбора и анализа данных ",-1),ge=t("p",null,"для рутинных лабораторных исследований иммунного статуса:",-1),ue={class:"flex flex-col gap-4"},_e={class:"flex gap-4 items-center"},fe=t("p",null,"6-цветный протокол для подсчета Т-,B-,NK- лимфоцитов",-1),he={class:"flex gap-4 items-center"},me=t("p",null,"3 лазера, 14 флюоресцентных каналов детекции",-1),ve=t("div",{class:"soft-panel-text xl:absolute xl:top-0 xl:left-0 xl:right-0 xl:bottom-0 w-full xl:h-full xl:opacity-0 xl:translate-y-full z-10 flex flex-col gap-4"},[t("h2",{class:"~text-[28px]/[40px] leading-[1.1] font-extralight"}," Открытое программное обеспечение "),t("p",null,"позволяющее настроить протокол под любые совместимые реагенты")],-1),ye=t("div",{class:"soft-panel-text xl:absolute xl:top-0 xl:left-0 xl:right-0 xl:bottom-0 w-full xl:h-full xl:opacity-0 xl:translate-y-full z-10 flex flex-col gap-4"},[t("h2",{class:"~text-[28px]/[40px] leading-[1.1] font-extralight"}," Первое программное обеспечение для проточного цитометра полностью на русском языке "),t("p",null," обеспечивает удобство и доступность для пользователей. Оно предлагает интуитивно понятный интерфейс, что упрощает обучение и работу с системой. Специалисты могут сосредоточиться на проведении исследований, не отвлекаясь на языковые барьеры. ")],-1),be=m({__name:"SoftScreen",setup(e){const{$gsap:i,$ScrollTrigger:s}=h(),{$viewport:c}=h();return A(c.breakpoint,(o,n)=>{console.log("Breakpoint updated:",n,"->",o)}),w(()=>{var o,n,a;if(((o=c.breakpoint.dep)==null?void 0:o.computed.value)==="desktop"||((n=c.breakpoint.dep)==null?void 0:n.computed.value)==="desktopMedium"||((a=c.breakpoint.dep)==null?void 0:a.computed.value)==="desktopWide"){const r=i.utils.toArray(".soft-panel:not(.soft-purple)");r.forEach((g,d)=>{i.timeline({scrollTrigger:{trigger:".soft-black",start:()=>"top -"+window.innerHeight*(d+.5),end:()=>"+="+window.innerHeight,scrub:!0,toggleActions:"play none reverse none",invalidateOnRefresh:!0}}).to(g,{height:0})}),i.set(".soft-panel-text",{zIndex:(g,d,u)=>u.length-g}),i.utils.toArray(".soft-panel-text").forEach((g,d)=>{i.timeline({scrollTrigger:{trigger:".soft-black",start:()=>"top -"+window.innerHeight*d,end:()=>"+="+window.innerHeight,scrub:!0,toggleActions:"play none reverse none",invalidateOnRefresh:!0}}).to(g,{duration:.33,opacity:1,y:"20%"}).to(g,{duration:.33,opacity:0,y:"0%"},.66)}),s.create({trigger:".soft-black",scrub:!0,pin:!0,start:()=>"top 130",end:()=>"+="+(r.length+1)*window.innerHeight,invalidateOnRefresh:!0})}}),(o,n)=>{const a=$;return p(),x("section",ae,[t("div",ce,[ne,t("div",re,[l(a,{format:"webp",class:"soft-panel z-0 opacity-0 absolute xl:top-0 left-0 w-full h-full m-auto object-contain",alt:"Программное обеспечение FlowExpert",title:"Программное обеспечение FlowExpert",src:"/img/monitor.webp"}),l(a,{format:"webp",class:"soft-panel z-0 opacity-0 absolute xl:top-0 left-0 w-full h-full m-auto object-contain",alt:"Программное обеспечение FlowExpert",title:"Программное обеспечение FlowExpert",src:"/img/monitor.webp"}),l(a,{format:"webp",class:"soft-panel !z-10 soft-purple absolute xl:top-0 left-0 w-full h-full m-auto object-contain",alt:"Программное обеспечение FlowExpert",title:"Программное обеспечение FlowExpert",src:"/img/monitor.webp"})]),t("div",pe,[t("div",xe,[de,ge,t("ul",ue,[t("li",_e,[l(a,{class:"object-contain",width:"42",height:"42",src:"/icons/check.svg"}),fe]),t("li",he,[l(a,{class:"object-contain",width:"42",height:"42",src:"/icons/check.svg"}),me])])]),ve,ye])])])}}}),we={id:"service",class:"py-16 lg:py-24 scroll-mt-16 bg-foreground text-black"},$e={class:"container flex flex-col gap-12"},ke=t("h2",{class:"text-[50px] leading-[1.1] font-extralight"},"Технический сервис",-1),Re={class:"grid grid-cols-2 lg:grid-cols-3 gap-y-8 lg:gap-y-16 gap-x-8 lg:gap-x-16"},Ee={class:"service-section-item relative top-[100px] opacity-0 flex flex-col gap-4 text-[20px]"},Se=t("h3",{class:"text-primary text-[18px]"},"Оперативная техническая поддержка",-1),Ce=t("p",{class:"~text-[14px]/[16px]"},"оборудование и запчасти для проточных цитометров  в наличии на складе в Санкт‑Петербурге",-1),Le={class:"service-section-item relative top-[100px] opacity-0 flex flex-col gap-4 text-[20px]"},Ie=t("h3",{class:"text-primary text-[18px]"},"Быстрая реакция на запросы",-1),je=t("p",{class:"~text-[14px]/[16px]"},"наличие квалифицированной команды технической поддержки позволяет быстро реагировать на возможные проблемы с оборудованием, что критично для лабораторий, где время может играть решающую роль.",-1),ze={class:"service-section-item relative top-[100px] opacity-0 flex flex-col gap-4 text-[20px]"},Fe=t("h3",{class:"text-primary text-[18px]"},"Консультации и обучение",-1),Ve=t("p",{class:"~text-[14px]/[16px]"},"техническая поддержка не только решает проблемы, но и предоставляет консультации по правильной эксплуатации и обслуживанию проточных цитометров, что помогает предотвратить поломки.",-1),Ae={class:"service-section-item relative top-[100px] opacity-0 flex flex-col gap-4 text-[20px]"},Ne=t("h3",{class:"text-primary text-[18px]"},"Профилактика неисправностей",-1),Be=t("p",{class:"~text-[14px]/[16px]"},"регулярные проверки и профилактическое обслуживание, проводимые техническими специалистами, помогают выявлять потенциальные проблемы до того, как они приведут к серьезным сбоям.",-1),Oe={class:"service-section-item relative top-[100px] opacity-0 flex flex-col gap-4 text-[20px]"},Te=t("h3",{class:"text-primary text-[18px]"},"Снижение затрат для лаборатории",-1),He=t("p",{class:"~text-[14px]/[16px]"},"запас комплектующих на складе компании-производителя в России помогает избежать дополнительных расходов на экстренные заказы и доставку из-за рубежа.",-1),Me={class:"service-section-item relative top-[100px] opacity-0 flex flex-col gap-4 text-[20px]"},qe=t("h3",{class:"text-primary text-[18px]"},"Расширенная программа гарантийного обслуживания",-1),We=m({__name:"ServiceScreen",setup(e){const{$gsap:i}=h();return w(()=>{i.timeline({scrollTrigger:{trigger:"#service",start:"top 70%",toggleActions:"play none none none"}}).to(".service-section-item",{duration:.5,y:-100,opacity:1,stagger:.2,delay:.2})}),(s,c)=>{const o=$;return p(),x("section",we,[t("div",$e,[ke,t("ul",Re,[t("li",Ee,[l(o,{width:"72",class:"w-[72px] h-[80px]",src:"/icons/service-icon-7.svg"}),Se,Ce]),t("li",Le,[l(o,{width:"72",class:"w-[72px] h-[80px]",src:"/icons/service-icon-9.svg"}),Ie,je]),t("li",ze,[l(o,{width:"72",class:"w-[72px] h-[80px]",src:"/icons/service-icon-10.svg"}),Fe,Ve]),t("li",Ae,[l(o,{width:"72",class:"w-[72px] h-[80px]",src:"/icons/service-icon-11.svg"}),Ne,Be]),t("li",Oe,[l(o,{width:"72",class:"w-[72px] h-[80px]",src:"/icons/service-icon-12.svg"}),Te,He]),t("li",Me,[l(o,{width:"72",class:"w-[72px] h-[80px]",src:"/icons/service-icon-8.svg"}),qe])])])])}}}),Pe=m({__name:"Marquee",props:{style:{default:()=>()=>({})},class:{default:""},autoFill:{type:Boolean,default:!1},play:{type:Boolean,default:!0},pauseOnHover:{type:Boolean,default:!1},pauseOnClick:{type:Boolean,default:!1},direction:{default:"left"},speed:{default:50},delay:{default:0},loop:{default:0},gradient:{type:Boolean,default:!1},gradientColor:{default:"white"},gradientWidth:{default:200}},emits:["finish","cycleComplete"],setup(e,{emit:i}){const s=i,c=b(),o=b(),n=b(0),a=b(0),r=b(1),_=b(!1),g=b(),d=S(()=>e.autoFill?a.value*r.value/e.speed:a<n?n.value/e.speed:a.value/e.speed),u=S(()=>({...e.style,"--pause-on-hover":!e.play||e.pauseOnHover?"paused":"running","--pause-on-click":!e.play||e.pauseOnHover&&!e.pauseOnClick||e.pauseOnClick?"paused":"running","--width":e.direction==="up"||e.direction==="down"?"100vh":"100%","--transform":e.direction==="up"?"rotate(-90deg)":e.direction==="down"?"rotate(90deg)":"none"})),v=S(()=>({"--gradient-color":e.gradientColor,"--gradient-width":typeof e.gradientWidth=="number"?`${e.gradientWidth}px`:e.gradientWidth})),L=S(()=>({"--play":e.play?"running":"paused","--direction":e.direction==="left"?"normal":"reverse","--duration":`${d.value}s`,"--delay":`${e.delay}s`,"--iteration-count":e.loop?`${e.loop}`:"infinite","--min-width":e.autoFill?"auto":"100%"})),z=S(()=>({"--transform":e.direction==="up"?"rotate(90deg)":e.direction==="down"?"rotate(-90deg)":"none"})),B=()=>{if(o.value&&c.value){const f=c.value.getBoundingClientRect(),k=o.value.getBoundingClientRect();let y=f.width,E=k.width;(e.direction==="up"||e.direction==="down")&&(y=f.height,E=k.height),e.autoFill&&y&&E?r.value=E<y?Math.ceil(y/E):1:r.value=1,n.value=y,a.value=E}},O=f=>[...Array(Number.isFinite(f)&&f>=0?f:0)];return A([()=>e.autoFill,()=>e.direction,_,c],()=>{_.value&&(B(),o.value&&c.value&&(g.value&&g.value.disconnect(),g.value=new ResizeObserver(()=>B()),g.value.observe(c.value),g.value.observe(o.value)))}),w(()=>{_.value=!0}),(f,k)=>_.value?(p(),x("div",{key:0,ref_key:"containerRef",ref:c,class:P(["vfm-marquee-container",e.class]),style:R(u.value)},[f.gradient?(p(),x("div",{key:0,style:R(v.value),class:"vfm-overlay"},null,4)):T("",!0),t("div",{class:"vfm-marquee",style:R(L.value),onAnimationiteration:k[0]||(k[0]=y=>s("cycleComplete")),onAnimationend:k[1]||(k[1]=y=>s("finish"))},[t("div",{style:R(z.value),class:"vfm-parent",ref_key:"marqueeRef",ref:o},[F(f.$slots,"default")],4),(p(!0),x(H,null,M(O(r.value-1),y=>(p(),x("div",{style:R(z.value),class:"vfm-parent"},[F(f.$slots,"default")],4))),256))],36),t("div",{class:"vfm-marquee",style:R(L.value)},[(p(!0),x(H,null,M(O(r.value),y=>(p(),x("div",{style:R(z.value),class:"vfm-parent"},[F(f.$slots,"default")],4))),256))],4)],6)):T("",!0)}}),De={name:"NuxtMarquee",emits:["finish","cycleComplete"],props:["style","class","autoFill","play","pauseOnHover","pauseOnClick","direction","speed","delay","loop","gradient","gradientColor","gradientWidth"],setup(e,{slots:i,emit:s}){return()=>D(Pe,{...e,onCycleComplete:()=>s("cycleComplete"),onFinish:()=>s("finish")},i)}},Ke={},Ue={class:"bg-foreground"},Ge=t("p",{class:"uppercase drop-shadow-[0_0_15px_rgba(0,0,0,0.7)] text-[50px] md:text-[70px] lg:text-[80px] xl:text-[90px] font-black"}," Доступен для вашей лаборатории прямо сейчас ",-1);function Je(e,i){const s=De;return p(),x("section",Ue,[l(s,{class:"py-8 gap-24"},{default:q(()=>[Ge]),_:1})])}const Qe=j(Ke,[["render",Je]]),Xe=V("/video/video-2.mp4"),Ye={},Ze={id:"contacts",class:"relative z-0 overflow-hidden py-16 lg:py-24"},tl=t("video",{class:"hidden lg:flex absolute z-10 w-full left-0 top-0 h-full object-cover object-center",loop:"",muted:"",autoplay:"",playsinline:"",poster:N},[t("source",{src:Xe,type:"video/mp4"})],-1),el=t("div",{class:"absolute z-20 w-full left-0 top-0 h-full bg-gradient-to-r from-black from-35% to-black lg:to-black/50"},null,-1),ll={class:"container z-30 grid lg:grid-cols-2 relative"},sl={class:"flex justify-center lg:justify-start"};function ol(e,i){const s=U;return p(),x("section",Ze,[tl,el,t("div",ll,[t("div",sl,[l(s)])])])}const il=j(Ye,[["render",ol]]),al={};function cl(e,i){const s=tt,c=ot,o=yt,n=Bt,a=qt,r=Ut,_=Xt,g=ie,d=be,u=We,v=Qe,L=il;return p(),x("main",null,[l(s),l(c),l(o),l(n),l(a),l(r),l(_),l(g),l(d),l(u),l(v),l(L)])}const pl=j(al,[["render",cl]]);export{pl as default};