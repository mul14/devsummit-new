<template>
  <section>
    <div class="container text-light">

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

      <div class="row">

        <div class="col-12">

          <div class="row justify-content-center mt-5 mb-4">
            <small class="lead">Community Partners</small>
          </div>

          <div class="row justify-content-center">
            <div class="col-8 col-md-2 mb-5" v-for="community in communities">
              <a :href="community.website">
                <img :src="community.photo" :alt="community.name" class="img-fluid">
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
        communities: [],
      }
    },

    async mounted () {
      try {
        const res = await
          AxiosGet('https://api.devsummit.io/api/v1/partners')
        const communities = res.data.data

        this.communities = communities
          .filter(community => community.type === 'community')
          .map(community => {
            return {
              name: community.name,
              website: community.website,
              photo: community.photo.replace(5000, ''),
            }
          })
      }
      catch (err) {
        console.error(err)
      }
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
