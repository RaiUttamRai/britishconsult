<template>
  <div id="map"></div>
</template>

<script>
import { Loader } from "@googlemaps/js-api-loader";

export default {
  name: "GoogleMap",
  data() {
    return {
      map: null,
    };
  },
  mounted() {
    this.initMap();
  },
  methods: {
    async initMap() {
      const loader = new Loader({
        apiKey: "AIzaSyD4gFhlxbFrG8pZs5ECBojnHXHHgTc2jUM", // Replace with your API key
        version: "weekly",
      });

      try {
        // Load the Google Maps library
        await loader.load();

        /* global google */
        const center = { lat: 26.6637, lng: 87.2718 };

        this.map = new google.maps.Map(document.getElementById("map"), {
          center: center,
          zoom: 14,
        });

        new google.maps.Marker({
          position: center,
          map: this.map,
          title: "British Education, Itahari",
        });
      } catch (error) {
        console.error("Error loading Google Maps:", error);
      }
    },
  },
};
</script>

<style scoped>
/* Ensure the map is responsive */
#map {
  width: 100%;
  height: 400px;
  position: relative;
}

@media screen and (max-width: 768px) {
  #map {
    height: 400px; /* Maintain height for smaller screens */
  }
}
</style>