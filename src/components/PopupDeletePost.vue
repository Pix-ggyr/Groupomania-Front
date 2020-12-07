<template>
  <PopupLayout :callback="deletePost">
    <p>
      Are you sure you want to delete this post ?
    </p>
  </PopupLayout>
</template>

<script>
import PopupLayout from '@/components/PopupLayout';
import axios from 'axios';
import bus from '@/bus';

export default {
  name: 'PopupDeletePost',
  components: {
    PopupLayout,
  },
  methods: {
    async deletePost() {
      // eslint-disable-next-line no-console
      console.log('appel en cours');
      const res = await axios.delete(
        `http://localhost:3000/api/v1/post/${
          JSON.parse(localStorage.getItem('post')).id
        }`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
          },
        },
      );
      const deletedPost = res.data;
      // eslint-disable-next-line no-console
      console.log(deletedPost);
      bus.$emit('close-popup');
    },
  },
};
</script>
