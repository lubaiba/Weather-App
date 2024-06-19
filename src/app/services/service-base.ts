export abstract class ServiceBase {
    static apiKey="2566505f14a3812323cacd6d821b8aec";
    static apiUrl="https://api.openweathermap.org/data/2.5/";
   
    static getWeatherCity(city:string){
        return `${this.apiUrl}//weather?units=metric&q=${city}&appid=${this.apiKey}`;
    }

    static getForecastCity(city:string){
        return `${this.apiUrl}/forecast?units=metric&q=${city}&appid=${this.apiKey}`;
    }

    static getWeatherLocation(lat:any,long:any){
        return `${this.apiUrl}/weather?units=metric&lat=${lat}&lon=${long}&appid=${this.apiKey}`;
    }
    
    static getForecastLocation(lat:any,long:any){
        return `${this.apiUrl}/forecast?units=metric&lat=${lat}&lon=${long}&appid=${this.apiKey}`;
    }
}