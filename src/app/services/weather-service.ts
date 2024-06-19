import { ServiceBase } from "./service-base";

export class WeatherService extends ServiceBase{
    static apiKey="2566505f14a3812323cacd6d821b8aec";
    static getWeather=async(city:string)=>{
        var response=await fetch(this.getWeatherCity(city)); 
        var data=await response.json();
        return data;
    }

    static getForecast=async(city:string)=>{
        var response=await fetch(this.getForecastCity(city)); 
        var data=await response.json();
        return data;
    }

    static getWeatherLoc=async(lat:any,long:any)=>{
        var response=await fetch(this.getWeatherLocation(lat,long)); 
        var data=await response.json();
        return data;
    }

    static getForecastLoc=async(lat:any,long:any)=>{
        var response=await fetch(this.getForecastLocation(lat,long)); 
        var data=await response.json();
        return data;
    }

}