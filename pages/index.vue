<template>
  <main>
    <!--first screen-->
    <SectionFirstScreen/>

    <!--second screen-->
    <SectionSecondScreen/>

    <!--third screen-->
    <SectionThirdScreen/>

    <!--sticky scroll screen-->
    <SectionFourthScreen/>

    <!--made in russia screen-->
    <SectionMadeInRussiaScreen/>

    <!--video-->
    <section class="py-16 lg:py-24 bg-foreground">
      <div class="container">
        <video
          controls
          muted
          playsinline
          poster="/img/first-screen-poster.webp">
          <source
            src="https://labvision.me/video/cellriver_production.mov"
            type="video/mov">
        </video>
      </div>
    </section>

    <!--fifth screen-->
    <SectionFifthScreen/>

    <!--areas-->
    <SectionAreasScreen/>

    <!--about soft-->
    <SectionSoftScreen/>

    <!--service-->
    <SectionServiceScreen/>

    <!--marquee-->
    <SectionMarqueeScreen/>

    <!--contacts-->
    <SectionContactsScreen/>
  </main>
</template>