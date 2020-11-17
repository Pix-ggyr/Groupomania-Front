<template>
  <div class="post">
    <div class="author">
      <img
        class="user-pp"
        src="../assets/cat-user.jpg"
        alt="user-name-profile-picture"
      />
      <p class="user-name-feed">John Sembranle</p>
    </div>
    <div class="content">
      <h3 class="post-title">Pumpkin time is coming !</h3>
      <img
        class="gif"
        src="https://media1.tenor.com/images/d2d817f9f1a14f3805e6a7487169e5ee/tenor.gif?itemid=16584815"
        alt="alt-sample"
      />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
        sollicitudin lacus felis, sed efficitur ligula accumsan ac. Donec
        consequat nibh arcu, at rutrum est rutrum vel.
      </p>
    </div>
    <div class="reaction">
      <div class="like">
        <i class="fas fa-heart"></i>
        <span class="like-count">76</span>
      </div>
      <div class="dislike">
        <i class="fas fa-heart-broken"></i>
        <span class="dislike-count">13</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Post',
};
</script>
