import posts from './data/post'

const fetch = (mockData, time = 0) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockData)
    }, time)
  })
}

export default {
  fetchPosts () {
    return fetch(posts, 0) // wait 1s before returning posts
  }
}

// import posts from './data/posts'

// const fieldService = new FieldService();

// const influencers = await fieldService.getInfluencers();