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
          <img src="/src/assets/platenbeurs/enveloppe.jpg" alt="Image 3" />
        </div>
        <div class="slide" v-if="currentIndex === 3">
          <img src="/src/assets/platenbeurs/huisstijl.jpg" alt="Image 4" />
        </div>
        <div class="slide" v-if="currentIndex === 4">
          <img src="/src/assets/platenbeurs/magazineboek.jpg" alt="Image 5" />
        </div>
        <div class="slide" v-if="currentIndex === 5">
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
      /*imageUrls: [
        '/src/assets/platenbeurs/Affiche2.jpg',
        '/src/assets/platenbeurs/Brochures.jpg',
        '/src/assets/platenbeurs/enveloppe.jpg',
        '/src/assets/platenbeurs/huisstijl.jpg',
        '/src/assets/platenbeurs/magazineboek.jpg',
        '/src/assets/platenbeurs/t-shirtlogo3_platenbeurs.jpg',
        // ... other image URLs ...
      ],*/
      currentIndex: 0,
      autoSlideInterval: 3000, // Adjust the interval as needed
      isAutoSliding: true,
      transitionDuration: 500,
      totalSlides: 5,
      //isUserScrolling: false,
      //scrollTimeout: null,
      //scrollSpeed: 1, // Set the speed of the auto-scrolling
    };
  },
  mounted() {
    document.documentElement.style.setProperty('--color-background', '#ffa8d8');
    this.startAutoSlide();
    //this.startAutoScroll();

    // Detect user interaction on scroll
    //this.$refs.column.addEventListener('scroll', this.handleUserScroll);
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
  // Function to start auto-scrolling
  //startAutoScroll() {
  //const column = this.$refs.column;

  //const scroll = () => {
  /*if (!this.isUserScrolling) {
          // Automatically scroll left by 1 pixel
          column.scrollLeft += this.scrollSpeed;

          // Reset to the beginning if we reach the end
          if (column.scrollLeft >= column.scrollWidth - column.clientWidth) {
            column.scrollLeft = 0;
          }
        }

        // Continue scrolling
        requestAnimationFrame(scroll);
      };

      scroll(); // Start the scroll
    },

    // Detect user scrolling and stop auto-scrolling temporarily
    handleUserScroll() {
      this.isUserScrolling = true;

      // Clear previous timeout
      if (this.scrollTimeout) clearTimeout(this.scrollTimeout);

      // After the user stops scrolling, restart auto-scroll after 3 seconds
      this.scrollTimeout = setTimeout(() => {
        this.isUserScrolling = false;
      }, 3000); // 3-second delay before resuming auto-scroll
    },
  },*/
};
</script>
<style scoped>
.slider-container {
  width: 800px; /* Adjust the width as needed */
  overflow: hidden;
  position: relative;
  height: 70vh;
}

.slider {
  display: flex;
  transition: transform 0.5s ease-in-out; /* Adjust the transition duration */
  position: absolute;
  left: 0;
}

.slide {
  flex: 0 0 100%; /* Ensure equal width for images */
  text-align: center;
}

.slide img {
  width: 100%;
  height: auto;
}

.slider-controls {
  text-align: center;
}

/* Add this CSS to create a sliding effect */
.slider.sliding {
  transform: translateX(-100%);
}
/* Hide scrollbar */
::-webkit-scrollbar {
  display: none;
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
