<template>
  <section class="body">
    <Header />
    <main class="container">
      <h1>Let's share with the community</h1>
      <button class="post-now-btn" @click.prevent="showPopupPost()">
        <i class="fas fa-pencil-alt"> Create your post !</i>
      </button>
      <div class="news-feed"></div>
      <Post />
    </main>
    <PopupPost v-if="displayPopupPost" />
    <Footer />
  </section>
</template>

<script>
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Post from '@/components/Post';
import PopupPost from '@/components/PopupPost';

export default {
  name: 'Forum',
  components: {
    Header,
    Footer,
    Post,
    PopupPost,
  },
  data() {
    return {
      displayPopupPost: false,
    };
  },
  methods: {
    showPopupPost() {
      this.displayPopupPost = true;
    },
  },
};
</script>

<style>
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
</style>
