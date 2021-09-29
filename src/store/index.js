import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';
const axios = require('axios').default;

Vue.use(Vuex);

export default new Vuex.Store({
  plugins: [createPersistedState()],
  state: {
    user: null,
    token: null,
    userApps: null,
  }, 

  mutations: {
    setUser(state, user){
      state.user = user;
    },
    setToken(state, token){
      state.token = token;
      localStorage.setItem('token', token);
    },

    clearToken(state, token){ 
      state.token = null;
      state.user = null;
      localStorage.removeItem('token');
      localStorage.removeItem('vuex');
    },
    setUserApp(state, apps){
      state.userApps = apps;
    },
  },

  actions: {
    async addUserApp(state, apps){

      try{
            const newApp = {
                "company_name": apps.company_name,
                "position": apps.position_name,
                "hiring_manager": apps.hiring_manager,
                "date_applied": apps.date,
                "platform": apps.platform,
                "tech_stack": apps.tech_stack,
                "status": apps.status,
                "compensation": apps.compensation,
                "experience": apps.experience,
                "location": apps.location,
                "state": apps.state,
                "equity": apps.equity,
                "salary": apps.salary,
                "four_O_one": apps.four_O_one,
                "remote": apps.remote,
                "description": apps.description,
                "links": apps.links
            }

            let res = await axios.post("applications/add", newApp, {
              headers:{
                Authorization: `Bearer ${this.getters['userToken']}`
              },
            });

            await this.dispatch('getUserApp');
     
          }catch(err){
                console.log(err);
            }    
    },
    async getUserApp(state){

        try{
          const res = await axios.get("/applications", {
            headers: {
              Authorization: `Bearer ${this.getters['userToken']}`
              },
            });
          console.log('fromgetUserApp', res.data.data);
          this.commit('setUserApp', res.data.data);
        }
        catch(err){
          console.log(err);
        }         
    },
    async deleteUserApp(state, id){
        try{
            // console.log(id);
            const res = await axios.post('/applications/delete',id);
            await this.dispatch('getUserApp');
        }
        catch(err){

            console.log(err);
        }

    },

    async updateUserApp(state, id){

        try{
          const res = await axios.post('/applications/update', id);
          await this.dispatch('getUserApp');
        }catch(err){
          console.log(err);
        }

    },

    setUser(state, user){
        this.commit('setUser', user);
    },
    setToken(state, token){
        this.commit('setToken', token);
      },
    setUserApp(state, app){
        this.commit('setUserApp', app);
      },

  },

  getters: {
    isLoggedIn(state) {
      return !! state.token;
    },
    userDetails(state) {
      return state.user;
    },
    userToken(state) {
      return state.token;
    },
    userApps(state) {
      return state.userApps;
    },
  },
  modules: {
  },
});
