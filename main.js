let yo = {
  nombre: "yeison",
  edad: 22,
  hablar: function () {
    console.log(this.nombre);
  },
};

// yo.hablar();

function decirNombre(obj) {
  obj.hablar = function () {
    console.log(this.nombre);
  };
}

const Mateo = {
  nombre: "Mateo",
  edad: 22,
};

const juan = {
  nombre: "Juan",
  edad: 25,
};

decirNombre(juan);
decirNombre(Mateo);

// juan.hablar();
// Mateo.hablar();
// console.log(juan)

const coche1 = {
  modelo: "kuga",
  marca: "Ford",
  color: "gris",
};

const coche2 = {
  modelo: "a3",
  marca: "Audi",
  color: "blanco",
};

const coche3 = {
  modelo: "mini",
  marca: "BMW",
  color: "rojo",
};

// function Coche(marca, modelo, antiguedad, color, tipo) {
//   this.marca = marca;
//   this.modelo = modelo;
//   this.antiguedad = antiguedad;
//   this.color = color;
//   this.tipo = tipo;
//   this.detalles = function () {
//     return (
//       "Tu coche es un " +
//       this.marca +
//       " " +
//       this.modelo +
//       " del año " +
//       this.antiguedad +
//       ", clase " +
//       this.tipo +
//       " y color " +
//       this.color
//     );
//   };
// }

// const miCoche = new Coche('Mercedes','Volador',2009,'Rojo','Automatico');
// const miCoche2 = new Coche("Audi","RS7",2024,"Negro","Automatico")
// console.log(miCoche.detalles())
// console.log(miCoche2.detalles())

// function Gato(raza, nombre, color, tamaño) {
//   this.raza = raza;
//   this.nombre = nombre;
//   this.color = color;
//   this.tamaño = tamaño;
//   this.arañar = () => {
//     return "Arañar";
//   };
//   this.maullar = () => {
//     return `${this.nombre} hace Miauuu`;
//   };
//   this.poo = () => {
//     return `${this.nombre} hizo un poo ${this.tamaño}`;
//   };
// }
class Gato {
  constructor(raza, nombre, color, tamaño) {
    this.raza = raza;
    this.nombre = nombre;
    this.color = color;
    this.tamaño = tamaño;
  }
  arañar() {
    return "Arañar";
  }
  maullar() {
    return `${this.nombre} hace Miauuu`;
  }
  poo() {
    return `${this.nombre} hizo un poo ${this.tamaño}`;
  }
}

const tito = new Gato("Calle Urbano", "Tito", "Negro", "ENORME");
const grace = new Gato("Bichorraro", "Grace", "Gris", "Mediano");
const tigreton = new Gato("Callejero", "Tigretón", "Negro", "Mediano");
const tifa = new Gato("SacoPapas", "Tifa", "Blanco y Negro", "Chikita :)");

console.log(tito.poo(), grace.poo(), tigreton.poo(), tifa.poo());

function Libro(titulo, autor, año) {
  this.titulo = titulo;
  this.autor = autor;
  this.año = año;
  this.detalles = function () {
    return this.titulo + " año publicación " + this.año;
  };
}

function Revista(titulo, autor, año, mes) {
  Libro.call(this, titulo, autor, año);
  this.mes = mes;
}

const mag1 = new Revista("Mag One", "John Doe", "2018", "Enero");
// console.log(mag1)

class Coche {
  static info(edad) {
    console.log(
      `Tienes ${edad} años ${
        edad >= 18
          ? "y puedes conducir"
          : "y ... ¡Sorry! Sigue esperando para conducir."
      }`
    );
  }
  // Coche.info(20)
  constructor(marca, modelo, antiguedad, color, tipo) {
    this.marca = marca;
    this.modelo = modelo;
    this.antiguedad = antiguedad;
    this.color = color;
    this.tipo = tipo;
  }
  detalles() {
    console.log(
      `Tu coche es un ${this.marca} ${this.modelo} con ${this.antiguedad} años, clase ${this.tipo} y color ${this.color}`
    );
  }
}
Coche.info(20);
class Furgon extends Coche {
  constructor(
    marca,
    modelo,
    antiguedad,
    color,
    tipo,
    taraMinima,
    cargaUtil,
    volumenCarga
  ) {
    super(marca, modelo, antiguedad, color, tipo);
    this.taraMinima = taraMinima;
    this.cargaUtil = cargaUtil;
    this.volumenCarga = volumenCarga;
  }
}

let miCoche = new Coche("Peugeot", "607", 2002, "rojo", "turismo");
// miCoche.detalles();
let miFurgon = new Furgon(
  "Peugeot",
  "607",
  2002,
  "rojo",
  "turismo",
  1200,
  768,
  4.5
);
console.log(miFurgon);
