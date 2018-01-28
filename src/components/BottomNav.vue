<template>
  <v-card height="0px" dark>
    <v-bottom-nav  :value="true" :active.sync="e1" color="white darken-2">
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
    computed: {
      user: parent.user
    },
    methods: {
      account: function () {
        this.$router.push('/user/' + this.user + '/account')
      },
      history: function () {
        this.$router.push('/user/' + this.user)
      },
      friends: function () {

      }
    }
  }
</script>
