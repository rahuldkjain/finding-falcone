(function(e){function t(t){for(var s,l,r=t[0],c=t[1],o=t[2],u=0,d=[];u<r.length;u++)l=r[u],Object.prototype.hasOwnProperty.call(n,l)&&n[l]&&d.push(n[l][0]),n[l]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(e[s]=c[s]);h&&h(t);while(d.length)d.shift()();return i.push.apply(i,o||[]),a()}function a(){for(var e,t=0;t<i.length;t++){for(var a=i[t],s=!0,r=1;r<a.length;r++){var c=a[r];0!==n[c]&&(s=!1)}s&&(i.splice(t--,1),e=l(l.s=a[0]))}return e}var s={},n={app:0},i=[];function l(t){if(s[t])return s[t].exports;var a=s[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,l),a.l=!0,a.exports}l.m=e,l.c=s,l.d=function(e,t,a){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(l.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)l.d(a,s,function(t){return e[t]}.bind(null,s));return a},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=t,r=r.slice();for(var o=0;o<r.length;o++)t(r[o]);var h=c;i.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"034f":function(e,t,a){"use strict";var s=a("1356"),n=a.n(s);n.a},1356:function(e,t,a){},"34d5":function(e,t,a){e.exports=a.p+"img/rocket.67b2a9ba.gif"},"56d7":function(e,t,a){"use strict";a.r(t);var s=a("2b0e"),n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",[a("v-app-bar",{attrs:{app:""}},[a("v-toolbar-title",{staticClass:"headline"},[a("a",{staticClass:"developerLink",attrs:{href:"https://github.com/rahuldkjain",target:"_blank"}},[e._v("Rahuldkjain")])]),a("v-spacer"),a("v-btn",{attrs:{text:""},on:{click:e.reloadPage}},[a("span",{staticClass:"mr-2"},[e._v("Reset")])]),a("v-btn",{attrs:{text:"",href:"https://www.geektrust.in",target:"_blank"}},[a("span",{staticClass:"mr-2"},[e._v("GeekTrust Home")])])],1),a("v-content",[a("FindFalcone")],1)],1)},i=[],l=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"container"},[e.displayResults?e._e():s("div",[s("div",{staticClass:"header"},[s("div",{staticClass:"textHeaders"},[s("h1",{staticClass:"display-2 font-weight-bold mb-3"},[e._v("\n          "+e._s(e.freeTexts.title)+"\n        ")]),s("h2",{staticClass:"headline font-weight-bold mb-3"},[e._v("\n          "+e._s(e.freeTexts.subTitle)+"\n        ")])]),e._m(0)]),s("div",{staticClass:"configureArmyArea"},[s("div",{staticClass:"sidebar"},[e._l(4,function(t){return s("div",{key:t,class:{sidebarMenu:!0,active:e.currentArmyNumber===t,filled:e.armiesPrepared.includes(t)},on:{click:function(a){return e.configureArmy(t)}}},[e._v("\n            "+e._s(e.freeTexts.configureArmy)+" "+e._s(t)+"\n        ")])}),s("div",{staticClass:"text-center time-taken"},[s("h2",[e._v(e._s(e.freeTexts.timeTaken))]),s("h1",[s("strong",[e._v(e._s(e.timeTaken))])]),s("br"),s("h2",[e._v(e._s(e.freeTexts.progress))]),s("v-progress-circular",{staticClass:"progressBar",attrs:{rotate:360,size:50,width:4,value:e.progress,color:"#CB9827"}},[e._v("\n            "+e._s(e.progress)+"%\n          ")])],1)],2),e.loading?e._e():s("div",{staticClass:"selectArea"},[s("h2",{staticClass:"headline font-weight-bold mb-3 armyBaseHeading text-center"},[e._v("\n          "+e._s(e.freeTexts.armyBaseHeading)+" - "+e._s(e.currentArmyNumber)+"\n        ")]),s("h4",[e._v(e._s(e.freeTexts.availableDestination))]),s("v-select",{staticClass:"planetDropdown",attrs:{items:e.availablePlanets,label:"Select Planet","item-text":"name","item-value":"name",solo:""},on:{change:e.prepareArmy},model:{value:e.chosenPlanet,callback:function(t){e.chosenPlanet=t},expression:"chosenPlanet"}}),s("h4",[e._v(e._s(e.freeTexts.availableVehicles))]),s("v-radio-group",{attrs:{column:""},on:{change:e.prepareArmy},model:{value:e.chosenVehicle,callback:function(t){e.chosenVehicle=t},expression:"chosenVehicle"}},e._l(e.availableVehicles,function(t){return s("v-radio",{key:t.name,attrs:{color:"#CB9827",value:t.name,disabled:t.total_no<=0},scopedSlots:e._u([{key:"label",fn:function(){return[s("div",{staticClass:"radioButton"},[e._v(e._s(t.name)+" ("+e._s(t.total_no)+")")])]},proxy:!0}],null,!0)})}),1),s("div",{class:{disableAttackButton:!e.enableAttack,attackButton:e.enableAttack,enableButton:e.enableAttack},on:{click:e.attack}},[s("div",[e.enableAttack?s("img",{attrs:{src:a("d4eb")}}):e._e()]),s("div",{class:{attackButtonText:e.enableAttack}},[e._v(e._s(e.freeTexts.attackButton))])])],1),e.loading?s("div",[s("img",{staticClass:"loadingImage",attrs:{src:a("a8d1")}})]):e._e()])]),e.displayResults?s("div",[e.loadResult?s("div",[s("img",{staticClass:"loadResultImage",attrs:{src:a("34d5"),alt:""}})]):e._e(),"success"===e.findFalcone.status?s("div",{staticClass:"text-center successPage"},[s("img",{attrs:{src:a("d4eb")}}),s("h2",[e._v(e._s(e.freeTexts.findFalconeSuccess))]),s("br"),s("br"),s("h4",[e._v(e._s(e.freeTexts.timeTaken)+": "),s("strong",[e._v(e._s(e.timeTaken))])]),s("h4",[e._v(e._s(e.freeTexts.planetFound)+": "),s("strong",[e._v(e._s(e.findFalcone.planet_name))])]),s("button",{staticClass:"startAgainButton",on:{click:e.reset}},[e._v("Start Again")])]):e._e(),"false"===e.findFalcone.status?s("div",{staticClass:"text-center successPage"},[s("h2",[e._v(e._s(e.freeTexts.findFalconeFailure))]),s("br"),s("br"),s("p",[e._v(e._s(e.freeTexts.findFalconeFailureSubHeading))]),s("button",{staticClass:"startAgainButton",on:{click:e.reset}},[e._v(e._s(e.freeTexts.startAgainButton))])]):e._e()]):e._e(),s("v-layout",{staticClass:"footer",attrs:{"justify-center":""}},[e._v("\n    "+e._s(e.freeTexts.codingProblem)+" -\n    "),s("strong",[s("a",{staticClass:"mx-3 footerLink",attrs:{href:e.freeTexts.geektrustURL,target:"_blank"}},[e._v(e._s(e.freeTexts.geektrustURL))])])])],1)},r=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"imageHeader"},[s("img",{attrs:{src:a("c05b")}})])}],c=a("2f62"),o={data:()=>({planetsManual:{},vehiclesManual:{},loadResult:!1,findFalcone:{},displayResults:!1,timeTaken:0,loadPlanets:!0,loadVehicles:!0,currentArmyNumber:1,armiesPrepared:[],progress:0,chosenPlanet:"",chosenVehicle:"",availablePlanets:[],availableVehicles:[],chosenArmies:{1:{},2:{},3:{},4:{}},payload:{token:"",planet_names:[],vehicle_names:[]},freeTexts:{title:"Finding Falcone",subTitle:"Highness, please select 4 planets and vehicles to send army to find Falcone",configureArmy:"Configure Army",timeTaken:"Time Taken",progress:"Progress",armyBaseHeading:"Army Base",availableDestination:"Available Destination",availableVehicles:"Available Vehicles",attackButton:"Find Falcone",findFalconeSuccess:"Success! Congratulations on Finding Falcone. King Shan is mighty pleased.",findFalconeFailure:"Awwwww! Failed to Find Falcone. King Shan is upset.",findFalconeFailureSubHeading:"Press Start Again to try your luck again.",startAgainButton:"Start Again",geektrustURL:"www.geektrust.in/finding-falcone",codingProblem:"Coding Problem",planetFound:"Planet Found"}}),watch:{getPlanets:function(e){let t=0;e.forEach(e=>{this.availablePlanets.push({name:e.name,distance:e.distance,disabled:!1}),this.planetsManual[e.name]=t,t+=1}),this.loadPlanets=!1},getVehicles:function(e){for(var t=0;t<e.length;t++)this.vehiclesManual[e[t].name]=t;this.availableVehicles=e,this.loadVehicles=!1},getFindFalcone:function(e){this.findFalcone=e,this.displayResults=!0,this.loadResult=!1},getToken:function(e){this.payload.token=e.token},armiesPrepared:function(e){this.progress=25*e.length}},created(){this.$store.dispatch("fetchPlanets"),this.$store.dispatch("fetchVehicles"),this.$store.dispatch("fetchToken")},computed:{...Object(c["b"])(["getPlanets","getVehicles","getFindFalcone","getToken","getFindFalcone"]),enableAttack(){return 100===this.progress},loading(){return this.loadPlanets||this.loadVehicles}},methods:{prepareArmy(){if(this.chosenPlanet&&this.chosenVehicle)if(this.chosenArmies[this.currentArmyNumber].planet)if(this.chosenArmies[this.currentArmyNumber].planet!==this.chosenPlanet)this.availablePlanets[this.planetsManual[this.chosenPlanet]].disabled=!0,this.availablePlanets[this.planetsManual[this.chosenArmies[this.currentArmyNumber].planet]].disabled=!1,this.chosenArmies[this.currentArmyNumber].planet=this.chosenPlanet;else{let e=this.vehiclesManual[this.chosenArmies[this.currentArmyNumber].vehicle];this.availableVehicles[e].total_no+=1,this.timeTaken-=this.availableVehicles[e]["max_distance"]/this.availableVehicles[e]["speed"];let t=this.vehiclesManual[this.chosenVehicle];this.availableVehicles[t].total_no-=1,this.timeTaken+=this.availableVehicles[t]["max_distance"]/this.availableVehicles[t]["speed"],this.chosenArmies[this.currentArmyNumber].vehicle=this.chosenVehicle}else{this.chosenArmies[this.currentArmyNumber]["planet"]=this.chosenPlanet,this.chosenArmies[this.currentArmyNumber]["vehicle"]=this.chosenVehicle,this.availablePlanets[this.planetsManual[this.chosenPlanet]].disabled=!0;let e=this.vehiclesManual[this.chosenVehicle];this.availableVehicles[e].total_no-=1,this.timeTaken+=this.availableVehicles[e]["max_distance"]/this.availableVehicles[e]["speed"],this.armiesPrepared.push(this.currentArmyNumber),this.progress=25*this.armiesPrepared.length}},configureArmy(e){this.currentArmyNumber=e,this.chosenPlanet=this.chosenArmies[e].planet,this.chosenVehicle=this.chosenArmies[e].vehicle},attack(){for(var e=1;e<=this.armiesPrepared.length;e++)this.payload.planet_names.push(this.chosenArmies[e].planet),this.payload.vehicle_names.push(this.chosenArmies[e].vehicle);this.loadResult=!0,this.displayResults=!0,this.$store.dispatch("fetchFindFalcone",this.payload)},reset(){this.planetsManual={},this.vehiclesManual={},this.displayResults=!1,this.findFalcone={},this.timeTaken=0,this.loadPlanets=!0,this.loadVehicles=!0,this.currentArmyNumber=1,this.armiesPrepared=[],this.progress=0,this.loadResult=!1,this.chosenPlanet="",this.chosenVehicle="",this.availablePlanets=[],this.availableVehicles=[],this.chosenArmies={1:{},2:{},3:{},4:{}},this.payload={token:"",planet_names:[],vehicle_names:[]},this.$store.dispatch("fetchPlanets"),this.$store.dispatch("fetchVehicles"),this.$store.dispatch("fetchToken")}}},h=o,u=(a("84f9"),a("2877")),d=a("6544"),p=a.n(d),f=a("a722"),m=a("490a"),v=a("67b6"),g=a("43a6"),b=a("b974"),_=Object(u["a"])(h,l,r,!1,null,"78595d8c",null),k=_.exports;p()(_,{VLayout:f["a"],VProgressCircular:m["a"],VRadio:v["a"],VRadioGroup:g["a"],VSelect:b["a"]});var y={name:"App",components:{FindFalcone:k},methods:{reloadPage(){window.location.reload()}}},P=y,A=(a("034f"),a("7496")),F=a("40dc"),V=a("8336"),T=a("a75b"),x=a("2fa4"),w=a("2a7f"),C=Object(u["a"])(P,n,i,!1,null,null,null),R=C.exports;p()(C,{VApp:A["a"],VAppBar:F["a"],VBtn:V["a"],VContent:T["a"],VSpacer:x["a"],VToolbarTitle:w["a"]});var S=a("8c4f"),B=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("FindFalcone")},O=[],N={components:{FindFalcone:k}},M=N,j=Object(u["a"])(M,B,O,!1,null,null,null),$=j.exports;s["a"].use(S["a"]);var H=new S["a"]({routes:[{path:"/",name:"home",component:$}]}),q=a("bc3a"),L=a.n(q),J={makeGetRequest(e,t){L.a.get(e).then(t).catch(e=>{console.log(e)})},makePostRequest(e,t,a){L.a.post(e,a).then(t).catch(e=>{console.log(e)})},makePutRequest(e,t,a){L.a.put(e,a).then(t).catch(e=>{console.log(e)})},makeDeleteRequest(e,t){L.a.delete(e).then(t).catch(e=>{console.log(e)})}},D={fetchPlanets(e){var t="/planets";J.makeGetRequest(t,e)},fetchToken(e){var t="/token";J.makePostRequest(t,e,{})},fetchVehicles(e){var t="/vehicles";J.makeGetRequest(t,e)},fetchResults(e,t){var a="/find";J.makePostRequest(a,e,t)}};s["a"].use(c["a"]);var E=new c["a"].Store({state:{planets:[],vehicles:[],findFalcone:{},token:""},mutations:{setPlanets(e,t){e.planets=JSON.parse(JSON.stringify(t.data))},setVehicles(e,t){e.vehicles=JSON.parse(JSON.stringify(t.data))},setFindFalcone(e,t){e.findFalcone=t.data},setToken(e,t){e.token=t.data}},actions:{fetchPlanets:e=>{D.fetchPlanets(t=>{e.commit("setPlanets",t)})},fetchVehicles:e=>{D.fetchVehicles(t=>{e.commit("setVehicles",t)})},fetchToken:e=>{D.fetchToken(t=>{e.commit("setToken",t)})},fetchFindFalcone:(e,t)=>{D.fetchResults(t=>{e.commit("setFindFalcone",t)},t)}},getters:{getPlanets:e=>{return e.planets},getVehicles:e=>{return e.vehicles},getToken:e=>{return e.token},getFindFalcone:e=>{return e.findFalcone}}}),G=a("f309");s["a"].use(G["a"]);var U=new G["a"]({icons:{iconfont:"mdi"}});s["a"].config.productionTip=!1,new s["a"]({router:H,store:E,vuetify:U,render:e=>e(R)}).$mount("#app")},"84f9":function(e,t,a){"use strict";var s=a("8cd3"),n=a.n(s);n.a},"8cd3":function(e,t,a){},a8d1:function(e,t,a){e.exports=a.p+"img/Loading_icon.f4404720.gif"},c05b:function(e,t,a){e.exports=a.p+"img/falcone.40a7a201.png"},d4eb:function(e,t,a){e.exports=a.p+"img/attack.73959f90.gif"}});
//# sourceMappingURL=app.0aed4f0d.js.map