import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonIcon, IonCard,
  IonRow,
  IonCardContent,
  IonImg,
  IonCol,
  IonCardSubtitle,
  IonCardTitle,
  IonBadge,
  IonGrid,
  IonSearchbar,
  IonButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  imports: [IonButton, IonSearchbar, IonGrid,
    IonCardTitle,
    IonCardSubtitle,
    IonCol,
    IonImg,
    IonCardContent,
    IonRow,
    IonCard,
    IonIcon,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonBadge,
    FormsModule,
  ],
})
export class Tab1Page {

  cantidad: number = 10;
  pokemonArray: any[] = [];
  pokemonId = 1;
  maxId = 807;


  constructor() {
    this.getDataPokemon();
  }

  async getDataPokemon(){

    this.pokemonArray = [];

    for (let index = 0; index < this.cantidad; index++) {

      this.pokemonId = Math.floor( Math.random() * this.maxId ) + 1 ;

      try {
         try {
              const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${this.pokemonId}`) ;

              if(!response.ok){
                throw new Error('La peticion fallo');
              }

              const data: any = await response.json();

              this.pokemonArray.push(data);
              console.log(data)
         } catch (error) {
          console.log("Error obteniendo la informacion del pokemon "+ this.pokemonId)
         }
      } catch (error) {
         console.log( "Error obteniendo la data");
      }

    }
  }
}
