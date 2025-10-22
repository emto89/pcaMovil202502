import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonButtons, IonBackButton, IonIcon } from '@ionic/angular/standalone';

@Component({
  selector: 'app-button',
  templateUrl: './button.page.html',
  styleUrls: ['./button.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,IonButtons, IonButton, IonBackButton, IonIcon]
})
export class ButtonPage implements OnInit {

  favorito: boolean = false;

  constructor() { }

  ngOnInit() {
  }
  onClick() {
   this.favorito = !this.favorito;
  }
}
