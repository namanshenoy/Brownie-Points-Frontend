<template>
  <v-content>
    <v-layout row ma-5>
      <v-flex xs12>
        <v-form v-model="loginValid">
          <h1 style="text-align:center">Create Account</h1>
          <br>
          <v-text-field v-model="fname" type="text" placeholder="First Name"></v-text-field>
          <v-text-field v-model="lname" type="text" placeholder="Last Name"></v-text-field>
          <v-text-field v-model="username" type="text" placeholder="Username"></v-text-field>
          <v-text-field v-model="password" type="text" placeholder="Email"></v-text-field>
          <v-text-field v-model="econf" type="text" placeholder="Confirm Email"></v-text-field>
          <v-text-field v-model="username" type="password" placeholder="password"></v-text-field>

          <div class="flex-c">
            <v-btn type="submit" class="pure-button pure-button-primary" v-on:click="create">Create</v-btn>
            <v-btn type="submit" class="pure-button pure-button-primary" v-on:click="cancel">Cancel</v-btn>
          </div>

        </v-form>
      </v-flex>
    </v-layout>
  </v-content>
  <!--
  <div class="col-md-12 createAccount" id="createAccount">
    <form class="pure-form pure-form-stacked" v-on:submit.prevent="doLogin" id="form">
      <fieldset>
        <legend>Create Account</legend>

        <div class="row">
          <label for="fname">First Name</label>
          <input id="fname" v-model="fname" type="text" placeholder="First Name">
        </div>
        <div class="row">
          <label for="lname">Last Name</label>
          <input id="lname" v-model="lname" type="text" placeholder="Last Name">
        </div>
        <div class="row">
          <label for="username">Username</label>
          <input id="username" v-model="username" type="text" placeholder="Username">
        </div>
        <div class="row">
          <label for="password">Password</label>
          <input id="password" v-model="password" type="password" placeholder="Password">
        </div>
        <div class="row">
          <label for="email">E-mail</label>
          <input id="email" v-model="email" type="text" placeholder="E-mail">
        </div>
        <div class="row">
          <label for="email-conf">Confirm E-mail</label>
          <input id="email-conf" v-model="econf" type="text" placeholder="Confirm E-mail">
        </div>
        <button type="submit" class="pure-button pure-button-primary" v-on:click="create">Create</button>
        <button type="submit" class="pure-button pure-button-primary" v-on:click="cancel">Cancel</button>
      </fieldset>
    </form>
  </div>
  -->
</template>

<script>
import axios from 'axios'
export default {
  name: 'CreateAccount',
  data () {
    return {
      loginValid: false,
      username: '',
      fname: '',
      lname: '',
      password: '',
      email: '',
      econf: ''
    }
  },
  methods: {
    create: function () {
      var self = this
      axios.post('http://104.196.56.42:8080/api/register/', {
        username: self.username,
        first_name: self.fname,
        last_name: self.lname,
        password: self.password,
        email: self.email,
        emailConfirm: self.econf
      })
      .then(function (res) {
        console.log(res.data)
        self.$router.push('/user/' + res.data.username)
      })
      .catch(function (err) {
        console.log(err)
      })
    },
    cancel: function () {
      this.$router.push('/')
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.flex-c{
  display: flex;
  justify-content: center;
}
.flex-c > *{
  flex: 1 1 0;
}
</style>
