<template>
  <section :style="{ 'background-image': `url(${require('@/assets/video-background.jpg')})` }">
    <a name="video"></a>
    <div class="d-flex align-items-center" style="background: rgba(0,0,0,0.8); min-height: 100vh;">

      <div class="container">
        <div v-if="!showVideo">
          <div class="row">
            <div class="col-1"></div>
            <div class="col-12 col-lg-6">
              <div class="row">
                <div class="col-12">
                  <h2 class="display-4 pt-5 p-lg-0"
                      style="color: white; font-weight: lighter; text-shadow: 1px 1px #000; font-family: 'Geeza Pro', Georgia, times;">
                    What is DevSummit
                  </h2>
                  <hr
                    style="border-top: 4px solid #f1c40f; width: 120px; text-align: left; display: inline-block; margin: 0 0 20px 10px;">
                </div>
                <div class="col-10">
                  <div class="text-light">
                    <p>
                      Indonesia Developer Summit is an event specifically aimed to stakeholders of the emerging
                      technology industry in Indonesia, and in general, for the public who are the users
                      of it's services, products, and services.
                    </p>

                    <p>
                      The event is open to public, packed in a 3 days conference that consists of three major
                      topics: Artificial Intelligence, BlockChain and Open Source.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-3 col-lg-1"></div>
            <div class="col-6 col-lg-2 p-5">
              <a href="#video" @click="videoToggle" class="pb-5 mb-5 pb-lg-0 mb-lg-0">
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
  import { mapState, mapMutations } from 'vuex'

  export default {
    name: 'Video',

    computed: {
      ...mapState(['showVideo']),
    },

    methods: {
      videoToggle () {
        this.$store.commit('showVideo', !this.$store.state.showVideo)

        const html = document.querySelector('html')
        const body = document.querySelector('body')

        if (this.showVideo) {
          html.style.overflow = 'hidden'
          body.style.overflow = 'hidden'
        } else {
          html.style.overflow = 'auto'
          body.style.overflow = 'auto'
        }

      },
    },
  }
</script>

<style lang="scss" scoped>
  section {
    min-height: 100vh;
    background-position: center center;
    background-size: 1420px;
  }
</style>
