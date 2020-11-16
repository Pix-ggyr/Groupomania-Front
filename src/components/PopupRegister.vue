<template>
  <PopupLayout>
    <label for="u-email">Your email* :</label><br />
    <input
      type="text"
      id="u-email"
      name="u-email"
      aria-label="u-email"
      placeholder="your.email@mail.com"
      required
    /><br />
    <label for="u-password">Your password* :</label><br />
    <input
      type="text"
      id="u-password"
      name="u-password"
      aria-label="u-password"
      placeholder="Your password"
      required
    /><br />
  </PopupLayout>
</template>

<script>
import PopupLayout from '@/components/PopupLayout';

export default {
  name: 'PopupRegister',
  components: {
    PopupLayout,
  },
};
</script>
