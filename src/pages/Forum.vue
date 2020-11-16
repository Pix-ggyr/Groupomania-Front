<template>
  <section class="body">
    <Header />
    <main class="container">
      <h1>Let's share with the community</h1>
      <a href="popups/popup-create-post.html"
        ><button class="post-now-btn">
          <i class="fas fa-pencil-alt"> Create your post !</i>
        </button></a
      >
      <div class="news-feed"></div>
      <Post />
    </main>
    <PopupPost />
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
