import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListadoComponent } from './listado/listado.component';



@NgModule({
  declarations: [
    ListadoComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ListadoComponent,
  ]
})
export class EmpleadosModule { }
