<template>
  <div>
    <section class="features-section py-5">
      <div class="container">
        <h2 class="text-center mb-5"><b>Our Features</b></h2>
        <div class="row">
          <div
            v-for="feature in features"
            :key="feature.title"
            class="col-md-3 col-sm-6 mb-4 text-center"
          >
            <div class="feature-item">
              <img :src="feature.icon" :alt="feature.title" class="feature-icon mb-3" />
              <h4 class="feature-title">{{ feature.title }}</h4>
              <p class="feature-description">{{ feature.description }}</p>
              <button class="btn btn-primary">Learn More</button>
            </div>
          </div>
        </div>
      </div>
    </section>
   </div>
  </template>
<script>
export default {
  name: "FeaturesSection",
  data() {
    return {
      features: [
        {
          icon: require("@/assets/images/abroad.jpeg"),
          title: "Abroad Study",
          description: "Australia, Canada, USA, South Korea, Europe: Global education opportunities abound.",
        },
        {
          icon: require("@/assets/images/training.png"),  
          title: "Training",
          description: "Sharpen listening, reading, writing, speaking and moctest competencies systematically.",
        },
        {
          icon: require("@/assets/images/counselling.jpeg"), 
          title: "Counseling",
          description: "Leading British Education Center: Expert Guidance Ensuring Your Success Journey.",
        },
        {
          icon: require("@/assets/images/preparating.jpeg"),  
          title: "Test Preparation",
          description: "Comprehensive test prep ensures success with focused practice and strategies.",
        },
      ],
    };
  },
};
</script>
<style scoped>
.features-section {
  background-color: #f9f9f9;
}

.feature-item {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;
}

.feature-item:hover {
  transform: translateY(-10px);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}

.feature-icon {
  width: 120px;
  height: 120px;
}

.feature-title {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
  color:black;
}

.feature-description {
  font-size: 14px;
  color: #666;
  margin-bottom: 15px;
}

.btn {
  font-size: 14px;
  padding: 5px 15px;
}
</style>
  