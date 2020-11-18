<template>
  <section class="body" @click="closePopup">
    <Header />
    <main class="container">
      <h1>Let's share with the community</h1>
      <button class="post-now-btn" @click.prevent.stop="showPopupPost()">
        <i class="fas fa-pencil-alt"> Create your post !</i>
      </button>
      <div class="news-feed"></div>
      <Post
        v-for="post in posts"
        :key="post.id"
        :title="post.title"
        :content="post.content"
        :img="post.img"
        :author="post.author"
        :reacts="post.reacts"
      />
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
      posts: [
        {
          id: 1,
          userId: 12,
          author: {
            name: 'Poulet',
            firstname: 'Alexis',
            avatar:
              'https://github.com/Pix-ggyr/groupomania-front/blob/master/src/assets/male-user-1.jpg?raw=true',
          },
          title: 'Look at this, this is so funny !',
          content:
            'Pellentesque vel porttitor mi. Etiam porta sapien laoreet, aliquet mi nec, egestas mauris. Nam dolor nunc, euismod at efficitur at, rhoncus ac lectus.',
          img:
            'https://media1.tenor.com/images/d2d817f9f1a14f3805e6a7487169e5ee/tenor.gif?itemid=16584815',
          reacts: {
            likes: 19,
            dislikes: 2,
          },
        },
        {
          id: 2,
          userId: 33,
          author: {
            name: 'Doe',
            firstname: 'Jane',
            avatar:
              'https://github.com/Pix-ggyr/groupomania-front/blob/master/src/assets/woman-user-1.jpg?raw=true',
          },
          title: 'Hey! Let me tell you a story !',
          content:
            'Lorem ipsum sit amet dolor tamere enshort deguerre. Maecenas tincidunt dignissim mi, id tempor ligula sollicitudin ac. Curabitur nec feugiat libero, semper vehicula nisl. Aenean cursus volutpat tempor. Aliquam consequat augue metus, vel tincidunt leo convallis sed. Nulla eleifend, justo ac efficitur ullamcorper, mauris quam aliquam turpis, eget semper mi eros quis libero.',
          img: '',
          reacts: {
            likes: 19,
            dislikes: 2,
          },
        },
        {
          id: 3,
          userId: 13,
          author: {
            name: 'Sembranle',
            firstname: 'John',
            avatar:
              'https://github.com/Pix-ggyr/groupomania-front/blob/master/src/assets/cat-user.jpg?raw=true',
          },
          title: 'I am litterally laughing out loud right now !',
          content:
            'Donec imperdiet velit neque, sed bibendum ligula fermentum nec. Sed eu velit venenatis, aliquet orci eu, aliquet risus.',
          img:
            'https://media1.tenor.com/images/9b231ebc937e1e75564f7357e8f22317/tenor.gif?itemid=12003318',
          reacts: {
            likes: 19,
            dislikes: 2,
          },
        },
      ],
    };
  },
  created() {
    bus.$on('close-popup', this.closePopupPost);
  },
  methods: {
    showPopupPost() {
      this.displayPopupPost = true;
    },
    closePopupPost() {
      this.displayPopupPost = false;
    },
    closePopup() {
      if (!this.$el.classList.contains('blurry')) return;
      bus.$emit('close-popup');
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
