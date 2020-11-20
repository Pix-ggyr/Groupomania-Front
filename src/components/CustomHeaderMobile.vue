<template>
  <div>
    <header>
      <nav>
        <ul>
          <li>
            <a href="home.html"
              ><img
                src="../assets/icon-left-font-monochrome-white.png"
                alt="groupomania logo"
            /></a>
          </li>
          <li>
            <a>
              logout
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
ul {
  list-style: none;
  margin: 0;
  left: 0;
}
</style>
