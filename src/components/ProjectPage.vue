<template>
  <div class="projects">
    <router-link to="/projects/weatherApp"><a>1. Weather App</a></router-link>
    <router-link to="/projects/taskTracker"><a>2. Task Tracker</a></router-link>
    <router-link to="/projects"><a>3. CMS project</a></router-link>
    <router-link to="/projects"><a>4. Graphic Design</a></router-link>
  </div>
</template>

<script>
export default {
  name: 'projects',
  mounted() {
    document.documentElement.style.setProperty('--color-background', '#fcba03');
  },
};
</script>

<style scoped>
a {
  display: flex;
  font-size: 100px;
}
</style>
