<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-info">
      <div class="container">
        <!-- Logo -->
        <a class="navbar-brand" href="#">
          <img src="path-to-your-logo.png" alt="Logo" class="logo" />
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
  
  <script>
  export default {
    name: "AppNavbar",
  };
  </script>
  
  <style scoped>
  .logo {
    height: 50px; /* Adjust height */
  }
  .navbar-nav .nav-link {
    color: white !important;
    font-weight: 500;
  }
  .navbar-nav .nav-link:hover {
    text-decoration: underline;
  }
  </style>
  