<template>
    <div class="popup">
      <div class="popup-inner form text-center justify-content-center">
        <formNav></formNav>
        <div class="field">
          <em>Company Name: </em>{{company_name}}
        </div>
        <div class="field">
          <em>Position Title: </em>{{position}}
        </div>
        <div class="field">
          <em>Company Tech Stack: </em>
          <ul v-for="tech in tech_stack" :key="tech">
            {{tech}}
          </ul>
        </div>

        <div class="field">
          <em>Annual Salary: </em>{{compensation}}
        </div>
        <div class="field">
          <em>Date Applied: </em>{{date_applied}}
        </div>
        <div class="field">
          <em>Hiring Manager: </em><span v-if="hiring_manager">{{hiring_manager}}</span> <span v-if="!hiring_manager">N/A</span>
        </div>
        <div class="field">
          <em>Description: </em>{{description}}
        </div>
        <div class="field">
          <em>Location: </em>{{city}}, {{state}}
        </div>
        <div class="field">
          <em>Bennefits: </em> <span v-if="equity">Equity, </span><span v-if="four_O_one">401k, </span> <span v-if="remote">Remote, </span> <span v-if="salary">Salary</span>
        </div>

        <button v-on:click="closeModal">Close</button>
      </div>
    </div>
</template>

<script>
const axios = require('axios').default;
import router from "../router";
import store from "@/store";
import formNav from "@/components/formNav.vue";

export default {
  name: 'appPopup',
  props: ['appData'],
  components: {
    formNav
  },

  data() {
    return {
      appData: this.appData,
      company_name: this.appData.companyName,
      compensation: this.appData.compensation,
      date_applied: this.appData.dateApplied,
      description: this.appData.description,
      city: this.appData.location,
      state: this.appData.state,

      equity: this.appData.equity,
      four_O_one: this.appData.four_O_one,
      remote: this.appData.remote,
      salary: this.appData.salary,

      position: this.appData.position,
      hiring_manager: this.appData.hiringManager,
      tech_stack: this.appData.techStack,

    };
  },
  methods: {
    closeModal() {
      this.$emit('clicked');
    },
  },
};
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

  }
  em{
    font-weight:bold;
  }

}
</style>
