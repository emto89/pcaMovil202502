import { Component } from '@angular/core';
import { ProductosService } from '../../services/productos.service';
import { Producto } from '../../services/productos.interface';


@Component({
  selector: 'app-products',
  imports: [],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {

  Productos: Producto[] = [];
  constructor(private _productosService: ProductosService){
    this.Productos = this._productosService.getProductos();
  }

  onsearch( id: number ){
    console.log( this._productosService.findById( id ) );
  }
}
