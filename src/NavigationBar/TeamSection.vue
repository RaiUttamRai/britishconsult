<template>
  <section class="team-section">
    <div class="container">
      <!-- Managing Director Section -->
      <div class="row align-items-center director-section mb-5">
        <div class="col-md-4 text-center">
          <img :src="director.image" alt="Director" class="director-image" />
          <h4 class="mt-3">{{ director.name }}</h4>
        </div>
        <div class="col-md-5" >
          <p>
            {{ director.message }}
            <span v-if="showMoreMessage">
              <!-- Expanded content goes here -->
              It is my immense pleasure to introduce myself and our mission at British Education. 
              We are committed to providing top-quality education and fostering growth among students. 
              Through innovation and dedication, we aim to empower learners to achieve their dreams and succeed in their endeavors.
            </span>
          </p>
          <button class="btn btn-info" @click="toggleReadMore">
            {{ showMoreMessage ? "Read Less" : "Read More..." }}
          </button>
        </div>
      </div>
      <!-- CEO Section -->
      <div class="row align-items-center ceo-section mb-5">
        <div class="col-md-4 text-center"  >
          <img :src="ceo.image" alt="CEO" class="ceo-image" />
          <h4 class="mt-3">{{ ceo.name }}</h4>
        </div>
        <div class="col-md-5" >
          <p>
            {{ ceo.message }}
            <span v-if="showMoreMessage">
              <!-- Expanded content goes here -->
              It is my immense pleasure to introduce myself and our mission at British Education. 
              We are committed to providing top-quality education and fostering growth among students. 
              Through innovation and dedication, we aim to empower learners to achieve their dreams and succeed in their endeavors.
            </span>
          </p>
          <button class="btn btn-info" @click="toggleReadMore">
            {{ showMoreMessage ? "Read Less" : "Read More..." }}
          </button>
        </div>
      </div>

      <!-- Team Members Section -->
      <div class="row team-members text-center overflow-hidden">
        <transition-group
          name="slide"
          tag="div"
          class="team-slide-container"
        >
          <div
            class="col-6 col-md-3 mb-4"
            v-for="(member, index) in displayedTeam"
            :key="member.name + index"
          >
            <div class="team-card">
              <img :src="member.image" :alt="member.name" class="team-image" />
              <h5 class="mt-2">{{ member.name }}</h5>
              <p class="designation">
                <strong>{{ member.designation }}</strong>
              </p>
              <p>{{ member.location }}</p>
              <button
                class="btn btn-outline-info btn-sm"
                @click="showDetails(member)"
              >
                Learn More
              </button>
            </div>
          </div>
        </transition-group>
      </div>

      <!-- Modal Section for Learn More -->
      <div v-if="selectedMember" class="learn-more-modal">
        <div class="modal-content">
          <span class="close" @click="closeDetails">&times;</span>
          <h4>{{ selectedMember.name }}</h4>
          <p><strong>Designation:</strong> {{ selectedMember.designation }}</p>
          <p>{{ selectedMember.details }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      director: {
        name: "Mr. Santosh Pokhrel",
        image: require("@/assets/images/uttam.jpg"),
        message:
          "First and foremost, I would like to warmly greet all our valued students, parents, guardians, and the well-wishers. It is my immense pleasure to introduce myself...",
      },
      ceo: {
        name: "Mr. Uttam",
        image: require("@/assets/images/hem.jpg"),
        message:
          "First and foremost, I would like to warmly greet all our valued students, parents, guardians, and the well-wishers. It is my immense pleasure to introduce myself...",
      },
      
      showMoreMessage: false, // Controls Read More/Read Less toggle
      team: [
        {
          name: "Mr. Watshal Bhattarai",
          designation: "British Education, Birtamode",
          location: "",
          image: require("@/assets/images/uttam.jpg"),
          details:
            "Mr. Watshal Bhattarai oversees operations at British Education Birtamode with a focus on excellence.",
        },
        {
          name: "Mrs. Taranath Ghimire",
          designation: "British Education, Pathari",
          location: "",
          image: require("@/assets/images/uttam.jpg"),
          details:
            "Mrs. Taranath Ghimire is the head of British Education Pathari.",
        },
        {
          name: "Mr. HemRaj Rajbanshi",
          designation: "IT Officer",
          location: "",
          image: require("@/assets/images/uttam.jpg"),
          details:
            "Mr. HemRaj Rajbanshi manages IT-related infrastructure across departments.",
        },
        {
          name: "Mr. Demo (Designation)",
          designation: "Designation",
          location: "",
          image: require("@/assets/images/uttam.jpg"),
          details: "This is a placeholder description for the demo member.",
        },
        {
          name: "Mr. Demo (Designation)",
          designation: "Designation",
          location: "",
          image: require("@/assets/images/uttam.jpg"),
          details: "This is a placeholder description for the demo member.",
        },
      ],
      displayedTeam: [], // Subset of the team members
      selectedMember: null, // Selected team member for Learn More
      teamInterval: null, // Timer reference
    };
  },
  created() {
    this.startTeamRotation();
  },
  methods: {
    // Rotate the displayed team members every 3 seconds
    startTeamRotation() {
      let startIndex = 0;
      const chunkSize = 4; // Number of members to show at once
      this.displayedTeam = this.team.slice(startIndex, startIndex + chunkSize);

      this.teamInterval = setInterval(() => {
        startIndex = (startIndex + chunkSize) % this.team.length;
        this.displayedTeam = this.team.slice(startIndex, startIndex + chunkSize);
      }, 3000);
    },
    // Show team member details in modal
    showDetails(member) {
      this.selectedMember = member;
    },
    // Close the Learn More modal
    closeDetails() {
      this.selectedMember = null;
    },
    // Toggle Read More/Read Less content
    toggleReadMore() {
      this.showMoreMessage = !this.showMoreMessage;
    },
  },
  beforeUnmount() {
    // Clear the timer when the component is destroyed
    clearInterval(this.teamInterval);
  },
};
</script>

<style scoped>
.team-section {
  background-color: #f8f9fa;
  padding: 50px 0;
  color: #333;
}

.director-section .director-image {
  max-width: 150px;
  border: 2px solid black;
  border-radius: 5px;
}

.director-section p {
  line-height: 1.8;
  text-align: justify;
}

.ceo-section .ceo-image {
  max-width: 150px;
  border: 2px solid black;
  border-radius: 5px;
   
}

.ceo-section p {
  line-height: 1.8;
  text-align: justify;
}


.team-members {
  position: relative;
}

.team-members .team-card {
  background-color: #ffffff;
  border: 1px solid black;
  border-radius: 5px;
  padding: 15px;
  transition: transform 0.3s;
}

.team-members .team-card:hover {
  transform: translateY(-5px);
}

.team-image {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
}

/* Modal */
.learn-more-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.modal-content {
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  width: 80%;
  max-width: 500px;
  text-align: center;
  position: relative;
}

.close {
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 24px;
  cursor: pointer;
}

.btn-outline-info {
  margin-top: 10px;
}

/* Sliding Animation */
.team-slide-container {
  display: flex;
  transition: transform 0.5s ease-in-out;
}

.slide-enter-active,
.slide-leave-active {
  transition: transform 0.5s ease-in-out, opacity 0.5s ease-in-out;
}

.slide-enter-from {
  transform: translateX(100%);
  opacity: 0;
}
.slide-leave-to {
  transform: translateX(-100%);
  opacity: 0;
}
</style>
