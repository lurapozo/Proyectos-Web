import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ComicsService {
  constructor(private http: HttpClient) { }
    obtenerDatosNR() {
      return this.http.get('http://localhost:3000/superheroes')
    }
    obtenerDatosFiltrados(superheroes:string){
      return this.http.get(`https://guia20-e9b7f-default-rtdb.firebaseio.com/.json?orderBy=%22personajes%22&equalTo="${superheroes}"`)
    }
    
}
