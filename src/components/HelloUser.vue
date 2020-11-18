<template>
  <span class="red">{{ Jeanne }}</span>
</template>

<script>
export default {
  name: 'HelloUser',
  props: {
    user: {
      userId: { type: Number, required: true },
      userFirstname: { type: String, required: true },
    },
  },
};
</script>
