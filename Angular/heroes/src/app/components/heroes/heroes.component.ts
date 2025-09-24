import { Component } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { Heroe } from '../../services/heroes.interface';
import { HeroeTarjetaComponent } from '../heroe-tarjeta/heroe-tarjeta.component';

@Component({
  selector: 'app-heroes',
  imports: [HeroeTarjetaComponent],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css'
})
export class HeroesComponent {

  heroes: Heroe[] = [];
  constructor( private _heroesService: HeroesService ){
    console.log("Constructor del componente heroes");
  }

  ngOnInit(): void{
    console.log("Inicio el NgOnInit")
    this.heroes = this._heroesService.getHeroes();
  }


}
