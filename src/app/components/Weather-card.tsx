import React from "react";

export default function WeatherCard(props: any) {
  var wdata = props.weatherData;
  console.log(props);
  var date = new Date();
  var current_date =
    date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear();
  var current_time =
    date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
  var date_time = current_date + " " + current_time;
  function weatherIconChange() {
    if (wdata.weather[0].main == "Clouds") {
      {
        document.body.style.background = "url(img/weather-cloudy.jpg)";
        document.body.style.backgroundSize = "cover";
        document.body.style.backgroundRepeat = "no-repeat";
      }
    } else if (wdata.weather[0].main == "Clear") {
      {
        document.body.style.background = "url(img/weather-clear-sky.jpg)";
        document.body.style.backgroundSize = "cover";
        document.body.style.backgroundRepeat = "no-repeat";
      }
    } else if (wdata.weather[0].main == "Rain") {
      {
        document.body.style.background = "url(img/rainy.jpg)";
        document.body.style.backgroundSize = "cover";
        document.body.style.backgroundRepeat = "no-repeat";
      }
    } else if (wdata.weather[0].main == "Drizzle") {
      {
        document.body.style.background = "url(img/drizzle.jpeg)";
        document.body.style.backgroundSize = "cover";
        document.body.style.backgroundRepeat = "no-repeat";
      }
    } else if (wdata.weather[0].main == "Mist") {
      {
        document.body.style.background = "url(img/weather-mist.jpg)";
        document.body.style.backgroundSize = "cover";
        document.body.style.backgroundRepeat = "no-repeat";
      }
    } else if (wdata.weather[0].main == "Haze") {
      {
        document.body.style.background = "url(img/haze.jpeg)";
        document.body.style.backgroundSize = "cover";
        document.body.style.backgroundRepeat = "no-repeat";
      }
    }
  }
  weatherIconChange();
  return (
    <>
      <div className="text-white">
          <h5 className="pt-3">{date_time}</h5>
          <img
            src={`https://openweathermap.org/img/wn/${wdata.weather[0].icon}@2x.png`}
            alt="weather" width={80}
          />
          <h4 className="mb-2">
            {Math.floor(wdata.main.temp)}°C
          </h4>
          <p>Feels like {Math.floor(wdata.main.feels_like)}°C</p>
          <h6 className="mb-2">{wdata.weather[0].description}</h6>
          <h5>{wdata.name}</h5>
          <div className="row gap-2 pt-3">
            <div
      className="col card text-center d-flex text-white align-items-center p-2"
      style={{
        backgroundColor:"rgba(19,74,113,0.7)",
        width: "120px",
        maxHeight: "490px",
        borderRadius: "10px",
      }}
    ><img src="img/air.png"/> 
    <p>Humidity</p>
    <p style={{ fontSize: "15px"}}>
      {wdata.main.humidity}%
    </p></div>
     <div
      className="col card text-center d-flex text-white align-items-center p-2"
      style={{
        backgroundColor:"rgba(19,74,113,0.7)",
        width: "120px",
        maxHeight: "490px",
        borderRadius: "10px",
      }}
    ><img src="img/visibility.png"  />
     <p>Visibility</p>
    <p style={{ fontSize: "15px"}}>
                  {wdata.visibility/1000}km
                </p></div>
     <div
      className="col card text-center d-flex text-white align-items-center p-2"
      style={{
        backgroundColor:"rgba(19,74,113,0.7)",
        width: "120px",
        maxHeight: "490px",
        borderRadius: "10px",
      }}
    ><img src="img/windy.png"  /> <p>Wind Speed</p>
    <p style={{ fontSize: "15px"}}>
    {wdata.wind.speed} km/h
                </p></div>
          </div>
        </div>
      
    </>
  );
}
