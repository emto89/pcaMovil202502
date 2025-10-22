import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonBackButton, IonImg, IonAvatar, IonChip, IonLabel, IonList, IonItem } from '@ionic/angular/standalone';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.page.html',
  styleUrls: ['./avatar.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar,
     CommonModule, FormsModule,IonBackButton, IonButtons,
     IonImg, IonAvatar, IonChip, IonLabel,IonItem, IonList]
})
export class AvatarPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
