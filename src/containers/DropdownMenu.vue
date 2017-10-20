<template>
  <span>

  <router-link :to="{ name: 'WhyAttendForDevelopers' }"></router-link>

    <a href="javascript:void(0)" class="menu dropdown">
      {{ label }}
      <div class="dropdown-menu">
        <slot></slot>
      </div>
    </a>
  </span>
</template>

<script>
export default {
  name: 'DropdownMenu',

  props: {
    label: {
      type: String,
      default: '',
    }
  }
}
</script>

<style lang="scss" scoped>
.dropdown:hover .dropdown-menu {
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  width: 500px;
}
</style>
