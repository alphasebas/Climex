import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InegiService {

  constructor(private http: HttpClient) { }

  getEstado(estado: string) {
    return this.http.get(`https://gaia.inegi.org.mx/wscatgeo/mgem/buscar/${estado}`);
  }

}
