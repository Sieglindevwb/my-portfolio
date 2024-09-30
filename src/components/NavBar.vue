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
  computed: {
    // Compute the dynamic class for the navigation bar based on the current route
    navBarClass() {
      // If the current route is '/contact', apply the contact-specific class
      return this.$route.path === '/contact'
        ? 'navbar-contact'
        : 'navbar-default';
    },
  },
};
</script>
<style scoped>
/* Default navbar styles */
.navbar-default {
  background-color: #333; /* Default background color */
  color: white; /* Default text color */
}

/* Contact page-specific navbar styles */
.navbar-contact {
  background-color: #ff9800; /* Orange background color for contact page */
  color: black; /* Black text color for contrast */
}
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
  color: inherit;
}
</style>
