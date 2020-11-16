<template>
  <portal to="popup">
    <section class="popup">
      <header class="popup-header">
        <h1 class="popup-title">Register now !</h1>
        <button class="popup-close-btn">X</button>
      </header>
      <form class="popup-form">
        <slot></slot>
        <div class="popup-submit-btn">
          <input type="button" value="Cancel" />
          <input type="submit" value="Submit" />
        </div>
      </form>
    </section>
  </portal>
</template>

<script>
export default {
  name: 'PopupLayout',
  mounted() {
    document.querySelector('.body').classList.add('blurry');
  },
  beforeDestroy() {
    document.querySelector('.body').classList.remove('blurry');
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
