<template>
  <div class="main-div">
    <div class="left">
      <router-link to="/projects"><h1>Projects</h1></router-link>
      <h1>About</h1>
      <h1>Contact</h1>
    </div>

    <div class="right">
      <h2>Sieglinde Vanwynsberghe</h2>
      <p>
        Ik ben een leergierige en flexibele Junior Web Developer die graag<br />
        nieuwe uitdagingen aangaat. Mijn creativiteit stelt me in staat<br />
        innovatieve oplossingen te vinden. Ik zoek een omgeving waar ik mijn<br />
        passie voor webontwikkeling kan delen en anderen kan motiveren.<br />
        Daarnaast ben ik iemand die makkelijk ontplooi in een familiaire<br />
        omgeving, waar collega’s dicht bij elkaar staan en waar er ruimte is<br />
        voor persoonlijke groei en ontwikkeling.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
};
</script>

<style scoped>
h1 {
  font-family: 'Fraunces', system-ui;
  font-weight: 400;
  font-style: normal;
  font-size: 220px;
}
h1:hover {
  font-style: italic;
}
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
