import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarComentariosComponent } from './components/listar-comentarios/listar-comentarios.component';
import { AgregarEditarComentarioComponent } from './components/agregar-editar-comentario/agregar-editar-comentario.component';
import { RouterModule, Routes } from '@angular/router';
import { VerComentariosComponent } from './components/ver-comentarios/ver-comentarios.component';


const routes:Routes =[
  {path:'', component:ListarComentariosComponent},
  {path:'add',component:AgregarEditarComentarioComponent},
  {path:'editar/:id',component:AgregarEditarComentarioComponent},
  {path:'visualizar/:id',component:VerComentariosComponent},
  {path:'**',redirectTo:'',pathMatch:'full'}
]

@NgModule({
  //declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
