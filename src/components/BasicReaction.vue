<template>
  <div
    :class="{
      'new-user': activity.type === 'register',
      'new-reaction': activity.type === 'react',
    }"
  >
    <p>
      <i
        class="fas"
        :class="{
          'fa-user-check': activity.type === 'register',
          'fa-clipboard-list': activity.type === 'react',
        }"
      ></i
      ><span class="red"> {{ fullname }}</span> {{ message }} !
    </p>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'BasicReaction',
  data() {
    return {
      user: {},
    };
  },
  props: {
    activity: {
      type: Object,
      required: true,
    },
  },
  computed: {
    fullname() {
      return `${this.user.firstname} ${this.user.lastname}`;
    },
    message() {
      return this.activity.type === 'register'
        ? 'has join the community'
        : 'just reacted to a post';
    },
  },
  async created() {
    const user = await axios.get(
      `http://localhost:3000/api/v1/user/${this.activity.userId}`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
      },
    );
    this.user = user.data;
  },
};
</script>

<style lang="scss" scoped>
i,
.fas {
  color: darkblue;
}
</style>
