<template>
  <div id="app">
    <div v-if="isLoggedIn">
      <Navbar class="Navbar"></Navbar>
    </div>
    <div id="nav">
      <!-- <router-link v-if="!isLoggedIn"to="/">Home</router-link> |
      <router-link v-if="isLoggedIn" to="/Dashboard">About</router-link> -->
    </div>
    <router-view/>
    <footer v-if="!isLoggedIn">Resume Track © 2021</footer>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import { mapGetters } from 'vuex';
import store from '@/store';
// const isAuthenticated = store.getters['isLoggedIn'];

export default {
  name: 'Home',
  components: {
    Navbar,
  },
  computed: {
    ...mapGetters(["isLoggedIn"]),
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
body{
  background:white;
}
.Navbar{
  overflow: hidden;
  position: fixed; /* Set the navbar to fixed position */
  top: 0; /* Position the navbar at the top of the page */
  width: 100%; /* Full width */
}
footer {
  background-color: $green;
  margin-top:350px;
  height:250px;
  font-size:20px;
  color:$white;
}
</style>
