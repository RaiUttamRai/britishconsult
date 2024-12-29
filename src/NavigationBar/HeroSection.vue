<template>
  <section class="hero-section"> 
    <div class="video-container">
      <video autoplay muted loop class="background-video">
        <source src="../assets/images/wraps.mp4" type="video/mp4">
        Your browser does not support the video tag.
      </video>
    </div>
    <div class="container">
      <div class="row align-items-center">
        <!-- Left Section -->
        <div class="col-md-6 text-center text-md-start">
          <div class="prepare">
            <p class="prepare-text">Prepare</p>
            <button class="oval-button" :style="{ backgroundColor: currentColor }">
              {{ currentText }}
            </button>
          </div>
        </div>

        <!-- Right Section -->
        <div class="col-md-6 text-center">
          <img src="../assets/images/girl.jpg" alt="Girl" class="hero-image" />

          <div class="welcome-message">
            <h2>Welcome to <span class="highlight"><b>British <br> Education Network</b></span>.</h2>
            <p>Join your class today for a better tomorrow.</p>
            <p><strong>6:00 AM TO 5:00 PM</strong></p>
            <p>(Office Time)</p>
            <button class="btn btn-primary">Apply Now</button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "HeroSection",
  data() {
    return {
      texts: ["IELTS", "PTE", "COMPUTER"], // Texts to display
      colors: ["#FF5733", "#28B463", "#3498DB"], // Button colors
      currentIndex: 0, // Tracks the current text and color index
    };
  },
  computed: {
    currentText() {
      return this.texts[this.currentIndex]; // Current text
    },
    currentColor() {
      return this.colors[this.currentIndex]; // Current button color
    },
  },
  mounted() {
    // Change the text and color every 2 seconds
    this.interval = setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.texts.length; // Cycle through texts and colors
    }, 2000);
  },
  beforeUnmount() {
    // Clear the interval when the component is unmounted
    clearInterval(this.interval);
  },
};
</script>

<style scoped>
.hero-section {
  color: white;
  padding: 50px 0;
  position: relative;
  height: 100vh;
  overflow: hidden;
}

.video-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: -1;
}

.background-video {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.prepare {
  text-align: center;
  margin-top: 20px;
}

.prepare-text {
  font-size: 20px;
  color: black;
  margin-bottom: 10px;
}

.oval-button {
  padding: 10px 30px;
  font-size: 20px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s;
  border-radius: 50px; /* Makes the button oval */
}

.welcome-message {
  background-color: #ede6e6;
  padding: 20px;
  border-radius: 8px;
  display: inline-block;
  text-align: center;
  margin: 20px auto 0;
}

.welcome-message h2 {
  font-size: 24px;
  margin-bottom: 15px;
}

.welcome-message p {
  margin: 5px 0;
}

.welcome-message .highlight {
  color: red;
}

.hero-image {
  max-width: 100%;
  height: auto;
}

/* Responsive Styles */
@media (max-width: 768px) {
  .prepare-text {
    font-size: 18px;
  }

  .oval-button {
    font-size: 16px;
    padding: 8px 20px;
  }

  .welcome-message {
    padding: 15px;
  }

  .welcome-message h2 {
    font-size: 20px;
  }

  .hero-section {
    padding: 20px 10px;
    height: auto;
  }

  .hero-image {
    margin-top: 20px;
  }
}
</style>
