import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListadoComponent } from './listado/listado.component';
import { ResumenComponent } from './resumen/resumen.component';



@NgModule({
  declarations: [
    ListadoComponent,
    ResumenComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ListadoComponent,
  ]
})
export class EmpleadosModule { }
