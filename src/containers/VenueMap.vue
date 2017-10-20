<template>
  <section>

    <header
      style="
        background-image: url('/home/static/sabuga.jpg');
        background-size: cover;
        background-position: center left;
      ">
      <div class="container">
        <div class="d-flex h-100">
          <div class="display-3 text-light">
            Venue
          </div>
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

  </section>
</template>

<style lang="scss" scoped>
  .display-3 {
    padding: 200px 0;
    text-shadow: 1px 1px #666;
    text-transform: uppercase;
    font-weight: bold;
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
