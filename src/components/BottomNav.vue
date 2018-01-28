<template>
  <v-card height="0px">
    <v-bottom-nav absolute shift :value="true" :active.sync="e1" color="transparent">
      <v-btn flat color="teal" v-on:click="account" value="account">
        <span>Account</span>
        <v-icon>home</v-icon>
      </v-btn>
      <v-btn flat color="teal" v-on:click="history" value="history">
        <span>History</span>
        <v-icon>history</v-icon>
      </v-btn>
      <v-btn flat color="teal" value="friends">
        <span>Friends</span>
        <v-icon>place</v-icon>
      </v-btn>
    </v-bottom-nav>
  </v-card>
</template>

<script>
  export default {
    name: 'BottomNav',
    data () {
      return {
        e1: 'recent'
      }
    },
    methods: {
      account: function () {
        this.$router.push('/user/chia/account')
      },
      history: function () {
        this.$router.push('/user/caleb')
      },
      friends: function () {

      }
    }
  }
</script>
