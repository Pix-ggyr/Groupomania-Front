<template>
  <section class="body">
    <Header />
    <main class="container">
      <h1>
        Welcome
        <HelloUser />
        ! How are you today ?
      </h1>
      <h2>Here you'll find the latest news</h2>
      <button class="post-now-btn">
        <a href="forum.html">Go to main discussion !</a>
      </button>
      <div class="news-feed">
        <div
          class="new-post"
          v-for="activity in activities"
          :key="activity.id"
          :is="activityComponent(activity)"
          :activity="activity"
        ></div>
      </div>
    </main>
    <Footer />
  </section>
</template>

<script>
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PostMini from '@/components/Post-mini';
import BasicReaction from '@/components/BasicReaction';
import HelloUser from '@/components/HelloUser';
import axios from 'axios';

export default {
  name: 'Home',
  components: {
    Header,
    Footer,
    PostMini,
    BasicReaction,
    HelloUser,
  },
  methods: {
    activityComponent(activity) {
      return activity.type === 'post' ? PostMini : BasicReaction;
    },
  },
  data() {
    return {
      activities: [],
    };
  },
  async created() {
    const activities = await axios.get(
      'http://localhost:3000/api/v1/activity/latest',
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
      },
    );
    this.activities = activities.data;
  },
};
</script>

<style lang="scss" scoped>
.post-now-btn {
  margin: 40px;
  justify-self: right;
  width: 180px;
  height: 50px;
}

.post-now-btn a {
  color: white;
  text-decoration: none;
}

i {
  color: darkblue;
  padding: 3px;
}
</style>
