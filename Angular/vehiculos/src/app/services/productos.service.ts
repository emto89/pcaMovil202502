import { Injectable } from '@angular/core';
import { Producto } from './productos.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  private productos: Producto[]=[
    {
      id: 1,
      nombre: 'Honda Transa LP',
      descripcion : 'Ideal para ciudad',
      precio: 6500,
      imagen: '/img/honda-transalp.jpg'
    },
    {
      id: 2,
      nombre: 'Kawasaky 600',
      descripcion: 'Potente y elegante',
      precio: 9200,
      imagen: '/img/kawasaky 600.jpg'
    },
    {
      id: 3,
      nombre: 'Kawasaky KX 250',
      descripcion: 'Moderna y económica',
      precio: 3900,
      imagen: '/img/kawasaky-kx250.jpg'
    },
   {
      id: 4,
      nombre: 'Suzuki 1200',
      descripcion: 'Moderna y económica',
      precio: 13900,
      imagen: '/img/suzuki-1200.jpg'
   }
  ]

  constructor() { }

  getProductos(): Producto[]{
    return this.productos
  }
  findById( id: number ): Producto {
    return this.productos.find( producto => producto.id === id )!;
  }
}
