<template>
  <div>
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
                   <v-card-text class="px-0">{{ userParent }}</v-card-text>
                </v-card>
             </v-flex>

             <v-flex xs6>
                <v-card dark color="dark">
                   <v-card-text class="px-0">Address</v-card-text>
                </v-card>
             </v-flex>

             <v-flex xs6>
                <v-card dark color="dark">
                   <v-card-text id="address" class="px-0">{{ address}}</v-card-text>
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
      <bottom-nav />
</div>
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
      address: '',
      balance: ''
    }
  },
  computed: {
    userParent () {
      return window.location.pathname.split('/')[2]
    }
  },
  methods: {

    getWallet: function () {
      var self = this
      axios.get('http://104.196.56.42:8080/api/wallet/',
        {
          headers: {Authorization: 'JWT ' + self.getCookie('token')}
          //  make sure to include JWT with the space
        })
        .then(function (res) {
          console.log(res)
          self.address = res.data[0].address
          self.balance = res.data[0].token_balance
        })
        .catch(function (error) {
          console.log(error)
        })
    }
  },
  mounted () {
    this.getWallet()
  }
}
</script>

<style>
#address {
  overflow: hidden
}


</style>
