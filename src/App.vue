<template>
  <main>
    <nav-bar v-if="$route.meta.showNavbar" />
    <router-view />
  </main>
</template>

<script>
import NavBar from './components/NavBar.vue';
export default {
  name: 'App',
  components: {
    NavBar,
  },
};
</script>

<style scoped></style>
