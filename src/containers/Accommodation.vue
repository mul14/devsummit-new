<template>
  <section>

    <header
      style="
        background-image: url('https://images.unsplash.com/photo-1468912637438-582f3f543cba?dpr=1&auto=format&fit=crop&w=2851&q=60&cs=tinysrgb');
        background-position: top left;
        background-size: cover;
        overflow: hidden;
        height: 500px;
      ">
      <div class="container">
        <div class="d-flex h-100">
          <HeaderTitle>Accommodation</HeaderTitle>
        </div>
      </div>
    </header>

    <section class="bg-light py-5">

      <BigTitle>Hotels Near Venue</BigTitle>

      <div class="container">
        <div class="row">
          <div class="col-6">
            <FigureBox
              image="http://www.tunehotels.com/tune_media/images/Hotel/bandung/bandung-facade-1.jpg">
              <div class="lead">Tune Hotels</div>
              <div class="small text-muted">Distance to venue: Less than 1km from Sabuga</div>
              <a href="http://www.tunehotels.com/id/en/our-hotels/bandung-dago/" target="_blank" class="btn btn-sm btn-warning mt-3">More info</a>
            </FigureBox>
          </div>
          <div class="col-6">
            <FigureBox
              image="http://sebandung.com/wp-content/uploads/2014/07/Kamar-Hotel-Royal-Dago.png">
              <div class="lead">Royal Dago</div>
              <div class="small text-muted">Distance to venue: Less than 1km from Sabuga</div>
              <a href="http://www.royalhotelsbandung.com/dago/" target="_blank" class="btn btn-sm btn-warning mt-3">More info</a>
            </FigureBox>
          </div>
        </div>
      </div>
    </section>

  </section>
</template>

<script>
  export default {
    name: 'Accomodation',

    mounted () {
      this.$store.commit('showMenu', true)
    },
  }
</script>

<style lang="scss" scoped>
  @import "../../../bootstrap/scss/variables";
  @import "../../../bootstrap/scss/mixins/breakpoints";

  @include media-breakpoint-down(sm) {
    .display-3 {  font-size: 40px;  }
  }

  .display-3 {
    padding: 200px 0;
  }
</style>
