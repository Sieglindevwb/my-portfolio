<template>
  <div class="projects">
    <h1>Check your weather app</h1>
    <p>
      This weather application allows users to input a city name, fetch
      geolocation data, retrieve weather information, and update the weather
      display on a web page.
    </p>
    <h2>Link</h2>
    <p>You can access the live weather application here.</p>
    <a href="https://weatherapp-sieglinde.netlify.app/">here</a><br />
    <img src="/src/assets/weatherapp.png" alt="image-weather-app" />
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
p {
  font-size: 25px;
  width: 20vw;
  padding-top: 2rem;
  padding-bottom: 2rem;
}
h1 {
  font-size: 100px;
}
h2 {
  font-size: 50px;
}
</style>
