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
      'https://png.pngtree.com/png-vector/20190710/ourlarge/pngtree-user-vector-avatar-png-image_1541962.jpg';
    this.avatar = user.avatar || defaultPp;
  },
};
</script>
