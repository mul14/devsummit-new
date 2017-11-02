<template>
  <section class="bg-light text-dark">
    <a name="code-of-conduct"></a>

    <div class="container">

      <Box class="py-5">

        <BigTitle>Code of Conduct</BigTitle>

        <div class="row">

          <div class="col-md-2"></div>
          <div class="col-12 col-md-8 px-5">
            <p>
              DevSummit is a tech event intended for networking and collaboration in the tech community. We value the participation
              of each member and want all attendees to have a meaningful and memorable experience.</p>
            <p>
              All attendees are expected to show respect and courtesy to other attendees throughout all events hosted in the
              Sabuga, Bandung, Indonesia. To make clear what is expected, all attendees, speakers, exhibitors, organizers,
              and volunteers at any event in the Sabuga, Bandung, Indonesia are required to conform to the following Code of
              Conduct. Organizers will enforce this code throughout the event.</p>
            <p>
              DevSummit is dedicated to providing a harassment-free event experience for everyone, regardless of gender, disability,
              physical appearance, body size, race, or religion. We do not tolerate harassment of event participants in any
              form, nor do we tolerate any behavior that would reasonably lead to another event participant being made to feel
              unsafe, insecure, or frightened for their physical or emotional well-being.</p>
            <p>
              All communication should be appropriate for a professional audience including people of many different backgrounds.
              Sexual language and imagery is not appropriate for any presentation given in the Sabuga, Bandung, Indonesia or
              in any presentation associated with or related to DevSummit. Be kind to others. Do not insult or put down other
              attendees.</p>
            <p>Each event guest is entirely responsible for his or her own actions.</p>
            <p>
              Attendees violating these rules will be asked to leave the event at the sole discretion of the event managers.
            </p>
            <p>Thank you for your participation.</p>
          </div>
        </div>

      </Box>

    </div>

  </section>

</template>

<script>
  export default {
    name: 'CodeOfConduct',

    mounted () {
      this.$store.commit('showMenu', true)
    },
  }
</script>

<style lang="scss" scoped>
  section {
    padding: 160px 0 80px;
    /*background: #f1f1f1;*/
  }
</style>
