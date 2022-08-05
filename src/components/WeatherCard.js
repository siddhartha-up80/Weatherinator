import React, { useEffect } from "react";

const WeatherCard = ({
  temp,
  humidity,
  pressure,
  weathermood,
  name,
  speed,
  country,
  sunset,
}) => {
  const [theme, setTheme] = React.useState("bg-yellow-500")
  const [weatherState, setWeatheState] = React.useState("");
  const [wallpaper, setWallpaper] = React.useState(
    "url(https://source.unsplash.com/random/2000x2000/?sunny)"
  );


  useEffect(() => {
    if (weathermood) {
      switch (weathermood) {
        case "Clouds":
          setTheme("bg-gray-800");
          setWeatheState("wi-day-cloudy");
          setWallpaper(
            "url(https://source.unsplash.com/random/2000x2000/?clouds)"
          );
          
          break;
        case "Haze":
          setWeatheState("wi-fog");
          setWallpaper(
            "url(https://source.unsplash.com/random/2000x2000/?fog)"
          );
          setTheme("bg-pink-400")
          break;
        case "Clear":
          setWeatheState("wi-day-sunny");
          setWallpaper(
            "url(https://source.unsplash.com/random/2000x2000/?sunny)"

          );
          setTheme("bg-yellow-500")
          break;

        case "Mist":
          setWeatheState("wi-dust");
          setWallpaper(
            "url(https://source.unsplash.com/random/2000x2000/?mist)"
          );
          setTheme("bg-sky-600")
          break;

        case "Rain":
          setWeatheState("wi-rain");
          setWallpaper(
            "url(https://source.unsplash.com/random/2000x2000/?rain)"
          );
          setTheme("bg-blue-700")
          break;

        default:
          setWeatheState("wi-day-sunny");
          setWeatheState(
            "url(https://source.unsplash.com/random/2000x2000/?happy)"
            
          );
          setTheme("bg-yellow-800")
          break;
      }
    }
  }, [weathermood]);

  let background = {
    backgroundImage: wallpaper,
  };

  // converting the seconds into time
  let sec = sunset;
  let date = new Date(sec * 1000);
  let timeStr = `${date.getHours()}:${date.getMinutes()}`;
  return (
    <>
      <article
        className="widget h-screen flex flex-wrap justify-center items-center"
        style={background}
      >
        <div className="flex flex-col justify-between text-black bg-white rounded-3xl h-1/2 md:h-3/4 w-5/6 md:w-3/5 flex-wrap border-2 border-black border-solid">
          <div className="weatherIcon md:mt-10 mt-3 pt-5 flex flex-row justify-center md:text-7xl text-5xl">
            <i className={`wi ${weatherState}`}></i>
          </div>
          <div className={`flex flex-row justify-between ${theme} text-white md:pt-10 md:pb-10 pt-3 pb-3`}>
            <div className="weatherInfo flex justify-between">
              <div className="temperature md:text-6xl text-3xl md:ml-3 ml-1">
                <span>{temp}&deg; C</span>
              </div>
            </div>
            <div className="description md:ml-10 ml-4 ">
              <div className="weatherCondition md:text-3xl text-xl uppercase">
                {weathermood}
              </div>
              <div className="place">
                {name}, {country}
              </div>
            </div>
            <div className="flex flex-col pr-3">
              <div className="date flex flex-col ml-2 md:text-2xl text-xl">
                {" "}
                {`${new Date().getDate()}/${new Date().getMonth()}/${new Date().getFullYear()}`}{" "}
              </div>
              <div className="date flex flex-col ml-2 md:text-2xl text-xl">
                {" "}
                {`${new Date().getHours()}:${new Date().getMinutes()}`}{" "}
              </div>
            </div>
          </div>

          {/* our 4column section  */}
          <div className="extra-temp flex flex-row flex-wrap justify-between md:mb-12 md:ml-5 md:mr-5 mb-8 ml-3 mr-1">
            <div className="temp-info-minmax ">
              <div className="two-sided-section flex flex-row justify-between mx-auto mt-2">
                <p>
                  <i className={"wi wi-sunset"}></i>
                </p>
                <p className="extra-info-leftside md:mx-5 mx-2">
                  {timeStr} PM <br />
                  Sunset
                </p>
              </div>
            </div>
            <div className="two-sided-section flex flex-row justify-between mx-auto mt-2 ">
              <p>
                <i className={"wi wi-humidity"}></i>
              </p>
              <p className="extra-info-leftside md:mx-5 mx-2">
                {humidity} <br />
                Humidity
              </p>
            </div>

            <div className="weather-extra-info flex flex-row justify-between mx-auto mt-2">
              <div className="two-sided-section flex flex-row justify-between">
                <p>
                  <i className={"wi wi-rain"}></i>
                </p>
                <p className="extra-info-leftside md:mx-5 mx-2">
                  {pressure} <br />
                  Pressure
                </p>
              </div>
            </div>
            <div className="two-sided-section flex flex-row justify-between mx-auto mt-2">
              <p>
                <i className={"wi wi-strong-wind"}></i>
              </p>
              <p className="extra-info-leftside md:mx-5 mx-2">
                {speed} <br />
                Speed
              </p>
            </div>
          </div>
        </div>
      </article>
    </>
  );
};

export default WeatherCard;
