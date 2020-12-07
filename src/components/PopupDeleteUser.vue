<template>
<PopupLayout>
  <p>Are you really sure you want to delete your user account ?
    This action is irreversible.
  </p>
  <div class="actions">
    <a id="deleteUser" href="/logout" @click.prevent.stop="deleteUserData()">
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
      // eslint-disable-next-line no-console
      console.log('appel en cours');
      const res = await axios.delete(`http://localhost:3000/api/v1/user/${JSON.parse(localStorage.getItem('user')).id}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
          },
        });
      const deletedUser = res.data;
      // eslint-disable-next-line no-console
      console.log(deletedUser);
      bus.$emit('close-popup');
    },
  },
};
</script>
