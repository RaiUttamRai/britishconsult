<script>
 
  export default {
    name: "AppNavbar",
    data(){
      return{
         
      }
    },
  };
  </script>
  

<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-info" style="height: 100px">
      <div class="container">
        <!-- Logo -->
        <a class="navbar-brand" href="#">
          <img src="../assets/images/britishlogo.jpeg" alt="Logo" class="logo" />
        </a>
         
  
        <!-- Toggler for small screens -->
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
  
        <!-- Navbar Links -->
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <a class="nav-link active" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">About Us</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Courses</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Study Abroad</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Testimonials</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Contact Us</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </template>
  
  
  <style scoped>
   
  .logo {
    height: 100px;
    margin-left: -120px;
  }
  .navbar-nav .nav-link {
  color: white !important;      
  font-size: 20px;              
  text-decoration: none;        
}

.navbar-nav .nav-link:hover {
  text-decoration: underline;   
  color: red !important;        
}

.navbar-nav .nav-link:focus {
  outline: none;                
}

a {
  font-size: 25px;
}

  a{
    font-size: 25px;
  }
  </style>
  