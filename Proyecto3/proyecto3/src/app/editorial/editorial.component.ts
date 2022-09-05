import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


import { EditorialService } from '../servicios/editorial.service';

import { Editorials } from '../interfaz/editorials';
import { Superheroes } from '../interfaz/superheroes';






@Component({
  selector: 'app-editorial',
  templateUrl: './editorial.component.html',
  styleUrls: ['./editorial.component.css']
})
export class EditorialComponent implements OnInit {
  ed: any
  arrSup: Array<Superheroes> = []
  constructor(private editorialService: EditorialService, private activatedRoute: ActivatedRoute) {}
   

  ngOnInit(): void {
    let params = this.activatedRoute.snapshot.params;
    let id = params["id"]
  
    this.editorialService.obtenerDatosId(id).subscribe(res => {
        this.ed = res as Editorials
      })
    this.editorialService.obtenerComicsId(id).subscribe(res =>{
      this.arrSup=res as any
    })
  }

}