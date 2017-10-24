<template>
  <div>
    <Featured/>

    <div ref="content" class="molecule">
      <TheVideo/>
      <Profile/>
    </div>

    <WhyAttend/>
    <Supporters/>
  </div>
</template>

<script>
  export default {
    name: 'Home',

    components: {
      Featured: () => import('./Featured'),
      TheVideo: () => import('./Video'),
      Topics: () => import('./Topics'),
      Speakers: () => import('./Speakers'),
      WhyAttend: () => import('./WhyAttend'),
      Supporters: () => import('./Supporters'),
      Profile: () => import('./Profile'),
    },

    mounted () {
      window.addEventListener('scroll', (ev) => {
        if (window.scrollY > this.$refs.content.offsetTop) {
          this.$store.commit('showMenu', true)
        } else {
          this.$store.commit('showMenu', false)
        }
      })
    },
  }
</script>

<style lang="scss" scoped>
  canvas {
    display: block;
    vertical-align: bottom;
  }

  .molecule {
    background: #fcfcfc;
    background-size: cover;
  }

  /* ---- particles.js container ---- */

  #particles-js {
    z-index: -9999;
    position: fixed;
    width: 100%;
    height: 100%; // background-color: $purple;
    //background-image: url('');
    background-repeat: no-repeat;
    background-size: 20%;
    background-position: 50% 50%;
  }

  /* ---- END particles.js container ---- */
</style>
