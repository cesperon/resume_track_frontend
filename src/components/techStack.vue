<template>
    <div class="container">
      <b-button class="stackBtn" v-on:click="setGraphStack" variant="primary">
          <span v-if="graphStack">stack view</span>
          <span v-else>graph view</span>
      </b-button> 

      <div v-if="graphStack">

          <div v-for="stack in topStack" :key="stack.key"> 
            
                <div v-if="stack.key == ' javascript'">
                    <img id="javascript" alt="App logo" src="../assets/javascript.svg">
                    <b-tooltip target="javascript"variant="primary" triggers="hover">
                      <b>{{stack.value}}</b><p> companies you applied for have <b>{{stack.key}}</b> in there stack.</p> 
                    </b-tooltip> 
                </div>
                <div v-if="stack.key == 'python'">    
                    <img id="python" alt="App logo" src="../assets/python.svg">
                    <b-tooltip target="python" variant="primary" triggers="hover">
                      <b>{{stack.value}}</b><p> companies you applied for have <b>{{stack.key}}</b> in there stack.</p>  
                    </b-tooltip>
                </div>
                <div v-if="stack.key == ' kubernetes'">    
                    <img id="kubernetes" alt="App logo" src="../assets/kubernetes.svg">
                    <b-tooltip target="kubernetes" variant="primary" triggers="hover">
                      <b>{{stack.value}}</b><p> companies you applied for have <b>{{stack.key}}</b> in there stack.</p>  
                    </b-tooltip>
                </div>
                <div v-if="stack.key == ' php'">    
                    <img id="php" alt="App logo" src="../assets/php.svg">
                    <b-tooltip target="php" variant="primary" triggers="hover">
                      <b>{{stack.value}}</b><p> companies you applied for have <b>{{stack.key}}</b> in there stack.</p>  
                    </b-tooltip>
                </div>
                <div v-if="stack.key == ' java'" >    
                    <img id="java" alt="App logo" src="../assets/java.svg">
                    <b-tooltip target="java" variant="primary" triggers="hover">
                      <b>{{stack.value}}</b><p> companies you applied for have <b>{{stack.key}}</b> in there stack.</p>  
                    </b-tooltip>
                </div>
                <div v-if="stack.key == ' c++'" >    
                    <img id="cplusplus" alt="App logo" src="../assets/c++.svg">
                    <b-tooltip target="cplusplus" variant="primary" triggers="hover">
                      <b>{{stack.value}}</b><p> companies you applied for have <b>{{stack.key}}</b> in there stack.</p>  
                    </b-tooltip>
                </div>                                                                     
          </div>
        </div>

        <div v-else>
            <chart></chart>
        </div>

    </div>
</template>

<script>
import Login from '@/components/Login.vue'
import register from '@/components/registerForm.vue'
import store from '@/store'
import chart from '@/components/techStackChart.vue'

export default {
  name: 'techStack',
  components: {
        chart,
  },
  data() {
    return {
        popularStack: null,
        topStack:[],
        graphStack: false,

    };
  },
  mounted() {
      this.setPopularStack();
  },
  methods: {

      getTopStack(){
          for(let i = 0; i<10; i++){
              this.topStack.push(this.popularStack[i]);
          }
      },
      async setPopularStack() {
          let res = await store.getters['popularStack'];
          this.popularStack = res;

          this.getTopStack();
          console.log("gech", this.popularStack);
      },
      setGraphStack(){
          this.graphStack = !this.graphStack;
      },      
  },  

};
</script>
<style lang="scss">
.container{
  margin-top:50px;
  img{
    margin-right:5px;
  }

  #python{
    height:60px;
    width:60px;
  }
  #kubernetes{
    height:60px;
    width:60px;
  }
  #cplusplus{
    height:60px;
    width:60px;
  }
  #java{
    height:60px;
    width:60px;
  }
  #javascript{
    height:60px;
    width:60px;
  }
  #php{
    height:60px;
    width:60px;
  }
  #python{
    height:60px;
    width:60px;
  }
}

</style>