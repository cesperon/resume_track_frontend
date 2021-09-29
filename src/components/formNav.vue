<template>
	<nav class="navbar navbar-expand-lg ">
	  <img alt="App logo" src="../assets/nav_logo.svg">
	  <a class="navbar-brand" href="#">Resume Track</a>
	  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
	    <span class="navbar-toggler-icon"></span>
	  </button>
	</nav>
</template>

<script>
export default {
  name: 'formNav',
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
img {
	font: $default_font;
	height:40px;
	width:40px;
	padding: $nav_logo_padding;
	
}
nav {
	padding: 0 20px 0 20px;
	font: $default_font;
	background-color:$white;
}

</style>
