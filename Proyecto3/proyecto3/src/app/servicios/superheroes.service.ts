import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SuperheroesService {

  constructor(private http: HttpClient) { }
  obtenerDatos() {
    return this.http.get('http://localhost:3000/superheroes')
  }
  obtenerDatosNO(){
    return this.http.get('https://guia20-e9b7f-default-rtdb.firebaseio.com/.json')
  }
}
