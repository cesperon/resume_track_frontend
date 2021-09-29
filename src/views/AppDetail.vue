<template>
	<h1>App Detail</h1>
</template>

<script>


export default {
  name: 'AppDetail',
  methods: {
     	logout() {
        store.commit("clearToken");
        // this.$router.push('/');
      },
  },
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
