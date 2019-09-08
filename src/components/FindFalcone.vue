<template>
  <div class="container">
    <v-img :src="require('../assets/falcone.png')" class="my-3"
           contain height="200">
    </v-img>
    <h1 class="display-2 font-weight-bold mb-3 text-center">
      Finding Falcone
    </h1>
    <h2 class="headline font-weight-bold mb-3 text-center">
      Highness, please select 4 planets and vehicles to send army to find Falcone
    </h2>
    <div class="configureArmyArea">
      <div class="sidebar">
        <div @click="configureArmy(1)" :class="{sidebarMenu: true, active: currentArmyNumber === 1, filled: armiesPrepared.includes(1)}">Configure Army 1</div>
        <div @click="configureArmy(2)" :class="{sidebarMenu: true, active: currentArmyNumber === 2, filled: armiesPrepared.includes(2)}">Configure Army 2</div>
        <div @click="configureArmy(3)" :class="{sidebarMenu: true, active: currentArmyNumber === 3, filled: armiesPrepared.includes(3)}">Configure Army 3</div>
        <div @click="configureArmy(4)" :class="{sidebarMenu: true, active: currentArmyNumber === 4, filled: armiesPrepared.includes(4)}">Configure Army 4</div>
<!--        <v-btn large block @click="configureArmy(1)">Configure Army 1</v-btn>-->
<!--        <v-btn large block @click="configureArmy(2)">Configure Army 2</v-btn>-->
<!--        <v-btn large block @click="configureArmy(3)">Configure Army 3</v-btn>-->
<!--        <v-btn large block @click="configureArmy(4)">Configure Army 4</v-btn>-->
      </div>
      <div class="selectArea">
        <v-progress-circular
                :rotate="360"
                :size="60"
                :width="8"
                :value="progress"
                color="green"
                class="progressBar">
          {{ progress }}%
        </v-progress-circular>
        <v-select :items="availablePlanets"
                  label="Select Planet"
                  v-model="chosenPlanet"
                  @change="prepareArmy"
                  item-text="name"
                  item-value="name"
                  solo class="planetDropdown">
        </v-select>
        <v-radio-group v-model="chosenVehicle" @change="prepareArmy" column>
          <v-radio
                  :label="vehicle.name + ' ('+ vehicle.total_no + ')'"
                  color="red"
                  :value="vehicle.name"
                  v-for="vehicle in availableVehicles"
                  :key="vehicle.name"
                  :disabled="vehicle.total_no <= 0"
          ></v-radio>
        </v-radio-group>
        <div :class="{disableAttackButton: !enableAttack, attackButton: enableAttack, enableButton: enableAttack}" @click="attack">
          <div><img src="../assets/attack.gif" v-if="enableAttack"></div>
          <div :class="{attackButtonText: enableAttack}">Attack</div>
        </div>
      </div>
    </div>
    <v-layout justify-center>
      Coding Problem- <a href="www.geektrust.in/finding-falcone"
                         class="mx-3 footerLink" target="_blank">
      www.geektrust.in/finding-falcone
    </a>
    </v-layout>
  </div>
</template>

<script src="./js/find-falcone.js"></script>

<style lang="scss" scoped>
  @import "css/find-falcone";
</style>
