<template>
  <section>
    <div class="container py-5">

      <BigTitle>SPEAKERS</BigTitle>

      <div v-for="speaker in speakers" class="row pb-5">
        <div class="col-12 col-lg-2"></div>
        <div class="col-12 col-lg-4 text-center">
          <img :src="speaker.image" alt="" class="img-fluid">
        </div>
        <div class="col-12 col-lg-4">
          <div class="display-4 pt-2 text-center text-lg-left" style="font-family: Georgia; color: #494949;">
            {{ speaker.name }}
          </div>
          <div class="lead text-muted text-center text-lg-left">
            {{ speaker.title }}
          </div>
          <blockquote class="py-4 h2 text-muted" style="font-weight: lighter;">
            {{ speaker.description }}
          </blockquote>
        </div>
      </div>

    </div>
  </section>
</template>

<script>
  export default {
    name: 'Profile',

    data () {
      return {
        speakers: [
          {
            name: 'Ariya Hidayat',
            image: require('@/assets/speakers/ariya.jpg'),
            title: 'Creator of PhantomJS & Esprima',
            description: 'I will create something useful',
          },
          {
            name: 'Alexander Makarov',
            image: require('@/assets/speakers/samdark.jpg'),
            title: 'Yii Framework Core Developer',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
          },
        ],
        others: [
          {
            name: '???',
            description: '???',
            title: '',
            image: 'https://i.pinimg.com/736x/11/26/06/112606b29bbd824e637d395d55782932--man-candy-beautiful-people.jpg',
          },
          {
            name: '???',
            description: '???',
            title: '',
            image: 'https://i.pinimg.com/736x/45/5e/a8/455ea87e1d00c62e9e16a29ac8aa7a4b--hotels-for-dogs-emma-roberts.jpg',
          },
          {
            name: '???',
            description: '???',
            title: '',
            image: 'https://www.american.edu/uploads/profiles/large/Hannah_Debelius_045arw-small_2.JPG',
          },
          {
            name: '???',
            description: '???',
            title: '',
            image: 'http://lavinephotography.com.au/wp-content/uploads/2017/01/PROFILE-Photography-112.jpg',
          },
          {
            name: '???',
            description: '???',
            title: '',
            image: 'https://www.scheller.gatech.edu/thumb/width/600/cropratio/1:1/pix/directory/bryant_scott_profile.jpg',
          },
        ]
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>
