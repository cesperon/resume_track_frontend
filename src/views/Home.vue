<template>
  <div>
    <div id="app">
      <particles-bg color="#112031" type="fountain" :bg="true" /> 
      <div class = "login-image ">
        <h1 class="title" >Resume Track</h1>
        <img alt="App logo" src="../assets/nav_logo.svg">
        <p class="loginText">Organize and view application data <br> with Resume Track</p>
      </div>
      <Login class= "loginPortal" @clicked="openRegister"></Login>
      <register v-if="registerModal" @clicked="openRegister"></register>
<!--       <footer class="footer"></footer> -->
    </div>
  </div>
</template>

<script>
import Login from '@/components/Login.vue'
import register from '@/components/registerForm.vue'
import { ParticlesBg } from "particles-bg-vue";
export default {
  name: 'Home',
  components: {
    Login,
    register,
    ParticlesBg,
  },
  data() {
    return {
      registerModal: false,

    };
  },
  methods: {
    openRegister() {
      this.registerModal = !this.registerModal;
    }
  },

};
</script>
<style lang="scss">
#app{
  .loginPortal{
    box-shadow: 8px 8px 6px #888888;
  }
  margin-top:100px;
  .login-image{
    
  }
  .loginText{
    color:white;
  }
  img {
     font-size:500px;
  }
  .footer{
    background:white;
    height:100px;
  }
  h1{
    color:$blue;
    font-weight:bold;
    font-size:50px;
  }
}
</style>