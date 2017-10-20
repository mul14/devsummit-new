<template>
  <figure>
    <header>
      <img class="img-fluid" :src="image" :alt="alt">
    </header>
    <figcaption>
      <div class="content">
        <slot></slot>
      </div>
    </figcaption>
  </figure>
</template>

<script>
  export default {
    name: 'FigureBox',

    props: {
      image: {
        type: String,
        default: 'https://placehold.it/600',
      },
      alt: {
        type: String,
        default: '',
      },
    },
  }
</script>

<style lang="scss" scoped>

  figure {

    header {
      border-radius: 4px 4px 0 0;
      overflow: hidden;
      max-height: 280px;
    }

    background: white;
    border-radius: 4px;
    border: 0;
    z-index: 1;
    box-shadow: rgba(0, 0, 0, 0.18) 0 1px 2px;

    img {
      transition: all 0.3s ease-in;
    }

    &:hover img {
      -webkit-transform: scale(1.1) rotate(2deg);
      -moz-transform: scale(1.1) rotate(2deg);
      -ms-transform: scale(1.1) rotate(2deg);
      -o-transform: scale(1.1) rotate(2deg);
      transform: scale(1.1) rotate(2deg);
    }

    img {
      width: 100%;
      transition: all 0.4s ease-out;
    }

  }

  figcaption .content {
    padding: 10px;
  }
</style>
