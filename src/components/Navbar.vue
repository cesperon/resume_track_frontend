<template>
	<nav class="navbar navbar-expand-lg navbar-light bg-light">
	  <img alt="App logo" src="../assets/nav_logo.svg">
	  <h2 class="navbar-brand" href="#">Resume Track</h2>
	  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
	    <span class="navbar-toggler-icon"></span>
	  </button>
	  <div class="collapse navbar-collapse d-flex justify-content-end" id="navbarNav">
	    <ul class="navbar-nav">
	      <li class="nav-item active">
	        <router-link class="nav-link" to="/dashboard">Applications</router-link> 
	      </li>
	      <li class="nav-item active">
	      	<router-link class="nav-link" to="/details">Statistics</router-link>
	      </li>
	      <li class="nav-item">
	        <a class="nav-link" v-on:click="logout" href="/">Logout</a>
	      </li>
	      <li>
	        <a class="nav-link" href="#">{{username}}</a>
	      </li>
	    </ul>
	  </div>
	</nav>
</template>

<script>
 import router from "../router" 
import store from "@/store"

export default {
  name: 'Navbar',
  data() {
  		return {
  				username: null,
  		};
  },
  mounted() {
  		this.getUserName();
  },
  methods: {
     	logout() {
        store.commit("clearToken");
      },
      getUserName() {
      	this.username = store.getters["userDetails"].username;
      		
      },
  },
};
</script>

<style lang="scss">


a{
	font-weight:bold;
	color: $blue;
	text-decoration: none;
	margin-right: 1em;
}

a:hover,
a.router-link-active{
	border-bottom: 3px solid $blue;
}

</style>
