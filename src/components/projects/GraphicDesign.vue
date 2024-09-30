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
    <div class="slider-container">
      <div class="slider">
        <div class="slide" v-if="currentIndex === 0">
          <img src="/src/assets/trimaarbier/Bierglas.jpg" alt="Image 1" />
        </div>
        <div class="slide" v-if="currentIndex === 1">
          <img src="/src/assets/trimaarbier/folderachter.jpg" alt="Image 2" />
        </div>
        <div class="slide" v-if="currentIndex === 2">
          <img src="/src/assets/trimaarbier/foldervoor.jpg" alt="Image 4" />
        </div>
        <div class="slide" v-if="currentIndex === 3">
          <img src="/src/assets/trimaarbier/TrimaarMockUp2.png" alt="Image 5" />
        </div>
        <div class="slide" v-if="currentIndex === 4">
          <img src="/src/assets/trimaarbier/TrimaarPackage.jpg" alt="Image 6" />
        </div>
      </div>
      <div class="slider-controls">
        <button @click="prevSlide">Previous</button>
        <button @click="nextSlide">Next</button>
      </div>
    </div>
    <div class="slider-container">
      <div class="slider">
        <div class="slide" v-if="currentIndex === 0">
          <img src="/src/assets/affiches/AFFICHE_CD_PINO.jpg" alt="Image 1" />
        </div>
        <div class="slide" v-if="currentIndex === 1">
          <img src="/src/assets/affiches/AFFICHE_CD_PINO3.jpg" alt="Image 2" />
        </div>
        <div class="slide" v-if="currentIndex === 2">
          <img src="/src/assets/affiches/AFFICHE_CD_PINO.jpg" alt="Image 1" />
        </div>
        <div class="slide" v-if="currentIndex === 3">
          <img src="/src/assets/affiches/AFFICHE_CD_PINO3.jpg" alt="Image 2" />
        </div>
        <div class="slide" v-if="currentIndex === 4">
          <img src="/src/assets/affiches/AFFICHE_CD_PINO.jpg" alt="Image 1" />
        </div>
      </div>
      <div class="slider-controls">
        <button @click="prevSlide">Previous</button>
        <button @click="nextSlide">Next</button>
      </div>
    </div>
    <div class="slider-container">
      <div class="slider">
        <div class="slide" v-if="currentIndex === 0">
          <img src="/src/assets/affiches/Kaartje_Recto.jpg" alt="Image 1" />
        </div>
        <div class="slide" v-if="currentIndex === 1">
          <img
            src="/src/assets/affiches/RommelmarktzennijsNederlands_Page_1.jpg"
            alt="Image 2"
          />
        </div>
        <div class="slide" v-if="currentIndex === 2">
          <img src="/src/assets/affiches/Kaartje_Recto.jpg" alt="Image 1" />
        </div>
        <div class="slide" v-if="currentIndex === 3">
          <img
            src="/src/assets/affiches/RommelmarktzennijsNederlands_Page_1.jpg"
            alt="Image 2"
          />
        </div>
        <div class="slide" v-if="currentIndex === 4">
          <img src="/src/assets/affiches/Kaartje_Recto.jpg" alt="Image 1" />
        </div>
      </div>
      <div class="slider-controls">
        <button @click="prevSlide">Previous</button>
        <button @click="nextSlide">Next</button>
      </div>
    </div>
    <div class="slider-container">
      <div class="slider">
        <div class="slide" v-if="currentIndex === 0">
          <img src="/src/assets/affiches/monday.jpg" alt="Image 1" />
        </div>
        <div class="slide" v-if="currentIndex === 1">
          <img src="/src/assets/affiches/monday-blue.jpg" alt="Image 2" />
        </div>
        <div class="slide" v-if="currentIndex === 2">
          <img src="/src/assets/affiches/monday.jpg" alt="Image 1" />
        </div>
        <div class="slide" v-if="currentIndex === 3">
          <img src="/src/assets/affiches/monday-blue.jpg" alt="Image 2" />
        </div>
        <div class="slide" v-if="currentIndex === 4">
          <img src="/src/assets/affiches/monday.jpg" alt="Image 1" />
        </div>
      </div>
      <div class="slider-controls">
        <button @click="prevSlide">Previous</button>
        <button @click="nextSlide">Next</button>
      </div>
    </div>
    <div class="slider-container">
      <div class="slider">
        <div class="slide" v-if="currentIndex === 0">
          <img src="/src/assets/interieur/TheeMCkan.jpg" alt="Image 1" />
        </div>
        <div class="slide" v-if="currentIndex === 1">
          <img
            src="/src/assets/interieur/Vanwynsberghe_Sieglinde20190930(2).jpg"
            alt="Image 2"
          />
        </div>
        <div class="slide" v-if="currentIndex === 2">
          <img
            src="/src/assets/interieur/Vanwynsberghe_Sieglinde20190930(3).jpg"
            alt="Image 1"
          />
        </div>
        <div class="slide" v-if="currentIndex === 3">
          <img
            src="/src/assets/interieur/Vanwynsberghe_Sieglinde20190930.jpg"
            alt="Image 2"
          />
        </div>
        <div class="slide" v-if="currentIndex === 4">
          <img src="/src/assets/interieur/TheeMCkan.jpg" alt="Image 1" />
        </div>
      </div>
      <div class="slider-controls">
        <button @click="prevSlide">Previous</button>
        <button @click="nextSlide">Next</button>
      </div>
    </div>
    <div class="slider-container">
      <div class="slider">
        <div class="slide" v-if="currentIndex === 0">
          <img
            src="/src/assets/illustraties/Bovengang-aangepast.jpg"
            alt="Image 1"
          />
        </div>
        <div class="slide" v-if="currentIndex === 1">
          <img src="/src/assets/illustraties/CatRules.jpg" alt="Image 2" />
        </div>
        <div class="slide" v-if="currentIndex === 2">
          <img
            src="/src/assets/illustraties/illustratie_schaduw.png"
            alt="Image 1"
          />
        </div>
        <div class="slide" v-if="currentIndex === 3">
          <img
            src="/src/assets/illustraties/Kattenpaal-aangepast.jpg"
            alt="Image 2"
          />
        </div>
        <div class="slide" v-if="currentIndex === 4">
          <img
            src="/src/assets/illustraties/SieglindeVWB_Perspectieftool_Tekengebied 1.jpg"
            alt="Image 1"
          />
        </div>
      </div>
      <div class="slider-controls">
        <button @click="prevSlide">Previous</button>
        <button @click="nextSlide">Next</button>
      </div>
    </div>
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
  width: 100%; /* Adjust the width as needed */
  overflow: hidden;
  position: relative;
}

.slider {
  display: flex;
  justify-content: center;
  align-items: center;
}

.slide {
  flex: 0 0 auto; /* Ensure equal width */
  height: 100%;
  display: flex;
}

img {
  height: 500px;
  width: 500px;
  object-fit: cover;
}

.slider-controls {
  margin-bottom: 10px;
  margin-top: 10px;
  text-align: center;
}

.slider-controls button {
  background: #ffa8d8;
  font-size: 19px;
  padding: 10px;
  border-color: #2732cf;
  color: #2732cf;
  margin: 2px;
}
</style>
