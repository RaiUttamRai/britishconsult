<template>
   <div class="main">
    <section class="appointment-section">
      <div class="container">
        <div class="row align-items-center">
          <!-- Left Section -->
          <div class="col-lg-6 text-center text-lg-start">
            <h2 class="mb-3">Request Your Free Appointment</h2>
            <p class="mb-4">
              One of our highly trained education counselors will be in touch to <br>
              discuss your study goal.
            </p>
            <i class="bi bi-arrow-right" style="font-size: 60px;margin-left: 200px"></i>
          </div>
          <!-- Right Section -->
          <div class="col-lg-6" style="margin-bottom:100px;">
            <form class="appointment-form">
              <div class="mb-3">
                <input type="text" class="form-control" placeholder="Name" />
              </div>
              <div class="mb-3">
                <input type="email" class="form-control" placeholder="Email" />
              </div>
              <div class="mb-3">
                <input type="tel" class="form-control" placeholder="+977-" />
              </div>
              <button type="submit" class="btn btn-primary w-100">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </section>
   </div>
  </template>
<style>
.main{
    height: 100px;
}
.appointment-section {
  background-color: #002a5c; /* Dark blue background */
  color: #fff; /* White text */
  padding: 40px 20px;
  height: 250px;
}


.appointment-form input {
  background-color: #f5f5f5;
  border: none;
  padding: 10px 15px;
  border-radius: 4px;
  height: 35px;
  margin-top: -10px;
}

.appointment-form input:focus {
  outline: none;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
}

.btn-primary {
  background-color: #ff7900; /* Orange button */
  border: none;
  padding: 10px;
  font-weight: bold;
  border-radius: 4px;
  transition: background-color 0.3s ease;
}

.btn-primary:hover {
  background-color: #e06600; /* Darker orange on hover */
}

@media (max-width: 768px) {
  .arrow-icon {
    display: none; /* Hide the arrow icon on smaller screens */
  }

  .appointment-section {
    text-align: center;
  }
}

</style>
<script>
</script>
  