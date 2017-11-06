<template>
  <div>
    <div v-if="overlayMenu" class="overlay-menu">
      <div class="container">
        <dl class="">
          <dd>
            <a href="javascript:void(0);" @click="toggleOverlayMenu" style="color: white; font-size: 2.2rem;">&times;</a>
          </dd>
          <dd>
            <router-link :to="{ name: 'Home'}" class="d-block">Home</router-link>
          </dd>
          <dd>
            <router-link :to="{ name: 'VenueMap'}" class="d-block">Venue Map</router-link>
          </dd>
          <dd>
            <router-link :to="{ name: 'Accommodation'}" class="d-block">Accommodation</router-link>
          </dd>
          <dd>
            <router-link :to="{ name: 'CodeOfConduct'}" class="d-block">Code of Conduct</router-link>
          </dd>
          <dd><a href="javascript:void(0)" @click="getTickets" class="btn-important d-block">Get Tickets!</a></dd>
        </dl>
      </div>
    </div>
    <div v-if="showMenu">
      <nav id="nav-main">
        <div class="container">
          <div class="row no-gutters">
            <div class="col-4 d-inline-block d-xl-none">
              <a
                @click="toggleOverlayMenu"
                href="javascript:void(0)"
                class="py-0"
                style="color: white; font-size: 2.2rem;"
              >
                &#9776;
              </a>
            </div>
            <div class="col-auto col-lg-2 mx-auto">
              <router-link :to="{ name: 'Home'}" class="logo">
                <img :src="require('@/assets/icon.png')" alt="DevSummit logo" class="img-fluid">
                <span class="lead align-bottom d-none d-xl-inline-block"><strong
                  class="align-bottom font-weight-bold">Dev</strong>Summit</span>
              </router-link>
            </div>
            <div class="col-auto col-lg-8 text-right d-none d-xl-block ml-auto">

            <!--<a href="#" class="menu-submenu">-->
              <!--Why Attend-->
              <!--<div class="submenu">-->
                <!--<router-link :to="{ name: 'WhyAttendForDevelopers'}">For Developers</router-link>-->
                <!--<router-link :to="{ name: 'WhyAttendForCompany'}">For Company</router-link>-->
                <!--<router-link :to="{ name: 'WhyAttendForGeneral'}">For General</router-link>-->
              <!--</div>-->
            <!--</a>-->

            <a href="#" class="menu-submenu">
              Agenda
              <div class="submenu">
                <!--<router-link :to="{ name: 'ScheduleConference'}">Conference Schedule</router-link>-->
                <router-link :to="{ name: 'Hackathon'}">Hackathon</router-link>
                <!--<router-link :to="{ name: 'ScheduleSpeedDating'}">Speed Dating</router-link>-->
              </div>
            </a>

              <a href="#" class="menu-submenu">
                Venue
                <div class="submenu">
                  <router-link :to="{ name: 'VenueMap'}">Venue Map</router-link>
                  <router-link :to="{ name: 'Accommodation'}">Accommodation</router-link>
                </div>
              </a>

            <!--<a href="#" class="menu-submenu">-->
              <!--Get Involved-->
              <!--<div class="submenu">-->
                <!--<router-link :to="{ name: 'Sponsor'}">Sponsor Us</router-link>-->
                <!--<router-link :to="{ name: 'Media'}">Media</router-link>-->
                <!--<router-link :to="{ name: 'WhyAttendForDevelopers'}">Speaking opportunities</router-link>-->
                <!--<router-link :to="{ name: 'WhyAttendForDevelopers'}">Exhibition</router-link>-->
              <!--</div>-->
            <!--</a>-->

              <router-link :to="{ name: 'CodeOfConduct'}">Code of Conduct</router-link>
            </div>

            <div class="ml-auto">
              <!--<router-link :to="{ name: 'GetTickets'}" class="btn-important">-->
              <a href="javascript:void(0)" @click="getTickets" class="btn-important">
                Get Tickets!
              </a>
              <!--</router-link>-->
            </div>

          </div>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    name: 'Menus',

    computed: {
      ...mapState(['showMenu', 'overlayMenu']),
    },

    methods: {

      toggleOverlayMenu () {
        this.$store.commit('overlayMenu', !Boolean(this.$store.state.overlayMenu))
      },

      getTickets () {
        if (this.userAgentDetector() === 'android') {
          window.location = 'https://play.google.com/store/apps/details?id=io.devsummit.app.android'
          return
        }

        if (this.userAgentDetector() === 'ios') {
          window.location = 'https://itunes.apple.com/id/app/indonesia-developer-summit/id1287587345'
          return
        }

        this.$router.push({name: 'Home'})
        window.scrollTo(0, 0)
      },

      userAgentDetector () {
        const userAgent = navigator.userAgent || navigator.vendor || window.opera

        if (/iPad|iPhone|iPod/i.test(userAgent) && !window.MSStream) {
          return 'ios'
        }

        if (/Android/i.test(userAgent)) {
          return 'android'
        }
      },
    },
  }
</script>

<style lang="scss" scoped>
  nav {
    padding: 10px 0;
  }

  .logo {
    padding: 0;
    height: auto;

    img {
      width: 52px;
    }

    &:hover {
      background: none;
    }
  }

  #nav-main {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background: rgba(0, 0, 0, 0.9);
    z-index: 9999;
  }

  a {
    display: inline-block;
    border-radius: 4px;
    color: #f1f1f1;
    text-decoration: none;
    padding: 15px 20px;

    &:hover {
      background: #1a1d30;
    }
  }

  a.btn-important {
    background: #f1c40f;
    color: #333;

    &:hover {
      background: #fff043;
    }
  }

  .menu-submenu {
    position: relative;
    border-radius: 4px 4px 0 0;

    &::after {
      display: inline-block;
      width: 0;
      height: 0;
      margin-left: .255em;
      vertical-align: .255em;
      content: "";
      border-top: .3em solid;
      border-right: .3em solid transparent;
      border-left: .3em solid transparent;
    }
  }

  .menu-submenu:hover .submenu,
  .submenu:hover {
    display: block;
    opacity: 1;
  }

  .submenu {
    border-radius: 4px 0 4px 4px;
    min-width: 200px;
    position: absolute;
    top: 48px;
    right: 0;
    display: none;
    opacity: 0;
    padding: 0;
    background: rgba(27, 29, 47, 0.98);
    list-style: none;
    text-align: left;
    z-index: 9999;

    a {
      border-radius: 0;
      padding: 10px;
      display: block;
      margin: 0;
      text-decoration: none;

      &:hover {
        background: white;
        color: black;
      }
    }
  }

  .overlay-menu {
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.99);
    z-index: 10000;
    position: fixed;
    top: 0;
    left: 0;
  }
</style>
