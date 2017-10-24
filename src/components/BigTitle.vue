<template>
  <div>
    <h4 class="display-4 text-center">
      <slot></slot>
    </h4>
    <hr class="mb-5">
  </div>
</template>

<style scoped>
  h4 {
    /*text-transform: uppercase;*/
    font-weight: lighter;
  }

  hr {
    border-top: 3px solid rgb(74, 144, 226);
    width: 60px;
  }
</style>
