<template>
  <section id="speakers" class="p-5">
    <div class="container">

      <BigTitle>Speakers</BigTitle>

      <div class="row">

        <div v-for="speaker in speakers" class="col-12 col-md-4 col-lg-3 mt-4">
          <FigureBox :image="speaker.image">
            <div class="text-center">
              <div class="lead">{{ speaker.name }}</div>
              <div class="small text-muted">{{ speaker.description }}</div>
            </div>
          </FigureBox>
        </div>

        <!--<figure class="link-more col-12 col-md-3 col-lg-3 p-0 m-2">-->
        <!--<a href="#download" class="h-100">-->
        <!--<div class="h3 d-flex align-items-center h-100" style="font-weight: lighter;">-->
        <!--<div class="justify-content-center text-dark text-center w-100">-->
        <!--<div class="display-4">4</div>-->
        <!--<div>more speakers</div>-->
        <!--</div>-->
        <!--</div>-->
        <!--</a>-->
        <!--</figure>-->

      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'Speakers',

    data () {
      return {
        speakers: [
          {
            name: 'Ariya Hidayat',
            description: 'Creator of PhantomJS & Esprima',
            image: '/home/static/speakers/ariya.jpg',
          },
          {
            name: 'Alexander Makarov',
            description: 'Yii Framework Core Developer',
            image: '/home/static/speakers/samdark.jpg',
          },
          {
            name: '???',
            description: '???',
            image: 'https://i.pinimg.com/736x/11/26/06/112606b29bbd824e637d395d55782932--man-candy-beautiful-people.jpg',
          },
          {
            name: '???',
            description: '???',
            image: 'https://i.pinimg.com/736x/45/5e/a8/455ea87e1d00c62e9e16a29ac8aa7a4b--hotels-for-dogs-emma-roberts.jpg',
          },
          {
            name: '???',
            description: '???',
            image: 'https://www.american.edu/uploads/profiles/large/Hannah_Debelius_045arw-small_2.JPG',
          },
          {
            name: '???',
            description: '???',
            image: 'http://lavinephotography.com.au/wp-content/uploads/2017/01/PROFILE-Photography-112.jpg',
          },
          {
            name: '???',
            description: '???',
            image: 'https://www.scheller.gatech.edu/thumb/width/600/cropratio/1:1/pix/directory/bryant_scott_profile.jpg',
          },
        ],
      }
    },
  }
</script>

<style lang="scss" scoped>
  a {
    text-decoration: none;
  }
</style>

