<template>
  <section>

    <header
      style="
        background-image: url('https://images.unsplash.com/photo-1486591978090-58e619d37fe7?dpr=1&auto=format&fit=crop&w=2850&q=60&cs=tinysrgb');
        background-position: center left;
        background-size: cover;
      ">
      <div class="container">
        <div class="d-flex h-100">
          <div class="display-3 text-light">
            <HeaderTitle>Speed Dating Schedule</HeaderTitle>
          </div>
        </div>
      </div>
    </header>

    <section class="bg-light py-5">
      <div class="container">

        <div class="rundown-box">

          <div class="row no-gutters text-center">
            <div class="col-4">
              <a
                @click="currentSchedule = 1"
                :class="{ tab: true, active: currentSchedule === 1 }">
                <h2>NOV 21</h2>
                <div class="lead">Artificial intelligence</div>
              </a>
            </div>
            <div class="col-4">
              <a
                @click="currentSchedule = 2"
                :class="{ tab: true, active: currentSchedule === 2 }">
                <h2>NOV 22</h2>
                <div class="lead">BlockChain</div>
              </a>
            </div>
            <div class="col-4">
              <a
                @click="currentSchedule = 3"
                :class="{ tab: true, active: currentSchedule === 3 }">
                <h2>NOV 23</h2>
                <div class="lead">Open Source</div>
              </a>
            </div>
          </div>

          <div v-if="currentSchedule === 1">
            <RundownItem :schedules="firstDay"></RundownItem>
          </div>
          <div v-if="currentSchedule === 2">
            <RundownItem :schedules="secondDay"></RundownItem>
          </div>
          <div v-if="currentSchedule === 3">
            <RundownItem :schedules="thirdDay"></RundownItem>
          </div>

        </div>
      </div>
    </section>

  </section>
</template>

<script>
  export default {
    name: 'Schedule',

    components: {
      RundownItem: () => import('./Schedules/RundownItem'),
    },

    data () {
      return {
        currentSchedule: 1,

        firstDay: [
          {time: '8:00 - 11:00', name: 'Registration Open'},
          {time: '11:30 - 12:00', name: 'Opening'},
          {
            time: '12:00 - 13:00',
            name: 'Keynote Speaker: Talking about Artificial intelligence',
            image: '/home/static/speakers/ariya.jpg',
            image_title: 'Ariya Hidayat',
            image_description: 'Someone',
          },
          {time: '14:00 - 15:00', name: 'Panel discussion lima pelaku industri AI'},
          {time: '16:00 - 17:00', name: 'Keynote speaker 2 tentang Machine Learning'},
          {time: '17:00', name: 'Closing'},
        ],

        secondDay: [
          {time: '8:00 - 11:00', name: 'Registration Open'},
          {time: '11:30 - 12:00', name: 'Opening'},
          {time: '12:00', name: 'Keynote Speaker: Talking about Fintech'},
          {time: '14:00', name: 'Panel discussion tentang regulasi dan industri fintech pada lima stakeholder'},
          {time: '16:00', name: 'Keynote Speaker: Talking about BlockChain'},
          {time: '17:00', name: 'Closing'},
        ],

        thirdDay: [
          {time: '8:00', name: 'Registration Open'},
          {time: '11:30', name: 'Opening'},
          {time: '12:00', name: 'Keynote speaker 1 tentang perjalanan Aryo Hidayat di Silicon Valley'},
          {time: '14:00', name: 'Panel discussion untuk komunitas dan open source pada lima stakeholder'},
          {time: '16:00', name: 'Keynote speaker 2 tentang open source mengundang Alexander Makarov'},
          {time: '17:00', name: 'Closing'},
        ],

      }
    },
  }
</script>

<style lang="scss" scoped>
  .display-3 {
    padding: 200px 0;
    text-shadow: 1px 1px #666;
    text-transform: uppercase;
    font-weight: bold;
  }

  .rundown-box {
    background: white;
    box-shadow: rgba(0, 0, 0, 0.18) 0 1px 2px;
  }

  .tab {
    padding: 20px 0;
  }

  a {
    background: white;
    display: block;
    cursor: pointer;
    border-top: 5px solid transparent;
  }

  .active {
    background: #5b90dc;
    color: white !important;
    border-top: 5px solid darken(#5b90dc, 5%);
  }
</style>
