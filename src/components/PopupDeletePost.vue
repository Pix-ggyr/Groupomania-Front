<template>
 <PopupLayout>
   <p>
     Are you sure ?
   </p>
   <div class="actions">
    <a id="deletePost" href="/forum" @click.prevent.stop="deletePost()">
  </div>

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
      const res = await axios.delete(`http://localhost:3000/api/v1/user/${JSON.parse(localStorage.getItem('post')).id}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
          },
        });
      const deletedPost = res.data;
      // eslint-disable-next-line no-console
      console.log(deletedPost);
      bus.$emit('close-popup');
    },
  },
};
</script>
