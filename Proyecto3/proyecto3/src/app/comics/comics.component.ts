import { Component, OnInit } from '@angular/core';
import { SuperheroesService } from '../servicios/superheroes.service';

import { Superheroes } from '../interfaz/superheroes';
import { Comics } from '../interfaz/comics';

@Component({
  selector: 'app-comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.css']
})
export class ComicsComponent implements OnInit {
  arrSup: Array<Superheroes>=[];
  arrCom: Array<Comics>=[];
  keys:any
  constructor(private superheroesService: SuperheroesService) {
    superheroesService.obtenerDatos().subscribe(resp =>{
      this.arrSup=resp as any
    })
    superheroesService.obtenerDatosNO().subscribe(resp=>{
      
      this.arrCom=resp as any

    })
    
   }
   onChange(value:any){
    let comics = document.getElementsByClassName('comic') as HTMLCollectionOf<HTMLElement>
    
    for (let i = 0; i < comics.length; i++) {
      if (comics[i].classList.contains(value.value)){
        
        comics[i].style.display = "grid"
      }
      else {
        
        comics[i].style.display = "none"
      }
      
    }
    
    
   }
   

  ngOnInit(): void {
    
  }

}
