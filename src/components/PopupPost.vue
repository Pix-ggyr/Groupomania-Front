<template>
  <PopupLayout title="Create your post !" :callback="post">
    <label for="post-title">Your title (required) :</label>
    <input
      v-model="title"
      type="text"
      id="post-title"
      name="post-title"
      aria-label="post-title"
      placeholder="Give your post a title"
      required
    />
    <label for="create-post-content">Your text :</label>
    <div class="tiptap-editor">
      <Tiptap :content="content" @input="content = $event" />
    </div>
    <label for="add-gif-to-post">Your gif: </label>
    <input
      class="gif-url"
      type="text"
      placeholder="Paste gif link here"
      v-model="image"
    />
  </PopupLayout>
</template>

<script>
import PopupLayout from '@/components/PopupLayout';
import Tiptap from '@/components/Tiptap';
import bus from '@/bus';
import axios from 'axios';

export default {
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
    async post() {
      await axios.post(
        'http://localhost:3000/api/v1/post',
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
      bus.$emit('posted');
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
