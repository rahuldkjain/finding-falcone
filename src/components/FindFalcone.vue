<template>
  <div class="container">
    <div v-if="!displayResults">
      <div class="header">
        <div class="textHeaders">
          <h1 class="display-2 font-weight-bold mb-3">
            {{freeTexts.title}}
          </h1>
          <h2 class="headline font-weight-bold mb-3">
            {{freeTexts.subTitle}}
          </h2>
        </div>
        <div class="imageHeader">
          <img src="../assets/falcone.png">
        </div>
      </div>
      <div class="configureArmyArea">
        <div class="sidebar">
          <div @click="configureArmy(armyNumber)"
               :class="{sidebarMenu: true, active: currentArmyNumber === armyNumber, filled: armiesPrepared.includes(armyNumber)}"
                v-for="armyNumber in 4" :key="armyNumber">
              {{freeTexts.configureArmy}} {{armyNumber}}
          </div>
          <div class="text-center time-taken">
            <h2>{{freeTexts.timeTaken}}</h2>
            <h1><strong>{{timeTaken}}</strong></h1>
            <br>
            <h2>{{freeTexts.progress}}</h2>
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
            {{freeTexts.armyBaseHeading}} - {{currentArmyNumber}}
          </h2>
          <h4>{{freeTexts.availableDestination}}</h4>
          <v-select :items="availablePlanets"
                    label="Select Planet"
                    v-model="chosenPlanet"
                    @change="prepareArmy"
                    item-text="name"
                    item-value="name"
                    solo class="planetDropdown">
          </v-select>
          <h4>{{freeTexts.availableVehicles}}</h4>
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
            <div :class="{attackButtonText: enableAttack}">{{freeTexts.attackButton}}</div>
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
        <h2>{{freeTexts.findFalconeSuccess}}</h2>
        <br><br>
        <h4>{{freeTexts.timeTaken}}: <strong>{{timeTaken}}</strong></h4>
        <h4>{{freeTexts.planetFound}}: <strong>{{findFalcone.planet_name}}</strong></h4>
        <button class="startAgainButton" @click="reset">Start Again</button>
      </div>
      <div v-if="findFalcone.status === 'false'" class="text-center successPage">
        <h2>{{freeTexts.findFalconeFailure}}</h2>
        <br><br>
        <p>{{freeTexts.findFalconeFailureSubHeading}}</p>
        <button class="startAgainButton" @click="reset">{{freeTexts.startAgainButton}}</button>
      </div>
    </div>
    <v-layout justify-center class="footer">
      {{freeTexts.codingProblem}} -
      <strong>
          <a :href="freeTexts.geektrustURL" class="mx-3 footerLink" target="_blank">{{freeTexts.geektrustURL}}</a>
      </strong>
    </v-layout>
  </div>
</template>

<script src="./js/find-falcone.js"></script>

<style lang="scss" scoped>
  @import "css/find-falcone";
</style>
