<template>
    <div class="container-fluid" id="app">

<!--           <particles-bg color="#112031" type="fountain" :bg="true" />  -->
          <register v-if="registerModal" @clicked="openRegister"></register>
          <div class="row track">
            <div class = "login-image col-6 landing-col">
              <h1 class="title mx-auto my-auto mt-5" >Resume Track</h1>
              <img class="logo" alt="App logo" src="../assets/nav_logo.svg">
              <p class="loginText">Organize and view application data <br> with Resume Track</p>
            </div>
            <div class="col-6 log landing-col">
              <Login class= "loginPortal mx-auto" @clicked="openRegister"></Login>
            </div>
          </div>
    </div>
</template>

<script>
import Login from '@/components/Login.vue'
import register from '@/components/registerForm.vue'
import { ParticlesBg } from "particles-bg-vue";
import navBar from '@/components/Navbar.vue';
export default {
  name: 'Home',
  components: {
    Login,
    register,
    ParticlesBg,
    navBar,
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
  .track{
    background: url(../assets/resume.jpg);
    background-size:2800px;
    background-repeat:no-repeat; 
  }
  .title{
    color:$white;
    font-size:80px;
  }
  .login-image{
    padding-top:200px;
  }
  .loginText{
    color:white;
    font-size:30px;
  }
  .loginPortal{
    margin-top:270px;
    z-index:1;
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
  .landing-col{
    height:1500px;
    width:50%;
  }
  .log{
    background:rgba(111,171,174,0.5)

  }
  .logo{
    height:150px;
    width:150px;
  }
}
</style>