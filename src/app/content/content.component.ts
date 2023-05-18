import { Component,Input,OnChanges, SimpleChanges } from '@angular/core';
import { ServiceService } from '../service.service';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnChanges {
  @Input() bg:any|undefined
  bgimg:any|undefined
  weather:any|undefined
  lat:any|undefined
  long:any|undefined
  codes:any|undefined
  wind=""
  humidity=""
  weatherTime:any
  constructor(private service:ServiceService){
    navigator.geolocation.getCurrentPosition((d)=>{
      this.codes=d
      this.lat=this.codes.coords.latitude
      this.long=this.codes.coords.longitude
      service.getMyLocation(this.lat,this.long).subscribe((x:any)=>
      {
        service.getWeatherReporyByCity(x.address.city).subscribe((we)=>{
            this.weather=we
            this.weatherTime=this.weather.current.last_updated
            this.weatherTime=this.weatherTime.substring(11,14)
            this.getBgImage(this.weather.current.condition.text,parseInt(this.weatherTime))
        })
      })
    })
  }
  ngOnChanges(changes: SimpleChanges): void {
    if(this.bg)
    {
      this.service.getWeatherReporyByCity(this.bg).subscribe((d)=>{
        this.weather=d
        let w=this.weather.current.condition.text
        this.weatherTime=this.weather.current.last_updated
        console.log(this.weatherTime)
        this.weatherTime=this.weatherTime.substring(11,14)
        this.getBgImage(w,parseInt(this.weatherTime))
        
      },
      (x:any)=>{
        console.log("no data found with this city")
      })
    }
    
  }
  getBgImage(w:any,we:any)
  {
    if(we>=6 && we<=17)
    {
      if(w=="Sunny" || w=="Clear")
      {
        this.bgimg="https://wallpapercrafter.com/desktop2/752262-summer-blue-sky-tropical-exotic-holiday-beach.jpg"
      }
      else if(w=="Partly cloudy")
      {
        this.bgimg="https://wallpapershome.com/images/pages/pic_h/5518.jpg"
      }
      else if(w=="Fog")
      {
        this.bgimg="https://wallpaper.dog/large/20551209.jpg"
      }
      else if(w=="Mist")
      {
        this.bgimg="https://whitetree2016.files.wordpress.com/2016/01/white-tree-fog-mist-forest-hd-wallpapers-lovely-desktop-background-images-widescreen.jpg"
      }
      else if(w=="Cloudy" || w=="Overcast" || w=="Patchy rain possible")
      {
        this.bgimg="https://images7.alphacoders.com/416/416944.jpg"
      }
      else if(w=="Light drizzle" || w=="Light rain shower" || w=="Light rain")
      {
        this.bgimg="https://images.unsplash.com/photo-1610741083757-1ae88e1a17f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cmFpbnklMjBkYXl8ZW58MHx8MHx8&w=1000&q=80"
      }
      else if(w=="Heavy rain" || w=="Moderate rain")
      {
        this.bgimg="https://www.pixel4k.com/wp-content/uploads/2020/01/catch-the-rain_1580055569.jpg"
      }
    }
    else
    {
      if(w=="Sunny" || w=="Clear")
      {
        this.bgimg="https://lakecity.com/wp-content/uploads/milky-way-984050_1920.jpg"
      }
      else if(w=="Partly cloudy")
      {
        this.bgimg="https://c1.wallpaperflare.com/preview/443/416/30/moon-sky-night-cloudy.jpg"
      }
      else if(w=="Fog")
      {
        this.bgimg="https://w0.peakpx.com/wallpaper/18/889/HD-wallpaper-a-highway-bridge-in-a-foggy-rainy-night-highway-bridge-rain-lights-fog-night.jpg"
      }
      else if(w=="Mist")
      {
        this.bgimg="https://w0.peakpx.com/wallpaper/18/889/HD-wallpaper-a-highway-bridge-in-a-foggy-rainy-night-highway-bridge-rain-lights-fog-night.jpg"
      }
      else if(w=="Cloudy" || w=="Overcast" || w=="Patchy rain possible")
      {
        this.bgimg="https://c1.wallpaperflare.com/preview/443/416/30/moon-sky-night-cloudy.jpg"
      }
      else if(w=="Light drizzle" || w=="Light rain shower" || w=="Light rain")
      {
        this.bgimg="https://wallpaperaccess.com/full/102657.jpg"
      }
      else if(w=="Heavy rain" || w=="Moderate rain")
      {
        this.bgimg="https://wallpaperaccess.com/full/102657.jpg"
      }
    }
    this.humidity="HUMIDITY"
    this.wind="WIND"    
  }

}
