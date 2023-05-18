import { HttpClient,HttpHeaders, JsonpClientBackend } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }

  getWeatherReporyByCity(city:string)
  {
    return this.http.get("https://api.weatherapi.com/v1/forecast.json?key=232c4483a75b4b3ca5692328223105&q="+city)
  }
  getMyLocation(lat:any,long:any)
  {
    return this.http.get("https://geocode.maps.co/reverse?lat="+lat+"&lon="+long)
  }
}
