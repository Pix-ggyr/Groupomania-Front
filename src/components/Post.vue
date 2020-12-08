<template>
  <section class="body" @click.prevent.stop="closePopup">
    <div class="post">
      <div class="author">
        <img
          class="user-avatar"
          :src="
            user.avatar ||
              'https://t3.ftcdn.net/jpg/01/18/01/98/360_F_118019822_6CKXP6rXmVhDOzbXZlLqEM2ya4HhYzSV.jpg'
          "
          alt="profile-picture"
        />
        <p class="user-name-feed">{{ fullname }}</p>
      </div>
      <div class="content">
        <div class="top">
          <h3 class="post-title">{{ post.title }}</h3>
          <div
            class="edit"
            v-if="this.post.userId === userVerified || userIsAdmin"
          >
            <div @click.prevent.stop="showPopupEditPost()" class="edit-post">
              <i class="fas fa-edit"></i>
            </div>
            <div
              @click.prevent.stop="showPopupDeletePost()"
              class="delete-post"
            >
              <i class="fas fa-trash-alt"></i>
            </div>
          </div>
        </div>
        <img v-if="post.image" class="gif" :src="post.image" />
        <p v-html="post.content"></p>
      </div>
      <div class="reaction">
        <div class="like" @click.prevent.stop="toggleLike()">
          <i class="fas fa-heart"></i>
          <span class="like-count">{{ likes }}</span>
        </div>
        <div class="dislike" @click.prevent.stop="toggleDislike()">
          <i class="fas fa-heart-broken"></i>
          <span class="dislike-count">{{ dislikes }}</span>
        </div>
      </div>
    </div>
    <PopupEditPost v-if="displayPopupEditPost" :post="post" />
    <PopupDeletePost v-if="displayPopupDeletePost" :post="post" />
  </section>
</template>

<script>
import PopupEditPost from '@/components/popups/PopupEditPost';
import PopupDeletePost from '@/components/popups/PopupDeletePost';
import axios from 'axios';
import bus from '@/bus';

export default {
  components: {
    PopupEditPost,
    PopupDeletePost,
  },
  name: 'Post',
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      displayPopupEditPost: false,
      displayPopupDeletePost: false,
      user: {},
      reacts: [],
    };
  },
  async created() {
    bus.$on('close-popup', this.closePopupEditPost);
    bus.$on('close-popup', this.closePopupDeletePost);
    const user = await axios.get(
      `http://localhost:3000/api/v1/user/${this.post.userId}`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
      },
    );
    this.user = user.data;
    this.fetchReactions();
  },
  methods: {
    showPopupEditPost() {
      this.displayPopupEditPost = true;
    },

    closePopupEditPost() {
      this.displayPopupEditPost = false;
    },

    showPopupDeletePost() {
      this.displayPopupDeletePost = true;
    },

    closePopupDeletePost() {
      this.displayPopupDeletePost = false;
    },

    closePopup() {
      // console.log(this);
      // console.log('coucou');
      if (!this.$el.classList.contains('blurry')) return;
      bus.$emit('close-popup');
    },

    async fetchReactions() {
      const reacts = await axios.get(
        `http://localhost:3000/api/v1/react?postId=${this.post.id}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
          },
        },
      );
      this.reacts = reacts.data;
    },

    toggleLike() {
      this.toggleReaction('like');
    },
    toggleDislike() {
      this.toggleReaction('dislike');
    },
    toggleReaction(type) {
      // eslint-disable-next-line no-unused-vars
      axios
        .post(
          'http://localhost:3000/api/v1/react',
          {
            postId: this.post.id,
            type,
          },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
            },
          },
        )
        .then(() => {
          this.fetchReactions();
        })
        .catch(async (error) => {
          if (error.message === 'Request failed with status code 409') {
            const user = JSON.parse(localStorage.getItem('user'));
            // eslint-disable-next-line no-unused-vars
            const deleteReact = await axios.delete(
              `http://localhost:3000/api/v1/react?userId=${user.id}&postId=${this.post.id}&type=${type}`,
              {
                headers: {
                  Authorization: `Bearer ${localStorage.getItem(
                    'accessToken',
                  )}`,
                },
              },
            );
            this.fetchReactions();
          }
        });
    },
  },
  computed: {
    fullname() {
      return `${this.user.firstname} ${this.user.lastname}`;
    },
    likes() {
      return this.reacts.filter((react) => react.type === 'like').length;
    },
    dislikes() {
      return this.reacts.filter((react) => react.type === 'dislike').length;
    },
    myUser() {
      return JSON.parse(localStorage.getItem('user'));
    },
    userVerified() {
      return this.myUser.id;
    },
    userIsAdmin() {
      return this.myUser.isAdmin;
    },
  },
};
</script>

<style lang="scss" scoped>
/* Post content style */
section.body {
  min-height: 0;
}

.content {
  flex: 1 0 0;
  padding: 15px;
}

.post > .author > .user-avatar {
  width: 90px;
  height: 90px;
  object-fit: cover;
  border-radius: 99px;
}

.post-title {
  font-size: 22px;
  color: #2274a5;
  align-self: flex-start;
  margin-block-start: 0;
  margin-block-end: 0;
}

.gif {
  max-width: 400px;
  width: 100%;
}

/* Post edit-delete style */
.top {
  display: flex;
  flex-flow: row;
  justify-content: space-between;
}

.edit {
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: flex-end;
  width: 50px;
}

.edit > .delete-post,
.edit-post {
  padding: 10px;
  font-size: 20px;
  color: lightcoral;
  cursor: pointer;
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
  cursor: pointer;
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
  cursor: pointer;
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

  .post > .author > .user-avatar {
    height: 50px;
    width: 50px;
    object-fit: cover;
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
