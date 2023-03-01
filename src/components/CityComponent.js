import styled from "styled-components";
import React from "react";
import { WeatherIcons } from "../App";

const SearchBox = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin: 20px;
  border: none;
  border-radius: 5px;
  & input {
    padding: 10px;
    font-size: 14px;
    border: none;
    outline: none;
    font-weight: bold;
  }
  & button {
    background-color: white;
    font-size: 14px;
    padding: 0 10px;
    color: black;
    border: none;
    outline: none;
    cursor: pointer;
    font-weight: bold;
  }
`;

const ChooseCityLabel = styled.span`
  color: white;
  margin: 10px auto;
  font-size: 18px;
  font-weight: bold;
`;

const WelcomeWeatherLogo = styled.img`
  width: 250px;
  height: 200px;
  margin: 40px auto;
`;

const CityComponent = (props) => {
  const { updateCity, fetchWeather } = props;

  return (
    <>
      <WelcomeWeatherLogo src={WeatherIcons["04d"]}/>
      <ChooseCityLabel>Find Weather of your city</ChooseCityLabel>
      <SearchBox onSubmit={fetchWeather}>
        <input
          onChange={(e) => updateCity(e.target.value)}
          placeholder="City"
        />
        <button type={"submit"}>Search</button>
      </SearchBox>
    </>
  )
};

export default CityComponent;
