<template>
  <div>
    <section class="study-destination-section">
      <div class="container text-center">
        <h2 class="section-title" style="text-align: center">
          Your academic <span class="highlight">goals are waiting</span> to be achieved
        </h2>
        <p class="sub-title">Choose your study destination</p>
        <div class="row">
          <div
            class="col-md-6 col-lg-4 mb-4"
            v-for="(destination, index) in destinations"
            :key="index"
          >
            <div class="card">
              <div class="card-img-container">
                <img :src="destination.image" class="card-img-top" :alt="destination.title" />
                <div class="card-overlay">
                  <p class="overlay-title">{{ destination.overlayText }}</p>
                </div>
              </div>
              <div class="card-body">
                <h5 class="card-title">{{ destination.title }}</h5>
                <p class="card-subtitle text-danger">{{ destination.subTitle }}</p>
                <p class="card-text">
                  {{ destination.description }}
                  <a href="#" class="read-more">...More</a>
                </p>
              </div>
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
          {
            image: require("@/assets/images/sydney.jpeg"),  
            overlayText: "Hello World (Australia)",
            title: "SYDNEY",
            subTitle: "Study in Australia",
            description:
              "In the recent years, for higher studies, Australia has been one of the best destinations for international students. There are many different factors that contribute to attract international students.",
          },
          {
            image: require("@/assets/images/canada.jpeg"),  
            overlayText: "Hello World (Canada)",
            title: "OTTAWA",
            subTitle: "Study in Canada",
            description:
              "In the latter decades, Canada has been one of the top and most attractive study destinations for the students from across the globe. Thousands of students annually enter Canada.",
          },
          {
            image: require("@/assets/images/korea.webp"),  
            overlayText: "Hello World (South Korea)",
            title: "SEOUL",
            subTitle: "Study in South Korea",
            description:
              "South Korea in recent days has been one of the best countries for international students as it is considered one of the friendliest and safest countries for international students.",
          },
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  .study-destination-section {
    padding: 40px 20px;
    background-color: #fff;
    color: #333;
  }
  
  .section-title {
    font-size: 28px;
    font-weight: bold;
    margin-bottom: 10px;
  }
  
  .section-title .highlight {
    color: #e63946; /* Highlighted text color */
  }
  
  .sub-title {
    font-size: 16px;
    margin-bottom: 30px;
    color: #666;
  }
  
  .card {
    border: none;
    overflow: hidden;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  
  .card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
  }
  
  .card-img-container {
    position: relative;
  }
  
  .card-img-top {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }
  
  .card-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.6);
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    color: #fff;
    font-size: 14px;
    transition: opacity 0.3s ease;
  }
  
  .card-img-container:hover .card-overlay {
    opacity: 1;
  }
  
  .card-title {
    font-size: 20px;
    margin: 10px 0;
  }
  
  .card-subtitle {
    font-size: 14px;
    font-weight: bold;
  }
  
  .card-text {
    font-size: 14px;
    color: #666;
  }
  
  .read-more {
    color: #007bff;
    text-decoration: none;
    font-size: 14px;
  }
  
  .read-more:hover {
    text-decoration: underline;
  }
  </style>
  