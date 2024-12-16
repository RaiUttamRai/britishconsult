<template>
    <section class="statistics-section">
      <div class="container">
        <div class="row justify-content-center">
          <!-- Statistic Item -->
          <div
            class="col-6 col-md-3 text-center mb-4"
            v-for="(item, index) in statistics"
            :key="index"
          >
            <div class="statistic-card">
              <div class="statistic-icon">
                <img :src="item.icon" :alt="item.title" />
              </div>
              <h3 class="statistic-value">{{ item.value }}</h3>
              <p class="statistic-title">{{ item.title }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    data() {
      return {
        statistics: [
          {
            title: "Total Students",
            value: 400,
            icon: require("@/assets/images/students.jpeg"),
          },
          {
            title: "Universities",
            value: 400,
            icon: require("@/assets/images/university.jpeg"),
          },
          {
            title: "Institutes",
            value: 400,
            icon: require("@/assets/images/institute.jpeg"),
          },
          {
            title: "Countries",
            value: 400,
            icon: require("@/assets/images/countries.jpeg"),
          },
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  .statistics-section {
    background-color: #002c61; /* Dark blue background */
    padding: 40px 0;
    color: #fff;
  }
  
  .statistic-card {
    transition: transform 0.3s ease;
  }
  
  .statistic-card:hover {
    transform: translateY(-5px);
  }
  
  .statistic-icon img {
    width: 210px;
    height: 160px;
    margin-bottom: 10px;
  }
  
  .statistic-value {
    font-size: 2rem;
    font-weight: bold;
    margin: 0;
  }
  
  .statistic-title {
    font-size: 2rem;
    margin-top: 5px;
    color: white;
  }
  
  @media (max-width: 768px) {
    .statistic-icon img {
      width: 60px;
      height: 60px;
    }
  
    .statistic-value {
      font-size: 1.5rem;
    }
  
    .statistic-title {
      font-size: 0.875rem;
    }
  }
  </style>
  