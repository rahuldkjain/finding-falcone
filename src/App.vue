<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title class="headline">
        <a href="https://github.com/rahuldkjain" class="developerLink" target="_blank">Rahuldkjain</a>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        text
        @click="reloadPage"
      >
        <span class="mr-2">Reset</span>
      </v-btn>
      <v-btn
              text
              href="https://www.geektrust.in"
              target="_blank"
      >
        <span class="mr-2">GeekTrust Home</span>
      </v-btn>
    </v-app-bar>

    <v-content>
      <FindFalcone/>
    </v-content>
  </v-app>
</template>

<script>
import FindFalcone from './components/FindFalcone'

export default {
  name: 'App',
  components: {
    FindFalcone
  },
  methods: {
    reloadPage () {
      window.location.reload()
    }
  }
}
</script>

<style>
  .developerLink{
    text-decoration: none;
    color: #1B1A1A !important;
    @media only screen and (min-width: 345px) and (max-width: 767px) {
      font-size: 16px !important;
    }
  }
</style>
