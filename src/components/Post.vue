<template>
  <div class="post">
    <div class="author">
      <img
        class="user-pp"
        :src="author.avatar"
        alt="user-name-profile-picture"
      />
      <p class="user-name-feed">{{ author.firstname }} {{ author.name }}</p>
    </div>
    <div class="content">
      <h3 class="post-title">{{ title }}</h3>
      <img class="gif" :src="img" />
      <p>
        {{ content }}
      </p>
    </div>
    <div class="reaction">
      <div class="like">
        <i class="fas fa-heart"></i>
        <span class="like-count">{{ reacts.likes }}</span>
      </div>
      <div class="dislike">
        <i class="fas fa-heart-broken"></i>
        <span class="dislike-count">{{ reacts.dislikes }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Post',
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
