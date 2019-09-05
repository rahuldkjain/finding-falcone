import Vue from 'vue'
import Vuex from 'vuex'
import findFalconeApis from '../src/apis/findFalconeApis'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    planets: [],
    vehicles: [],
    findFalcone: {}
  },
  mutations: {
    setPlanets (state, value) {
      state.planets = value.data
    },
    setVehicles (state, value) {
      state.vehicles = value.data
    },
    setFindFalcone (state, value) {
      state.findFalcone = value.data
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
    getFindFalcone: (state) => {
      return state.findFalcone
    }
  }
})
