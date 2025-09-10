import { Component } from '@angular/core';
import { NgIf, NgFor } from '@angular/common';

@Component({
  selector: 'app-body',
  imports: [NgIf, NgFor],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent {

  mostrar = true;

  frase: any = {
    mensaje: 'Un gran poder requiere una gran responsabilidad',
    autor: 'Ben Parker'
  };

  personajes: string[] = ['Spiderman', 'Venom', 'Dr. Octopus'];

  constructor(){
    console.log('Componente body cargado');
  }

}
