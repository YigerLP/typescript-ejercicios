interface Reproductor {
  volumen: number;
  segundo: number;
  cancion: string;
  detalles: Detalles;
}

interface Detalles {
  autor: string;
  anio: number;
}

// const autor = 'Fulano';

const reproductor: Reproductor = {
  volumen: 90,
  segundo: 36,
  cancion: 'Mess',
  detalles: {
    autor: 'Ed',
    anio: 2015,
  },
};

// const {
//   volumen,
//   segundo,
//   cancion,
//   detalles: { autor: autorDetalle },
// } = reproductor;

const { volumen, segundo, cancion, detalles } = reproductor;

const { autor } = detalles;

// console.log('El volumen actual es de: ', volumen);
// console.log('El segundo actual es de: ', segundo);
// console.log('La canción actual es de: ', cancion);
// console.log('El autor es: ', autor);

const dbz: string[] = ['Goku', 'Vegeta', 'Trunks'];
const [, , p3] = dbz;

// console.log('Persona 1:', p1);
// console.log('Persona 2:', p2);
console.log('Persona 3:', p3);
