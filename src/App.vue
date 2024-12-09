<template>
  <div>
    <Topbar/>
   <AppNavbar />
   
   <router-view />
  </div>
  
</template>

<script>

import Topbar from './components/Topbar.vue';
import AppNavbar from './NavigationBar/AppNavbar.vue';
 
export default {
  name: 'App',
  components: {
    Topbar,
    AppNavbar,
    

  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
