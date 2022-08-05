import React, { useEffect, useState } from "react";
import WeatherCard from "./WeatherCard";
import "./style.css";

const Temp = () => {
  const [searchValue, setSearchValue] = useState("agra");
  const [tempInfo, setTempInfo] = useState({});

  const getWeatherInfo = async () => {
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=a648299b1d5144127674982b811e3b05`;

      let res = await fetch(url);
      let data = await res.json();

      const { temp, humidity, pressure } = data.main;
      const { main: weathermood } = data.weather[0];
      const { name } = data;
      const { speed } = data.wind;
      const { country, sunset } = data.sys;

      const myNewWeatherInfo = {
        temp,
        humidity,
        pressure,
        weathermood,
        name,
        speed,
        country,
        sunset,
      };

      setTempInfo(myNewWeatherInfo);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getWeatherInfo();
  }, );

  

  return (
    <>
      <div>
        <div className={`text-white bg-gray-800 flex flex-col h-screen`}>
          <div className="search flex flex-row justify-center my-10 ">
            <input
              type="search"
              placeholder="location..."
              autoFocus
              id="search"
              className="searchTerm text-black uppercase border-solid border-2 border-white rounded-l-xl pl-2"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />

            <button
              className="searchButton border-solid border-white border-2 rounded-r-xl pl-2 pr-3 bg-gray-600"
              type="button"
              onClick={getWeatherInfo}
            >
              Search
            </button>
          </div>

            {/*Weather card  */}
          <WeatherCard {...tempInfo} />
        </div>

        
        
      </div>
    </>
  );
};

export default Temp;
