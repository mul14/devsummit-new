<template>
  <div>
    <Featured/>

    <div class="molecule">
      <Topics/>
      <Speakers/>
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
      Topics: () => import('./Topics'),
      Speakers: () => import('./Speakers'),
      WhyAttend: () => import('./WhyAttend'),
      Supporters: () => import('./Supporters'),
    },
  }
</script>

<style lang="scss" scoped>
  canvas {
    display: block;
    vertical-align: bottom;
  }

  .molecule {
    background: #fcfcfc url('/home/static/molecule.svg');
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
