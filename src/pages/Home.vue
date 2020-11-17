<template>
  <section class="body">
    <Header />
    <main class="container">
      <h1>Welcome <span class="red">Jeanne</span> ! How are you today ?</h1>
      <h2>Here you'll find the latest news</h2>
      <button class="post-now-btn">
        <a href="forum.html">Go to main discussion !</a>
      </button>
      <PostMini
        v-for="post in posts"
        :key="post.id"
        :title="post.title"
        :content="post.content"
        :img="post.img"
        :author="post.author"
        :reacts="post.reacts"
      />
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
  data() {
    return {
      posts: [
        {
          id: 1,
          userId: 12,
          author: {
            name: 'Paul',
            firstname: 'Logan',
            avatar: '@/assets/cat-user.jpg',
          },
          title: 'coucou',
          content: 'content',
          img:
            'https://media1.tenor.com/images/d2d817f9f1a14f3805e6a7487169e5ee/tenor.gif?itemid=16584815',
          reacts: {
            likes: 19,
            dislikes: 2,
          },
        },
        {
          id: 2,
          userId: 12,
          author: {
            name: 'Paul',
            firstname: 'Logan',
            avatar: '@/assets/cat-user.jpg',
          },
          title: 'coucou',
          content: 'content',
          img:
            'https://media1.tenor.com/images/d2d817f9f1a14f3805e6a7487169e5ee/tenor.gif?itemid=16584815',
          reacts: {
            likes: 19,
            dislikes: 2,
          },
        },
      ],
    };
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
