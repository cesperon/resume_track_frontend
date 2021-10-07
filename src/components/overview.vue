<template>
		<div class='container'>
			<div class="section">
				<b-button variant="primary" v-on:click="openGraph">
					averages
				</b-button>
					<div class="lstView" v-if="graph">
						<div class="d-flex justify-content-start">
							<span><b>Daily average</b></span> 
							<span>{{daily}}</span>
						</div>
						<div class="d-flex justify-content-start">
							<span><b>Weekly average</b></span> 
							{{weekly}}
						</div>
						<div class="d-flex justify-content-start">
							<span><b>Monthly average</b></span> 
							{{monthly}}
						</div>
						<div class="d-flex justify-content-start">
							<span><b>Total Applications</b></span> 
							<span>{{totalApplications}}</span>
						</div>
						<div class="d-flex justify-content-start">
							<span><b>Total Applied</b></span> 
							{{totalApplied}}
						</div>
						<div class="d-flex justify-content-start">
							<span><b>Applied Yesterday</b></span> 
							<span>{{yesterday}}</span>
						</div>
						<div class="d-flex justify-content-start">
							<span><b>Last Week</b></span> 
							{{lastWeek}}
						</div>
						<div class="d-flex justify-content-start">
							<span><b>Last Month</b></span> 
							{{lastMonth}}
						</div>					
				</div>
				<div v-else>
						<barGraph></barGraph>
				</div>	
			</div>
		</div>
</template>

<script>
import store from '@/store'
import tech from '@/components/techStack.vue'
import chart from '@/components/techStackChart.vue'
import barGraph from '@/components/appStatsChart.vue'


export default {
  name: 'Overview',
  components: {tech, chart, barGraph},
  data() {
  	return{
  			appStats: null,
  			daily: null,
  			monthly: null,
  			weekly: null,
  			yesterday: null,

  			lastMonth: null,
  			lastWeek: null,

  			totalApplications: null,
  			totalApplied: null,

  			graph: false,

  	};
  },
  mounted() {
  		this.setStats(); 
  },
  methods: {
  		setStats(){
  				// this.appStats = store.gettters['getApplicationStatistics'];
  				store.dispatch('getApplicationStatistics');
  				this.appStats = store.getters['getAppStats'];
  				this.daily = this.appStats.daily;
  				this.monthly = this.appStats.monthly;
  				this.weekly = this.appStats.weekly;
  				this.yesterday = this.appStats.yesterday;
  				this.lastMonth = this.appStats.lastMonth;
  				this.lastWeek = this.appStats.lastWeek;
  				this.totalApplications = this.appStats.totalApplications;
  				this.totalApplied = this.appStats.totalApplied;
  				this.weekly = this.appStats.weekly;
  				console.log('stats', this.appStats);
  		},
  		openGraph() {
  				this.graph = !this.graph;
  		},
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.container{
	margin-right:500px;
	.section{
		.lstView {
			margin-top:40px;
			.d-flex{
				margin-bottom:10px;
			}
		}
	}
	span{
		margin-right:10px;
	}
}


</style>