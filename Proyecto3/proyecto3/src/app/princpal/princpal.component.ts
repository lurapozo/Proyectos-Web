import { Component, OnInit } from '@angular/core';
import { EditorialService } from '../servicios/editorial.service';

import { Editorials } from '../interfaz/editorials';

@Component({
  selector: 'app-princpal',
  templateUrl: './princpal.component.html',
  styleUrls: ['./princpal.component.css']
})
export class PrincpalComponent implements OnInit {
  arrEd: Array<Editorials>=[];
  constructor(private editorialService:EditorialService) { 
    editorialService.obtenerDatos().subscribe(resp =>{
      this.arrEd = resp as any
    })
  }

  ngOnInit(): void {

  }

}
