import { createApp } from 'vue';
import App from './App.vue';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';

// Import Google Maps library
import GoogleMap from "vue3-google-map";

// Create the app instance
const app = createApp(App);

// Use GoogleMap plugin
app.use(GoogleMap, {
  load: {
    key: "YOUR_GOOGLE_MAPS_API_KEY", // Replace with your Google Maps API Key
  },
});

// Mount the app
app.mount('#app');
