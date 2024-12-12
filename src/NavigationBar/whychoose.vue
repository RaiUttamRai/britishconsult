<template>
    <div>
    <section class="why-choose-section">
      <div class="container">
        <h2 class="section-title">
          Why Choose <span class="highlight">British</span> Education
        </h2>
        <div class="row">
          <div class="col-md-4 mb-4" v-for="(feature, index) in features" :key="index">
            <div class="feature-box">
              <div class="icon">
                <i class="bi bi-wifi"></i> <!-- Replace with your desired icon -->
              </div>
              <h4 class="feature-title">{{ feature.title }}</h4>
              <p class="feature-description">{{ feature.description }}</p>
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
        features: [
          {
            title: "Experienced Team Members",
            description:
              "Purbanchal British Education consists of a dedicated team of experienced professionals with many combined years’ of experience within education, training, consulting and management.",
          },
          {
            title: "Right Uni Selection",
            description:
              "We use advanced search technology to find the best course and University for you. We are proudly in ranking Nepalese International Student Recruiter in Japan, USA, Australia, and many more European Countries.",
          },
          {
            title: "Preparation Is Key",
            description:
              "We provide tools to help test your Japanese and English to get ready to go abroad, assist in visa preparation & budgeting as well as reviewing your statement of purpose and Letters of Recommendation to give you the best chance of successful application.",
          },
          {
            title: "Updated Advice",
            description:
              "We provide regular updates to your mobile device that take you to the next step.",
          },
          {
            title: "Responsive Nature",
            description:
              "We get your application response from College/universities quickly.",
          },
          {
            title: "High Level Of Support",
            description:
              "We have been helping students with finding the right course since 2013 and work with different College/Universities around the world including USA, New Zealand, Japan, Ireland, European Countries & Australia.",
          },
        ],
      };
    },
  };
  </script>
  
  <style>
  .why-choose-section {
    padding: 60px 20px;
    background-color: #f9f9f9;
    margin-top: 150px;
    height: 500px;
  }
  
  .section-title {
    text-align: start;
    font-size: 35px;
    font-weight: bold;
    margin-bottom: 40px;
    color: black;
  }
  
  .section-title .highlight {
    color: #ff0000; /* Highlight color for 'British' */
  }
  
  .feature-box {
    background: #fff;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    text-align: center;
    height: 240px;
  }
  
  .icon {
    font-size: 30px;
    color: #002a5c; /* Icon color */
    margin-bottom: 15px;
  }
  
  .feature-title {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 10px;
    color: #002a5c;
  }
  
  .feature-description {
    font-size: 14px;
    color: #555;
  }
  
  @media (max-width: 768px) {
    .feature-box {
      margin-bottom: 20px;
    }
  }
  </style>
  