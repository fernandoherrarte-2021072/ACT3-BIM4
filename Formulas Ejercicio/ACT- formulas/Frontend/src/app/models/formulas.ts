export interface Formula {
  nombre: string;
  area: 'Física' | 'Matemáticas';
  ecuacion: string;
  unidad: string;
  valoresIniciales: Record<string, number>;
  calcular: (valores: Record<string, number>) => number;
}

export const FORMULAS: Record<string, Formula> = {
  trabajoMecanico: {
    nombre: 'Trabajo mecánico',
    area: 'Física',
    ecuacion: 'W = F × d',
    unidad: 'J',
    valoresIniciales: {
      fuerza: 20,
      distancia: 5
    },
    calcular: (valores) => {
      return valores['fuerza'] * valores['distancia'];
    }
  },

  potencia: {
    nombre: 'Potencia',
    area: 'Física',
    ecuacion: 'P = W ÷ t',
    unidad: 'W',
    valoresIniciales: {
      trabajo: 500,
      tiempo: 10
    },
    calcular: (valores) => {
      return valores['trabajo'] / valores['tiempo'];
    }
  },

  pesoCuerpo: {
    nombre: 'Peso de un cuerpo',
    area: 'Física',
    ecuacion: 'P = m × g',
    unidad: 'N',
    valoresIniciales: {
      masa: 12,
      gravedad: 9.81
    },
    calcular: (valores) => {
      return valores['masa'] * valores['gravedad'];
    }
  },

  cargaElectrica: {
    nombre: 'Carga eléctrica',
    area: 'Física',
    ecuacion: 'Q = I × t',
    unidad: 'C',
    valoresIniciales: {
      corriente: 4,
      tiempo: 8
    },
    calcular: (valores) => {
      return valores['corriente'] * valores['tiempo'];
    }
  },

  calorSensible: {
    nombre: 'Calor sensible',
    area: 'Física',
    ecuacion: 'Q = m × c × ΔT',
    unidad: 'J',
    valoresIniciales: {
      masa: 2,
      calorEspecifico: 4186,
      cambioTemperatura: 5
    },
    calcular: (valores) => {
      return valores['masa'] * valores['calorEspecifico'] * valores['cambioTemperatura'];
    }
  },

  areaTriangulo: {
    nombre: 'Área de un triángulo',
    area: 'Matemáticas',
    ecuacion: 'A = (b × h) ÷ 2',
    unidad: 'u²',
    valoresIniciales: {
      base: 10,
      altura: 6
    },
    calcular: (valores) => {
      return (valores['base'] * valores['altura']) / 2;
    }
  },

  perimetroRectangulo: {
    nombre: 'Perímetro de un rectángulo',
    area: 'Matemáticas',
    ecuacion: 'P = 2 × (b + h)',
    unidad: 'u',
    valoresIniciales: {
      base: 8,
      altura: 5
    },
    calcular: (valores) => {
      return 2 * (valores['base'] + valores['altura']);
    }
  },

  volumenEsfera: {
    nombre: 'Volumen de una esfera',
    area: 'Matemáticas',
    ecuacion: 'V = (4 ÷ 3) × π × r³',
    unidad: 'u³',
    valoresIniciales: {
      radio: 4
    },
    calcular: (valores) => {
      return (4 / 3) * Math.PI * Math.pow(valores['radio'], 3);
    }
  },

  promedioTresNumeros: {
    nombre: 'Promedio de tres números',
    area: 'Matemáticas',
    ecuacion: 'P = (a + b + c) ÷ 3',
    unidad: '',
    valoresIniciales: {numero1: 75,numero2: 84,numero3: 91
    },
    calcular: (valores) => {
      return (valores['numero1'] + valores['numero2'] + valores['numero3']) / 3;
    }
  },

  areaTrapecio: {
    nombre: 'Área de un trapecio',area: 'Matemáticas',ecuacion: 'A = ((B + b) × h) ÷ 2',unidad: 'u²',
    valoresIniciales: {baseMayor: 12,baseMenor: 7,altura: 5
    },
    calcular: (valores) => {
      return ((valores['baseMayor'] + valores['baseMenor']) * valores['altura']) / 2;
    }
  }
};