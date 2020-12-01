<template>
  <span class="red">{{ user.firstname }}</span>
</template>

<script>
export default {
  name: 'HelloUser',
  created() {
    const user = JSON.parse(localStorage.getItem('user'));
    this.user = user;
  },
  data() {
    return {
      user: {},
    };
  },
};
</script>
