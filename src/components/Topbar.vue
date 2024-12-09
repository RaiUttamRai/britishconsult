<template>
    <div class="top-bar bg-dark text-white py-2" style="margin-top: -65px; height: 50px;">
      <div class="container d-flex justify-content-between align-items-center flex-wrap">
        <!-- Social Media Icons -->
        <div class="icons">
          <a href="#"  ><i class="bi bi-facebook "></i></a>
          <a href="#" ><i class="bi bi-instagram "></i></a>
          <a href="#" ><i class="bi bi-whatsapp"></i></a>
        </div>
        
        <!-- Contact Info -->
        <div class="d-flex align-items-center call">
          <span class="me-3">
            <i class="bi bi-telephone"></i> +977025580341 / 9811005186
          </span>
          <span class="me-3">
            <i class="bi bi-envelope"></i> info@pbritishedu.com
          </span>
        </div>
        
        <!-- Sign Up / Log In -->
        <div class="d-flex align-items-center">
          <a href="#" class="text-white me-3">Sign Up</a>
          <a href="#" class="text-white">Log In</a>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Topbar',
  };
  </script>
  
  <style scoped>
  .top-bar a {
    text-decoration: none;
  }
  .top-bar a:hover {
    color: #ffc107; /* Change to your desired hover color */
  }
  .icons{
    display: flex;               
  justify-content: center;     
  align-items: center;         
  gap: 15px;  
    font-size: 2rem;
  }
  .call{
    font-size: 1rem;
  }
  </style>
  