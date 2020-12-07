<template>
  <section>
    <Header />
    <main class="container">
      <h1>Let's share with the community</h1>
      <button class="post-now-btn" @click.prevent.stop="showPopupPost()">
        <p>
          <span
            ><i
              class="fas fa-pencil-alt"
              style="padding-right: 10px;"
            ></i></span
          >Create your post !
        </p>
      </button>
      <div class="news-feed">
        <Post v-for="post in posts" :key="post.id" :post="post" />
      </div>
    </main>
    <PopupPost v-if="displayPopupPost" />
    <Footer />
  </section>
</template>

<script>
import bus from '@/bus';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Post from '@/components/Post';
import PopupPost from '@/components/PopupPost';
// import PopupEditPost from '@components/PopupEditPost';
// import PopupDeletePost from '@/components/PopupDeletePost';
import axios from 'axios';

export default {
  name: 'Forum',
  components: {
    Header,
    Footer,
    Post,
    PopupPost,
    // PopupEditPost,
    // PopupDeletePost,
  },
  data() {
    return {
      displayPopupPost: false,
      posts: [],
    };
  },
  async created() {
    bus.$on('close-popup', this.closePopupPost);
    bus.$on('close-popup', this.closePopupEditPost);
    bus.$on('close-popup', this.closePopupDeletePost);
    bus.$on('posted', this.fetchPost);
    bus.$on('updated-post', this.fetchPost);
    this.fetchPost();
  },
  methods: {
    showPopupPost() {
      this.displayPopupPost = true;
    },

    closePopupPost() {
      this.displayPopupPost = false;
      this.fetchPost();
    },

    showPopupEditPost() {
      this.displayPopupEdit = true;
    },

    closePopupEditPost() {
      this.displayPopupEdit = false;
    },

    showPopupDeletePost() {
      this.displayPopupEdit = true;
    },

    closePopupDeletePost() {
      this.displayPopupEdit = false;
    },

    closePopup() {
      if (!this.$el.classList.contains('blurry')) return;
      bus.$emit('close-popup');
    },

    async fetchPost() {
      const posts = await axios.get('http://localhost:3000/api/v1/post', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
      });
      this.posts = posts.data;
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
