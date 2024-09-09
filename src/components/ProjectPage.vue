<template>
  <div class="projects">
    <router-link to="/projects/weatherApp"
      ><a>Check your weather</a></router-link
    >
    <router-link to="/projects"><a>Project 2</a></router-link>
    <router-link to="/projects"><a>Project 3</a></router-link>
    <router-link to="/projects"><a>Project 4</a></router-link>
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
h1 {
  font-size: 150px;
}
</style>
