<template>
  <div class="my-pp">
    <a href="/profile"><img :src="avatar" alt="my-profile-picture"/></a>
  </div>
</template>

<script>
export default {
  name: 'Mypp',
  data() {
    return {
      avatar: null,
    };
  },
  created() {
    const user = JSON.parse(localStorage.getItem('user'));
    // eslint-disable-next-line
    const defaultPp =
      'https://t3.ftcdn.net/jpg/01/18/01/98/360_F_118019822_6CKXP6rXmVhDOzbXZlLqEM2ya4HhYzSV.jpg';
    this.avatar = user.avatar || defaultPp;
  },
};
</script>
