import styled from "styled-components";
import React from "react";
import { WeatherIcons } from "../App";

const SearchBox = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin: 20px;
  border: none;
  border-radius: 10px;
  & input {
    background-color: #d8d4d4;
    padding: 10px;
    font-size: 14px;
    border: none;
    outline: none;
    font-weight: bold;
  }
  & button {
    background-color: #d8d4d4;
    font-size: 14px;
    padding: 0 10px;
    color: #000000;
    border: none;
    outline: none;
    cursor: pointer;
    font-weight: bold;
  }

  @media (max-width: 768px) {
    & input {
      width: 160px;
    }
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

const InputCity = styled.input`
  height: 25 px;
  border-radius: 10px 0 0 10px;
`;

const ButtonSearch = styled.button`
  border-radius: 0 10px 10px 0;
`;

const City = ({ updateCity, fetchWeather }) => {
  return (
    <>
      <WelcomeWeatherLogo src={WeatherIcons["04d"]} />
      <ChooseCityLabel>Find weather of your city</ChooseCityLabel>
      <SearchBox onSubmit={fetchWeather}>
        <InputCity
          onChange={(e) => updateCity(e.target.value)}
          placeholder="City"
        />
        <ButtonSearch type={"submit"}>Search</ButtonSearch>
      </SearchBox>
    </>
  );
};

export default City;
