<template>
  <div class="home">
    <span v-if="loading">Loading…</span>
    <ul
      v-else
      class="posts"
    >
      <li
        v-for="post in posts"
        :key="post.title"
        class="post-item"
      >
          <h1>{{ post.title }}</h1>
      </li>
    </ul>
    {{influencers}}
    {{fields}}
  </div>
</template>

<script>
export default {
  data () {
    return {
      loading: false
    }
  },

  computed: {
    posts () {
      console.log('ap  posts', this.$store.state.posts)
      return this.$store.state.posts
    },
    fields () {
      console.log('ap  fields', this.$store.state.fields)
      return this.$store.state.fields
    },
    influencers () {
      console.log('app influencers', this.$store.state.influencers)
      return this.$store.state.influencers
    },
  },

  created () {
    this.loading = true
    this.$store.dispatch('fetchPosts')
      .then(posts => {
        console.log('postp', posts)
        this.loading = false
      })
    this.$store.dispatch('fetchFields')
      .then(fields => {
        console.log('fieldas', fields)
        this.loading = false
    })
    this.$store.dispatch('fetchInfluencers')
      .then(influencers => {
        console.log('getInfluencers', influencers)
        this.loading = false
      })
  }
  // created () {
  //   fetch ('https://jsonplaceholder.typicode.com/posts')
  //   .then(post => {
  //     console.log(post)
  //     return post.json()
  //   })
  // }
}
</script>

<style scoped>
.posts {
  list-style: none;
  text-align: left;
}

.post-item + .post-item {
  border-top: 1px solid rgba(0, 0, 0, 0.1);
}
</style>