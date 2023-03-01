import React, { useState } from "react";
import styled from "styled-components";
import Axios from "axios";
import CityComponent from "./components/CityComponent";
import WeatherComponent from "./components/WeatherInfoComponent";

export const WeatherIcons = {
  "01d": "/imgs/sunny.png",
  "01n": "/imgs/night.png",
  "02d": "/imgs/day.png",
  "02n": "/imgs/cloudy-night.png",
  "03d": "/imgs/cloudy.png",
  "03n": "/imgs/cloudy.png",
  "04d": "/imgs/perfect-day.png",
  "04n": "/imgs/cloudy-night.png",
  "09d": "/imgs/rain.png",
  "09n": "/imgs/rain-night.png",
  "10d": "/imgs/rain.png",
  "10n": "/imgs/rain-night.png",
  "11d": "/imgs/storm.png",
  "11n": "/imgs/storm.png",
};

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 380px;
  padding: 20px 20px;
  margin: auto;
  color: white;
  box-shadow: 0 0 1rem 0 rgba(0, 0, 0, .2); 
  border-radius: 5px;
  background-color: rgba(255, 255, 255, .15);
  backdrop-filter: blur(5px);
`;

const Title = styled.span`
  color: white;
  margin: 20px auto;
  font-size: 18px;
  font-weight: bold;
`;

function App() {
  const [city, updateCity] = useState();
  const [weather, updateWeather] = useState();
  const fetchWeather = async (e) => {
    e.preventDefault();
    const response = await Axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_OPEN_WHEATHER_KEY}`,
    );
    updateWeather(response.data);
  };
  return (
    <Card>
      <Title>Weather App</Title>
      {city && weather ? (
        <WeatherComponent weather={weather} city={city} />
      ) : (
        <CityComponent updateCity={updateCity} fetchWeather={fetchWeather} />
      )}
    </Card>
  )
};

export default App;
