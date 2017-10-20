<template>
  <div class="row no-gutters">
    <div :class="{
          'col-lg-6': true,
          'p-lg-5': true,
          'py-5': true,
          'h-100': true,
          'd-flex': true,
          'align-self-center': true,
          'order-lg-1': leftText,
          'order-lg-2': !leftText,
          'order-2': true,
        }">
      <div>
        <div class="h1 text-uppercase">
          <div :class="{'text-lg-left': !leftText, 'text-lg-right': leftText, 'text-center': true }">
            {{ title }}
          </div>
        </div>
        <div class="text-secondary">
          <slot></slot>
        </div>
      </div>
    </div>
    <div :class="{
          'col-lg-6': true,
          'order-lg-1': !leftText,
          'order-lg-2': leftText,
          'order-1': true,
        }">
      <img :src="image" :alt="title" class="img-fluid">
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ZigzagBox',

    props: {
      leftText: {
        type: Boolean,
        default: true,
      },
      title: {
        type: String,
        default: '',
      },
      image: {
        type: String,
        default: '',
      },
    },

    data () {
      return {
//        zigzagText: ,
//        zigzagImage: ,
      }
    },

  }
</script>

<style lang="scss" scoped>
  .h1 {
    color: #666;
    border-bottom: 3px solid #f7f7f7;
    padding-bottom: 10px;
  }
</style>
