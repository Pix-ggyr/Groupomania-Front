<template>
  <div class="post">
    <div class="author">
      <img class="user-pp" :src="author.avatar" />
      <p class="user-name-feed">{{ author.firstname }} {{ author.name }}</p>
    </div>
    <div class="content">
      <h3 class="post-title">{{ title }}</h3>
      <img class="gif-mini" :src="img" />
      <p>
        {{ content }}
      </p>
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
export default {
  name: 'PostMini',
  props: {
    userId: { type: Number, required: true },
    author: {
      name: { type: String, required: true },
      firstname: { type: String, required: true },
      avatar: { type: String, required: true },
    },
    title: { type: String, required: true },
    content: { type: String, required: false },
    img: { type: String, required: false },
    reacts: {
      likes: { type: Number, required: true },
      dislikes: { type: Number, required: true },
    },
  },
};
</script>

<style lang="scss" scoped>
/* Post content style */

.content {
  flex: 1 0 0;
  padding: 15px;
}

.post-title {
  font-size: 22px;
  color: #2274a5;
  align-self: flex-start;
}

.gif-mini {
  width: 150px;
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
</style>
