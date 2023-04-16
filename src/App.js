import React, { useState } from "react";
import styled from "styled-components";
import Axios from "axios";
import City from "./components/City";
import Weather from "./components/WeatherInfo.js";

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
  width: 400px;
  height: auto;
  padding: 20px 20px;
  margin: auto;
  color: #d8d4d4;
  box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  background-color: #202020;
  @media (max-width: 768px) {
    width: 280px;
    padding: 10px 10px;
  }
`;

const Title = styled.span`
  color: #d8d4d4;
  margin: 20px auto;
  font-size: 18px;
  font-weight: bold;
`;

const Back = styled.button`
  font-weight: bold;
	padding 10px;
  border: none;
  margin-left: 0;
  cursor: pointer;
  border-radius: 10px;
	otline: none;
  height: 40px;
  background-color: #2e2d2f	;
  color: #d8d4d4;

	&:hover {
    background-color: #1a1a1a;
		transition-duration: 0.5s	
  }
`;

function App() {
  const [city, updateCity] = useState();
  const [weather, updateWeather] = useState(
    JSON.parse(localStorage.getItem("weather"))
  );
  const [show, setShow] = useState(localStorage.getItem("weather") !== null);

  const fetchWeather = async (e) => {
    e.preventDefault();
    const response = await Axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_OPEN_WHEATHER_KEY}`
    );
    localStorage.setItem("weather", JSON.stringify(response.data));
    updateWeather(response.data);
    setShow(true);
  };

  const back = () => setShow(false);

  return (
    <Card>
      <Title>Weather App</Title>

      {show ? (
        <>
          <Back onClick={back}>Change City</Back>
          <Weather weather={weather} updateWeather={updateWeather} />
        </>
      ) : (
        <City updateCity={updateCity} fetchWeather={fetchWeather} />
      )}
    </Card>
  );
}

export default App;
