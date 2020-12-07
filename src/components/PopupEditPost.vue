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
    async updatePost() {
      const res = await axios.put(
        `http://localhost:3000/api/v1/post/${this.post.id}`,
        this.updatedFields,
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
  computed: {
    updatedFields() {
      return {
        title: this.title !== this.post.title ? this.title : undefined,
        content: this.content !== this.post.content ? this.content : undefined,
        image: this.image !== this.post.image ? this.image : undefined,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
input.gif-url {
  margin-bottom: 20px;
}
</style>
