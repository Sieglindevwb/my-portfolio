<template>
  <div class="navigationBar">
    <div>
      <router-link to="/">Home</router-link>
      <router-link to="/projects">Projects</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/contact">Contact</router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: 'NavBar',
};
</script>
<style scoped>
.navigationBar {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-top: 1rem;
}
a {
  font-size: 15px;
  padding-right: 2rem;
  font-family: Arial, Helvetica, sans-serif;
}
</style>
