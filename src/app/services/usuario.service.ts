import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private httpClient: HttpClient) {

   }
  getUsuarios() {
    return this.httpClient.get('http://localhost:3000/' + 'usuarios');
  }
  registrar(usuario: string, pass: string){
    const body = new HttpParams()
    .set('Usuario', usuario)
    .set('Contraseña', pass)
    return this.httpClient.post('http://localhost:3000/'+ 'createuser', body.toString(),
    {
    headers: new HttpHeaders()
    .set('Content-Type', 'application/x-www-form-urlencoded')
    });
  }
}
