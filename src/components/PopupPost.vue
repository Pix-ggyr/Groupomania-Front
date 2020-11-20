<template>
  <PopupLayout title="Create your post !">
    <label for="post-title">Your title* :</label><br />
    <input
      type="text"
      id="post-title"
      name="post-title"
      aria-label="post-title"
      placeholder="Give your post a title"
      required
    /><br />
    <label for="create-post-content">Content :</label><br />
    <div id="create-post-content"></div>
    <br />
    <div class="popup-submit-btn">
      <input type="button" value="Add an image" />
      <button><i class="far fa-trash-alt"></i></button>
    </div>
  </PopupLayout>
</template>

<script>
import PopupLayout from '@/components/PopupLayout';
import { jQuery as $ } from 'jquery';
// eslint-disable-next-line
const jQuery = $;
// eslint-disable-next-line
import trumbowyg from 'trumbowyg';

export default {
  components: {
    PopupLayout,
  },
  mounted() {
    $('#create-post-content').trumbowyg();
  },
};
</script>
