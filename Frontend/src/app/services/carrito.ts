import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { Producto } from '../models/producto';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  private productosCarrito: Producto[] = [];

  private carritoSubject =
    new BehaviorSubject<Producto[]>([]);

  carrito$: Observable<Producto[]> =
    this.carritoSubject.asObservable();

  agregarProducto(producto: Producto): void {
    const productoExistente =
      this.productosCarrito.find(
        item => item.id === producto.id
      );

    if (productoExistente) {
      productoExistente.cantidad++;
    } else {
      const nuevoProducto: Producto = {
        ...producto,
        cantidad: 1
      };

      this.productosCarrito.push(nuevoProducto);
    }

    this.actualizarCarrito();
  }

  actualizarCantidad(
    id: number,
    cantidad: number
  ): void {
    const producto =
      this.productosCarrito.find(
        item => item.id === id
      );

    if (!producto) {
      return;
    }

    if (cantidad <= 0) {
      this.eliminarProducto(id);
      return;
    }

    producto.cantidad = cantidad;

    this.actualizarCarrito();
  }

  eliminarProducto(id: number): void {
    this.productosCarrito =
      this.productosCarrito.filter(
        producto => producto.id !== id
      );

    this.actualizarCarrito();
  }

  vaciarCarrito(): void {
    this.productosCarrito = [];

    this.actualizarCarrito();
  }

  private actualizarCarrito(): void {
    this.carritoSubject.next([
      ...this.productosCarrito
    ]);

    console.log(
      'Carrito actualizado:',
      this.productosCarrito
    );
  }
}