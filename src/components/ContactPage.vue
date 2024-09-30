<template>
  <div class="contact-style">
    <h1 class="left">Contact</h1>
    <div class="right">
      <div>
        <a href="/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="50px"
            viewBox="0 -960 960 960"
            width="50px"
            fill="#c7c350"
          >
            <path
              d="M160-200v-360q0-19 8.5-36t23.5-28l240-180q21-16 48-16t48 16l240 180q15 11 23.5 28t8.5 36v360q0 33-23.5 56.5T720-120H600q-17 0-28.5-11.5T560-160v-200q0-17-11.5-28.5T520-400h-80q-17 0-28.5 11.5T400-360v200q0 17-11.5 28.5T360-120H240q-33 0-56.5-23.5T160-200Z"
            />
          </svg>
        </a>
      </div>

      <a href="tel:+32471129928">+32471129928</a>

      <a href="mailto:sieglindevwb@gmail.com"> sieglindevwb@gmail.com </a>
    </div>
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
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 1px;
}
h1 {
  font-size: 150px;
  white-space: nowrap;
  overflow: visible;
  margin-top: -30px;
}

a {
  font-size: 30px;
  color: #c7c350;
  font-family: Arial, Helvetica, sans-serif;
}

.left,
.right {
  text-align: center;
  width: 40vw;
}

.left {
  text-align: left;
  grid-area: 1 / 1;
}

.right {
  grid-area: 4 / 4;
  text-align: right;
  align-items: end;
  width: 30vw;
}
</style>
