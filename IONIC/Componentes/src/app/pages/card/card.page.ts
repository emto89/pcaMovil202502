import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent,IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonItem, IonLabel, IonIcon } from '@ionic/angular/standalone';
import { HeaderPage } from 'src/app/components/header/header.page';

@Component({
  selector: 'app-card',
  templateUrl: './card.page.html',
  styleUrls: ['./card.page.scss'],
  standalone: true,
  imports: [IonContent, CommonModule, FormsModule, HeaderPage, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonItem, IonLabel, IonIcon]
})
export class CardPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
