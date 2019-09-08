<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title class="headline">
        <span>Rahuldkjain</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        text
        href="#"
        target="_blank"
      >
        <span class="mr-2">Reset</span>
      </v-btn>
      <v-btn
              text
              href="#"
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
import FindFalcone from './components/FindFalcone';

export default {
  name: 'App',
  components: {
    FindFalcone,
  },
  data: () => ({
    //
  }),
};
</script>
