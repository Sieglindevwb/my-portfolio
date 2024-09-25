<template>
  <div class="graphic-design">
    <h1>My graphic design journey</h1>
    <div class="column">
      <img
        src="/src/assets/platenbeurs/Affiche2.jpg"
        alt="affiche platenbeurs"
      />
      <img
        src="/src/assets/platenbeurs/Brochures.jpg"
        alt="brochure platenbeurs"
      />
      <img
        src="/src/assets/platenbeurs/enveloppe.jpg"
        alt="enveloppe platenbeurs"
      />
      <img
        src="/src/assets/platenbeurs/huisstijl.jpg"
        alt="image 3 platenbeurs"
      />
      <img
        src="/src/assets/platenbeurs/magazineboek.jpg"
        alt="image 4 platenbeurs"
      />
      <img
        src="/src/assets/platenbeurs/t-shirtlogo3_platenbeurs.jpg"
        alt="image 4 platenbeurs"
      />
    </div>
    <div class="column">
      <img src="/src/assets/trimaarbier/Bierglas.jpg" alt="image 1 bierglas" />
      <img
        src="/src/assets/trimaarbier/folderachter.jpg"
        alt="image 2 folderachter"
      />
      <img
        src="/src/assets/trimaarbier/foldervoor.jpg"
        alt="image 3 foldervoor"
      />
      <img
        src="/src/assets/trimaarbier/TrimaarMockUp2.png"
        alt="image 4 trimaar"
      />
      <img
        src="/src/assets/trimaarbier/TrimaarPackage.jpg"
        alt="image 5 package"
      />
    </div>
    <div class="column">
      <img
        src="/src/assets/affiches/AFFICHE_CD_PINO.jpg"
        alt="image carpe diem"
      />
      <img
        src="/src/assets/affiches/AFFICHE_CD_PINO3.jpg"
        alt="image 2 carpe diem"
      />
    </div>
    <div class="column">
      <img src="/src/assets/affiches/Kaartje_Recto.jpg" alt="image affiche" />
      <img
        src="/src/assets/affiches/RommelmarktzennijsNederlands_Page_1.jpg"
        alt="image 2"
      />
    </div>
    <div class="column">
      <img src="/src/assets/affiches/monday.jpg" alt="image monday" />
      <img src="/src/assets/affiches/monday-blue.jpg" alt="image blue monday" />
    </div>
    <div class="column">
      <img src="/src/assets/interieur/TheeMCkan.jpg" alt="image theekan" />
      <img
        src="/src/assets/interieur/Vanwynsberghe_Sieglinde20190930(2).jpg"
        alt="image interieur 1"
      />
      <img
        src="/src/assets/interieur/Vanwynsberghe_Sieglinde20190930(3).jpg"
        alt="image interieur 2"
      />
      <img
        src="/src/assets/interieur/Vanwynsberghe_Sieglinde20190930.jpg"
        alt="image interieur 3"
      />
    </div>
    <div class="column">
      <img
        src="/src/assets/illustraties/Bovengang-aangepast.jpg"
        alt="image 1"
      />
      <img src="/src/assets/illustraties/CatRules.jpg" alt="image 2" />
      <img
        src="/src/assets/illustraties/illustratie_schaduw.png"
        alt="image 3"
      />
      <img
        src="/src/assets/illustraties/Kattenpaal-aangepast.jpg"
        alt="image 4"
      />
      <img
        src="/src/assets/illustraties/SieglindeVWB_Perspectieftool_Tekengebied 1.jpg"
        alt="image 5"
      />
    </div>
  </div>
</template>
<script>
export default {
  name: 'graphicDesign',
  mounted() {
    document.documentElement.style.setProperty('--color-background', '#ffa8d8');
  },
};
</script>
<style scoped>
.column {
  display: grid;
  grid-template-columns: repeat(6, 1fr); /* 3 equal-width columns */
  grid-gap: 0; /* No gap between the images */
  justify-items: center;
  margin-top: 4rem;
}
.column img {
  width: 100%; /* Make images take up the full width of their grid cell */
  height: 550px; /* Set a fixed height for uniform size */
  object-fit: cover; /* Ensure the image fits without distortion */
}
.second-column {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 0;
  justify-items: center;
}
.second-column img {
  width: 400px;
}
</style>
