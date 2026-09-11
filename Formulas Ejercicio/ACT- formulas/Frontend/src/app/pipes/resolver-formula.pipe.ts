import {
  Pipe,PipeTransform
} from '@angular/core';

import {FORMULAS
} from '../models/formulas';

@Pipe({name: 'resolverFormula',standalone: true,pure: false
})
export class ResolverFormulaPipe implements PipeTransform {

  transform(valores: Record<string, number>,claveFormula: string
  ): string {const formula = FORMULAS[claveFormula];

    if (!formula) {return 'Fórmula no encontrada';
    }
    if (!valores) {return 'Valores no disponibles';
    }
    try {const resultado = formula.calcular(valores);

      if (!Number.isFinite(resultado)) {return 'Resultado no válido';
      }

      const resultadoRedondeado =Number(resultado.toFixed(2));

      if (formula.unidad) { return `${resultadoRedondeado} ${formula.unidad}`;
      }
return `${resultadoRedondeado}`;
    } catch (error) {console.error( `Error al resolver la fórmula ${claveFormula}:`,
        error
      );

      return 'Error en el cálculo';
    }
  }
}
``