import { Component, Input } from '@angular/core';
import { Heroe } from '../../services/heroes.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroe-tarjeta',
  imports: [],
  templateUrl: './heroe-tarjeta.component.html',
  styleUrl: './heroe-tarjeta.component.css'
})
export class HeroeTarjetaComponent {
  @Input() heroe: any = {};
  @Input() index: number = 0;

  constructor( private _router: Router){}

  verHeroe(){
   this._router.navigate(['/heroe', this.index]);
  }
}
