
<script>
import { Line } from 'vue-chartjs'
import store from '@/store'

export default {

  extends: Line,
  data() {
  		return {
  				chartData: {
			        labels: null,
			        datasets: [{
			            label: 'Company Stacks',
			            data: null,
			            backgroundColor: [
			                'rgba(54, 162, 235, 0.2)',
			                'rgba(255, 206, 86, 0.2)',
			                'rgba(75, 192, 192, 0.2)',
			                'rgba(153, 102, 255, 0.2)',
			                'rgba(255, 159, 64, 0.2)'
			            ],
			            borderColor: [

			                'rgba(54, 162, 235, 1)',
			                'rgba(255, 206, 86, 1)',
			                'rgba(75, 192, 192, 1)',
			                'rgba(153, 102, 255, 1)',
			                'rgba(255, 159, 64, 1)'
			            ],
			            borderWidth: 1
			        }]
			    },
			    options: {
			        scales: {
			            y: {
			                beginAtZero: true
			            }
			        }
			    },			    
  		};
  },
  mounted() {
  		this.setChart();
  		this.renderChart(this.chartData, this.options);
  		
  },
  methods: {
  			setChart() {
  				var lstLabels = [];
  				var lstData = [];
  				var stack = store.getters['popularStack'];
  				for(var i = 0; i < 15; i++){
  					lstLabels.push(stack[i].key);
  					lstData.push(stack[i].value);
  				}
  				this.chartData.datasets[0].data = lstData;
  				this.chartData.labels = lstLabels;
  				console.log(this.chartData);
  		},
  },

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">


</style>