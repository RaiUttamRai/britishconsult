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
  beforeUnmount() { // Updated from beforeDestroy to beforeUnmount
    // Clear the interval when the component is unmounted
    clearInterval(this.interval);
  },
};
</script>

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
          <!-- <div class="col-md-6">
            <div class="floating-icons">
               <img src="../assets/images/gif.gif" alt="Balloon" class="balloon">
              <img src="../assets/images/gif.gif" alt="Balloon" class="balloon" />
            </div>
          </div> -->
          <!--prepare-->
          <div class="prepare" >
    <p style="color: black; margin-top: -50px; margin-left: -160px; font-size: 23px;">Prepare</p>
    <button
      class="oval-button"
      :style="{ backgroundColor: currentColor }" 
    >
      {{ currentText }}
    </button>
  </div>
  
          <!-- Right Section -->
          <div class="col-md-6 text-center">
            <img src="../assets/images/girl.jpg" alt="Girl" class="hero-image" style="max-width: 100%;
              height: 400px; margin-top: 120px;" />
               

            <div class="welcome-message">
              <h2>Welcome to <span class="highlight"><b>British <br> Education Network</b></span>.</h2>
              <p>Join your class today for a better tomorrow.</p>
              <p style="margin-left: -150px;"><strong>6:00 AM TO 5:00 PM</strong></p>
              <p style="margin-left: -210px;">(Office Time)</p>
              <button class="btn btn-primary" style="margin-left: -200px;">Apply Now</button>
            </div>
          </div>
         
        </div>
      </div>
    </section>
  </template>
  
  
  
  <style scoped>
/* Default styles for the section */
.hero-section {
  color: white;
  padding: 50px 0;
  position: relative;
  height: 600px;
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


h2,
p {
  color: #1e90ff;
}

/* Target only the specific section */
.col-md-6 {
  position: relative;
  transition: transform 0.5s ease; /* Smooth transition for sliding */
}

/* Move the section to the left when hovered */
.col-md-6:hover {
  transform: translateX(-30px); /* Adjust movement as needed */
}

.welcome-message {
  background-color: #ede6e6;
  width: 550px;
  height: 340px;
  margin-left: 700px;
  margin-top: -500px;
  padding-top: 35px;
  padding-right: 214px;
}

button:hover {
  color: black;
  background-color: #1e90ff;
}

.welcome-message .highlight {
  color: red;
}

.hero-image {
  max-width: 100%;
  height: 400px;
  margin-top:-100px;
}

/* Optional: Add floating animation for icons */
.floating-icons img {
  position: absolute;
  max-width: 100px;
  animation: float 5s infinite ease-in-out;
}

.floating-icons img:nth-child(1) {
  top: 10%;
  left: 20%;
}

.floating-icons img:nth-child(2) {
  top: 30%;
  left: 50%;
}

@keyframes float {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
  100% {
    transform: translateY(0);
  }
}
.oval-button {
  margin-top: -50px;
  padding: 10px 30px;
  font-size: 20px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s;
  border-radius: 50px; /* Makes the button oval */
}
@media (max-width: 768px) {
  .welcome-message h2 {
    font-size: 18px;
  }

  .welcome-message p {
    font-size: 14px;
  }

  .oval-button {
    font-size: 14px;
    padding: 8px 20px;
  }
}

 
</style>