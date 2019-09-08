import makeApiCalls from './makeApiCalls.js'
export default {
  fetchPlanets (callback) {
    var url = '/planets'
    makeApiCalls.makeGetRequest(url, callback)
  },
  fetchToken (callback) {
    var url = '/token'
    makeApiCalls.makePostRequest(url, callback, {})
  },
  fetchVehicles (callback) {
    var url = '/vehicles'
    makeApiCalls.makeGetRequest(url, callback)
  },
  fetchResults (callback, payload) {
    var url = '/find'
    makeApiCalls.makePostRequest(url, callback, payload)
  }
}
