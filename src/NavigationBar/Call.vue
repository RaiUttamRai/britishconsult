<template>
  <section class="contact-section">
    <div class="container text-center">
      <h2 class="section-title">Have Any Queries? <span class="highlight">Call Us</span></h2>
      <div class="row justify-content-center">
        <div
          class="col-md-6 col-lg-4 mb-4"
          v-for="(location, index) in locations"
          :key="index"
        >
          <div class="contact-box">
            <p class="location">
              <i class="bi bi-geo-alt"></i> {{ location.place }}
            </p>
            <p class="phone">
              <i class="bi bi-telephone"></i> {{ location.phone }}
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
  min-height: auto; /* Responsive height adjustment */
}

.section-title {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 30px;
  color: #ff0; /* Highlight color */
}

.contact-box {
  background: rgba(255, 255, 255, 0.1); /* Transparent background */
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.contact-box .location,
.contact-box .phone,
.contact-box .email {
  font-size: 16px;
  margin: 5px 0;
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
    font-size: 18px;
  }
  .contact-box {
    font-size: 14px;
    padding: 10px;
  }
  .contact-box .location,
  .contact-box .phone,
  .contact-box .email {
    font-size: 14px;
  }
}
</style>
