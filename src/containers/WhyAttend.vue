<template>
  <div>
    <section class="pt-5 p-lg-5" id="video">
      <div class="container">

        <BigTitle>Benefits of Attending</BigTitle>

        <div class="embed-responsive embed-responsive-16by9">
          <iframe width="100%" height="560" src="https://www.youtube.com/embed/cmdRxmFEbg8" frameborder="0"
                  allowfullscreen class="embed-responsive"></iframe>
        </div>

      </div>

    </section>

    <section class="py-5" id="benefits">
      <div class="container">

        <ZigzagBox
          :leftText="true"
          title="Advanced Your Skills"
          image="https://images.unsplash.com/photo-1504639725590-34d0984388bd?dpr=1&auto=format&fit=crop&w=2767&h=&q=60&cs=tinysrgb&crop="
        >
            More than half of the sessions at DevSummit are dedicated to software engineering and its integration ecosystem. The keynotes
            and sessions at DevSummit go beyond product announcements to make sure you leave with actionable ways to
            build better software.
        </ZigzagBox>

        <ZigzagBox
          :leftText="false"
          title="Build your community"
          image="https://images.unsplash.com/photo-1478812954026-9c750f0e89fc?dpr=1&auto=format&fit=crop&w=2850&h=&q=60&cs=tinysrgb&crop="
        >
          DevSummit is designed to make sure you have plenty of opportunities to connect with developers who share your passions. From
          student meet-ups to open source social hours to roundtable discussions on work, opportunities to build
          your community are central to the conference.
        </ZigzagBox>

        <ZigzagBox
          :leftText="true"
          title="Get involved"
          image="https://images.unsplash.com/photo-1493689485253-f07fcbfc731b?dpr=1&auto=format&fit=crop&w=2833&h=&q=60&cs=tinysrgb&crop="
        >
          DevSummit is every bit as much about the developer and technology. Whether you have an interesting topic to discuss, want
          to sponsor the event, or just want to schedule some time to meet with sales or our training team, we want
          you to make this event your own.
        </ZigzagBox>

        <ZigzagBox
          :leftText="false"
          title="Meet ecosystem partners"
          image="https://images.unsplash.com/photo-1459631836437-1c2824882e3f?w=2850"
        >
          Partners and sponsors don’t attend DevSummit to make a sales pitch. They come to meet developers, hear your challenges, and
          help you discover new integrations and workflows to improve the way you build software. This year’s event
          will include more than 15 sponsors and partners, and comfortable, pressure-free ways to connect.
        </ZigzagBox>

      </div>
    </section>
  </div>
</template>

<script>
  export default {
    name: 'WhyAttend',

    components: {
      ZigzagBox: () => import('@/components/ZigzagBox'),
    },
  }
</script>

<style lang="scss" scoped>
  section {
    color: #444;
    line-height: 1.8rem;
    background: #ffffff;
  }
</style>
