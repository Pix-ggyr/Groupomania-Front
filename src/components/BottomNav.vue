<template>
  <nav class="bottom-header">
    <ul>
      <li>
        <a href="/home">
          <img class="navicon" src="@/assets/home.png" />
          Home
        </a>
      </li>
      <li>
        <a href="/forum">
          <img class="navicon" src="@/assets/forum.png" />
          Forum
        </a>
      </li>
      <li>
        <a href="/profile">
          <img class="navicon" src="@/assets/profile.png" />
          Profile
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'BottomNav',
  mounted() {
    const body = document.querySelector('body');
    body.style['padding-bottom'] = '80px';
  },
  beforeDestroy() {
    const body = document.querySelector('body');
    body.style['padding-bottom'] = '0';
  },
};
</script>

<style lang="scss" scoped>
.bottom-header {
  /* stylelint-disable */
  box-shadow: 0 1.3px 2.2px rgba(0, 0, 0, 0.011),
    0 0.6px 5.4px rgba(0, 0, 0, 0.016), 0 -1.3px 10.1px rgba(0, 0, 0, 0.02),
    0 -2.5px 18.1px rgba(0, 0, 0, 0.024), 0 3px 33.8px rgba(0, 0, 0, 0.029),
    0 100px 81px rgba(0, 0, 0, 0.04);
  /* stylelint-enable */
  display: flex;
  align-items: center;
  bottom: 0;
  left: 0;
  position: fixed;
  background-color: rgb(19, 93, 230);
  width: 100%;
  height: 80px;
}

ul {
  display: flex;
  justify-content: space-evenly;
  flex-flow: row wrap;
  list-style: none;
  margin: 0;
  left: 0;
  width: 100%;
  margin-block-start: 0;
  margin-block-end: 0;
  margin-inline-start: 0;
  margin-inline-end: 0;
  padding-inline-start: 0;
}

ul li {
  padding: 10px;
}

ul li > a {
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  text-decoration: none;
  color: white;
  font-weight: 700;
}

ul li a > .navicon {
  height: 25px;
  width: 25px;
  margin-bottom: 5px;
}
</style>
