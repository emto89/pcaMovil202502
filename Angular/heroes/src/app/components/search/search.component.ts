import { Component } from '@angular/core';
import { Heroe } from '../../services/heroes.interface';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';
import { NgIf } from "@angular/common";
import { HeroeTarjetaComponent } from '../heroe-tarjeta/heroe-tarjeta.component';


@Component({
  selector: 'app-search',
  imports: [NgIf, HeroeTarjetaComponent],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  heroes: Heroe[] = [];
  termino: string = '';

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _heroesService: HeroesService
  ) { }
  ngOnInit(): void {
    this._activatedRoute.params.subscribe(params => {
      this.termino = params['termino'];
      this.heroes = this._heroesService.buscarHeroes(params['termino']);
    });
  }

}
