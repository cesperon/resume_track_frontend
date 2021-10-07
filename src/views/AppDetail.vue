<template>
		<div class="techStack justify-content-center">
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

.overview{
	width:500px;
}
.tech{
	width:500px;

}
// .stackBtn{
// 		margin-bottom:20px;
// }
.tech:hover {

		box-shadow: 8px 0 10px -4px $blue, -8px 0 6px -2px $blue;

	}
.overview:hover {

		box-shadow: 8px 0 10px -4px $blue, -8px 0 6px -2px $blue;

	}


</style>
