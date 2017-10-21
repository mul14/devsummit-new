<template>
  <section id="video"
           style="height: 100vh; background: url('https://images.unsplash.com/photo-1477281765962-ef34e8bb0967?w=2464') center bottom; background-size: 1290px;">
    <div class="d-flex align-items-center" style="background: rgba(0,0,0,0.8); height: 100vh;">

      <div class="container">
        <div v-if="!showVideo">
          <div class="row">
            <div class="col-1"></div>
            <div class="col-12 col-lg-6">
              <div class="row">
                <div class="col-12">
                  <h2 class="display-4"
                      style="color: white; font-weight: lighter; text-shadow: 1px 1px #000; font-family: 'Geeza Pro', Georgia, times;">
                    What is DevSummit
                  </h2>
                  <hr
                    style="border-top: 4px solid #f1c40f; width: 120px; text-align: left; display: inline-block; margin: 0 0 20px 10px;">
                </div>
                <div class="col-10">
                  <div class="text-light">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus accusantium adipisci alias architecto at atque cumque, dolorem eligendi ex explicabo inventore magni minus molestiae numquam officia provident sed totam vitae?
                  </div>
                </div>
              </div>
            </div>
            <div class="col-3 col-lg-1"></div>
            <div class="col-6 col-lg-2 p-5">
              <a href="javascript:void(0)" @click="videoToggle">
                <img src="http://noem.at/images/upcycling/play.png" alt="" class="img-fluid">
              </a>
            </div>
          </div>
        </div>

        <div v-if="showVideo">

          <div class="row">
            <div class="col-11">
              <div class="lead text-right py-3">
                <a class="text-light" href="javascript:void(0)" @click="videoToggle" style="text-decoration: none;">
                  <span class="h4">&times;</span>
                  CLOSE
                </a>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-1">
            </div>
            <div class="col-10">
              <div class="embed-responsive embed-responsive-16by9">
                <iframe width="100%" height="100" src="https://www.youtube.com/embed/cmdRxmFEbg8?autoplay=1"
                        frameborder="0"
                        allowfullscreen class="embed-responsive"></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </section>
</template>

<script>
  export default {
    name: 'Video',

    data () {
      return {
        showVideo: false,
      }
    },

    methods: {
      videoToggle () {
        this.showVideo = !this.showVideo
      },
    },
  }
</script>

<style lang="scss" scoped>
</style>
