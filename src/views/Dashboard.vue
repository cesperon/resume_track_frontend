<template>
  <div class="about justify-content-center">
<!--     <h1>Dashboard {{user.firstName}} @ {{user.email}}</h1> -->
    <div class="dashboardBtns d-flex justify-content-center">
      <div class="form">
        <div class="form-outline">
          <label class="form-label" for="form1">Search {{numApps}} Applications</label>
          <input v-model="searchText" type="search" id="form1" class="form-control" />
        </div>
        <div class="row justify-content-center">
          <button class="add col-2 mt-2" v-on:click="openModal">+</button>
          <b-dropdown id="dropdown-offset" offset="25" text="filter by" class="m-2 col-2 ">
            <b-dropdown-item href="#" @click="filterApps('company')">company name</b-dropdown-item>
            <b-dropdown-item href="#" @click="filterApps('company')">position</b-dropdown-item>
            <b-dropdown-item href="#" @click="filterApps('company')">date</b-dropdown-item>
          </b-dropdown>
        </div>
      </div>
    </div>

    <appForm v-if="popUp" @clicked="openModal" @addSuccess="getApplications"></appForm>
    <div v-if="appDetailOpen">
      <appPopup @clicked="openAppModal" :appData="appData"></appPopup>
    </div>
    <div v-if="!sortType">
         <div v-if="filteredApps.length > 0" class="appList" >
          <ul v-for="apps in filteredApps" :key="apps.company_name" class="listItem">
            <updateForm v-if="appUpdateOpen" @addSuccess="getApplications" @clicked="openUpdateModal" :apps="updateAppData"></updateForm>
            <div class="app col-12" v-on:click="openPopupModal(apps)">
                {{apps.companyName}},
                {{apps.position}},
                {{apps.location}},
                {{convertDate(apps.dateApplied)}},
              <div class="utilBtns">
                <button class="editButton" v-on:click.stop="openUpdateModal(apps)">
                    <img class="trash" alt="App logo" src="../assets/pencil.svg">
                </button>
                <button class="trashButton" v-on:click.stop="deleteApp(apps.id)">
                  <img class="trash" alt="App logo" src="../assets/trash.svg">
                </button>
              </div>
            </div>
          </ul>
        </div>   
        <div v-else-if="filteredApps.length == 0" class="appList col-12" >
          <ul v-for="apps in userApps" :key="apps.company_name" class="listItem">
            <updateForm v-if="appUpdateOpen" @addSuccess="getApplications" @clicked="openUpdateModal" :apps="updateAppData"></updateForm>
            <div class="app" v-on:click="openPopupModal(apps)">
                {{apps.companyName}},
                {{apps.position}},
                {{apps.location}},
                {{convertDate(apps.dateApplied)}},
              <div class="utilBtns">
                <button class="editButton" v-on:click.stop="openUpdateModal(apps)">
                    <img class="trash" alt="App logo" src="../assets/pencil.svg">
                </button>
                <button class="trashButton" v-on:click.stop="deleteApp(apps.id)">
                  <img class="trash" alt="App logo" src="../assets/trash.svg">
                </button>
              </div>
            </div>
          </ul>
        </div>
     </div>
  </div>
</template>

<script>
  import axios from "axios"    
  import router from "../router" 
  import store from "@/store"
  import appForm from "@/components/applicationForm.vue"
  import appPopup from "@/components/appPopup.vue"
  import updateForm from "@/components/updateApplicationForm.vue"
  var moment = require('moment');

  export default {    
      name: "Dashboard",
      components: {
        appForm,
        appPopup,
        updateForm,

      },    
      data() {    
          return {    
              token: null,
              popUp: false,
              userApps: null, 
              appDetailOpen:false,
              appUpdateOpen: false,
              appData:null,
              udpateAppData:null,
              searchText:null,
              numApps:null,


          }    
      },
      mounted() {    
          this.getUserData();
          this.getApplications();
      },
      computed: {
          filteredApps(){
             return this.userApps.filter((userApps)=>
                userApps.companyName.includes(this.searchText))

          },
      } ,    
      methods: {    
        getUserData(){    
          this.user = store.getters['userDetails'];
          this.token = store.getters["userToken"];
        },

        async getApplications(){

            await store.dispatch("getUserApp").then(async (resp) => {
            this.userApps = store.getters["userApps"];
            this.numApps = this.userApps.length;

            })
            .catch(err => {
              console.log(err);
            })

            console.log("userapps", this.userApps);

          },
        async editApp(appID) {
            await store.dispatch('editUserApp'), {id:appID}.then(async (resp) => {
              this.userApps = store.getters["userApps"];
            })
            .catch(err => {
              console.log(err);
            })
        },
        async deleteApp(appID) {
            await store.dispatch('deleteUserApp', {id: appID}).then(async (resp) => {
              this.userApps = store.getters["userApps"];
            })
            .catch(err => {
              console.log(err);
            })

          },
        openModal() {
            this.popUp = !this.popUp;
          },
        openUpdateModal(apps) {
            this.appUpdateOpen = !this.appUpdateOpen;
            this.updateAppData = apps;
        },
        convertDate(date) {
            return moment(date).format('MM/DD/YYYY')
          },
        openAppModal() {
            this.appDetailOpen = !this.appDetailOpen;
          },
        openPopupModal(data){
            this.appData= data;
            this.openAppModal();
          },

      },    
  }
</script>
<style lang="scss">
#form1{
  width:600px;
}
.about{
  margin-top:100px;
}
.add {
  color:$blue;
  font-size:20px;
  font-weight:bold;
  height:40px;
  width:40px;

}
.add:hover{
  color:$green;
}

.form{
  margin-left:50px;
}
.appList {
  background:white;
  width:100%;
  margin-top:20px;
  .app{
    background:$blue;
    color:$white;
    border: 2.5px solid $green;
    border-radius:10px;
    height:50px;
    font-size:20px;
    box-shadow: 8px 8px 6px #888888;

  }
  .app:hover {
    background:$green;
    height:50px;
    width:110%;
    font-weight:bold;
  }
  .utilBtns{
    float:right;
    .editButton{
      background:$white;
      padding:0;
      margin-right:5px;
    }
    .editButton:hover{
      background:orange;
    }
    .trashButton{
      background:$tan;
      padding:0;
      float:right;
      }
    .trashButton:hover{
      background:red;
      }
    }
    .form-control{
      width:500px;
    }
}
</style>