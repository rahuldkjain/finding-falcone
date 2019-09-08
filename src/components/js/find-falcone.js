import { mapGetters } from 'vuex'
export default {
  data: () => ({
    currentArmyNumber: 1,
    armiesPrepared: [],
    progress: 0,
    chosenArmies: {
      1: {},
      2: {},
      3: {},
      4: {}
    },
    chosenPlanet: '',
    chosenVehicle: '',
    availablePlanets: [],
    availableVehicles: [],
    payload: {
      'token': 'ewPSvFVdgBeiQljMhpBoMeUTxnVkpkNP',
      'planet_names': [],
      'vehicle_names': []
    }
  }),
  watch: {
    getPlanets: function (newValue) {
      newValue.forEach(planet => {
        this.availablePlanets.push({ name: planet.name, disabled: false })
      })
    },
    getVehicles: function (newValue) {
      this.availableVehicles = newValue
    },
    getFindFalcone: function (newValue) {
      console.log(newValue)
    },
    getToken: function (newValue) {
      this.payload.token = newValue.token
    },
    armiesPrepared: function (newValue) {
      this.progress = newValue.length * 25
    }
  },
  created () {
    this.$store.dispatch('fetchPlanets')
    this.$store.dispatch('fetchVehicles')
    this.$store.dispatch('fetchToken')
  },
  computed: {
    ...mapGetters(['getPlanets', 'getVehicles', 'getFindFalcone', 'getToken']),
    enableAttack () {
      return this.progress === 100
    }
  },
  methods: {
    arrayRemove (arr, value) {
      return arr.filter(function (ele) {
        return ele !== value
      })
    },
    prepareArmy () {
      if (this.chosenPlanet && this.chosenVehicle) {
        // Case 1: chosenPlanet[currentArmyNumber] already filled
        if (this.chosenArmies[this.currentArmyNumber].planet) {
          // if planet is changed
          if (this.chosenArmies[this.currentArmyNumber].planet !== this.chosenPlanet) {
            for (var index = 0; index < this.availablePlanets.length; index++) {
              if (this.availablePlanets[index].name === this.chosenPlanet) {
                this.availablePlanets[index].disabled = true
              }
              if (this.availablePlanets[index].name === this.chosenArmies[this.currentArmyNumber].planet) {
                this.availablePlanets[index].disabled = false
              }
            }
            this.chosenArmies[this.currentArmyNumber].planet = this.chosenPlanet
          } else {
            // vehicle is changed
            // increase the count of previously selected vehicle
            for (var index = 0; index < this.availableVehicles.length; index++) {
              if (this.availableVehicles[index].name === this.chosenArmies[this.currentArmyNumber].vehicle) {
                this.availableVehicles[index].total_no += 1
              }
            }

            // change the vehicle of current army
            this.chosenArmies[this.currentArmyNumber].vehicle = this.chosenVehicle

            // reduce the count of chosenVehicle
            for (var index = 0; index < this.availableVehicles.length; index++) {
              if (this.availableVehicles[index].name === this.chosenVehicle) {
                this.availableVehicles[index].total_no -= 1
              }
            }
          }
        } else {
          this.chosenArmies[this.currentArmyNumber]['planet'] = this.chosenPlanet
          this.chosenArmies[this.currentArmyNumber]['vehicle'] = this.chosenVehicle

          // disable selected planet
          for (var index = 0; index < this.availablePlanets.length; index++) {
            if (this.availablePlanets[index].name === this.chosenPlanet) {
              this.availablePlanets[index].disabled = true
              break
            }
          }

          // reduce the count of selected vehicle
          for (var index = 0; index < this.availableVehicles.length; index++) {
            if (this.availableVehicles[index].name === this.chosenVehicle) {
              this.availableVehicles[index].total_no -= 1
            }
          }
          this.armiesPrepared.push(this.currentArmyNumber)
          this.progress = this.armiesPrepared.length * 25
        }
      }
    },
    configureArmy (armyNumber) {
      this.currentArmyNumber = armyNumber
      this.chosenPlanet = this.chosenArmies[armyNumber].planet
      this.chosenVehicle = this.chosenArmies[armyNumber].vehicle
    },
    attack () {
      for (var index = 1; index <= this.armiesPrepared.length; index++) {
        this.payload.planet_names.push(this.chosenArmies[index].planet)
        this.payload.vehicle_names.push(this.chosenArmies[index].vehicle)
      }
      this.$store.dispatch('fetchFindFalcone', this.payload)
    }
  }
}
