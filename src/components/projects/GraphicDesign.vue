<template>
  <div class="graphic-design">
    <h1>My graphic design journey</h1>
    <div class="slider-container">
      <div class="slider">
        <div class="slide" v-if="currentIndex === 0">
          <img src="/src/assets/platenbeurs/Affiche2.jpg" alt="Image 1" />
        </div>
        <div class="slide" v-if="currentIndex === 1">
          <img src="/src/assets/platenbeurs/Brochures.jpg" alt="Image 2" />
        </div>
        <div class="slide" v-if="currentIndex === 2">
          <img src="/src/assets/platenbeurs/huisstijl.jpg" alt="Image 4" />
        </div>
        <div class="slide" v-if="currentIndex === 3">
          <img src="/src/assets/platenbeurs/magazineboek.jpg" alt="Image 5" />
        </div>
        <div class="slide" v-if="currentIndex === 4">
          <img
            src="/src/assets/platenbeurs/t-shirtlogo3_platenbeurs.jpg"
            alt="Image 6"
          />
        </div>
      </div>
      <div class="slider-controls">
        <button @click="prevSlide">Previous</button>
        <button @click="nextSlide">Next</button>
      </div>
    </div>
    <!--
    <div class="column">
      <div>
        <img
          src="/src/assets/trimaarbier/Bierglas.jpg"
          alt="image 1 bierglas"
        />
      </div>
      <div>
        <img
          src="/src/assets/trimaarbier/folderachter.jpg"
          alt="image 2 folderachter"
        />
      </div>
      <div>
        <img
          src="/src/assets/trimaarbier/foldervoor.jpg"
          alt="image 3 foldervoor"
        />
      </div>
      <div>
        <img
          src="/src/assets/trimaarbier/TrimaarMockUp2.png"
          alt="image 4 trimaar"
        />
      </div>
      <div>
        <img
          src="/src/assets/trimaarbier/TrimaarPackage.jpg"
          alt="image 5 package"
        />
      </div>
    </div>
    <div class="column">
      <div>
        <img
          src="/src/assets/affiches/AFFICHE_CD_PINO.jpg"
          alt="image carpe diem"
        />
      </div>
      <div>
        <img
          src="/src/assets/affiches/AFFICHE_CD_PINO3.jpg"
          alt="image 2 carpe diem"
        />
      </div>
    </div>
    <div class="column">
      <div>
        <img src="/src/assets/affiches/Kaartje_Recto.jpg" alt="image affiche" />
      </div>
      <div>
        <img
          src="/src/assets/affiches/RommelmarktzennijsNederlands_Page_1.jpg"
          alt="image 2"
        />
      </div>
    </div>
    <div class="column">
      <div>
        <img src="/src/assets/affiches/monday.jpg" alt="image monday" />
      </div>
      <div>
        <img
          src="/src/assets/affiches/monday-blue.jpg"
          alt="image blue monday"
        />
      </div>
    </div>
    <div class="column">
      <div>
        <img src="/src/assets/interieur/TheeMCkan.jpg" alt="image theekan" />
      </div>
      <div>
        <img
          src="/src/assets/interieur/Vanwynsberghe_Sieglinde20190930(2).jpg"
          alt="image interieur 1"
        />
      </div>
      <div>
        <img
          src="/src/assets/interieur/Vanwynsberghe_Sieglinde20190930(3).jpg"
          alt="image interieur 2"
        />
      </div>
      <div>
        <img
          src="/src/assets/interieur/Vanwynsberghe_Sieglinde20190930.jpg"
          alt="image interieur 3"
        />
      </div>
    </div>
    <div class="column">
      <div>
        <img
          src="/src/assets/illustraties/Bovengang-aangepast.jpg"
          alt="image 1"
        />
      </div>
      <div>
        <img src="/src/assets/illustraties/CatRules.jpg" alt="image 2" />
      </div>
      <div>
        <img
          src="/src/assets/illustraties/illustratie_schaduw.png"
          alt="image 3"
        />
      </div>
      <div>
        <img
          src="/src/assets/illustraties/Kattenpaal-aangepast.jpg"
          alt="image 4"
        />
      </div>
      <div>
        <img
          src="/src/assets/illustraties/SieglindeVWB_Perspectieftool_Tekengebied 1.jpg"
          alt="image 5"
        />
      </div>
    </div>-->
  </div>
</template>
<script>
export default {
  name: 'graphicDesign',
  data() {
    return {
      currentIndex: 0,
      autoSlideInterval: 5000, // Adjust the interval as needed
      isAutoSliding: true,
      totalSlides: 5,
    };
  },
  mounted() {
    document.documentElement.style.setProperty('--color-background', '#ffa8d8');
    this.startAutoSlide();
  },

  methods: {
    startAutoSlide() {
      this.autoSlideIntervalId = setInterval(() => {
        this.nextSlide();
      }, this.autoSlideInterval);
    },
    stopAutoSlide() {
      clearInterval(this.autoSlideIntervalId);
    },
    prevSlide() {
      this.currentIndex =
        (this.currentIndex - 1 + this.totalSlides) % this.totalSlides;
      this.stopAutoSlide();
      this.startAutoSlide();
    },
    nextSlide() {
      this.currentIndex = (this.currentIndex + 1) % this.totalSlides;
      this.stopAutoSlide();
      this.startAutoSlide();
    },
  },
};
</script>
<style scoped>
.slider-container {
  margin: 0 auto; /* Center horizontally */
  width: 50%; /* Adjust the width as needed */
  overflow: hidden;
  position: relative;
}

.slider {
  display: flex;
}

.slide {
  display: flex;
  justify-content: center;
  align-items: center;
}

img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.slider-controls {
  text-align: center;
  margin-top: 20px; /* Adjust bottom padding as needed */
}

.slider-controls button {
  background: #ffa8d8;
  font-size: 19px;
  padding: 10px;
  border-color: #2732cf;
  color: #2732cf;
  margin: 2px;
}
/*.column_wrap {
  width: 100%;
  overflow: hidden;
  position: relative;
}

.column {
  display: flex;
  overflow-x: scroll; 
  height: 70vh; 
  flex-direction: row;
  scroll-snap-type: x mandatory; 
  position: relative;
  margin-top: 50px;
}

.column div {
  flex: 0 0 500px; 
  height: 410px; 
  scroll-snap-align: start; 
  margin-right: 10px; 
  bottom: 15%;
  position: absolute;
  -webkit-animation: linear infinite;
  -webkit-animation-name: run;
  -webkit-animation-duration: 5s;
}

@-webkit-keyframes run {
  0% {
    left: 0;
  }
  50% {
    left: 100%;
  }
  100% {
    left: 0;
  }
}

img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}*/
</style>
