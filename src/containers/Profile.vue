<template>
  <section>
    <div class="container py-5">

      <BigTitle>Keynote Speakers</BigTitle>

      <div v-for="speaker in speakers" :key="speaker.name" class="row pb-5 d-flex align-items-lg-center">

        <div class="col-12 col-lg-2"></div>
        <div class="col-12 col-lg-4 text-center">
          <img :src="speaker.image" alt="" class="img-fluid">
        </div>
        <div class="col-12 col-lg-4">
          <div class="speaker__name text-center text-lg-left pt-3 pt-lg-0">
            {{ speaker.name }}
          </div>
          <div class="lead text-muted text-center text-lg-left">
            {{ speaker.title }}
          </div>
          <div class="pt-0 pt-lg-4 text-center text-lg-left" v-if="speaker.description">
            <small style="color: #ccc;">TALK ABOUT</small>
          </div>
          <blockquote class="h2 text-muted text-center text-lg-left" style="font-weight: lighter;">
            {{ speaker.description }}
          </blockquote>
        </div>

      </div>

    </div>

    <div class="container py-5">
      <BigTitle>Panel Discussion Speakers</BigTitle>

      <div class="row">
        <div class="col-md-1"></div>
        <span v-for="panel in panels" :key="panel.name" class="col-12 col-md-3 col-lg-2">
          <img :src="panel.image" class="img-fluid">
          <div class="my-2 text-center">
            <div style="font-size: 1.1rem; color: #333; font-family: Georgia, Times;"> {{ panel.name }} </div>
            <small style="color: #999;"> {{ panel.title }} </small>
          </div>
        </span>
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
            description: 'Unlocking Your Potential: The Purification Framework',
          },
          {
            name: 'Alexander Makarov',
            image: require('@/assets/speakers/samdark.jpg'),
            title: 'Yii Framework Core Developer',
            description: 'OpenSource from Inside',
          },
          {
            name: 'Galvin Widjaja',
            image: require('@/assets/speakers/galvin.jpg'),
            title: 'Founder of Lauretta.io',
            description: 'Expert Systems: Transfer Learning and it\'s Impact on Your Next Big Project',
          },
          {
            name: 'Johanes Alexander',
            image: require('@/assets/speakers/johanes.jpg'),
            title: 'Lead Solutions Architect, Business Intelligence',
            description: 'How GO-JEK Transform (Big) Data into Business Decisions',
          },
          {
            name: 'Imanzah Nurhidayat',
            image: require('@/assets/speakers/imanzah.jpg'),
            title: 'CIO of Corechain',
            description: 'Running Digital Economy on Blockchain',
          },
        ],
        panels: [
          {
            name: 'Ken Ratri Iswari',
            image: require('@/assets/speakers/kenratri.jpg'),
            title: 'CEO Geekhunter',
            description: '',
          },
          {
            name: 'Peter Jack Kambey',
            image: require('@/assets/speakers/pjk.jpg'),
            title: 'PHP Indonesia',
            description: '',
          },
          {
            name: 'Evan Purnama',
            image: require('@/assets/speakers/evan.jpg'),
            title: 'CTO of Qiscus',
            description: '',
          },
          {
            name: 'Teguh Hardiansah',
            image: require('@/assets/speakers/teguh.jpg'),
            title: 'Corechain',
            description: '',
          },
          {
            name: 'Ade Syah Lubis',
            image: require('@/assets/speakers/ade.jpg'),
            title: 'CEO NiagaHoster',
            description: '',
          },
        ],
      }
    },
  }
</script>

<style lang="scss" scoped>
  .speaker__name {
    font-family: Georgia, Times, "Times New Roman", serif;
    color: #494949;
    font-size: 3rem;
    line-height: 1em;
  }
</style>
