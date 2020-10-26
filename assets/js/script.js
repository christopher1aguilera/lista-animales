class Propietario {
    constructor (pname, direccion, telefono) {
        this.pname = pname
        this.direccion = direccion
        this.telefono = telefono
    }
    get pname () {
        return this._pname
    }
    set pname (pname) {
        this._pname = pname
    }
    get direccion () {
        return this._direccion
    }
    set direccion (direccion) {
        this._direccion = direccion
    }
    get telefono () {
        return this._telefono
    }
    set telefono (telefono) {
        this._telefono = telefono
    }
    datosPropietario() {
        let text1 = `<p>El  nombre del dueño es: ${this.pname}, su direccion es: ${this.direccion}, su telefono es: ${this.telefono}</p>`        
        return text1
    }
}

//primera herencia
class Animal extends Propietario {
    constructor (pname, direccion, telefono, aname, tipo) {
        super (pname, direccion, telefono)
        this.aname = aname
        this.tipo = tipo
    }
    get aname () {
        return this._aname
    }
    set aname (aname) {
        this._aname = aname
    }
    get tipo () {
        return this._tipo
    }
    set tipo (tipo) {
        this._tipo = tipo
    }
    datosAnimal() {
        let text2 = `El nombre del animal es: ${this.aname}, y este es un: ${this.tipo}`
        return text2
    }
}

//segundas herencias
class Perro extends Animal {
    constructor (pname, direccion, telefono, aname, tipo, enfermedad) {
        super(pname, direccion, telefono, aname,tipo)
        this.enfermedad = enfermedad
    }
    get enfermedad () {
        return this._enfermedad
    }
    set enfermedad (enfermedad) {
        this._enfermedad = enfermedad
    }
    info () {
        console.log(this.pname)
        console.log(this.direccion)
        console.log(this.telefono)
        console.log(this.aname)
        console.log(this.tipo)
        console.log(this.enfermedad)
    }
}

class Gato extends Animal {
    constructor (pname, direccion, telefono, aname, tipo, enfermedad) {
        super(pname, direccion, telefono, aname,tipo)
        this.enfermedad = enfermedad
    }
    get enfermedad () {
        return this._enfermedad
    }
    set enfermedad (enfermedad) {
        this._enfermedad = enfermedad
    }
    info () {
        console.log(this.pname)
        console.log(this.direccion)
        console.log(this.telefono)
        console.log(this.aname)
        console.log(this.tipo)
        console.log(this.enfermedad)
    }
}

class Conejo extends Animal {
    constructor (pname, direccion, telefono, aname, tipo, enfermedad) {
        super(pname, direccion, telefono, aname,tipo)
        this.enfermedad = enfermedad
    }
    get enfermedad () {
        return this._enfermedad
    }
    set enfermedad (enfermedad) {
        this._enfermedad = enfermedad
    }
    info () {
        console.log(this.pname)
        console.log(this.direccion)
        console.log(this.telefono)
        console.log(this.aname)
        console.log(this.tipo)
        console.log(this.enfermedad)
    }
}

// main.js
let gato = []
let perro = []
let conejo = []
let veterinaria = []
const result = document.getElementById('resultado')
let formulario = document.querySelector('form');
let ul = document.querySelector('ul');
let evaluacion = (event) =>{
    event.preventDefault();
  const pname = document.getElementById('propietario').value;
  const telefono = document.getElementById('telefono').value;
  const direccion = document.getElementById('direccion').value;
  const aname = document.getElementById('nombreMascota').value;
  const tipo = document.getElementById('tipo').value;
  const enfermedad = document.getElementById('enfermedad').value;
  const opcion = document.querySelector('select').value
let p2 = new Propietario(pname, direccion, telefono)
let a2 = new Animal(pname, direccion, telefono, aname, tipo)
const div = document.createElement('table');
div.style.width = "1000px"
console.log(a2.pname)
    if (opcion == "perro") {
        let pe2 = new Perro(pname, direccion, telefono, aname, tipo, enfermedad)
        const clientes = []
        clientes.push(p2, a2, pe2)
        veterinaria.push(clientes)
        perro.push(pe2)
        pe2.info ()
        pe2.datosAnimal()
        pe2.datosPropietario()
        console.log(pe2.pname)
div.innerHTML = `<td><th>${pe2.pname}</th><th>${pe2.telefono}</th><th>${pe2.direccion}</th><th>${pe2.aname}</th><th>${pe2.tipo}</th><th>${pe2.enfermedad}</th></td>`;
result.appendChild(div);
        ul.innerHTML = `<ul><li>${pe2.datosPropietario()}</li><li>${(pe2.datosAnimal()).concat(", y la enfermedad es: " + this.enfermedad.value)}</li></ul>`
    }
    else if (opcion == "gato") {
        let ga2 = new Gato(pname, direccion, telefono, aname, tipo, enfermedad)
        const clientes = []
        clientes.push(p2, a2, ga2)
        veterinaria.push(clientes)
        gato.push(ga2)
        ga2.info ()
        ga2.datosAnimal()
        ga2.datosPropietario()
        ul.innerHTML = `<ul><li>${ga2.datosPropietario()}</li><li>${(ga2.datosAnimal()).concat(", y la enfermedad es: " + this.enfermedad.value)}</li></ul>`
    }
    else {
        let co2 = new Conejo(pname, direccion, telefono, aname, tipo, enfermedad)
        const clientes = []
        clientes.push(p2, a2, co2)
        veterinaria.push(clientes)
        conejo.push(co2)
        co2.info ()
        co2.datosAnimal()
        co2.datosPropietario()
        ul.innerHTML = `<ul><li>${co2.datosPropietario()}</li><li>${(co2.datosAnimal()).concat(", y la enfermedad es: " + this.enfermedad.value)}</li></ul>`
    }
}
formulario.addEventListener('submit',evaluacion);