<template>
  <PopupLayout>
    <label for="u-name">Your name :</label><br />
    <input
      type="text"
      id="u-name"
      name="u-name"
      aria-label="u-name"
      placeholder="Your last name"
    /><br />
    <label for="u-firstname">Your firstname :</label><br />
    <input
      type="text"
      id="u-firstname"
      name="u-firstname"
      aria-label="u-firstname"
      placeholder="Your last name"
      required
    /><br />
    <label for="u-description">Description :</label><br />
    <input
      type="text"
      id="u-description"
      name="u-description"
      aria-label="u-description"
      placeholder="Tell us about you !"
      maxlength="140"
    /><br />
    <div class="popup-img-btn">
      <input type="button" value="Choose a profile picture" />
    </div>
  </PopupLayout>
</template>

<script>
import PopupLayout from '@/components/PopupLayout';

export default {
  name: 'PopupEditProfile',
  components: {
    PopupLayout,
  },
};
</script>
