<template>
  <div>
    <div v-for="schedule in schedules" class="row no-gutters" style="background: white;">
      <div class="col-3">
        <div class="lead p-4 text-right text-muted">{{ schedule.time }}</div>
      </div>
      <div class="col-9">
        <div class="lead py-4">{{ schedule.name }}</div>
        <div v-if="schedule.image" class="lead pl-4">
          <div class="row">
            <div class="col-2">
              <img :src="schedule.image" :alt="schedule.name" class="img-fluid rounded-circle">
            </div>
            <div class="col-10">
              <div>{{ schedule.image_title }}</div>
              <div>{{ schedule.image_description }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'RundownItem',

    props: {
      schedules: {
        type: Array,
        default: [],
      },
    },
  }
</script>
