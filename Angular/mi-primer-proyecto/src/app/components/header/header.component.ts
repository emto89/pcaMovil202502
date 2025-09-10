import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  constructor(){
    console.log('Componente header cargado');
  }
  ngOnInit(): void {
    console.log('ngOnInit del header');
  }

}
