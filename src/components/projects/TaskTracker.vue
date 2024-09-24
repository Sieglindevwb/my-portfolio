<template>
  <div class="projects">
    <h1>Task Tracker</h1>
    <div class="description">
      <p class="intro">
        Task Tracker is a web application designed to help users manage their
        daily tasks. Users can log in, view their schedule for the day, update
        tasks, and delete them as completed. The application allows users to
        register if they don't have an account yet, providing a personalized
        task management experience. Click
        <a class="linktext" href="https://github.com/Sieglindevwb/task-tracker"
          >here</a
        >
        to install this project.
      </p>
      <hr class="new4" />
      <div class="colorbg">
        <img src="/src/assets/weatherapp.png" alt="image-weather-app" />
        <a
          class="hover-text"
          href="https://github.com/Sieglindevwb/task-tracker"
          >Click</a
        >
      </div>
    </div>
    <div>
      <h2>About</h2>
      <p>
        Task Tracker provides users with an overview of their daily tasks,
        allowing them to schedule, update, and delete tasks as needed. The
        application is designed to streamline task management and improve
        productivity by providing users with a centralized platform for
        organizing their schedules.
      </p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'projects',

  mounted() {
    document.documentElement.style.setProperty('--color-background', '#ffa8d8');
  },
};
</script>
<style scoped>
.intro p {
  width: 30vw;
}
p {
  font-size: 20px;
  padding-bottom: 1rem;
  padding-right: 2rem;
}
h1 {
  font-size: 100px;
  margin-bottom: 20px;
}
h2 {
  padding-top: 2rem;
  padding-bottom: 1rem;
  font-size: 50px;
}
li {
  font-size: 19px;
}
.linktext {
  font-size: 19px;
  text-decoration-line: underline;
}
.description {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center; /* Align items vertically in the center */
}
.colorbg {
  width: 340px;
  height: 321px;
  border-radius: 10%;
  position: relative; /* Parent container relative for text positioning */
  display: inline-block;

  background: #2732cf;
}
.colorbg img {
  width: 340px;
  border-radius: 10%;
  display: block;
}

img:hover {
  background-color: #2732cf;
}
hr.new4 {
  width: 320px;
  height: 5px;
  border: 2px solid #2732cf;
  background-color: #2732cf;
  animation: growLine 4s infinite ease-in-out;
}

.hover-text {
  position: absolute;
  top: 50%; /* Vertically center the text */
  left: 50%; /* Horizontally center the text */
  transform: translate(
    -50%,
    -50%
  ); /* Offsets the position to center the text */
  color: white; /* Text color */
  background-color: #2732cf; /* Semi-transparent background for better readability */
  padding: 41%; /* Padding around the text */
  font-size: 30px; /* Font size */
  border-radius: 10%; /* Slightly rounded corners */
  text-decoration: none; /* Remove underline from the link */
  opacity: 0; /* Initially hidden */
  transition: opacity 0.3s ease; /* Smooth fade-in effect */
}

.colorbg:hover .hover-text {
  opacity: 1; /* Show the text when hovered */
}

@keyframes growLine {
  0% {
    width: 0;
  }
  100% {
    width: 320px;
  }
}
</style>
