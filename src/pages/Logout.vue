<template>
  <div></div>
</template>
<script>
import bus from '@/bus';

export default {
  name: 'Logout',
  created() {
    bus.$emit('logout');
  },
};
</script>
