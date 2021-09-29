<template>
	<div class="popup">
		<div class="popup-inner form text-center justify-content-center">
			<formNav class="formNav"></formNav>
			<div class="field">
				<label for="company_name">Company</label><br>
				<div class="control">
					<input id="company_name" v-model="user.company_name">
				</div>			
			</div>
			<div class="field">
				<label for="position">Position</label><br>
				<div class="control">
					<input id="position" v-model="user.position_name">
				</div>			
			</div>
			<div class="field">
				<label for="hiring_manager">Hiring Manager</label><br>
				<div class="control">
					<input id="hiring_manager" v-model="user.hiring_manager">
				</div>			
			</div>
			<div class="field">
				<label for="date_applied">Date Applied</label><br>
				<div class="control">
					<input id="date_applied" type="date" v-model="user.date">
				</div>			
			</div>
			<div class="field">
				<label for="platform">Platform</label><br>
				<div class="control">
					<input id="platform" v-model="user.platform">
				</div>			
			</div>
			<div class="field">
				<label for="tech_stack">Tech Stack</label><br>
				<div class="control">
					<input id="teck_stack" v-model="user.tech_stack">
				</div>			
			</div>
			<div class="field">
				<label for="status">Status</label><br>
				<div class="control">
					<input id="status" v-model="user.status">
				</div>			
			</div>
			<div class="field">
				<label for="compensation">Compensation</label><br>
				<div class="control">
					<input id="compensation" v-model="user.compensation">
				</div>			
			</div>
			<div class="field">
				<label for="experience">Experience</label><br>
				<div class="control">
					<input id="experience" v-model="user.experience">
				</div>			
			</div>
			<div class="field">
				<label for="location">Location</label><br>
				<div class="control">
					<input id="location" v-model="user.location">
				</div>			
			</div>
			<div class="field">
				<label for="state">State</label><br>
				<div class="control">
					<input id="state" v-model="user.state">
				</div>			
			</div>
			<div class="boolFields d-flex justify-content-center">
				<div class="field">
					<label for="equity">Equity</label><br>
					<div class="control">
						<select name="equity" id="equity" v-model="user.equity">
					      <option value="1">True</option>
					      <option value="0">False</option>
					    </select>
					</div>			
				</div>
				<div class="field">
					<label for="salary">Salary</label><br>
					<div class="control">
						<select name="salary" id="salary" v-model="user.salary">
					      <option value="1">True</option>
					      <option value="0">False</option>
					    </select>
					</div>			
				</div>
				<div class="field">
					<label for="four_O_one">401k</label><br>
					<div class="control">
						<select name="four_O_one" id="four_O_one" v-model="user.four_O_one">
					      <option value="1">True</option>
					      <option value="0">False</option>
					    </select>
					</div>			
				</div>
				<div class="remote">
					<label for="remote">Remote</label><br>
					<div class="control">
						<select name="remote" id="remote" v-model="user.remote">
					      <option value="1">True</option>
					      <option value="0">False</option>
					    </select>
					</div>			
				</div>
			</div>
			<div class="field">
				<label for="description">Description</label><br>
				<div class="control">
					<input id="description" v-model="user.description">
				</div>			
			</div>
			<div class="field">
				<label for="links">Links</label><br>
				<div class="control">
					<input v-model="user.links" id="links">	
				</div>			
			</div>

			<div class="formButtons">
				<button class="btnAdd fw-bold" v-on:click="submit">Add</button>
				<br>
				<button class="btnClose fw-bold" v-on:click="closeModal">Cancel</button>
			</div>
		</div>
	</div>
</template>

<script>
const axios = require('axios').default;
import store from "@/store";
import formNav from "@/components/formNav.vue"

export default {
	name: 'applicationForm',
	components: {
		formNav
	},
	data() {
		return {
			user:{
				company_name: null,
				position_name: null,
				hiring_manager: null,
				platform: null,
				tech_stack: null,
				status: null,
				compensation: null,
				experience: null,
				location: null,
				state: null,
				equity: null,
				salary: null,
				four_O_one: null,
				remote: null,
				description: null,
				links: null,
				date:null,		
			}
		};

	},
	methods: {
		async submit() {

			console.log("user", this.user);
			await store.dispatch('addUserApp', this.user );
            this.$emit('addSuccess');
            this.closeModal();
		},

		closeModal(event){
			this.$emit('clicked');
		}
	}
}

</script>
<style lang="scss">
.popup{
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	z-index: 99;
	background-color: rgba(0,0,0,0.2);
	display: flex;
	align-items:center;
	justify-content: center;

	.popup-inner {
		background: white;
		padding: 32px;
		width:500px;
		border-radius:10px;

		input{
			width: 300px;
		}

		.boolFields {
			margin:10px 0 10px 0;
		}
	}

	.formButtons {

		margin-top: 30px;
		.btnAdd {
			background-color:$blue;
			color:white;
			width:180px;
			height:35px;
			margin-bottom:5px;
			border-radius:5px;

		}
		.btnClose {
			background-color:$tan;
			width:100px;
			height:35px;
			border-radius:5px;
		}
	}

}
</style>