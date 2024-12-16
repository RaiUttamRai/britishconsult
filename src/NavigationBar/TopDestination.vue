<template>
    <div>
    <section class="top-destinations">
      <div class="container">
        <!-- Section Title -->
        <div class="section-title text-center">
          <h2>
            <span class="title-bold">Top</span>
            <span class="title-red">Destinations</span>
          </h2>
          <p>
            We have quality partners in a variety of destinations around the globe.
          </p>
        </div>
  
        <!-- Destination Grid -->
        <div class="row destination-grid">
          <div
            class="col-6 col-md-4 col-lg-2 mb-4"
            v-for="(destination, index) in destinations"
            :key="index"
          >
            <div class="destination-card">
              <img
                :src="destination.image"
                :alt="destination.name"
                class="destination-image"
                @error="imageError"
              />
              <h5 class="destination-name">{{ destination.name }}</h5>
            </div>
          </div>
        </div>
      </div>
    </section>
</div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        destinations: [
          { name: "Australia", image: require("@/assets/images/sydney.jpeg") },
          { name: "Canada", image: require("@/assets/images/canada.jpeg") },
          { name: "South Korea", image: require("@/assets/images/korea.webp") },
          { name: "UK", image: require("@/assets/images/UK.jpeg") },
          { name: "Denmark", image: require("@/assets/images/denmark.jpeg") },
          { name: "European Country", image: require("@/assets/images/european.jpeg") },
        ],
      };
    },
    methods: {
      imageError(event) {
        event.target.src =
          "https://via.placeholder.com/150?text=Image+Not+Available";
      },
    },
  };
  </script>
  
  <style scoped>
  /* Section Styling */
  .top-destinations {
    padding: 40px 0;
    background: #fff;
  }
  
  .section-title h2 {
    font-size: 2rem;
    margin-bottom: 10px;
    font-weight: bold;
  }
  
  .section-title .title-bold {
    color: #002c61;
  }
  
  .section-title .title-red {
    color: red;
  }
  
  .section-title p {
    color: #666;
    font-size: 1rem;
    margin-bottom: 30px;
  }
  
  /* Destination Grid */
  .destination-grid {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  
  .destination-card {
    text-align: center;
    background: #f9f9f9;
    border-radius: 8px;
    padding: 10px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
  }
  
  .destination-card:hover {
    transform: translateY(-5px);
  }
  
  .destination-image {
    width: 100%;
    height: 200px;
    max-width: 150px;
    margin: 0 auto 10px;
    display: block;
  }
  
  .destination-name {
    font-size: 1rem;
    font-weight: bold;
    color: #002c61;
    margin: 0;
  }
  p{
    font-size: 20px;
  }
  
  @media (max-width: 768px) {
    .destination-card {
      margin-bottom: 20px;
    }
  }
  </style>
  