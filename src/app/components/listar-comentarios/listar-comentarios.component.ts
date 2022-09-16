import { Component, OnInit } from '@angular/core';
import { Comentario } from 'src/app/interfaces/comentarios';

@Component({
  selector: 'app-listar-comentarios',
  templateUrl: './listar-comentarios.component.html',
  styleUrls: ['./listar-comentarios.component.css']
})
export class ListarComentariosComponent implements OnInit {

  listComentarios:Comentario[]=[
    {
      titulo:"El señor de los anillos",
      autor:"Brayan Ceballos",
      fechaCreacion: new Date(),
      texto:"comentario de el señor de ..."
    },
    {
      titulo:"Harry Potter",
      autor:"David Ceballos",
      fechaCreacion: new Date(),
      texto:"Comentario de Harrt P..."
    },
    {
      titulo:"Lagrimas del sol",
      autor:"Bruce Wil",
      fechaCreacion: new Date(),
      texto:"Comemtario de Bruce"
    },
    {
      titulo:"Interestelar",
      autor:"Jorge c",
      fechaCreacion: new Date(),
      texto:"Comentario de Interestelar..."
    },
    {
      titulo:"Perfume de mujer ",
      autor:"Carl m",
      fechaCreacion: new Date(),
      texto:"Comentario de Perfume..."
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
