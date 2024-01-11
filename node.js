const axios = require("axios");
const { BASE_URL } = require("./baseUrl");

async function cityWeather(city) {
  if (typeof city !== "string") {
    throw new Error("Input is not a string");
  }

  if (city.trim() === "") {
    throw new Error("Input string is empty");
  }

  const apiUrl = `${BASE_URL}&q=${encodeURIComponent(city)}`;

  try {
    const response = await axios.get(apiUrl);

    if (response.status === 404) {
      throw new Error("City not found");
    }

    if (response.status === 200) {
      console.log({ data: response.data });

      const weatherData = {
        temp: response.data.temp,
        feels_like: response.data.feels_like,
        temp_min: response.data.temp_min,
        temp_max: response.data.temp_max,
        pressure: response.data.pressure,
        humidity: response.data.humidity,
      };

      return weatherData;
    } else {
      throw new Error("Failed to fetch weather data");
    }
  } catch (error) {
    throw new Error(`Error fetching weather data: ${error.message}`);
  }
}

module.exports = {
  cityWeather,
};
