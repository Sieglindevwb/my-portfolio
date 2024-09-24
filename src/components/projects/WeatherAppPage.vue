<template>
  <div class="projects">
    <h1>My Weather App</h1>
    <div class="description">
      <p class="intro">
        This weather application allows users to input a city name, fetch
        geolocation data, retrieve weather information, and update the weather
        display on a web page. Click
        <a class="linktext" href="https://weatherapp-sieglinde.netlify.app/"
          >here</a
        >
        to test it.
      </p>
      <hr class="new4" />
      <div class="colorbg">
        <img src="/src/assets/weatherapp.png" alt="image-weather-app" />
        <a class="hover-text" href="https://weatherapp-sieglinde.netlify.app/"
          >Click</a
        >
      </div>
    </div>
    <br />
    <div>
      <h2>Usage</h2>
      <p>To use the application, follow these steps:</p>
      <ol>
        <li>
          Enter the name of the city for which you want to check the weather in
          the input field.
        </li>
        <li>Press the Enter key or click the submit button.</li>
        <li>
          The application will retrieve geolocation and weather data for the
          specified city and update the weather display on the web page.
        </li>
      </ol>
    </div>

    <div>
      <h2>Technical Overview</h2>
      <ul>
        <li>HTML Elements Selection:</li>
        <p>
          The script selects HTML elements for user input and weather display,
          including a submit button and an input field.
        </p>
        <li>GetGeoData Function:</li>
        <p>
          Fetches geolocation data based on the city name using the Open Meteo
          Geocoding API.<br />
          Updates the HTML element with the city name and country retrieved from
          the API response. <br />
          Returns geolocation data for further processing.
        </p>
        <li>GetWeatherData Function:</li>
        <p>
          Fetches weather data based on latitude and longitude using the Open<br />
          Meteo Weather API. Returns weather data for further processing.
        </p>
        <li>UpdateWeatherDisplay Function:</li>
        <p>
          Updates the weather display on the web page with the retrieved weather
          information.<br />
          Populates the daily forecast section with weather information for the
          next three days.
        </p>
        <li>Weather Descriptions and Icons:</li>
        <p>
          Maps weather codes to detailed descriptions and corresponding icons
          for display purposes.
        </p>
        <li>StartWeatherApp Function:</li>
        <p>
          Entry point of the weather application.<br />
          Retrieves user input for the city name, fetches geolocation data, and
          initiates weather data retrieval.<br />
          Updates the weather display on the web page with the fetched data.
        </p>
        <li>Event Listeners:</li>
        <p>
          Listens for user input in the input field and submission via button
          click.<br />
          Calls the startWeatherApp function when the user submits the city
          name.
        </p>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'projects',
  mounted() {
    document.documentElement.style.setProperty('--color-background', '#ffa8d8');
  },
};
</script>

<style scoped>
.intro p {
  width: 30vw;
}
p {
  font-size: 20px;
  padding-bottom: 1rem;
  padding-right: 2rem;
}
h1 {
  font-size: 100px;
  margin-bottom: 20px;
}
h2 {
  padding-top: 2rem;
  padding-bottom: 1rem;
  font-size: 50px;
}
li {
  font-size: 19px;
}
.linktext {
  font-size: 19px;
  text-decoration-line: underline;
}
.description {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center; /* Align items vertically in the center */
}
.colorbg {
  width: 340px;
  height: 321px;
  border-radius: 10%;
  position: relative; /* Parent container relative for text positioning */
  display: inline-block;

  background: #2732cf;
}
.colorbg img {
  width: 340px;
  border-radius: 10%;
  display: block;
}

img:hover {
  background-color: #2732cf;
}
hr.new4 {
  width: 320px;
  height: 5px;
  border: 2px solid #2732cf;
  background-color: #2732cf;
  animation: growLine 4s infinite ease-in-out;
}

.hover-text {
  position: absolute;
  top: 50%; /* Vertically center the text */
  left: 50%; /* Horizontally center the text */
  transform: translate(
    -50%,
    -50%
  ); /* Offsets the position to center the text */
  color: white; /* Text color */
  background-color: #2732cf; /* Semi-transparent background for better readability */
  padding: 41%; /* Padding around the text */
  font-size: 30px; /* Font size */
  border-radius: 10%; /* Slightly rounded corners */
  text-decoration: none; /* Remove underline from the link */
  opacity: 0; /* Initially hidden */
  transition: opacity 0.3s ease; /* Smooth fade-in effect */
}

.colorbg:hover .hover-text {
  opacity: 1; /* Show the text when hovered */
}

@keyframes growLine {
  0% {
    width: 0;
  }
  100% {
    width: 320px;
  }
}
</style>
