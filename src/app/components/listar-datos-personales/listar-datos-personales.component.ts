import { Component, OnInit } from '@angular/core';
import { DatosPersona } from 'src/app/interfaces/DatosPersonales';

@Component({
  selector: 'app-listar-datos-personales',
  templateUrl: './listar-datos-personales.component.html',
  styleUrls: ['./listar-datos-personales.component.css']
})
export class ListarDatosPersonalesComponent implements OnInit {


  listDatosPer:DatosPersona[]=[
    {
      identificacion:"1082105716",
      nombre:"David",
      apellido:"ceballos",
      direccion:"Manzana e C19",
      email:"dav@gmail.com",
      telefono:"3152715997",
     
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
