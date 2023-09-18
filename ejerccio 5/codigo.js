class Animal {
  constructor(especie, edad, color) {
    this.especie = especie;
    this.edad = edad;
    this.color = color;
    this.info = `Soy ${this.especie}, tengo ${this.edad}
    años y soy de color ${this.color}`;
  }

  verInfo() {
    document.write(this.info + "<br>");
  }
}

class Perro extends Animal {
  constructor(especie, edad, color, raza) {
    super(especie, edad, color);
    this.raza = null;
  }
    set setRaza(newName){
         this.raza = newName;
    }

    get getRaza() {
      return this.raza;
    }
}

const perro = new Perro("perro",6,"marron","piula");
const  gato = new Animal("gato", 3, "amarillo");
const pajaro = new Animal("pajaro", 1, "verde");

perro.modificarRaza="pedro";

document.write(perro.getRaza);
