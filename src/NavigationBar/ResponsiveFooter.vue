<script>

</script>

<template>
  <footer class="footer">
    <div class="video-container">
      <video autoplay muted loop class="background-video">
        <source src="../assets/images/water.mp4" type="video/mp4">
        Your browser does not support the video tag.
      </video>
    </div>
    <div class="footer-overlay">
      <div class="footer-container">
        <!-- Information Section -->
        <div class="footer-section">
          <h3><b>INFORMATION</b></h3>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Course</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>

        <!-- Study Abroad Section -->
        <div class="footer-section">
          <h3><b>STUDY ABROAD</b></h3>
          <ul>
            <li><a href="#">Study in Australia</a></li>
            <li><a href="#">Study in Canada</a></li>
            <li><a href="#">Study in South Korea</a></li>
            <li><a href="#">Study in Europe</a></li>
            <li><a href="#">Study in USA</a></li>
          </ul>
        </div>

        <!-- Help Section -->
        <div class="footer-section">
          <h3><b>HELP</b></h3>
          <ul>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Support</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms of Service</a></li>
          </ul>
        </div>

        <!-- Contact Us Section -->
        <div class="footer-section contact-us">
          <h3><b>CONTACT US</b></h3>
          <img src="../assets/images/britishlogo.jpeg" alt="Contact Image" class="contact-image">
          <p>Itahari</p>
          <p>Email: info@example.com</p>
          <p>Phone: +9779811005186/ 9852082384</p>
          <div class="social-icons">
            <a href="#" class="icon facebook"></a>
            <a href="#" class="icon youtube"></a>
            <a href="#" class="icon google"></a>
            <a href="#" class="icon instagram"></a>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        &copy; 2023 Your Company. All rights reserved.
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  position: relative;
  overflow: hidden;
  color: #fff;
  padding: 40px 20px;
  text-align: center;
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

.footer-overlay {
  position: relative;
  z-index: 1;
}

.footer-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.footer-section {
  flex: 1 1 200px;
  margin: 10px;
  text-align: left;
}

.footer-section h3 {
  color: #fff;
  font-size: 1.2em;
  border-bottom: 2px solid #ffc107;
  padding-bottom: 10px;
  margin-bottom: 20px;
}

.footer-section ul {
  list-style: none;
  padding: 0;
}

.footer-section ul li {
  margin: 10px 0;
}

.footer-section ul li a {
  color: #b2c7e1;
  text-decoration: none;
  transition: color 0.3s;
}

.footer-section ul li a:hover {
  color: #ffc107;
}

.contact-us {
  text-align: left;
}

.contact-us .social-icons {
  display: flex;
  gap: 10px;
  margin-top: 10px;
}

.icon {
  width: 30px;
  height: 30px;
  background-size: contain;
  display: inline-block;
}

.icon.facebook {
  background-image: url('https://img.icons8.com/color/48/facebook-new.png');
}

.icon.youtube {
  background-image: url('https://img.icons8.com/color/48/youtube-play.png');
}

.icon.google {
  background-image: url('https://img.icons8.com/color/48/google-logo.png');
}

.icon.instagram {
  background-image: url('https://img.icons8.com/color/48/instagram-new.png');
}

.contact-image {
  width: 120px;
  margin-bottom: 10px;
}

.footer-bottom {
  margin-top: 30px;
  border-top: 1px solid #333;
  padding-top: 10px;
  font-size: 0.9em;
}
</style>