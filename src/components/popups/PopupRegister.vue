<template>
  <PopupLayout title="Register now !" :callback="register">
    <label for="u-firstname">Your firstname* :</label><br />
    <input
      v-model="firstname"
      type="text"
      id="u-firstname"
      name="u-firstname"
      aria-label="u-firstname"
      placeholder="firstname"
      required="true"
    /><br />
    <label for="u-lastname">Your lastname* :</label><br />
    <input
      v-model="lastname"
      type="text"
      id="u-lastname"
      name="u-lastname"
      aria-label="u-lastname"
      placeholder="lastname"
      required="true"
    /><br />
    <label for="u-email">Your email* :</label><br />
    <input
      v-model="email"
      type="text"
      id="u-email"
      name="u-email"
      aria-label="u-email"
      placeholder="your.email@mail.com"
      required="true"
    /><br />
    <label for="u-password">Your password* :</label><br />
    <input
      v-model="password"
      type="password"
      id="u-password"
      name="u-password"
      aria-label="u-password"
      placeholder="Your password"
      required="true"
    /><br />
  </PopupLayout>
</template>

<script>
import PopupLayout from '@/components/popups/PopupLayout';
import bus from '@/bus';
import axios from 'axios';

export default {
  name: 'PopupRegister',
  components: {
    PopupLayout,
  },
  data() {
    return {
      firstname: '',
      lastname: '',
      email: '',
      password: '',
    };
  },
  methods: {
    async register() {
      const res = await axios.post(
        'http://localhost:3000/api/v1/user/register',
        {
          firstname: this.firstname,
          lastname: this.lastname,
          email: this.email,
          password: this.password,
        },
      );
      const { accessToken, user } = res.data;
      bus.$emit('logged-in', { accessToken, user });
    },
  },
};
</script>
