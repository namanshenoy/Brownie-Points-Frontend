<template>
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
</template>

<script>
import axios from 'axios'
export default {
  name: 'CreateAccount',
  data () {
    return {
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
form {
  padding-top: 200px;
  font-size: 20px;
  text-align: center;
  position: relative;
}

input[type="text"]{
  width: 50%;
  border: 1px solid #555;
}
input[type="password"]{
  width: 50%;
  border: 1px solid #555;
}

button {
  font-size: 20px;
  margin-left: 10px;
}
</style>
