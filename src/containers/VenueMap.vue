<template>
  <section>

    <header
      :style="{
        'background-image': `url(${require('@/assets/sabuga.jpg')})`,
        'background-position': 'center center',
        'background-size': 'cover',
        'overflow': 'hidden',
        'height': '500px',
      }">
      <div class="container">
        <div class="d-flex h-100">
          <HeaderTitle>Venue</HeaderTitle>
        </div>
      </div>
    </header>

    <section class="bg-light" style="position: relative;">

      <div class="mapouter">
        <div class="gmap_canvas">
          <iframe
            width="100%"
            height="600" id="gmap_canvas"
            src="https://maps.google.com/maps?q=sabuga, bandung&t=&z=17&ie=UTF8&iwloc=&output=embed"
            frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
        </div>
      </div>

      <div
        style="position: absolute; bottom: 30px; right: 30px; padding: 20px; max-width: 500px; z-index: 1000; background: rgba(0,0,0,0.8);">
        <div class="text-light">
          <h2 style="font-weight: bold;">SABUGA CONVENTION CENTER</h2>
        </div>
        <hr style="border-top: 1px solid orange;">
        <div class="text-light">
          Jln. Taman Sari No. 73 Bandung, Indonesia
        </div>
      </div>

    </section>

    <!--<section>-->
    <!--<img src="http://www.sabugacenter.com/media/lt1.jpg" alt="" width="100%">-->
    <!--</section>-->

  </section>
</template>

<script>
  export default {
    name: 'VenueMap',

    mounted () {
      this.$store.commit('showMenu', true)
    },
  }
</script>


<style lang="scss" scoped>
  .display-3 {
    padding: 200px 0;
  }

  .mapouter {
    overflow: hidden;
    height: 600px;
    width: 100%;
  }

  .gmap_canvas {
    background: none !important;
    height: 600px;
    width: 100%;
  }
</style>
