<template>
  <header class="top-header">
    <div class="logo-header">
      <a href="/home"
        ><img
          src="../assets/icon-left-font-monochrome-white.png"
          alt="groupomania logo"
      /></a>
    </div>
    <div class="menu-header">
      <nav>
        <ul>
          <li><a href="/home">Home</a></li>
          <li><a href="/forum">Forum</a></li>
          <li><a href="/profile">Profile</a></li>
          <li class="logout">
            <a href="/logout"><i class="fas fa-power-off"></i></a>
          </li>
        </ul>
      </nav>
    </div>
    <Mypp />
  </header>
</template>

<script>
import Mypp from '@/components/Mypp';

export default {
  name: 'CustomHeaderDesktop',
  components: {
    Mypp,
  },
};
</script>
