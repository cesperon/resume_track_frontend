<template>

		<div class="tech-stack">
			<b-button v-b-toggle.sidebar-no-header variant="primary">Toggle Sidebar</b-button>
	    <b-sidebar id="sidebar-no-header" aria-labelledby="sidebar-no-header-title" no-header shadow>
	      <template #default="{ hide }">
	        <div class="p-3">
	          <formNav class="formNav"></formNav>
	          <p>
	            Click on views below to see statistics about your applications sent
	          </p>
	          <nav class="mb-3 btn-nav">
	            <b-nav vertical>
	              <b-nav-item class="btn-nav" active @click="openGraph('totalAverages')">View Total Averages</b-nav-item>
	              <b-nav-item @click="openGraph('techStack')">View Top Stack</b-nav-item>
<!-- 	              <b-nav-item href="#link-2" @click="hide">Another Link</b-nav-item> -->
	            </b-nav>
	          </nav>
	          <b-button variant="primary" block @click="hide">Close Sidebar</b-button>
	        </div>
	      </template>
	    </b-sidebar>

			<div class="techStack">
				<div class="row">
					<div v-if="totalAverages" class="col-6 overview">
						<overview></overview>
					</div>
					<div v-if="techStack" class="col-6 tech">
							<tech></tech>
					</div>
					
				</div>	    
	  	</div>
		</div>

</template>

<script>
import store from '@/store'
import tech from '@/components/techStack.vue'
import overview from '@/components/overview.vue'
import formNav from  '@/components/formNav.vue'


export default {
  name: 'AppDetail',
  components: {tech,overview, formNav},
  data() {
  	return{
  			graphStack: false,
  			totalAverages: true,
  			techStack: false,
  	};
  },
  mounted() {
 
  },
  methods: {
  		setGraphStack(){
  				this.graphStack = !this.graphStack;
  		},
  		openGraph(graphType){
  				if(graphType == 'totalAverages'){
  					this.totalAverages = true;
  					this.techStack = false;
  				}
  				else if(graphType == 'techStack'){
  					this.techStack = true;
  					this.totalAverages = false;
  				}
  		},
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.tech-stack{
	margin-top:100px;
}
.techStack{
	margin-top:50px;
}
.btn-nav{
	background:$nav;
}
.overview{
	width:1000px;
	box-shadow: 8px 8px 6px #888888; 	
	background:$nav;
	border:1px solid black;

}
.tech{
	width:1000px;
	box-shadow: 8px 8px 6px #888888;
	background:$nav;
	border:1px solid black;

}



</style>
