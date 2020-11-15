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
          class="submit-btn"
          type="submit"
          name="submit"
          aria-label="submit"
          value="Submit"
        />
      </form>
      <p>
        Not registered yet ?
        <span class="popup-trigger"
          ><a href="popups/popup-register.html">Sign-up right now !</a></span
        >
      </p>
    </main>
  </section>
</template>

<script>
export default {
  name: 'Login',
};
</script>

<style lang="scss" scoped>
#login input {
  margin: 10px;
  color: darkblue;
  background-color: ghostwhite;
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
  font-size: 24px;
  padding-left: 10px;
  color: darkblue;
}
</style>
