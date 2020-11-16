<template>
  <section class="body">
    <main class="container">
      <img
        id="logo"
        src="../assets/icon-above-font.png"
        alt="logo groupomania"
      />
      <h1>Log into our new application !</h1>
      <form id="login">
        <label for="user-email">Your email address</label><br />
        <input
          type="text"
          id="user-email"
          name="user-email"
          aria-label="user-email"
          placeholder="user@mail.com"
        /><br />
        <label for="password">Enter your password</label><br />
        <input
          type="text"
          id="password"
          name="password"
          aria-label="password"
        /><br />
        <input
          id="login-btn"
          type="submit"
          name="submit"
          aria-label="submit"
          value="Login"
        />
      </form>
      <p>
        Not registered yet ?
        <span class="popup-trigger"
          ><a @click.prevent="showRegisterPopup()">Sign-up right now !</a></span
        >
      </p>
    </main>
    <PopupRegister v-if="displayPopupRegister" />
    <Footer />
  </section>
</template>

<script>
import Footer from '@/components/Footer';
import PopupRegister from '@/components/PopupRegister';

export default {
  name: 'Login',
  components: {
    Footer,
    PopupRegister,
  },
  data() {
    return {
      displayPopupRegister: false,
    };
  },
  methods: {
    showRegisterPopup() {
      this.displayPopupRegister = true;
    },
  },
};
</script>

<style lang="scss" scoped>
#login {
  display: flex;
  flex-flow: column nowrap;
}

#login input {
  margin: 10px;
  color: darkblue;
  background-color: white;
  font-family: 'Dosis', sans-serif;
  font-weight: 700;
  height: 40px;
  width: 220px;
  border: none;
  border-radius: 3px;
  padding-left: 5px;
  font-size: 16px;
}

#login label {
  font-size: 18px;
  padding-left: 10px;
  color: darkblue;
}

#login > #login-btn {
  background-color: rgb(19, 93, 230);
  color: white;
  text-transform: uppercase;
  box-shadow: rgba(0, 0, 0, 0.356) -2px 2px 0.1em;
  width: 100px;
  align-self: center;
}
</style>
