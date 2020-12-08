<template>
  <PopupLayout title="Caution !" :callback="deletePost">
    <p>You are about to delete your post.<br />Are you sure you want to so ?</p>
  </PopupLayout>
</template>

<script>
import PopupLayout from '@/components/popups/PopupLayout';
import axios from 'axios';
import bus from '@/bus';

export default {
  name: 'PopupDeletePost',
  components: {
    PopupLayout,
  },
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      content: '',
      title: '',
      image: '',
    };
  },
  created() {
    const { title, content, image } = this.post;
    this.title = title;
    this.content = content;
    this.image = image;
  },
  methods: {
    async deletePost() {
      const res = await axios.delete(
        `http://localhost:3000/api/v1/post/${this.post.id}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
          },
        },
      );
      // eslint-disable-next-line no-unused-vars
      const deletedPost = res.data;
      bus.$emit('close-popup');
    },
  },
};
</script>

<style lang="scss" scoped>
p {
  color: white;
  text-align: center;
  font-size: 16px;
}
</style>
