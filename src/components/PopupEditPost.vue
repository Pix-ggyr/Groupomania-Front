<template>
  <PopupLayout title="Edit your post" :callback="updatePost">
    <label for="p-title">New title: </label>
    <input
      type="text"
      v-model="title"
      id="p-title"
      aria-label="update post title"
      placeholder="Your new title"
    />
    <label for="p-content">New content: </label>
    <textarea
      type="text"
      v-model="content"
      id="p-content"
      aria-label="update post content"
      placeholder="Your new content"
    ></textarea>
    <label for="p-image">Paste your new GIF here: </label>
    <input
      class="gif-url"
      type="text"
      v-model="image"
      id="p-image"
      aria-label="update post gif"
      placeholder="Paste your new link here"
    />
  </PopupLayout>
</template>

<script>
import PopupLayout from '@/components/PopupLayout';
import bus from '@/bus';
import axios from 'axios';

export default {
  name: 'PopupEditPost',
  components: {
    PopupLayout,
  },
  data() {
    return {
      title: '',
      content: '',
      image: '',
    };
  },
  methods: {
    async updatePost() {
      const res = await axios.put(
        `http://localhost:3000/api/v1/post/${
          JSON.parse(localStorage.getItem('post')).id
        }`,
        {
          title: this.title,
          content: this.content,
          image: this.image,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
          },
        },
      );
      const updatedPost = res.data;
      bus.$emit('updated-post', updatedPost);
      bus.$emit('close-popup');
    },
  },
};
</script>

<style lang="scss" scoped>
input.gif-url {
  margin-bottom: 20px;
}
</style>
