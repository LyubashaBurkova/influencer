import axios from 'axios'

export default {
  fetchPosts () {
    return axios
      .get('')
      .then(response => response.data)
  }
}