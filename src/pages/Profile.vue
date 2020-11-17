<template>
  <section class="body">
    <Header />
    <main class="container">
      <h1>Your profile</h1>
      <div class="user-profile">
        <div id="profile-pct">
          <img src="../assets/ciri.jpg" alt="user-profile-picture" />
        </div>
        <div id="user-infos">
          <h2 id="user-name">Jeanne BOND</h2>
          <p id="user-mail">jeanne.bond@mail.com</p>
          <p id="user-description">
            Hello ! My name is Jeanne Bond and come from Bayonne. I'm 22 years
            old and I'm currently working in the human resources of Groupomania.
          </p>
          <button id="description-edit" @click="showEditProfilePopup()">
            Edit your informations
          </button>
        </div>
      </div>

      <button id="log-out" name="log-out" aria-label="log-out">Log out</button>
    </main>
    <PopupEditProfile v-if="displayEditProfilePopup" />
    <Footer />
  </section>
</template>

<script>
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PopupEditProfile from '@/components/PopupEditProfile';

export default {
  name: 'Profile',
  components: {
    Header,
    Footer,
    PopupEditProfile,
  },
  data() {
    return {
      displayEditProfilePopup: false,
    };
  },
  methods: {
    showEditProfilePopup() {
      this.displayEditProfilePopup = true;
    },
  },
};
</script>

<style lang="scss" scoped>
#description-edit {
  margin-top: 20px;
  width: 200px;
  height: 30px;
}

#description-edit a {
  color: white;
  text-decoration: none;
}

#log-out {
  font-size: 24px;
  margin: 72px;
  width: 120px;
  height: 48px;
  color: white;
  background-color: #fd2d01;
}
</style>
