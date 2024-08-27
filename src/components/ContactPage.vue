<template>
  <div class="contact-style">
    <h1>Contact</h1>
    <p>test tekst</p>
  </div>
</template>

<script>
export default {
  name: 'contact',
  mounted() {
    document.documentElement.style.setProperty('--color-background', '#2732cf');
  },
};
</script>

<style scoped>
.contact-style {
  color: #c7c350;
}
</style>
