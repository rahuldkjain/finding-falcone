import axios from 'axios'
export default {
  makeGetRequest (path, callback) {
    axios.get(path)
      .then(callback)
      .catch((error) => { console.log(error.response) })
  },
  makePostRequest (path, callback, payload) {
    axios.post(path, payload)
      .then(callback)
      .catch((error) => { console.log(error.response) })
  },
  makePutRequest (path, callback, payload) {
    axios.put(path, payload)
      .then(callback)
      .catch((error) => { console.log(error.response) })
  },
  makeDeleteRequest (path, callback) {
    axios.delete(path)
      .then(callback)
      .catch((error) => { console.log(error.response) })
  }
}
