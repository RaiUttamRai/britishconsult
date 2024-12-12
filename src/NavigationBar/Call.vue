<template>
    <section class="contact-section">
      <div class="container text-center">
        <h2  class="section-title" style="text-align: center;">Have Any Queries? <span class="highlight">Call Us</span></h2>
        <div class="row">
          <div
            class="col-md-4 col-lg-2 mb-4" style="width:20%;"
            v-for="(location, index) in locations"
            :key="index"
          >
            <div class="contact-box">
              <p class="location">
                <i class="bi bi-geo-alt"></i> {{ location.place }}
              </p>
              <p class="phone">
                <i class="bi bi-telephone" ></i> {{ location.phone }}
              </p>
              <p v-if="location.email" class="email">
                <i class="bi bi-envelope"></i> {{ location.email }}
              </p>
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
        locations: [
          { place: "Itahari", phone: "025-580341/582962" },
          { place: "Damak", phone: "9811005186" },
          { place: "Kankai", phone: "9852674563" },
          { place: "Bhadrapur Road (Birtamode)", phone: "023-545918", email: "wbbhattarai@gmail.com" },
          { place: "Patharisanishchare", phone: "981345355", email: "britisheduhub36@gmail.com" },
        ],
      };
    },
  };
  </script>
  
  <style>
  .contact-section {
    background-color: #002a5c;
    color: #fff;
    padding: 35px 15px;
    margin-top: 200px;
    height: 250px;
  }
  
  .section-title {
    font-size: 15px;
    text-align: center;
    font-weight: bold;
    margin-bottom: 30px;
    color: #ff0; /* Highlight color */
     
}
  
  .contact-box {
    background: transparent;
    padding: 6px;
    
  }
  
  .contact-box .location,
  .contact-box .phone,
  .contact-box .email {
    font-size: 15px;
    margin: 3px 0;
    color: #fff;
     
  }
  
  .contact-box i {
    color: #ff0;
    margin-right: 5px;
  }
  
  .highlight {
    color: #ff0; /* Highlight text color */
  }
  
  @media (max-width: 768px) {
    .section-title {
      font-size: 20px;
    }
    .contact-box {
      font-size: 12px;
    }
  }
  </style>
  