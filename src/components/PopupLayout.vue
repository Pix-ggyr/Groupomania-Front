<template>
  <portal to="popup">
    <section class="popup">
      <header class="popup-header">
        <h1 class="popup-title">{{ title }}</h1>
        <button class="popup-close-btn" @click.prevent="closePopup()">
          X
        </button>
      </header>
      <form class="popup-form">
        <slot></slot>
        <div class="popup-submit-btn">
          <input
            type="button"
            value="Cancel"
            @click.prevent.stop="closePopup()"
          />
          <input type="submit" value="Submit" @click.prevent.stop="callback" />
        </div>
      </form>
    </section>
  </portal>
</template>

<script>
import bus from '@/bus';

export default {
  name: 'PopupLayout',
  mounted() {
    document.querySelector('.body').classList.add('blurry');
    document.querySelector('.section').classList.add('blurry');
  },
  beforeDestroy() {
    document.querySelector('.body').classList.remove('blurry');
    document.querySelector('.section').classList.remove('blurry');
  },
  methods: {
    closePopup() {
      bus.$emit('close-popup');
    },
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    callback: { type: Function, required: true },
  },
};
</script>

<style lang="scss" scoped>
section.popup {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
