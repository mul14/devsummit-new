<template>
  <section>
    <div class="container text-light">

      <div class="row">
        <div class="col-12 col-lg-8 mx-auto">
          <img src="/home/static/devsummit-logo.svg" alt="DevSummit logo" class="img-fluid">
        </div>
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

        <div class="h3 mt-5" style="font-weight: bolder; color: #f1c40f;">
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
            <img src="/home/static/Playstore.png" alt="" class="img-fluid" style="width: 160px;">
          </a>
        </div>
        <div class="col-6 col-md-3">
          <a href="https://itunes.apple.com/id/app/indonesia-developer-summit/id1287587345">
            <img src="/home/static/Appstore.png" alt="" class="img-fluid" style="width: 160px;">
          </a>
        </div>
      </div>

    </div>
  </section>
</template>

<script>
  export default {
    name: 'Featured',

    data () {
      return {
        ok: false,
      }
    },

    beforeRouteUpdate (to, from, next) {
      console.log('asds')
    },

    mounted () {

      setTimeout(() => {
        this.ok = true
      }, 200)

//      Particles.init({
//        selector: '.background',
//        maxParticles: 500,
//        speed: 0.1,
//        color: '#232741',
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
    background-image: linear-gradient(#000 40%, #232741 100%);
    padding: 100px 0;
  }
</style>
