<template>
    <div>
    <section class="client-feedback-section">
      <div class="container text-center">
        <h2 class="section-title">Our Students feedback</h2>
        <div id="feedbackCarousel" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-inner" style="margin-bottom: 50px;">
            <div
              class="carousel-item"
              :class="{ active: index === 0 }"
              v-for="(feedback, index) in feedbacks"
              :key="index"
            >
              <div class="row justify-content-center">
                <div class="col-md-8 col-lg-6">
                  <div class="feedback-card">
                    <p class="feedback-text">{{ feedback.message }}</p>
                    <div class="client-info">
                      <img :src="feedback.image" class="client-img" :alt="feedback.name" />
                      <h5 class="client-name">{{ feedback.name }}</h5>
                       
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#feedbackCarousel"
            data-bs-slide="prev" 
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden" >Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#feedbackCarousel"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </section>
</div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        feedbacks: [
          {
            message:
              "When someone asks us a question, we often intuitively begin forming an answer and blurt it out even before we realize it.",
            name: "Uttam Rai",
            
            image: require("@/assets/images/uttam.jpg"),
          },
          {
            message:
              "When someone asks us a question, we often intuitively begin forming an answer and blurt it out even before we realize it.",
            name: "Hem Narayan Rajbanshi",
             
            image: require("@/assets/images/hem.jpg"),
          },
          {
            message:
              "When someone asks us a question, we often intuitively begin forming an answer and blurt it out even before we realize it.",
            name: "Utsav Adhikari",
            
            image: require("@/assets/images/utsav.jpg"),
          },
          {
            message:
              "When someone asks us a question, we often intuitively begin forming an answer and blurt it out even before we realize it.",
            name: "Khagendra Subba",
            image: require("@/assets/images/khage.jpg"),
          },
          {
            message:
              "When someone asks us a question, we often intuitively begin forming an answer and blurt it out even before we realize it.",
            name: "Rajan Khanal",
            
            image: require("@/assets/images/raju.jpg"),
          },
          {
            message:
              "When someone asks us a question, we often intuitively begin forming an answer and blurt it out even before we realize it.",
            name: "Rabin Adhikari",
            
            image: require("@/assets/images/rabin.jpg"),
          },
          {
            message:
              "When someone asks us a question, we often intuitively begin forming an answer and blurt it out even before we realize it.",
            name: "Amisha Rajbanshi",
            image: require("@/assets/images/amisha.png"),
          },
          {
            message:
              "When someone asks us a question, we often intuitively begin forming an answer and blurt it out even before we realize it.",
            name: "Bhupin Poudel",
             
            image: require("@/assets/images/bhupin.jpg"),
          },
          {
            message:
              "When someone asks us a question, we often intuitively begin forming an answer and blurt it out even before we realize it.",
            name: "Pawan Mishra",
             
            image: require("@/assets/images/pawan.jpg"),
          },
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  .client-feedback-section {
    padding: 40px 20px;
    background-color:#f8f9fa;
    color: #333;
    height: 400px;
  }
  
  .section-title {
    font-size: 28px;
    font-weight: bold;
    margin-bottom: 30px;
    text-align: center;
    color: #0056b3;
  }
  
  .feedback-card {
    background: #f8f9fa;
    height: 250px;
    width: 85%;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    padding-bottom: 10px;
  }
  
  .feedback-text {
    font-size: 16px;
    color: #555;
     
  }
  
  .client-info {
    text-align: center;
     
  }
  
  .client-img {
    width: 110px;
    height: 110px;
    border-radius: 50%;
    margin-bottom: 10px;
  }
  
  .client-name {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 5px;
  }
  
  .client-designation {
    font-size: 14px;
    color: #777;
  }
   
  </style>
  