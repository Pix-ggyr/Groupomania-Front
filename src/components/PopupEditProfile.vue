<template>
  <PopupLayout title="Edit your infos" :callback="updateUser">
    <label for="u-firstname">Your firstname :</label>
    <input
      v-model="firstname"
      type="text"
      id="u-firstname"
      name="u-firstname"
      aria-label="update firstname"
      placeholder="Your last name"
      required
    />
    <label for="u-name">Your new name :</label>
    <input
      v-model="lastname"
      type="text"
      id="u-name"
      name="u-name"
      aria-label="u-name"
      placeholder="Your last name"
    />
    <label for="u-email">Your new email :</label>
    <input
      v-model="email"
      type="email"
      id="u-email"
      name="u-email"
      aria-label="u-email"
      placeholder="Your new email"
    />
    <label for="u-password">Your new password :</label>
    <input
      v-model="password"
      type="password"
      id="u-password"
      name="u-password"
      aria-label="u-password"
      placeholder="Your new password"
    />
    <label for="u-description">Your new description :</label>
    <textarea
      v-model="bio"
      type="text"
      id="u-description"
      name="u-description"
      aria-label="u-description"
      placeholder="Tell us about you !"
    ></textarea>
    <label for="u-avatar">New profile picture :</label>
    <input class="send-pp" type="file" @change="convertToBase64" />
  </PopupLayout>
</template>

<script>
import PopupLayout from '@/components/PopupLayout';
import bus from '@/bus';
import axios from 'axios';

export default {
  name: 'PopupEditProfile',
  components: {
    PopupLayout,
  },
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      firstname: '',
      lastname: '',
      email: '',
      password: '',
      bio: '',
      avatar: '',
    };
  },
  created() {
    // eslint-disable-next-line
    const { firstname, lastname, email, password, bio, avatar } = this.user;
    this.firstname = firstname;
    this.lastname = lastname;
    this.email = email;
    this.password = password;
    this.bio = bio;
    this.avatar = avatar;
  },
  methods: {
    async convertToBase64(event) {
      const files = event.target.files || event.dataTransfer.files;
      if (!files.length) {
        return;
      }
      const avatar = files[0];
      const base64Avatar = await this.imageToBase64(avatar);
      this.avatar = base64Avatar;
    },
    imageToBase64(image) {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(image);
        reader.onload = () => resolve(reader.result);
        reader.onerror = (error) => reject(error);
      });
    },
    async updateUser() {
      const res = await axios.put(
        `http://localhost:3000/api/v1/user/${
          JSON.parse(localStorage.getItem('user')).id
        }`,
        this.updatedFields,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
          },
        },
      );
      const updatedUser = res.data;
      bus.$emit('updated-user', updatedUser);
      bus.$emit('close-popup');
    },
  },
  computed: {
    updatedFields() {
      return {
        firstname: this.firstname,
        lastname: this.lastname,
        email: this.email,
        password: this.password,
        bio: this.bio,
        avatar: this.avatar,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
textarea,
.u-description {
  font-family: 'Dosis', sans-serif;
  font-weight: bold;
  font-size: 16px;
  height: 100px;
  max-width: 750px;
  resize: none;
  border: none;
  border-radius: 5px;
  padding: 5px;
}
</style>
