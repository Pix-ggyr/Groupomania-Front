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

<style lang="scss" scoped>
/* Post content style */

.content {
  flex: 1 0 0;
  padding: 15px;
}

.post > .author > .user-pp {
  width: 90px;
  border-radius: 99px;
}

.post-title {
  font-size: 22px;
  color: #2274a5;
  align-self: flex-start;
}

.gif {
  max-width: 400px;
  width: 100%;
}

/* Reaction style */

.reaction {
  background-color: #ffd7d7;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: space-around;
  width: 100px;
  flex: 0 0 100px;
}

.reaction > .like {
  display: flex;
  flex-flow: row wrap;
  align-items: center;
}

.reaction > .like i,
.like-count {
  padding-left: 8px;
  color: #fd2d01;
  font-size: 21px;
}

.reaction > .dislike {
  display: flex;
  flex-flow: row wrap;
  align-items: center;
}

.reaction > .dislike i,
.dislike-count {
  padding-left: 8px;
  color: #2274a5;
  font-size: 21px;
}

/* Media query */

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
