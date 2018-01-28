<template>
  <div class="col-md-12 login" id="login">
    <form>
      <img src="./assets/creamie_brownie.png" /></br>
      <div class="col-md-12">
        Username: <input type="text" v-model="username"><br>
      </div>
    </br>
      <div class="col-md-12">
        Password: <input type="password" v-model="password"><br>
      </div></br>

      <div class="col-md-12">
          <v-btn type="submit" v-on:click.prevent="login">Login</v-btn>
          <v-btn type="submit" v-on:click="signup">Create Account</v-btn>
      </div>

    </form>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Login',
  data () {
    return {
      username: '',
      password: ''
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
          self.$router.push('/user/' + res.data.username)
          // console.log(self.getCookie('token'))
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

img {
  padding-bottom: 50px;
  width: 80%;
  height: 80%;
}
</style>
