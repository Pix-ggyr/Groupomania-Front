<template>
  <section class="body">
    <Header />
    <main class="container">
      <h1>Welcome <span class="red">Jeanne</span> ! How are you today ?</h1>
      <h2>Here you'll find the latest news</h2>
      <button class="post-now-btn">
        <a href="forum.html">Go to main discussion !</a>
      </button>
      <PostMini />
      <div class="news-feed"></div>
    </main>
    <Footer />
  </section>
</template>

<script>
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PostMini from '@/components/Post-mini';

export default {
  name: 'Home',
  components: {
    Header,
    Footer,
    PostMini,
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
