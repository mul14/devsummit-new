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
      <BigTitle>BlockChain Workshop</BigTitle>
      <div class="text-center">
        <span v-for="workshop in workshops" :key="workshop.name">
          <img :src="workshop.image" class="img-fluid">
          <div class="my-2 text-center">
            <div style="font-size: 2rem; color: #333; font-family: Georgia, Times;"> {{ workshop.name }} </div>
            <div class="lead" style="color: #999;"> {{ workshop.title }} </div>
          </div>
        </span>
      </div>
    </div>

    <div class="container py-5">
      <BigTitle>Other Speakers</BigTitle>

      <div class="row">
        <div class="col-12">
          <div class="row">
            <span v-for="panel in panels" :key="panel.name" class="my-3 col-6 col-lg-2">
              <img :src="panel.image" class="img-fluid">
              <div class="my-2 text-center">
                <div style="font-size: 1.1rem; color: #333; font-family: Georgia, Times;"> {{ panel.name }} </div>
                <small style="color: #999; font-size: 0.9rem;"> {{ panel.title }} </small>
              </div>
            </span>
          </div>
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
        workshops: [
          {
            name: 'Teguh Hardiansah',
            image: require('@/assets/speakers/teguh.jpg'),
            title: 'Corechain',
            description: '',
          },
        ],
        panels: [
          {
            name: 'Andri Diki',
            image: require('@/assets/speakers/andri.jpg'),
            title: 'Jennifer Soft',
            description: '',
          },
          {
            name: 'Ade Syah Lubis',
            image: require('@/assets/speakers/ade.jpg'),
            title: 'CEO NiagaHoster',
            description: '',
          },
          {
            name: 'Ahmad Anshori Muslim',
            image: require('@/assets/speakers/anshori.jpg'),
            title: 'eFishery',
            description: '',
          },
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
            name: 'Muhamad Saad Nurul Ishlah',
            image: require('@/assets/speakers/saad.jpg'),
            title: 'AI & Bot Specialist Qiscus',
            description: '',
          }
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
