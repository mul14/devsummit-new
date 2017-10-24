<template>
  <section style="position: relative;">

    <!--<canvas id="particle1" class="particle"></canvas>-->
    <!--<canvas id="particle2" class="particle"></canvas>-->
    <!--<canvas id="particle3" class="particle"></canvas>-->
    <!--<canvas id="particle4" class="particle"></canvas>-->

    <div class="d-flex align-items-center">
      <div class="container text-light">

        <div class="row">
          <div class="col-12 col-lg-5 mx-auto">
            <img :src="require('@/assets/devsummit-logo.svg')" alt="DevSummit logo" class="img-fluid">
          </div>
        </div>
        <div class="row">
          <div class="mt-4 text-center mx-auto">
            <div class="lead text-uppercase px-4 py-1"
                 style="border: 0 solid white; border-radius: 4px; background: #63798a; color: white;">
              <span>Conference</span>
              <span class="px-lg-3">&CenterDot;</span>
              <span>Expo</span>
              <span class="px-lg-3">&CenterDot;</span>
              <span>Hackathon</span>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="text-center mx-auto">
            <div class="px-4 py-1" style="">
              <div class="h1 text-light py-4 d-block" style="font-weight: lighter;">
                <span class="d-block d-lg-inline-block">BANDUNG</span>
                <span class="d-none d-lg-inline-block">&CenterDot;</span>
                <span class="d-block d-lg-inline-block">21 - 23 NOV 2017</span>
              </div>
            </div>
          </div>
        </div>

        <div class="text-center">

          <div class="h3" style="font-weight: bolder; color: #f1c40f;">
            <span>GET TICKETS!</span>
          </div>

          <div class="mb-2">
            <small>
              We want give you the best and memorable experience through our app.
            </small>
          </div>
        </div>

        <div class="row justify-content-center">
          <div class="col-6 col-md-3 text-md-right">
            <a href="https://play.google.com/store/apps/details?id=io.devsummit.app.android">
              <img :src="require('@/assets/Playstore.png')" alt="" class="img-fluid" style="width: 200px;">
            </a>
          </div>
          <div class="col-6 col-md-3">
            <a href="https://itunes.apple.com/id/app/indonesia-developer-summit/id1287587345">
              <img :src="require('@/assets/Appstore.png')" alt="" class="img-fluid" style="width: 200px;">
            </a>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script>
//  import Particles from 'particlesjs'
//  import particlesJS from 'particles.js/particles'

  export default {
    name: 'Featured',

    beforeRouteUpdate (to, from, next) {

    },

    mounted () {
//      Particles.init({
//        selector: '#particle1',
//        maxParticles: 150,
//        sizeVariations: 1,
//        speed: 0.2,
//        color: '#333333',
//        connectParticles: false,
//      })
//
//      Particles.init({
//        selector: '#particle2',
//        maxParticles: 500,
//        speed: 0.09,
//        color: '#f0f0f0',
//        connectParticles: false,
//      })
//
//      Particles.init({
//        selector: '#particle3',
//        maxParticles: 150,
//        speed: 0.09,
//        color: '#232741',
//        connectParticles: false,
//      })
//
//      Particles.init({
//        selector: '#particle3',
//        maxParticles: 300,
//        speed: 0.01,
//        color: '#5b90dc',
//        connectParticles: false,
//      })
    },
  }
</script>

<style lang="scss" scoped>
  $purple: #232741;

  section {
    z-index: 10;
    background: $purple;
    background-image: linear-gradient(#232741 60%, #000 100%);
    padding: 100px 0;
    height: 100vh;
  }

  .particle {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    z-index: 0;
  }
</style>
