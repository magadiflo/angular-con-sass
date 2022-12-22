import { Component } from '@angular/core';

interface Empleado {
  id: number;
  nombre: string;
  email: string;
  direccion: string;
}

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss']
})
export class ListadoComponent {

  empleados: Empleado[] = [
    { id: 1, nombre: 'Marta Matos', email: 'martita@gmail.com', direccion: 'Coishco' },
    { id: 2, nombre: 'Liz Gonzales', email: 'lizita@gmail.com', direccion: 'Bellamar' },
    { id: 3, nombre: 'Juviksa Aguilar', email: 'juviksa@gmail.com', direccion: 'Las Gardenias' },
    { id: 4, nombre: 'Luz Mariela', email: 'luz_mariela@gmail.com', direccion: 'Nuevo Chimbote' },
  ];

}
