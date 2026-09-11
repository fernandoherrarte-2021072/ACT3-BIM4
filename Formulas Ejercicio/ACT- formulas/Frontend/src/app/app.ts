import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import {
  FORMULAS
} from './models/formulas';

import {
  ResolverFormulaPipe
} from './pipes/resolver-formula.pipe';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,FormsModule,ResolverFormulaPipe
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  formulas = FORMULAS;
  listaFormulas: string[] =
    Object.keys(FORMULAS);

  datosFormulas:Record<string, Record<string, number>> = {};

  constructor() {this.prepararDatos();
  }

  prepararDatos(): void {this.listaFormulas.forEach((clave) => {this.datosFormulas[clave] = {
        ...FORMULAS[clave].valoresIniciales
      };
    });
  }

  restaurarFormula(clave: string): void {
    this.datosFormulas[clave] = {
      ...FORMULAS[clave].valoresIniciales
    };
  }

  restaurarTodas(): void {
    this.prepararDatos();
  }
}