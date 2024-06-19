import React from "react";

export default function WeatherCard2(props: any) {
  var wdata = props.wdata;
  const weekday = ["Sun", "Mon", "Tues", "Wed", "Thur", "Fri", "Sat"];
  return (
    <div
      className="container-fluid card text-center d-flex pt-3 mt-5 text-white align-items-center"
      style={{
        backgroundColor:"rgba(19,74,113,0.7)",
        width: "200px",
        maxHeight: "490px",
        borderRadius: "20px",
      }}
    >
      <p>{weekday[new Date(wdata.dt_txt).getDay()]}</p>
      <img
        src={`https://openweathermap.org/img/wn/${wdata.weather[0].icon}@2x.png`}
        alt="weather icon"
        width={70}
      />
      <p>Min: {wdata.main.temp_min} °C</p>
      <p>Max: {wdata.main.temp_max} °C</p>
    </div>
  );
}
