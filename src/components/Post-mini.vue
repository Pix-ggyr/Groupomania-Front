<template>
  <div class="post">
    <div class="author">
      <img
        class="user-pp"
        :src="
          user.avatar ||
            'https://png.pngtree.com/png-vector/20190710/ourlarge/pngtree-user-vector-avatar-png-image_1541962.jpg'
        "
      />
      <p class="user-name-feed">{{ user.firstname }} {{ user.lastname }}</p>
    </div>
    <div class="content-mini">
      <div class="overview">
        <div class="left-gif" v-if="img">
          <img class="gif-mini" :src="img" />
        </div>
        <div class="title-text">
          <h3 class="post-title">{{ title }}</h3>
          <p>
            {{ content }}
          </p>
        </div>
      </div>
      <div class="feed-reaction">
        <div class="feed-like">
          <i class="fas fa-heart"></i>
          <span class="feed-like-count">{{ reacts.likes }}</span>
        </div>
        <div class="feed-dislike">
          <i class="fas fa-heart-broken"></i>
          <span class="feed-dislike-count">{{ reacts.dislikes }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'PostMini',
  props: {
    userId: { type: Number, required: true },
    title: { type: String, required: true },
    content: { type: String, required: false },
    img: { type: String, required: false },
  },
  async created() {
    const users = await axios.get(
      `http://localhost:3000/api/v1/user/${this.userId}/`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
      },
    );
    this.user = users.data;
  },
  data() {
    return {
      user: {},
      reacts: {
        likes: 0,
        dislikes: 0,
      },
    };
  },
};
</script>

<style lang="scss" scoped>
/* Post content style */

.content-mini {
  flex: 1 0 0;
  padding: 15px;
}

.content-mini > .overview {
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
}

.content-mini > .overview > .title-text {
  display: flex;
  flex-direction: column;
}

.post > .author > .user-pp {
  width: 90px;
  border-radius: 99px;
}

.post-title,
h3 {
  margin-block-start: 0;
  margin-block-end: 0;
  font-size: 22px;
  color: #2274a5;
  align-self: flex-start;
}

.gif-mini {
  width: 200px;
  padding-right: 20px;
}

.feed-reaction {
  display: flex;
  flex-flow: row nowrap;
  background-color: #ffd7d7;
  box-shadow: rgba(0, 0, 0, 0.356) -1px 1px 0.2em;
  justify-content: space-evenly;
  align-items: right;
  border-radius: 10px;
  margin-top: 10px;
}

.feed-reaction > .feed-like i,
.feed-like-count {
  padding-left: 8px;
  color: #fd2d01;
  font-size: 18px;
}

.feed-reaction > .feed-dislike i,
.feed-dislike-count {
  padding-left: 8px;
  color: #2274a5;
  font-size: 18px;
}

@media (max-width: 480px) {
  .post {
    flex-direction: column;
  }

  .post > .author {
    width: 100%;
    flex-direction: row;
    height: 50px;
    padding: 10px;
    flex: 0 0 50px;
  }

  .content-mini > .overview {
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
  }

  .gif-mini {
    width: 100%;
    padding-right: 0;
    padding-bottom: 20px;
  }

  .post > .author > .user-pp {
    height: 50px;
    width: 50px;
  }

  .post > .author > .user-name-feed {
    padding-left: 10px;
  }

  .post > .reaction {
    width: 100%;
    flex-direction: row;
    height: 35px;
    flex: 0 0 35px;
  }

  .post > .content > h3,
  .post-title {
    margin-block-start: 0;
    margin-block-end: 0;
    margin-bottom: 10px;
  }

  .post > .content > p {
    margin-block-start: 0;
    margin-block-end: 0;
    margin-bottom: 10px;
    padding-top: 10px;
  }
}
</style>
