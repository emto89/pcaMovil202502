import { Component } from '@angular/core';
import { RouterLink, Router } from "@angular/router";

@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

   constructor(private _router: Router){

   }

  buscarHeroe(termino: string){
    console.log(termino);
    this._router.navigate(['/search', termino]);
  }

}
