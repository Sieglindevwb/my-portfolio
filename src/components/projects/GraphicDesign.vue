<template>
  <div class="graphic-design">
    <h1>My graphic design journey</h1>
    <div class="column_wrap">
      <div class="column">
        <div>
          <img
            src="/src/assets/platenbeurs/Affiche2.jpg"
            alt="image 1 bierglas"
          />
        </div>
        <div>
          <img
            src="/src/assets/platenbeurs/Brochures.jpg"
            alt="image 2 folderachter"
          />
        </div>
        <div>
          <img
            src="/src/assets/platenbeurs/enveloppe.jpg"
            alt="image 3 foldervoor"
          />
        </div>
        <div>
          <img
            src="/src/assets/platenbeurs/huisstijl.jpg"
            alt="image 4 trimaar"
          />
        </div>
        <div>
          <img
            src="/src/assets/platenbeurs/magazineboek.jpg"
            alt="image 5 package"
          />
        </div>
        <div>
          <img
            src="/src/assets/platenbeurs/t-shirtlogo3_platenbeurs.jpg"
            alt="image 5 package"
          />
        </div>
      </div>
    </div>

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
    </div>
  </div>
</template>
<script>
export default {
  name: 'graphicDesign',
  data() {
    return {
      images: [
        { src: '/src/assets/platenbeurs/Affiche2.jpg' },
        { src: '/src/assets/platenbeurs/Brochures.jpg' },
        { src: '/src/assets/platenbeurs/enveloppe.jpg' },
        { src: '/src/assets/platenbeurs/huisstijl.jpg' },
        { src: '/src/assets/platenbeurs/magazineboek.jpg' },
        { src: '/src/assets/platenbeurs/t-shirtlogo3_platenbeurs.jpg' },

        // Add more image sources here
      ],
    };
  },
  mounted() {
    document.documentElement.style.setProperty('--color-background', '#ffa8d8');
  },
};
</script>
<style scoped>
::-webkit-scrollbar {
  display: none;
}
* {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.column_wrap {
  width: 100%;
  overflow: hidden;
  position: relative;
}

.column_wrap:before {
  content: '';
  height: 100%;
  width: 100px;
  background: linear-gradient(
    90deg,
    rgba(255, 168, 216, 1) 50%,
    rgba(255, 255, 255, 0) 100%
  );
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
}

.column_wrap:after {
  content: '';
  height: 100%;
  width: 100px;
  background: linear-gradient(
    -90deg,
    rgb(255, 168, 216, 1) 50%,
    rgba(255, 255, 255, 0) 100%
  );
  position: absolute;
  top: 0;
  right: 0;
  z-index: 1;
}

.column {
  display: flex;
  overflow-x: scroll; /* Horizontal scrolling */
  height: 70vh; /* Full viewport height for the column */
  flex-direction: row; /* Ensure content scrolls horizontally */
  scroll-snap-type: x mandatory; /* Optional: Snap on scroll */
  position: relative;
  margin-top: 50px;
}
.column div {
  flex: 0 0 500px; /* Each block takes 500px width */
  height: 410px; /* Full height for each block */
  scroll-snap-align: start; /* Optional: Snap alignment */
  margin-right: 10px; /* Space between images */
}

img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
