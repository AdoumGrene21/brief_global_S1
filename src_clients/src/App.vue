<template>
<div>
    <NavBar/>

      <div class="is-loading-bar has-text-centered" v-bind:class="{'is-loading': $store.state.isLoading }">
        <div class="lds-dual-ring">

       </div>
      </div>

      <div class="section">
        <router-view/>
      </div>

    <Footeur/>
</div>
  
 
  
</template>

<script>

  import axios from 'axios'

  import NavBar from '@/components/layout/NavBar'
  import Footeur from '@/components/layout/Footeur'

  export default {
    name: 'App',
    components:{
      NavBar, Footeur
    },

    beforeCreate(){
      this.$store.commit('initializeStore')

      if (this.$store.state.token) {
        axios.defaults.headers.common['Authorization'] = "Token " + this.$store.state.token
        
      }else {
        axios.defaults.headers.common['Authorization'] = ""
      }
    }
  }
</script>

<style lang="scss">
@import '../node_modules/bulma';
.lds-dual-ring {
  display: inline-block;
  width: 80px;
  height: 80px;
}
.lds-dual-ring:after {
  content: "";
  display: block;
  width: 64px;
  height: 64px;
  margin: 8px;
  border-radius: 50%;
  border: 6px solid #ccc;
  border-color: #ccc transparent #ccc transparent;
  animation: lds-dual-ring 1.2s linear infinite;

}

@keyframes ds-dual-ring{
  0%{transparent: rotate(0deg)}
  100%{transparent: rotate(360deg)}
}

.is-loading-bar {
  height:0;
  overflow: hidden;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;

  &.is-loading{
    height:80px;
  }

}
</style>
