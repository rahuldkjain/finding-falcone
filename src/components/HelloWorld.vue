<template>
  <v-container>
    <v-layout text-center wrap>
      <v-flex xs12>
        <v-img :src="require('../assets/falcone.png')" class="my-3"
          contain height="200">
        </v-img>
      </v-flex>

      <v-flex mb-4>
        <h1 class="display-2 font-weight-bold mb-3">
          Finding Falcone
        </h1>
      </v-flex>

      <v-flex mb-5 xs12>
        <h2 class="headline font-weight-bold mb-3">Highness, please select 4 planets and vehicles to send army to find Falcone</h2>

        <v-layout justify-center>
        </v-layout>
      </v-flex>

      <v-flex mb-5 xs12 class="footer">
        <v-layout justify-center>
          Coding Problem- <a href="www.geektrust.in/finding-falcone"
             class="mx-3 footerLink" target="_blank">
            www.geektrust.in/finding-falcone
          </a>
        </v-layout>
      </v-flex>

    </v-layout>
  </v-container>
</template>

<script>
  import Vue from 'vue'
  import {mapGetters} from 'vuex'
export default {
  data: () => ({
    ecosystem: [
      {
        text: 'vuetify-loader',
        href: 'https://github.com/vuetifyjs/vuetify-loader',
      },
      {
        text: 'github',
        href: 'https://github.com/vuetifyjs/vuetify',
      },
      {
        text: 'awesome-vuetify',
        href: 'https://github.com/vuetifyjs/awesome-vuetify',
      },
    ],
    importantLinks: [
      {
        text: 'Documentation',
        href: 'https://vuetifyjs.com',
      },
      {
        text: 'Chat',
        href: 'https://community.vuetifyjs.com',
      },
      {
        text: 'Made with Vuetify',
        href: 'https://madewithvuejs.com/vuetify',
      },
      {
        text: 'Twitter',
        href: 'https://twitter.com/vuetifyjs',
      },
      {
        text: 'Articles',
        href: 'https://medium.com/vuetify',
      },
    ],
    whatsNext: [
      {
        text: 'Explore components',
        href: 'https://vuetifyjs.com/components/api-explorer',
      },
      {
        text: 'Select a layout',
        href: 'https://vuetifyjs.com/layout/pre-defined',
      },
      {
        text: 'Frequently Asked Questions',
        href: 'https://vuetifyjs.com/getting-started/frequently-asked-questions',
      },
    ],
    payload: {
      "token": "ewPSvFVdgBeiQljMhpBoMeUTxnVkpkNP",
      "planet_names": [
        "Donlon",
        "Enchai",
        "Sapir",
        "Pingasor"
      ],
      "vehicle_names": [
        "Space pod",
        "Space rocket",
        "Space rocket",
        "Space rocket"
      ]
    }
  }),
  watch: {
    getPlanets: function (newValue) {
      console.log(newValue)
    },
    getVehicles: function (newValue) {
      console.log(newValue)
    },
    getFindFalcone: function (newValue) {
      console.log(newValue)
    }
  },
  created () {
    this.$store.dispatch('fetchPlanets')
    this.$store.dispatch('fetchVehicles')
    this.$store.dispatch('fetchFindFalcone', this.payload)
  },
  computed: {
    ...mapGetters(['getPlanets', 'getVehicles', 'getFindFalcone'])
  }
};
</script>

<style>
  .footer {
    position: fixed;
    left: 35%;
    bottom: 0;
  }
  .footerLink {
    color: #333 !important;
    text-decoration: none !important;
  }
</style>
