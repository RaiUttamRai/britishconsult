<template>
  <div>
    <Topbar/>
   <AppNavbar />
   <hero-section/>
   <features/>
   <Appointment/>
   <whychoose/>
   <Call/>
   <academic-goals/>
   <top-destination/>
   <feedback/>
   <statitics-section/>
   <team-section/>
   <google-map/>
   <ResponsiveFooter/>
   <router-view />
  </div>
  
</template>

<script>

import Topbar from './components/Topbar.vue';
import AcademicGoals from './NavigationBar/AcademicGoals.vue';
import AppNavbar from './NavigationBar/AppNavbar.vue';
import Appointment from './NavigationBar/appointment.vue';
import Call from './NavigationBar/Call.vue';
import Features from './NavigationBar/features.vue';
import Feedback from './NavigationBar/Feedback.vue';
import GoogleMap from './NavigationBar/GoogleMap.vue';
import HeroSection from './NavigationBar/HeroSection.vue';
import ResponsiveFooter from './NavigationBar/ResponsiveFooter.vue';
import StatiticsSection from './NavigationBar/StatiticsSection.vue';
import TeamSection from './NavigationBar/TeamSection.vue';
import TopDestination from './NavigationBar/TopDestination.vue';
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
    AcademicGoals,
    TopDestination,
    Feedback,
    StatiticsSection,
    TeamSection,
    GoogleMap,
    ResponsiveFooter,

    
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
