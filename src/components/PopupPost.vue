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
    <Tiptap />
    <br />
    <div class="popup-submit-btn">
      <input type="button" value="Add an image" />
      <button><i class="far fa-trash-alt"></i></button>
    </div>
  </PopupLayout>
</template>

<script>
import PopupLayout from '@/components/PopupLayout';
import Tiptap from '@/components/Tiptap';

export default {
  components: {
    PopupLayout,
    Tiptap,
  },
};
</script>
