import {
  Component,
  OnDestroy,
  OnInit
} from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Subscription } from 'rxjs';

import { Producto } from '../../models/producto';
import { CarritoService } from '../../services/carrito';
import { SubtotalPipe } from '../../pipes/subtotal-pipe';

@Component({
  selector: 'app-carrito',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    SubtotalPipe
  ],
  templateUrl: './carrito.html',
  styleUrl: './carrito.css'
})
export class Carrito implements OnInit, OnDestroy {

  productos: Producto[] = [];
  total = 0;

  private carritoSubscription?: Subscription;

  constructor(
    private carritoService: CarritoService
  ) {}

  ngOnInit(): void {
    this.carritoSubscription =
      this.carritoService.carrito$.subscribe({
        next: (productos) => {
          this.productos = productos;
          this.calcularTotal();

          console.log(
            'Productos recibidos en el carrito:',
            productos
          );
        },

        error: (error) => {
          console.error(
            'Error al recibir el carrito:',
            error
          );
        }
      });
  }

  aumentarCantidad(producto: Producto): void {
    this.carritoService.actualizarCantidad(
      producto.id,
      producto.cantidad + 1
    );
  }

  disminuirCantidad(producto: Producto): void {
    this.carritoService.actualizarCantidad(
      producto.id,
      producto.cantidad - 1
    );
  }

  cambiarCantidad(
    producto: Producto,
    cantidad: number
  ): void {
    if (!Number.isInteger(cantidad)) {
      return;
    }

    this.carritoService.actualizarCantidad(
      producto.id,
      cantidad
    );
  }

  eliminarProducto(id: number): void {
    this.carritoService.eliminarProducto(id);
  }

  vaciarCarrito(): void {
    this.carritoService.vaciarCarrito();
  }

  calcularTotal(): void {
    this.total = this.productos.reduce(
      (acumulado, producto) =>
        acumulado +
        producto.precio * producto.cantidad,
      0
    );
  }

  obtenerCantidadTotal(): number {
    return this.productos.reduce(
      (acumulado, producto) =>
        acumulado + producto.cantidad,
      0
    );
  }

  ngOnDestroy(): void {
    this.carritoSubscription?.unsubscribe();
  }
}