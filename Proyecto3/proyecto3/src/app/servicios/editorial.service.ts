import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class EditorialService {
  constructor(private http: HttpClient) { }
    obtenerDatos() {
      return this.http.get('http://localhost:3000/editorials/')
    }
    obtenerDatosId(id:any) {
      return this.http.get('http://localhost:3000/editorials/'+id)
    }
    obtenerComicsId(id:any) {
      return this.http.get('http://localhost:3000/superheroes/editoral/'+id)
    }
    
}
