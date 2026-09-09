import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Producto } from '../../models/producto';
import { CarritoService } from '../../services/carrito';

@Component({
  selector: 'app-lista-productos',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './lista-productos.html',
  styleUrl: './lista-productos.css'
})
export class ListaProductos {

  productos: Producto[] = [
    {
      id: 1,
      nombre: 'Teclado mecánico',
      descripcion: 'Teclado con iluminación y conexión USB.',
      precio: 350,
      cantidad: 0
    },
    {
      id: 2,
      nombre: 'Mouse inalámbrico',
      descripcion: 'Mouse ergonómico con conexión inalámbrica.',
      precio: 175,
      cantidad: 0
    },
    {
      id: 3,
      nombre: 'Audífonos',
      descripcion: 'Audífonos con micrófono y sonido estéreo.',
      precio: 250,
      cantidad: 0
    },
    {
      id: 4,
      nombre: 'Monitor',
      descripcion: 'Monitor de 24 pulgadas con resolución Full HD.',
      precio: 1350,
      cantidad: 0
    },
    {
      id: 5,
      nombre: 'Memoria USB',
      descripcion: 'Memoria USB de 64 GB para guardar archivos.',
      precio: 95,
      cantidad: 0
    },
    {
      id: 6,
      nombre: 'Cámara web',
      descripcion: 'Cámara web con resolución HD y micrófono.',
      precio: 325,
      cantidad: 0
    }
  ];

  mensaje = '';

  constructor(
    private carritoService: CarritoService
  ) {}

  agregarAlCarrito(producto: Producto): void {
    this.carritoService.agregarProducto(producto);

    this.mensaje =
      `${producto.nombre} fue agregado al carrito.`;

    setTimeout(() => {
      this.mensaje = '';
    }, 2000);
  }
}