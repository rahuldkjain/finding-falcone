import { mapGetters } from 'vuex'
export default {
  data: () => ({
    planetsManual: {},
    vehiclesManual: {},
    loadResult: false,
    findFalcone: {},
    displayResults: false,
    timeTaken: 0,
    loadPlanets: true,
    loadVehicles: true,
    currentArmyNumber: 1,
    armiesPrepared: [],
    progress: 0,
    chosenPlanet: '',
    chosenVehicle: '',
    availablePlanets: [],
    availableVehicles: [],
    chosenArmies: {
      1: {},
      2: {},
      3: {},
      4: {}
    },
    payload: {
      'token': '',
      'planet_names': [],
      'vehicle_names': []
    },
    freeTexts: {
      title: 'Finding Falcone',
      subTitle: 'Highness, please select 4 planets and vehicles to send army to find Falcone',
      configureArmy: 'Configure Army',
      timeTaken: 'Time Taken',
      progress: 'Progress',
      armyBaseHeading: 'Army Base',
      availableDestination: 'Available Destination',
      availableVehicles: 'Available Vehicles',
      attackButton: 'Find Falcone',
      findFalconeSuccess: 'Success! Congratulations on Finding Falcone. King Shan is mighty pleased.',
      findFalconeFailure: 'Awwwww! Failed to Find Falcone. King Shan is upset.',
      findFalconeFailureSubHeading: 'Press Start Again to try your luck again.',
      startAgainButton: 'Start Again',
      geektrustURL: 'www.geektrust.in/finding-falcone',
      codingProblem: 'Coding Problem',
      planetFound: 'Planet Found'
    },
  }),
  watch: {
    // assign planets to availablePlanets on API success
    getPlanets: function (newValue) {
      // prepare planets manual using Planet Name as key
      let index = 0
      newValue.forEach(planet => {
        this.availablePlanets.push({ name: planet.name, distance: planet.distance, disabled: false })
        this.planetsManual[planet.name] = index
        index += 1
      })
      this.loadPlanets = false
    },

    // assign vehicles to availableVehicles on API success
    getVehicles: function (newValue) {
      // prepare vehicles manual using Vehicle Name as key
      for (var index = 0; index < newValue.length; index++) {
        this.vehiclesManual[newValue[index].name] = index
      }
      this.availableVehicles = newValue
      this.loadVehicles = false
    },

    // assign findFalcone results to findFalcone on API success
    getFindFalcone: function (newValue) {
      this.findFalcone = newValue
      this.displayResults = true
      this.loadResult = false
    },

    // assign token on API success
    getToken: function (newValue) {
      this.payload.token = newValue.token
    },

    // to keep progress in check
    armiesPrepared: function (newValue) {
      this.progress = newValue.length * 25
    }
  },
  created () {
    // api call to fetch planets
    this.$store.dispatch('fetchPlanets')

    // api call to fetch vehicles
    this.$store.dispatch('fetchVehicles')

    // api call to fetch token
    this.$store.dispatch('fetchToken')
  },
  computed: {
    ...mapGetters(['getPlanets', 'getVehicles', 'getFindFalcone', 'getToken', 'getFindFalcone']),

    // enable Attack only when progress is 100
    enableAttack () {
      return this.progress === 100
    },

    // for loader
    loading () {
      return this.loadPlanets || this.loadVehicles
    }
  },
  methods: {
    prepareArmy () {
      if (this.chosenPlanet && this.chosenVehicle) {
        if (this.chosenArmies[this.currentArmyNumber].planet) {
          // if planet is changed
          if (this.chosenArmies[this.currentArmyNumber].planet !== this.chosenPlanet) {
            this.availablePlanets[this.planetsManual[this.chosenPlanet]].disabled = true
            this.availablePlanets[this.planetsManual[this.chosenArmies[this.currentArmyNumber].planet]].disabled = false
            this.chosenArmies[this.currentArmyNumber].planet = this.chosenPlanet
          } else {
            // if vehicle is changed

            // increase the count of previously selected vehicle
            let index1 = this.vehiclesManual[this.chosenArmies[this.currentArmyNumber].vehicle]
            this.availableVehicles[index1].total_no += 1
            this.timeTaken -= this.availableVehicles[index1]['max_distance'] / this.availableVehicles[index1]['speed']

            // reduce the count of chosenVehicle
            let index2 = this.vehiclesManual[this.chosenVehicle]
            this.availableVehicles[index2].total_no -= 1
            this.timeTaken += this.availableVehicles[index2]['max_distance'] / this.availableVehicles[index2]['speed']

            // change the vehicle of current army
            this.chosenArmies[this.currentArmyNumber].vehicle = this.chosenVehicle
          }
        } else {
          // assign planet and vehicle to respective army
          this.chosenArmies[this.currentArmyNumber]['planet'] = this.chosenPlanet
          this.chosenArmies[this.currentArmyNumber]['vehicle'] = this.chosenVehicle

          // disable selected planet
          this.availablePlanets[this.planetsManual[this.chosenPlanet]].disabled = true

          // reduce the count of selected vehicle
          let index = this.vehiclesManual[this.chosenVehicle]
          this.availableVehicles[index].total_no -= 1
          this.timeTaken += this.availableVehicles[index]['max_distance'] / this.availableVehicles[index]['speed']

          this.armiesPrepared.push(this.currentArmyNumber)
          this.progress = this.armiesPrepared.length * 25
        }
      }
    },

    // on-click configure army buttons
    configureArmy (armyNumber) {
      this.currentArmyNumber = armyNumber
      this.chosenPlanet = this.chosenArmies[armyNumber].planet
      this.chosenVehicle = this.chosenArmies[armyNumber].vehicle
    },

    // Find Falcone on 100% Progress
    attack () {
      for (var index = 1; index <= this.armiesPrepared.length; index++) {
        this.payload.planet_names.push(this.chosenArmies[index].planet)
        this.payload.vehicle_names.push(this.chosenArmies[index].vehicle)
      }
      this.loadResult = true
      this.displayResults = true
      this.$store.dispatch('fetchFindFalcone', this.payload)
    },

    // reset the whole form
    reset () {
      this.planetsManual = {}
      this.vehiclesManual = {}
      this.displayResults = false
      this.findFalcone = {}
      this.timeTaken = 0
      this.loadPlanets = true
      this.loadVehicles = true
      this.currentArmyNumber = 1
      this.armiesPrepared = []
      this.progress = 0
      this.loadResult = false
      this.chosenPlanet = ''
      this.chosenVehicle = ''
      this.availablePlanets = []
      this.availableVehicles = []
      this.chosenArmies = {
        1: {},
        2: {},
        3: {},
        4: {}
      }
      this.payload = {
        'token': '',
        'planet_names': [],
        'vehicle_names': []
      }
      this.$store.dispatch('fetchPlanets')
      this.$store.dispatch('fetchVehicles')
      this.$store.dispatch('fetchToken')
    }
  }
}
