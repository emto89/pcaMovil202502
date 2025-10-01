import { Component } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { ActivatedRoute, RouterLink} from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-heroe',
  imports: [RouterLink, CommonModule],
  templateUrl: './heroe.component.html',
  styleUrl: './heroe.component.css'
})
export class HeroeComponent {
  heroe: any = {};
   constructor(
    private _heroeService: HeroesService,
    private _activatedRoute: ActivatedRoute
   ) {
    this._activatedRoute.params.subscribe( params => {
      this.heroe = this._heroeService.getHeroe( params['id'] );
      console.log(params['id']);
    })
   }

}
