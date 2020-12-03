<template>
  <PopupLayout title="Create your post !" :callback="post">
    <label for="post-title">Your title* :</label><br />
    <input
      v-model="title"
      type="text"
      id="post-title"
      name="post-title"
      aria-label="post-title"
      placeholder="Give your post a title"
      required
    /><br />
    <label for="create-post-content">Content :</label><br />
    <Tiptap :content="content" @input="content = $event" />
    <br />
    <div class="popup-submit-btn">
      <input type="button" value="Add an image" v-model="image" />
      <button><i class="far fa-trash-alt"></i></button>
    </div>
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
      const res = await axios.post(
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
      // eslint-disable-next-line no-unused-vars
      const post = res.data;
      bus.$emit('posted');
    },
  },
};
</script>
