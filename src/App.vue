<template>
  <div>
    <b-container class="mt-4">
      <b-row class="header">
        <b-col></b-col>
        <b-col @click="sortingList('followers')">Подписчиков</b-col>
        <b-col @click="sortingList('er')">Подписок</b-col>
      </b-row>
      <b-row  v-for="(influencer, index) in influencers" :key="index">
        <b-col>
          <personal-inform 
            :imgSrc="influencer.avatarUrl"
            :name="influencer.name"
            :fullName="influencer.fullName"
            :url="influencer.profileUrl"
          ></personal-inform>
        </b-col>
        <b-col>{{influencer.followers}}</b-col>
        <b-col>{{influencer.er}}</b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import PersonalInform from './components/personal-inform'
export default {
  components: {PersonalInform},
  data () {
    return {
      ascDirection: true
    }
  },
  computed: {
    influencers () {
      return this.$store.state.influencers
    },
  },
  created () {
    this.$store.dispatch('fetchInfluencers')
  },
  methods: {
    sortingList (sortType) {
      let direction = this.ascDirection
      this.influencers.sort(function(a, b) {
        if (direction) {
          return a[sortType] < b[sortType] ? -1 : 1
        } else {
           return a[sortType] < b[sortType] ? 1 : -1
        }
      })
      this.ascDirection = !this.ascDirection
    }
  }
}
</script>

<style scoped>
.header div {
  cursor:pointer;
}

.col,
.col div {
  display: flex;
  align-items: center;
}

.row {
  border-bottom: 1px solid #ddd
}

.row:hover {
  background-color: #ddd;
}
</style>