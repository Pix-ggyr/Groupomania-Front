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
import HelloUser from '@/components/HelloUser';

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
      hellos: [
        {
          user: {
            userId: 1,
            userFirstName: 'Jeanne',
          },
        },
      ],
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
