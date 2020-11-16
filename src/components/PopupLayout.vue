<template>
  <section class="body">
    <main class="popup">
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
    </main>
  </section>
</template>

<script>
export default {
  name: 'PopupLayout',
};
</script>
