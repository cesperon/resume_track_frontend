<template>
      <section class="form text-center justify-content-center">
        <div class="login_form">
          <div class="field">
            <div class="control">
              <input v-model="email" class="input" type="text" placeholder="Email">
            </div>
          </div>

          <div class="field">
            <div class="control password">
              <input v-model="password" class="input" type="password" placeholder="Password">
            </div>
          </div>

          <button class ="login" href="#" v-on:click="submit">Log In</button>
          <br>
          <a v-on:click="openModal">forgot password?</a>
          <br>

          <button v-on:click="openModal">create new account</button>
  <!--         <button v-on:click="googleSignIn">Google Sign In</button> -->
      </div>
      </section>
</template>

<script>
const axios = require('axios').default;
import router from "../router";
import store from "@/store";

export default {
  name: 'Login',
  components: {
  },

  data() {
    return {
      email: '',
      password: '',
      userDetails: null,
    };
  },
  methods: {
    async submit() {
      let that = this
      let mydata = {
        "email": this.email,
        "password":this.password
      }
      console.log(mydata);
      let res = await axios.post('signin', mydata, { withCredentials: true });
      this.userDetails = res.data

      // console.log("token",this.userDetails.data.token, "username", this.userDetails.data.userinfo);
      
      store.dispatch('setToken', this.userDetails.data.token);
      store.dispatch('setUser', this.userDetails.data.userinfo);
      store.dispatch('getPopularStack');

      this.$router.push("/dashboard");
    },

    async googleSignIn() {
      let res = await axios.get('google');
    },
    openModal() {
        this.$emit('clicked');
    },
  }
};
</script>

<style lang="scss">
section{
  background:white;
  border:1px solid black;
  padding:20px 20px 20px 20px;
  box-shadow: 1px 1px 1px grey;
  border-radius:5px;
  width:450px;
  height:400px;
}
.login_form{
  margin-top:35px;
}
.password{
  padding-bottom:10px;
}
.login{
  font-size:20px;
  border:1px solid black;
  padding:0 120px 0 120px;
  background: $green;
  border-radius:5px;
  height:40px;
  color:white;
  font-weight:bold; 
}
button{
  background:$white;
  padding:5px 20px 5px 20px;
  border:1px solid black;
  border-radius:5px;
  color:black;
}
br{
  box-shadow: 5px 10px;
}
.input{
  width:300px;
  height:40px;
  margin-bottom:20px;
  border-raidus:5px;
}
</style>
