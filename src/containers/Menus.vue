<template>
  <nav id="nav-main">
    <div class="container">
      <div class="row">
        <div class="col-1">
          <router-link :to="{ name: 'Home'}" class="logo">
            <img src="/home/static/icon.png" alt="DevSummit logo" class="img-fluid">
          </router-link>
        </div>
        <div class="col-11 text-right d-none d-lg-block">

          <a href="#" class="menu-submenu">
            Why Attend
            <div class="submenu">
              <router-link :to="{ name: 'WhyAttendForDevelopers'}">For Developers</router-link>
              <router-link :to="{ name: 'WhyAttendForCompany'}">For Company</router-link>
              <router-link :to="{ name: 'WhyAttendForGeneral'}">For General</router-link>
            </div>
          </a>

          <a href="#" class="menu-submenu">
            Agenda
            <div class="submenu">
              <router-link :to="{ name: 'ScheduleConference'}">Conference Schedule</router-link>
              <router-link :to="{ name: 'ScheduleHackathon'}">Hackathon</router-link>
              <router-link :to="{ name: 'ScheduleSpeedDating'}">Speed Dating</router-link>
            </div>
          </a>

          <a href="#" class="menu-submenu">
            Venue
            <div class="submenu">
              <router-link :to="{ name: 'VenueMap'}">Venue Map</router-link>
              <router-link :to="{ name: 'Accommodation'}">Accommodation</router-link>
            </div>
          </a>

          <a href="#" class="menu-submenu">
            Get Involved
            <div class="submenu">
              <router-link :to="{ name: 'Sponsor'}">Sponsor Us</router-link>
              <router-link :to="{ name: 'Media'}">Media</router-link>
              <router-link :to="{ name: 'WhyAttendForDevelopers'}">Speaking opportunities</router-link>
              <router-link :to="{ name: 'WhyAttendForDevelopers'}">Exhibition</router-link>
            </div>
          </a>

          <router-link :to="{ name: 'CodeOfConduct'}">Code of Conduct</router-link>

          <router-link :to="{ name: 'GetTickets'}" class="btn-important">
            Get Tickets!
          </router-link>

        </div>
      </div>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
  nav {
    padding: 10px 0;
  }

  .logo {
    padding: 0;
    width: 52px;
    height: auto;

    &:hover {
      background: none;
    }
  }

  #nav-main {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background: rgba(0, 0, 0, 0.7);
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
</style>
