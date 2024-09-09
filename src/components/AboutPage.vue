<script setup>
import IconArrow from './icons/IconArrow.vue';
</script>
<template>
  <div class="main-div">
    <div class="left">
      <h1>About me</h1>
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
  <div class="main-arrow">
    <IconArrow class="arrow"></IconArrow>
  </div>
  <div class="work">
    <h2>Work</h2>
    <h3>Stage Full-stack developer, Jobtoolz (Kortrijk)</h3>
    <p>April 2024</p>
    <h3>Graphic Designer, Mediatopper (Ieper)</h3>
    <p>January 2023</p>
    <h3>Student job as a receptionist, Facq (Kuurne)</h3>
    <p>May 2021</p>
    <h3>Responsible for decoration, Intratuin (Zwevegem)</h3>
    <p>January 2020</p>
  </div>
  <div class="trainee">
    <h2>Trainee</h2>
    <h3>Junior Full Stack Developer, BeCode (Gent)</h3>
    <p>October 2023 - Juli 2024</p>
    <h3>Graphic Media Designer, Syntra West (Roeselare)</h3>
    <p>September 2020 - June 2022</p>
    <h3>Prof. Bach. Interior Designer, LUCA school of arts (Gent)</h3>
    <p>September 2018 - November 2019</p>
    <h3>Bachelor Social work, VIVES University College (Kortrijk)</h3>
    <p>September 2015 - June 2018</p>
    <h3>High School Diploma, GO! Atheneum, GO! Atheneum (Avelgem)</h3>
    <p>September 2011 - June 2015</p>
  </div>
  <div class="trainee">
    <h2>Skills</h2>
    <h3>
      Adobe Creative Cloud HTML, CSS, SASS, Javascript, Wordpress, PHP, Github,
      Git, NodeJS, Express JS, MySQL, MariaDB, TablePlus Laravel and Vue.js
      Microsoft Office (Word, Powerpoint en Excel) Rendering Programs
    </h3>
  </div>
  <div class="trainee">
    <h2>Hobbies</h2>
    <h3>
      Chrochet, play with cats, Illustrations, music, fashion, design, caring
      for plants, exploring culture, ...
    </h3>
  </div>
</template>

<script>
export default {
  name: 'about',
  mounted() {
    document.documentElement.style.setProperty('--color-background', '#ffa8d8');
  },
};
</script>

<style scoped>
h1 {
  font-size: 150px;
  white-space: nowrap;
  overflow: visible;
}

h2 {
  font-size: 30px;
}

h3 {
  padding-top: 30px;
}

p {
  font-style: oblique;
}

.main-div {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 1px;
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

.trainee {
  margin-top: 40px;
}

.main-arrow {
  height: 100px;
  overflow: hidden;
}

.arrow {
  width: 100px;
  height: 100px;
  position: absolute;
  animation: MoveUpDown 4s linear infinite;
}
@keyframes a-one {
  from {
    top: 0;
    left: 0;
  }
  to {
    top: 100px;
    left: 100px;
  }
}
@keyframes MoveUpDown {
  0%,
  100% {
    bottom: 0;
  }
  20% {
    bottom: 100px;
  }
}

@media screen and (min-width: 1520px) {
  h1 {
    font-size: 200px;
  }
  .main-div {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(4, 1fr);
    gap: 10px;
  }

  .left,
  .right {
    text-align: center;
    width: 20vw;
  }

  .left {
    text-align: left;
    grid-area: 1 / 1 / 2 / 2;
  }

  .right {
    grid-area: 4 / 4 / 5 / 5;
    text-align: right;
    width: 22vw;
  }
}
</style>
