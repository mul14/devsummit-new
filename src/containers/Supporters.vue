<template>
  <section>

    <div class="bg-white py-1">
      <div class="container">
        <div>
          <div class="mt-5 mb-4">
            <BigTitle>Our Sponsors</BigTitle>
          </div>

          <div class="row justify-content-center">
            <div class="col-8 col-md-3 mb-5" v-for="sponsor in sponsors">
              <a :href="sponsor.url" target="_blank">
                <img :src="sponsor.photo" :alt="sponsor.name" class="img-fluid">
              </a>
            </div>
          </div>
        </div>

        <div>
          <div class="mt-5 mb-4">
            <BigTitle>Our Partners</BigTitle>
          </div>

          <div class="row justify-content-center">
            <div class="col-8 col-md-2 mb-5" v-for="booth in booths">
              <a :href="booth.url" target="_blank">
                <img :src="booth.photo" :alt="booth.name" class="img-fluid">
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container text-light">

      <div class="row">

        <div class="col-12">

          <div class="row justify-content-center mt-5 mb-4">
            <small class="lead">Media Partners</small>
          </div>

          <div class="row justify-content-center">
            <div class="col-8 col-md-2 mb-5" v-for="partner in media_partners">
              <a :href="partner.url">
                <img :src="partner.photo" :alt="partner.name" class="img-fluid">
              </a>
            </div>
          </div>

        </div>

      </div>


      <div class="row">

        <div class="col-12">

          <div class="row justify-content-center mt-5 mb-4">
            <small class="lead">Community Partners</small>
          </div>

          <div class="row justify-content-center">
            <div class="col-8 col-md-2 mb-5" v-for="community in communities">
              <a :href="community.url">
                <img :src="community.photo" :alt="community.name" class="img-fluid">
              </a>
            </div>
          </div>

        </div>

      </div>

      <div class="row">

        <div class="col-md-6">

          <div class="row justify-content-center mt-5 mb-4">
            <small class="lead">Organized by</small>
          </div>

          <div class="row justify-content-center">
            <div class="col-7 col-md-4">
              <a href="https://refactory.id">
                <img :src="require('@/assets/refactory-horizontal.png')" alt="" class="img-fluid">
              </a>
            </div>
            <div class="col-md-7">
              <a href="https://codepolitan.com">
                <img :src="require('@/assets/codepolitan-white.png')" alt="" class="img-fluid">
              </a>
            </div>
          </div>

        </div>

        <div class="col-md-6">

          <div class="row justify-content-center mt-5 mb-4">
            <small class="lead">Supported by</small>
          </div>

          <div class="row justify-content-center">
            <div class="col-7 col-md-3 mb-5">
              <a href="http://www.bekraf.go.id">
                <img src="http://www.bekraf.go.id/assets/images/logo.png" alt="" class="img-fluid">
              </a>
            </div>
            <div class="col-7 col-md-3 mb-5">
              <a href="https://www.kominfo.go.id/">
                <img :src="require('@/assets/kominfo.png')" alt="" class="img-fluid">
              </a>
            </div>
          </div>

        </div>

      </div>

    </div>
  </section>
</template>

<script>
  import { get as AxiosGet } from 'axios'

  export default {
    name: 'Supporters',

    data () {
      return {
        sponsors: [],
        booths: [],
        communities: [],
        media_partners: [],
      }
    },

    async mounted () {
      this.fetchSponsorList()
      this.fetchBoothList()
      this.fetchPartnerList()
    },

    methods: {

      async fetchSponsorList () {
        try {
          const res = await AxiosGet('https://api.devsummit.io/api/v1/sponsors')
          const sponsors = res.data.data

          this.sponsors = sponsors.map(sponsor => {
            return {
              name: sponsor.name,
              url: sponsor.url,
              photo: 'https://img.refactory.id/unsafe/full-fit-in/170x60/center/' + sponsor.attachment,
            }
          })
        }
        catch (err) {
          console.error(err)
        }

      },


      async fetchBoothList () {
        try {
          const res = await AxiosGet('https://api.devsummit.io/api/v1/booths')
          const booths = res.data.data

          this.booths = booths.map(booth => {
            return {
              name: booth.name,
              url: booth.url,
              photo: 'https://img.refactory.id/unsafe/full-fit-in/160x45/center/' + booth.logo_url,
            }
          })
        }
        catch (err) {
          console.error(err)
        }

      },


      async fetchPartnerList () {
        try {
          const res = await AxiosGet('https://api.devsummit.io/api/v1/partners')
          const partners = res.data.data

          this.communities = partners
            .filter(partner => partner.type === 'community')
            .map(partner => {
              return {
                name: partner.name,
                url: partner.website,
                photo: 'https://img.refactory.id/unsafe/full-fit-in/170x60/center/' + partner.photo,
              }
            })

          this.media_partners = partners
            .filter(partner => partner.type === 'media')
            .map(partner => {
              return {
                name: partner.name,
                url: partner.website,
                photo: 'https://img.refactory.id/unsafe/full-fit-in/170x60/center/' + partner.photo,
              }
            })

        }
        catch (err) {
          console.error(err)
        }

      },
    },
  }
</script>

<style lang="scss" scoped>
  section {
    background: #1a1a1a;
  }

  h3 {
    color: #eab247;
  }
</style>
