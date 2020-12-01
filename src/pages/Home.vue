<template>
  <section class="body">
    <Header />
    <main class="container">
      <h1>
        Welcome
        <HelloUser
          v-for="hello in hellos"
          :key="hello.id"
          :userFirstName="hello.userFirstName"
        />
        ! How are you today ?
      </h1>
      <h2>Here you'll find the latest news</h2>
      <button class="post-now-btn">
        <a href="forum.html">Go to main discussion !</a>
      </button>
      <div class="news-feed">
        <PostMini
          v-for="post in posts"
          :key="post.id"
          :userId="post.userId"
          :title="post.title"
          :content="post.content"
          :img="post.img"
        />
      </div>
    </main>
    <Footer />
  </section>
</template>

<script>
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PostMini from '@/components/Post-mini';
import HelloUser from '@/components/HelloUser';
import axios from 'axios';

export default {
  name: 'Home',
  components: {
    Header,
    Footer,
    PostMini,
    HelloUser,
  },
  data() {
    return {
      posts: [],
    };
  },
  async created() {
    const posts = await axios.get('http://localhost:3000/api/v1/post/', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      },
    });
    this.posts = posts.data;
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
