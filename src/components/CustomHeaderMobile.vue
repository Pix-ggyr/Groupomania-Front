<template>
  <div>
    <header class="mobile-header">
      <nav>
        <ul>
          <li class="logo-mobile-header">
            <a href="home.html"
              ><img
                src="../assets/icon-left-font-monochrome-white.png"
                alt="groupomania logo"
            /></a>
          </li>
          <li>
            <a href="/logout">
              <i class="fas fa-power-off"></i>
            </a>
          </li>
        </ul>
      </nav>
    </header>
    <BottomNav />
  </div>
</template>

<script>
import BottomNav from '@/components/BottomNav.vue';

export default {
  name: 'CustomHeaderMobile',
  components: {
    BottomNav,
  },
};
</script>

<style lang="scss" scoped>
header,
.mobile-header {
  height: 100px;
  background-color: red;
  display: flex;
  flex-direction: row;
  justify-content: center;
}

header,
.mobile-header > nav,
ul {
  display: flex;
  flex-direction: column;
  align-items: center;
  list-style: none;
  margin: 0;
  left: 0;
  margin-block-start: 0;
  margin-block-end: 0;
  padding-inline-start: 0;
}

li,
a {
  padding-top: 5px;
  font-size: 21px;
  font-weight: 600;
  color: white;
}
</style>
