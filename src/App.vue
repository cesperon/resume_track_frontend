<template>
  <div>
    <header>
      <Navbar v-if="isLoggedIn" class="Navbar"></Navbar>
    </header>
    <div id="app" class="d-flex justify-content-center">
      <div v-if="isLoggedIn">
        <!-- <Navbar class="Navbar"></Navbar> -->
      </div>
      <transition 
          name="fade"
          enter-active-class="animate__animated animate__fadeInLeft"
          leave-active-class="animate_animated animate__fadeOutLeft" 
          mode="out-in"
      >
        <router-view/>
      </transition>
    </div>
   <!--  <footer v-if="!isLoggedIn">Resume Track © 2021</footer> -->
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import { mapGetters } from 'vuex';
import store from '@/store';
import "animate.css";
// const isAuthenticated = store.getters['isLoggedIn'];

export default {
  name: 'Home',
  components: {
    Navbar,
  },
  computed: {
    ...mapGetters(["isLoggedIn"]),
  },
  methods: {

      slideTransition(){
          const slide = {
            template: `
              <transition name="slide">
                <div class="foo">...</div>
              </transition>
            `
          }
          return slide;          

      },

      fadeTransition(){
            const fade = {
              template: `
                <transition name="fade">
                  <div class="bar">...</div>
                </transition>
              `
              } 
              return fade;  

      },
  }
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

.fade-enter-from,
.fade-leave-to {

}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease
}
</style>
