
<script>
import { Bar } from 'vue-chartjs'
import store from '@/store'

export default {

  extends: Bar,
  data() {
  		return {
  				appStats: null,
			    chartdata: {
			      labels: ['daily avg', 'last week', 'total last month', 'monthly avg', 'total applications sent', 'total applications applied', 'total applications denied', 'weekly avg', 'total yesterday'],
			      datasets: [
			        {
			          label: 'Data One',
			          backgroundColor: ['#C6D57E', '#D57E7E', '#A2CDCD', '#FFE1AF', '#FCFFA6', '#C1FFD7', '#B5DEFF', '#CAB8FF', '#FDFCE5'],
			          data: []
			        },

			      ]
			    },
			    options: {
						 scales: {
					      y: {
					        beginAtZero: true
					      }
					    },
				      responsive: true,	
				      maintainAspectRatio: true,
			    },					 		    
  		};
  },
  mounted() {
  		this.setChart();
  		this.renderChart(this.chartdata, this.options)
  		
  },
  methods: {
  			setChart() {
  					this.appStats = store.getters['getAppStats'];
  					this.chartdata.datasets[0].data[0] = this.appStats.daily;
  					this.chartdata.datasets[0].data[1] = this.appStats.lastMonth;
  					this.chartdata.datasets[0].data[2] = this.appStats.lastWeek;
  					this.chartdata.datasets[0].data[3] = this.appStats.monthly;
  					this.chartdata.datasets[0].data[4] = this.appStats.totalApplications;
  					this.chartdata.datasets[0].data[5] = this.appStats.totalApplied;
  					this.chartdata.datasets[0].data[6] = this.appStats.totalDenied;
  					this.chartdata.datasets[0].data[7] = this.appStats.weekly;
  					this.chartdata.datasets[0].data[8] = this.appStats.yesterday;
  		},
  },

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">


</style>