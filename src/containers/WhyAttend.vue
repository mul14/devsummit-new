<template>
  <div>
    <section class="py-5" id="benefits">
      <div class="container">

        <BigTitle>BENEFITS OF ATTENDING</BigTitle>

        <div v-for="(reason, index) in reasons">
          <ZigzagBox :leftText="index % 2 == 0" :title="reason.title" :image="reason.image">
            {{ reason.description }}
          </ZigzagBox>
        </div>

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

    data () {
      return {
        reasons: [
          {
            title: 'Advanced Your Skills',
            image: 'https://images.unsplash.com/photo-1504639725590-34d0984388bd?dpr=1&auto=format&fit=crop&w=2767&h=&q=60&cs=tinysrgb&crop=',
            description: `More than half of the sessions at DevSummit are dedicated to software engineering and its
            integration ecosystem. The keynotes and sessions at DevSummit go beyond product announcements to make sure
            you leave with actionable ways to build better software.`,
          },
          {
            title: 'Build your community',
            image: 'https://images.unsplash.com/photo-1442504028989-ab58b5f29a4a?w=2550&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D',
            description: `DevSummit is designed to make sure you have plenty of opportunities to connect with developers who share your passions. From
          student meet-ups to open source social hours to roundtable discussions on work, opportunities to build
          your community are central to the conference.`,
          },
          {
            title: 'Get involved',
            image: 'https://images.unsplash.com/photo-1493689485253-f07fcbfc731b?dpr=1&auto=format&fit=crop&w=2833&h=&q=60&cs=tinysrgb&crop=',
            description: `DevSummit is every bit as much about the developer and technology. Whether you have an
              interesting topic to discuss, want to sponsor the event, or just want to schedule some time to meet with
              sales or team, we want you to make this event your own.`,
          },
          {
            title: 'Meet ecosystem partners',
            image: 'https://images.unsplash.com/photo-1459631836437-1c2824882e3f?w=2850',
            description: `Partners and sponsors don’t attend DevSummit to make a sales pitch. They come to meet developers, hear your challenges, and
          help you discover new integrations and workflows to improve the way you build software.`,
          },
        ],
      }
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
