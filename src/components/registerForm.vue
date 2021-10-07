<template>
	<div class="popup">
		<div class="popup-inner form text-center justify-content-center">
			<formNav class="formNav"></formNav>
			<div class="field">
				<label for="first_name">First Name</label><br>
				<div class="control">
					<input id="first_name" v-model="first_name">
				</div>			
			</div>
			<div class="field">
				<label for="last_name">Last Name</label><br>
				<div class="control">
					<input id="last_name" v-model="last_name">
				</div>			
			</div>
			<div class="field">
				<label for="username">Username</label><br>
				<div class="control">
					<input id="username" v-model="username">
				</div>			
			</div>
			<div class="field">
				<label for="password">Password</label><br>
				<div class="control">
					<input id="password" v-model="password" type="password">
				</div>			
			</div>
			<div class="field">
				<label for="email">Email</label><br>
				<div class="control">
					<input id="email" v-model="email" type="email">
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
	name: 'registerForm',
	components: {
		formNav
	},
	data() {
		return {
			first_name: null,
			last_name:null,
			username:null,
			password:null,
			email:null,
		};
	},
	methods: {
		async submit() {
			try{
				const newUser = {
				"first_name": this.first_name,
				"last_name": this.last_name,
				"username": this.username,
				"password": this.password,
				"email": this.email,
				}
				// store.dispatch('registerUser', newUser);

				let res = await axios.post('signup', newUser);
				console.log("new user", res.data);
				store.commit("setUser",res.data.data.newUser);
      			store.commit("setToken", res.data.data.token);
				this.$router.push('/dashboard');
			}
			catch(e){
				console.log(e)
			}
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