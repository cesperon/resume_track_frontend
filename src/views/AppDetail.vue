<template>
		<div class="techStack d-flex justify-content-center">
			<div class="overview">
				<overview></overview>
			</div>
			<div class="tech">
					<tech></tech>
			</div>
		</div>
</template>

<script>
import store from '@/store'
import tech from '@/components/techStack.vue'
import overview from '@/components/overview.vue'


export default {
  name: 'AppDetail',
  components: {tech,overview},
  data() {
  	return{
  			graphStack: false,
  	};
  },
  mounted() {
 
  },
  methods: {
  		setGraphStack(){
  				this.graphStack = !this.graphStack;
  		},
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.techStack{
	margin-top:50px;
}
.overview{
	width:500px;
	box-shadow: 8px 8px 6px #888888; 	
	margin-right:50px;
	background:$white;

}
.tech{
	width:500px;
	box-shadow: 8px 8px 6px #888888;
	background:$white;

}
// .stackBtn{
// 		margin-bottom:20px;
// }
.tech:hover {

		// box-shadow: 8px 0 10px -4px $blue, -8px 0 6px -2px $blue;

	}
.overview:hover {

		// box-shadow: 8px 0 10px -4px $blue, -8px 0 6px -2px $blue;

	}


</style>
