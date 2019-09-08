import Vue from 'vue'
import Vuex from 'vuex'
import findFalconeApis from '../src/apis/findFalconeApis'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    planets: [],
    vehicles: [],
    findFalcone: {},
    token: ''
  },
  mutations: {
    setPlanets (state, value) {
      state.planets = JSON.parse(JSON.stringify(value.data))
    },
    setVehicles (state, value) {
      state.vehicles = JSON.parse(JSON.stringify(value.data))
    },
    setFindFalcone (state, value) {
      state.findFalcone = value.data
    },
    setToken (state, value) {
      state.token = value.data
    }
  },
  actions: {
    fetchPlanets: (context) => {
      findFalconeApis.fetchPlanets((result) => {
        context.commit('setPlanets', result)
      })
    },
    fetchVehicles: (context) => {
      findFalconeApis.fetchVehicles((result) => {
        context.commit('setVehicles', result)
      })
    },
    fetchToken: (context) => {
      findFalconeApis.fetchToken((result) => {
        context.commit('setToken', result)
      })
    },
    fetchFindFalcone: (context, payload) => {
      findFalconeApis.fetchResults((result) => {
        context.commit('setFindFalcone', result)
      }, payload)
    }
  },
  getters: {
    getPlanets: (state) => {
      return state.planets
    },
    getVehicles: (state) => {
      return state.vehicles
    },
    getToken: (state) => {
      return state.token
    },
    getFindFalcone: (state) => {
      return state.findFalcone
    }
  }
})
