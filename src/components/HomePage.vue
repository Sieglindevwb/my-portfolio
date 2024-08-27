<template>
  <div class="main-div">
    <div class="left">
      <router-link to="/projects"><h1>Projects</h1></router-link>
      <router-link to="/about"><h1>About</h1></router-link>
      <router-link to="/contact"><h1>Contact</h1></router-link>
    </div>

    <div class="right">
      <h2>Sieglinde Vanwynsberghe</h2>
      <p>
        I am an eager and flexible Junior Web Developer who enjoys taking on new
        challenges. My creativity enables me to find innovativesolutions. I am
        looking for an environment where I can share my passion for web
        development and motivate others. Additionally, I thrive in a familial
        environment where colleagues are close-knit and there is room for
        personal growth and development.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  mounted() {
    document.documentElement.style.setProperty('--color-background', '#c7c350'); // Green background
  },
};
</script>

<style scoped>
h2 {
  font-weight: 600;
}

.main-div {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 300px;
}

.left,
.right {
  padding: 20px;
  text-align: center;
}

.left {
  text-align: left;
}

.right {
  text-align: right;
  align-self: end; /* Aligns the block to the bottom of the grid cell */
  width: 22vw;
  margin-bottom: 70px;
}
</style>
