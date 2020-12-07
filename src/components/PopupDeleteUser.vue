<template>
<PopupLayout>
  <p>Are you really sure you want to delete your user account ?
    This action is irreversible.
  </p>
  <div class="actions">
    <a id="delete" href="/logout" @click.prevent.stop="deleteUserData()">
  </div>
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
      console.log('appel en cours');
      const res = await axios.delete(`http://localhost:3000/api/v1/user/${JSON.parse(localStorage.getItem('user')).id}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
          },
        },
        {
          firstname: this.firstname,
          lastname: this.lastname,
          email: this.email,
          password: this.password,
          bio: this.bio,
          avatar: this.avatar,
        });
      const deletedUser = res.data;
      console.log(deletedUser);
      bus.$emit('close-popup');
    },
  },
};
</script>
