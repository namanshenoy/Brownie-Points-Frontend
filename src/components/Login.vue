<template>
<v-content>
  <v-layout row wrap ma-3>
    <v-flex xs12 >
      <h1 class="flex-c large-text">Brownie Points</h1>
    </v-flex>
    <v-flex xs12>
      <img src="./../assets/brownie.png" style="max-width:80%; margin-top: 25%; margin-bottom: 25%; margin-left: 10%;">
    </v-flex>
    <v-flex xs12 class="login" id="login">
      <v-form v-model="loginValid">
        <v-text-field
          label="Username"
          v-model="username"
          required
        ></v-text-field>
        <v-text-field
          label="Password"
          v-model="password"
          type="password"
          required
        ></v-text-field>
        <div class="flex-c">
          <v-btn @click="login" :disabled="!loginValid">
            submit
          </v-btn>
          <v-btn @click="signup">Create Account</v-btn>
        </div>
      </v-form>
    </v-flex>
  </v-layout>
</v-content>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Login',
  data () {
    return {
      username: '',
      password: '',
      loginValid: false
    }
  },
  methods: {
    login: function () {
      var self = this
      axios.post('http://104.196.56.42:8080/api/login/', {
        username: self.username,
        password: self.password,
        email: ''
      })
        .then(function (res) {
           // console.log(res.data)
          document.cookie = 'token=' + res.data.token + ';path=/'
          // console.log(res.data.username);
          self.$router.push('/user/' + res.data.username + '/pay')
        })
        .catch(function (err) {
          console.log(err)
        })
    },
    signup: function () {
      this.$router.push('/signup')
    }
  }
  // created: function () {
  //   this.login()
  // }
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
.large-text{
  font-family: "Comic Sans MS", sans-serif;
  font-size: 3em;
}

img {
  padding-bottom: 50px;
  width: 80%;
  height: 80%;
}
</style>
