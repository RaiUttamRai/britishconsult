<template>
  <div>
    <Topbar/>
   <AppNavbar />
   <hero-section/>
   <features/>
   <Appointment/>
   <whychoose/>
   <Call/>
   
   <router-view />
  </div>
  
</template>

<script>

import Topbar from './components/Topbar.vue';
import AppNavbar from './NavigationBar/AppNavbar.vue';
import Appointment from './NavigationBar/appointment.vue';
import Call from './NavigationBar/Call.vue';
import Features from './NavigationBar/features.vue';
import HeroSection from './NavigationBar/HeroSection.vue';
import Whychoose from './NavigationBar/whychoose.vue';
 
export default {
  name: 'App',
  components: {
    Topbar,
    AppNavbar,
    HeroSection,
    Features,
    Appointment,
    Whychoose,
    Call,
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
