<template>
  <v-app id="app">
    <v-content fluid ma-0>
      <v-layout justify-center>
        <router-view/>
      </v-layout>
    </v-content>
    <!-- <bottom-nav></bottom-nav> -->
  </v-app>
</template>

<script>
import Vue from 'vue'

import BottomNav from './components/BottomNav'
import Login from './components/Login'

export default {
  name: 'app',
  components: {
    BottomNav,
    Login
  },
  methods: {
    pluginEnabled: function (pluginName) {
      return this.cordova.plugins.indexOf(pluginName) !== -1
    },
    alert (shit) {
      window.alert('Vue.cordova.camera not found !')
    }
  },
  data: function () {
    return {
      user: '',
      cordova: Vue.cordova,
      plugins: {
        'cordova-plugin-camera': function () {
          if (!Vue.cordova.camera) {
            window.alert('Vue.cordova.camera not found !')
            return
          }
          Vue.cordova.camera.getPicture((imageURI) => {
            window.alert('Photo URI : ' + imageURI)
          }, (message) => {
            window.alert('FAILED : ' + message)
          }, {
            quality: 50,
            destinationType: Vue.cordova.camera.DestinationType.FILE_URI
          })
        },
        'cordova-plugin-device': function () {
          if (!Vue.cordova.device) {
            window.alert('FAILED : device information not found')
          } else {
            window.alert('Device : ' + Vue.cordova.device.manufacturer + ' ' + Vue.cordova.device.platform + ' ' + Vue.cordova.device.version)
          }
        },
        'cordova-plugin-geolocation': function () {
          if (!Vue.cordova.geolocation) {
            window.alert('Vue.cordova.geolocation not found !')
            return
          }
          Vue.cordova.geolocation.getCurrentPosition((position) => {
            window.alert('Current position : ' + position.coords.latitude + ',' + position.coords.longitude)
          }, (error) => {
            window.alert('FAILED Error #' + error.code + ' ' + error.message)
          }, {
            timeout: 1000,
            enableHighAccuracy: true
          })
        }
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.flex-c{
  dispay: flex;
  justify-content: center;
}
.flex-c > *{
  flex: 1 1 0;
}
</style>
