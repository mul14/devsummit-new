<template>
  <div>

    <Menus/>

    <section id="app">

      <transition name="slideup">
        <router-view/>
      </transition>

    </section>

    <MainFooter/>

  </div>
</template>

<script>
  export default {
    name: 'App',

    components: {
      Menus: () => import('@/containers/Menus'),
      MainFooter: () => import('@/containers/Footer'),
    },

    mounted () {
      this.$on('contentPasses', () => {
        console.log('sipsss')
      })
    },
  }
</script>

<style lang="scss" scoped>
  @import "./bootstrap.scss";

  // @font-face {
  //   font-family: Indonesiana;
  //   // src: url('../fonts/Indonesiana TrueTypeFont Powered By Fizz_Labz.ttf');
  // }
  // .font-indonesiana {
  //   font-family: Indonesiana;
  // }
  // .font-avent-pro {
  //   font-family: 'Advent Pro';
  // }

  .slideup-enter-active {
    transition: all 600ms cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  .slideup-leave-active {
    /*transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);*/
  }

  .slideup-enter, .slideup-leave-to {
    transform: translateY(20px);
    opacity: 0;
  }
</style>
