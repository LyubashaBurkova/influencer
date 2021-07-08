import posts from './data/post.json'
import fields from './data/fied.json'
import FieldService from './data/FieldService';
// import influencer from './../models/Influencer';

const fetch = (mockData, time = 0) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockData)
    }, time)
  })
}

const fetch1 = (mockData, time = 0) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockData)
    }, time)
  })
}

const fieldService = new FieldService();

// const influencers = async function () {
//   await fieldService.getInfluencers();
// }

const fetch2 = () => {
  return fieldService.getInfluencers();
  // return async function () {
  //   await fieldService.getInfluencers();
  // }
}

export default {
  fetchPosts () {
    return fetch(posts, 0) 
  },
  fetchFields () {
    return fetch1(fields, 0)
  },
  fetchInfluencers () {
      return fetch2()  
  }
}