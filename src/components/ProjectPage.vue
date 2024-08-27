<template>
  <div class="projects">
    <router-link to="/projects"><h1>Project 1</h1></router-link>
    <router-link to="/projects"><h1>Project 2</h1></router-link>
    <router-link to="/projects"><h1>Project 3</h1></router-link>
    <router-link to="/projects"><h1>Project 4</h1></router-link>
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
