<template>
  <section class="body" @click="closePopup">
    <Header />
    <main class="container">
      <h1>Your profile</h1>
      <div class="user-profile">
        <div id="profile-pct">
          <img
            :src="
              user.avatar ||
                'https://png.pngtree.com/png-vector/20190710/ourlarge/pngtree-user-vector-avatar-png-image_1541962.jpg'
            "
            alt="user-profile-picture"
          />
        </div>
        <div id="user-infos">
          <h2 id="user-name">{{ fullname }}</h2>
          <p id="user-mail">{{ user.email }}</p>
          <p id="user-description">
            {{ user.bio }}
          </p>
          <button
            id="description-edit"
            @click.prevent.stop="showEditProfilePopup()"
          >
            Edit your informations
          </button>
        </div>
      </div>

      <a id="log-out" href="/logout" aria-label="log-out">
        Log out
      </a>
    </main>
    <PopupEditProfile v-if="displayEditProfilePopup" />
    <Footer />
  </section>
</template>

<script>
import bus from '@/bus';
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
  created() {
    bus.$on('close-popup', this.closeEditProfilePopup);
    this.user = JSON.parse(localStorage.getItem('user'));
  },
  data() {
    return {
      displayEditProfilePopup: false,
    };
  },
  computed: {
    fullname() {
      return `${this.user.firstname} ${this.user.lastname}`;
    },
  },
  methods: {
    showEditProfilePopup() {
      this.displayEditProfilePopup = true;
    },
    closeEditProfilePopup() {
      this.displayEditProfilePopup = false;
    },
    closePopup() {
      if (!this.$el.classList.contains('blurry')) return;
      bus.$emit('close-popup');
    },
  },
};
</script>

<style lang="scss" scoped>
/* Profile style */

.user-profile {
  background-color: white;
  box-shadow: rgba(90, 89, 89, 0.356) -3px 3px 0.2em;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  width: auto;
  height: 100%;
  border-radius: 10px;
}

.user-profile > #profile-pct {
  padding: 20px;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
}

.user-profile > #profile-pct > img {
  padding: 20px;
  width: 190px;
  border-radius: 999px;
}

.user-profile > #user-infos {
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  padding: 20px;
  width: 450px;
}

.user-profile > #user-infos > #user-name {
  font-size: 28px;
}

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
  text-align: center;
  line-height: 48px;
  text-decoration: none;
  background-color: #fd2d01;
  border-radius: 3px;
  box-shadow: rgba(0, 0, 0, 0.356) -2px 2px 0.1em;
}

@media (max-width: 775px) {
  .user-profile {
    flex-direction: column;
    align-items: center;
    width: 90%;
    padding-bottom: 20px;
  }

  .user-profile > #profile-pct > img {
    max-width: 150px;
    width: 80%;
  }

  .user-profile > #user-infos {
    max-width: 450px;
    width: 100%;
    align-items: center;
    padding: 10px;
  }

  .user-profile > #user-infos > #user-name {
    font-size: 21px;
  }

  .user-profile > #user-infos > #user-description {
    padding: 10px;
  }
}
</style>
