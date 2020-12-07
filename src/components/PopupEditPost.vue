<template>
  <PopupLayout title="Edit your post" :callback="updatePost">
    <label for="post-new-title">New title: </label>
    <input
      type="text"
      v-model="title"
      id="p-title"
      aria-label="update post title"
      placeholder="Your new title"
    />
    <label for="create-new-content">New text: </label>
    <div class="tiptap-editor">
      <Tiptap :content="content" @input="content = $event" />
    </div>
    <label for="update-your-gif">Paste your new GIF here: </label>
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
import Tiptap from '@/components/Tiptap';
import bus from '@/bus';
import axios from 'axios';

export default {
  name: 'PopupEditPost',
  components: {
    PopupLayout,
    Tiptap,
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
      // eslint-disable-next-line no-console
      console.log('coucou 1');
      const res = await axios.put(
        `http://localhost:3000/api/v1/post/${this.post.id}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
          },
        },
        {
          title: this.title,
          content: this.content,
          image: this.image,
        },
      );
      const updatedPost = res.data;
      // eslint-disable-next-line no-console
      console.log('coucou 2');
      // eslint-disable-next-line no-console
      console.log(typeof updatedPost);
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
