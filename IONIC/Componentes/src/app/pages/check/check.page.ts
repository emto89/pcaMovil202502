import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonItem, IonList, IonLabel, IonButton, IonCheckbox } from '@ionic/angular/standalone';
import { HeaderPage } from 'src/app/components/header/header.page';

@Component({
  selector: 'app-check',
  templateUrl: './check.page.html',
  styleUrls: ['./check.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, HeaderPage, IonItem, IonList,IonLabel,IonButton, IonCheckbox]
})
export class CheckPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  data=[
    { name: 'primary', checked: false},
    { name: 'secondary', checked: true},
    { name: 'tertiary', checked: false},
    { name: 'success', checked: true}
  ]
  onClick(item: any){
    console.log(item)
  }

  verData(){
    console.log(this.data);
  }

}
