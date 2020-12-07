<template>
  <PopupLayout :callback="deleteUserData">
    <p>
      Are you really sure you want to delete your user account ? This action is
      irreversible.
    </p>
  </PopupLayout>
</template>

<script>
import PopupLayout from '@/components/PopupLayout';
import axios from 'axios';
import bus from '@/bus';

export default {
  name: 'PopupDeleteUser',
  components: {
    PopupLayout,
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
  methods: {
    async deleteUserData() {
      await axios.delete(
        `http://localhost:3000/api/v1/user/${
          JSON.parse(localStorage.getItem('user')).id
        }`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
          },
        },
      );
      bus.$emit('user-deleted');
    },
  },
};
</script>
