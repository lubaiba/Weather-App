"use client";
import { useState, useEffect } from "react";
import styles from "../page.module.css";
import WeatherCard from "./Weather-card";
import WeatherCard2 from "./WeatherCard2";
import { WeatherService } from "../services/weather-service";

export default function Weather() {
  const [data, setData] = useState(null);
  const [city, setCity] = useState("");
  const [forecast, setForecast] = useState([]);

  const fetchDatabyCity = async (city: string) => {
    try {
      const data = await WeatherService.getWeather(city);
      setData(data);
      console.log(data);

      const forecastData = await WeatherService.getForecast(city);
      const dailyForecast = filterDailyForecast(forecastData.list);
      setForecast(dailyForecast);
      console.log(dailyForecast);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  const fetchDatabyLocation = async () => {
    navigator.geolocation.getCurrentPosition(async function (position: any) {
      var lat = position.coords.latitude;
      var long = position.coords.longitude;
      console.log("latitude", position.coords.latitude);
      console.log("longitude", position.coords.longitude);
      try {
        const data = await WeatherService.getWeatherLoc(lat, long);
        setData(data);
        console.log(data);

        const forecastData = await WeatherService.getForecastLoc(lat, long);
        const dailyForecast = filterDailyForecast(forecastData.list);
        setForecast(dailyForecast);
        console.log(dailyForecast);
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    });
  };
  useEffect(() => {
    fetchDatabyLocation();
  }, []);

  const filterDailyForecast = (list: any) => {
    return list.filter((reading: any) => {
      return reading.dt_txt.includes("12:00:00");
    });
  };

  const handleInputChange = (e: any) => {
    setCity(e.target.value);
  };

  const onSubmit = () => {
    if (city) {
      fetchDatabyCity(city);
    }
  };

  return (
    <>
      <div
        className="card text-center d-flex align-content-center align-items-center"
        style={{
          backgroundColor:"rgba(19,74,113,0.7)",
          maxWidth: "400px",
          maxHeight: "490px",
          borderRadius: "20px",
          marginLeft:'40%',
          marginTop:'80px'
        }}
      >
        <div className={styles.search}>
          <input
            type="text"
            placeholder="enter city name"
            onChange={handleInputChange}
            id="cityInput inputContainer"
          />
          <button type="button" onClick={onSubmit}>
            <img src="img/search.png" />
          </button>
        </div>
        {data ? (
          <>
            <WeatherCard weatherData={data} />
            <div className="d-flex flex-row gap-3 pt-4">
              {forecast.map((item: any, index: number) => {
                return (
                  <div key={index}>
                    <WeatherCard2 wdata={item} />
                  </div>
                );
              })}
            </div>
          </>
        ) : (
          <p className="text-white p-2">Loading weather data...</p>
        )}
      </div>
    </>
  );
}
