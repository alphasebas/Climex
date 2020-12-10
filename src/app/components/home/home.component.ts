import { Component, OnInit } from '@angular/core';
import { InegiService } from 'src/app/services/inegi.service';
import { WeatherService } from 'src/app/services/weather.service';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
//variables para la api de clima
location = { cityName: 'London', countryCode: 'uk' };
weather = undefined;
paises : String;

//variables para la api del inegi
estado = false;
municipios = false;
estadoinfo: any;
municipiosinfo: any;
estadi: string;
municipi: string;
estadomuni ='';
estadoBuscar="";
temperaturaMin=0;

constructor(private weatherService: WeatherService, private http: HttpClient, private inegiService: InegiService, private http2: HttpClient) { }

ngOnInit() {
  //this.getWeather(this.location.cityName);
  this.http.get("https://restcountries.eu/rest/v2/all").subscribe(
    (resp: any) => this.paises= resp,
    (err) => console.log(err)
  );
}

getWeather(cityName: string) {
  this.weatherService
    .getWeather(cityName)
    .subscribe(
      res => {
        console.log(res);
        this.weather = res;
        this.estadoBuscar= this.weather.name;
        this.getEstado(this.estadoBuscar);
      },
      err => {
        alert('No se encontro el estado, Intenta de nuevo');
        console.log(err);
      }
    );
}

submitLocation(cityName: HTMLInputElement) {
  if (cityName.value) {
    this.getWeather(cityName.value);
    cityName.value = '';
  } else {
    alert('Please. Insert some values');
  }
  cityName.focus();
  return false;
}

getEstado(cityName: string) {
  this.estado = true;
  this.estadi = cityName;
  this.municipios = false;
  this.inegiService.getEstado(this.estadi).subscribe((res: any) => {
    if (res.result !== '404') {
      this.estadoinfo = res.datos;
    } else {
      alert('No se encontro el estado, Intenta de nuevo');
      this.estadi = '';
    }
  });
}


}
