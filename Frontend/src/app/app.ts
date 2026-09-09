import { Component } from '@angular/core';

import { ListaProductos } from './components/lista-productos/lista-productos';
import { Carrito } from './components/carrito/carrito';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    ListaProductos,
    Carrito
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

}