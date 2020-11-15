<template>
  <section class="body">
    <div class="post">
      <div class="author">
        <img
          class="user-pp"
          src="../assets/male-user-1.jpg"
          alt="male-user-1"
        />
        <p class="user-name-feed">Alexis Poulpe</p>
      </div>
      <div class="content">
        <h3 class="post-title">Can you imagine if cats had thumbs ? OMG</h3>
        <img
          class="gif-mini"
          src="https://media1.tenor.com/images/4be9b01498c57513dedbc82787394f4d/tenor.gif?itemid=5687427"
          alt="cat-with-thumbs-gif"
        />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
          sollicitudin lacus felis, sed efficitur ligula accumsan ac. Donec
          consequat nibh arcu, at rutrum est rutrum vel.
        </p>
        <div class="feed-reaction">
          <div class="feed-like">
            <i class="fas fa-heart"></i>
            <span class="feed-like-count">25</span>
          </div>
          <div class="feed-dislike">
            <i class="fas fa-heart-broken"></i>
            <span class="feed-dislike-count">3</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'PostMini',
};
</script>
