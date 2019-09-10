<template>
  <div class="container">
    <div v-if="!displayResults">
      <div class="header">
        <div class="textHeaders">
          <h1 class="display-2 font-weight-bold mb-3">
            Finding Falcone
          </h1>
          <h2 class="headline font-weight-bold mb-3">
            Highness, please select 4 planets and vehicles to send army to find Falcone
          </h2>
        </div>
        <div class="imageHeader">
          <img src="../assets/falcone.png">
        </div>
      </div>
      <div class="configureArmyArea">
        <div class="sidebar">
          <div @click="configureArmy(1)" :class="{sidebarMenu: true, active: currentArmyNumber === 1, filled: armiesPrepared.includes(1)}">Configure Army 1</div>
          <div @click="configureArmy(2)" :class="{sidebarMenu: true, active: currentArmyNumber === 2, filled: armiesPrepared.includes(2)}">Configure Army 2</div>
          <div @click="configureArmy(3)" :class="{sidebarMenu: true, active: currentArmyNumber === 3, filled: armiesPrepared.includes(3)}">Configure Army 3</div>
          <div @click="configureArmy(4)" :class="{sidebarMenu: true, active: currentArmyNumber === 4, filled: armiesPrepared.includes(4)}">Configure Army 4</div>
          <div class="text-center time-taken">
            <h2>Time Taken</h2>
            <h1><strong>{{timeTaken}}</strong></h1>
            <br>
            <h2>Progress</h2>
            <v-progress-circular
                    :rotate="360"
                    :size="50"
                    :width="4"
                    :value="progress"
                    color="#CB9827"
                    class="progressBar">
              {{ progress }}%
            </v-progress-circular>
          </div>
        </div>
        <div class="selectArea" v-if="!loading">
          <h2 class="headline font-weight-bold mb-3 armyBaseHeading text-center">
            Army Base - {{currentArmyNumber}}
          </h2>
          <h4>Available Destination</h4>
          <v-select :items="availablePlanets"
                    label="Select Planet"
                    v-model="chosenPlanet"
                    @change="prepareArmy"
                    item-text="name"
                    item-value="name"
                    solo class="planetDropdown">
          </v-select>
          <h4>Available Vehicles</h4>
          <v-radio-group v-model="chosenVehicle" @change="prepareArmy" column>
            <v-radio color="#CB9827"
                     :value="vehicle.name"
                     v-for="vehicle in availableVehicles"
                     :key="vehicle.name"
                     :disabled="vehicle.total_no <= 0">
              <template v-slot:label>
                <div class="radioButton">{{vehicle.name}} ({{vehicle.total_no}})</div>
              </template>
            </v-radio>
          </v-radio-group>
          <div :class="{disableAttackButton: !enableAttack, attackButton: enableAttack, enableButton: enableAttack}" @click="attack">
            <div><img src="../assets/attack.gif" v-if="enableAttack"></div>
            <div :class="{attackButtonText: enableAttack}">Find Falcone</div>
          </div>
        </div>
        <div v-if="loading">
          <img src="../assets/Loading_icon.gif" class="loadingImage">
        </div>
      </div>
    </div>
    <div v-if="displayResults">
      <div v-if="loadResult">
        <img src="../assets/rocket.gif" alt="" class="loadResultImage">
      </div>
      <div v-if="findFalcone.status === 'success'" class="text-center successPage">
        <img src="../assets/attack.gif">
        <h2>Success! Congratulations on Finding Falcone. King Shan is mighty pleased.</h2>
        <br><br>
        <h4>Time Taken: <strong>{{timeTaken}}</strong></h4>
        <h4>Planet Found: <strong>{{findFalcone.planet_name}}</strong></h4>
        <button class="startAgainButton" @click="reset">Start Again</button>
      </div>
      <div v-if="findFalcone.status === 'false'" class="text-center successPage">
        <h2>Awwwww! Failed to Finding Falcone. King Shan is upset.</h2>
        <br><br>
        <p>Press Start Again to try your luck again.</p>
        <button class="startAgainButton" @click="reset">Start Again</button>
      </div>
    </div>
    <v-layout justify-center class="footer">
      Coding Problem - <strong><a href="www.geektrust.in/finding-falcone"
                                  class="mx-3 footerLink" target="_blank">
      www.geektrust.in/finding-falcone</a></strong>
    </v-layout>
  </div>
</template>

<script src="./js/find-falcone.js"></script>

<style lang="scss" scoped>
  @import "css/find-falcone";
</style>
