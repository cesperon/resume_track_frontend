<template>
  <div>
    <div id="app">
      <div class = "login-image">
        <h1 class="title">Resume Track</h1>
        <img alt="App logo" src="../assets/nav_logo.svg">
        <p>Organize and view application data <br> with Resume Track</p>
      </div>
      <Login @clicked="openRegister"></Login>
      <register v-if="registerModal" @clicked="openRegister"></register>
      <footer class="footer"></footer>
    </div>
  </div>
</template>

<script>
import Login from '@/components/Login.vue'
import register from '@/components/registerForm.vue'

export default {
  name: 'Home',
  components: {
    Login,
    register,
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
  margin-top:100px;
  .login-image{
    margin-right:100px;
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