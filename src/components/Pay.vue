<template>
  <div>
   <v-content>
      <v-container grid-list-md text-xs-center>
         <v-layout row wrap>
           <v-flex xs12>
              <v-card dark color="dark">
               <input type="text" v-model="sendto" placeholder="Search"

               >
             </v-card>
          </v-flex>
           <v-flex xs12>
              <v-card dark color="dark">
                 <v-card-text class="px-0">{{display}}</v-card-text>
              </v-card>
           </v-flex>
            <v-flex xs4>
               <v-card dark color="primary">
                  <v-card-text @click="enterNum(1)" class="px-0">1</v-card-text>
               </v-card>
            </v-flex>
            <v-flex xs4>
               <v-card dark color="primary">
                  <v-card-text @click="enterNum(2)" class="px-0">2</v-card-text>
               </v-card>
            </v-flex>
            <v-flex xs4>
               <v-card dark color="primary">
                  <v-card-text @click="enterNum(3)" class="px-0">3</v-card-text>
               </v-card>
            </v-flex>
            <v-flex xs4>
               <v-card dark color="primary">
                  <v-card-text @click="enterNum(4)" class="px-0">4</v-card-text>
               </v-card>
            </v-flex>
            <v-flex xs4>
               <v-card dark color="primary">
                  <v-card-text @click="enterNum(5)" class="px-0">5</v-card-text>
               </v-card>
            </v-flex>
            <v-flex xs4>
               <v-card dark color="primary">
                  <v-card-text @click="enterNum(6)" class="px-0">6</v-card-text>
               </v-card>
            </v-flex>
            <v-flex xs4>
               <v-card dark color="primary">
                  <v-card-text @click="enterNum(7)" class="px-0">7</v-card-text>
               </v-card>
            </v-flex>
            <v-flex xs4>
               <v-card dark color="primary">
                  <v-card-text @click="enterNum(8)" class="px-0">8</v-card-text>
               </v-card>
            </v-flex>
            <v-flex xs4>
               <v-card dark color="primary">
                  <v-card-text @click="enterNum(9)" class="px-0">9</v-card-text>
               </v-card>
            </v-flex>
            <v-flex xs4>
               <v-card dark color="primary">
                  <v-card-text @click="addDecimal" class="px-0">.</v-card-text>
               </v-card>
            </v-flex>
            <v-flex xs4>
               <v-card dark color="primary">
                  <v-card-text @click="enterNum(0)" class="px-0">0</v-card-text>
               </v-card>
            </v-flex>
            <v-flex xs4>
               <v-card dark color="primary">
                  <v-card-text @click="deleteNum" class="px-0">Delete</v-card-text>
              </v-card>
            </v-flex>
            <v-flex xs6>
               <v-card dark color="dark">
                  <v-card-text v-on:click="cancel" class="px-0">Cancel</v-card-text>
               </v-card>
           </v-flex>
            <v-flex xs6>
               <v-card dark color="dark">
                  <v-card-text v-on:click="pay$" class="px-0">Pay</v-card-text>
               </v-card>
           </v-flex>
         </v-layout>
      </v-container>
   </v-content>
   <bottom-nav />
</div>
</template>

<script>
import Vue from 'vue'
import BottomNav from './BottomNav'
import axios from 'axios'

export default {
  name: 'Pay',
  components: {
    BottomNav
  },
  props: [
    'username'
  ],
  computed: {
    matches () {
      return this.suggestions.filter((obj) => {
        return obj.name.indexOf(this.value) >= 0
      })
    }
  },
  methods: {
    deleteNum: function () {
      if (this.display.length > 1) {
        this.display = this.display.slice(0, -1)
      } else {
        this.display = '0'
      }
    },
    addDecimal: function () {
      if (this.decimalAdded === false) {
        this.display += '.'
        this.decimalAdded = true
      }
    },
    enterNum: function (val) {
      if (parseFloat(this.display) === 0) {
        this.display = val.toString()
      } else {
        this.display += val.toString()
      }
    },
    switchColors: function (willSwitch) {
      if (willSwitch === 1) {
        document.getElementById('pay').style.backgroundColor = '#1A75D3'
        document.getElementById('request').style.backgroundColor = '#424242'
      } else {
        document.getElementById('pay').style.backgroundColor = '#424242'
        document.getElementById('request').style.backgroundColor = '#1A75D3'
        this.pay = false
      }
    },
    pluginEnabled: function (pluginName) {
      return this.cordova.plugins.indexOf(pluginName) !== -1
    },
    alert (shit) {
      window.alert('Vue.cordova.camera not found !')
    },
    pay$: function () {
      var self = this
      if (this.sendto === '') {

      } else {
        axios.post('http://104.196.56.42:8080/api/send/', {
          to_address: self.sendto,
          amount: self.display
        }, {
          headers: {Authorization: 'JWT ' + self.getCookie('token')}
            //  make sure to include JWT with the space
        })
          .then(function (res) {
            console.log(res)
          })
          .catch(function (err) {
            console.log(err)
          })
      }
    },
    cancel: function () {
      this.$router.push('/user/' + window.location.pathname.split('/')[2])
    }
  },
  data () {
    return {
      sendto: '',
      display: 0,
      decimalAdded: false,
      pay: true,
      cordova: Vue.cordova,
      suggestions: [
        { name: 'John' },
        { name: 'Jane' },
        { name: 'Susan' },
        { name: 'Chris' },
        { name: 'Dan' }
      ]
    }
  }
}
</script>

<style scoped>
  input {
    font-size: 20px;;
    width: 100%
  }

  ::-webkit-input-placeholder { /* Chrome/Opera/Safari */
    padding-left: 20px;
  }

</style>
