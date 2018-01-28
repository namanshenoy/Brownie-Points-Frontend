<template>
  <v-app id="account_info" dark>
     <v-content>
        <v-container grid-list-md text-xs-center>
           <v-layout row wrap>
             <v-flex xs12>
                <v-card dark color="dark">
                   <v-card-text class="px-0">Account Information</v-card-text>
                </v-card>
             </v-flex>

             <v-flex xs6>
                <v-card dark color="dark">
                   <v-card-text class="px-0">Username</v-card-text>
                </v-card>
             </v-flex>

             <v-flex xs6>
                <v-card dark color="dark">
                   <v-card-text class="px-0">{{this.username}}</v-card-text>
                </v-card>
             </v-flex>

             <v-flex xs6>
                <v-card dark color="dark">
                   <v-card-text class="px-0">Email</v-card-text>
                </v-card>
             </v-flex>

             <v-flex xs6>
                <v-card dark color="dark">
                   <v-card-text class="px-0">{{email}}</v-card-text>
                </v-card>
             </v-flex>

             <v-flex xs6>
                <v-card dark color="dark">
                   <v-card-text class="px-0">Balance</v-card-text>
                </v-card>
             </v-flex>

             <v-flex xs6>
                <v-card dark color="dark">
                   <v-card-text class="px-0">{{balance}}</v-card-text>
                </v-card>
              </v-flex>
          </v-layout>
        </v-container>
      </v-content>
     <BottomNav />
  </v-app>
</template>

<script>
import BottomNav from './BottomNav'
import axios from 'axios'
export default{
  name: 'Account',
  props: [
    'username'
  ],
  components: {
    BottomNav
  },
  data: function () {
    return {
      email: '',
      balance: ''
    }
  },
  methods: {
    getWallet: function () {
      console.log('XXXXXX')
      var self = this
      axios.post('http://104.196.56.42:8080/api/wallet/',
        {
          headers: {Authorization: 'JWT ' + self.getCookie('token')}
          //  make sure to include JWT with the space
        })
        .then(function (res) {
          console.log(res.data)
        })
        .catch(function (error) {
          console.log(error)
        })
    }
  }
}
</script>
