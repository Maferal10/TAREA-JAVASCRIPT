// Crear un array llamado números que contenga los números del 1 al 10.
const numeros = [1,2,3,4,5,6,7,8,9,10];
console.log(numeros);

//Imprimir en la consola el tercer elemento del array
const valornumeros = numeros[2];
console.log (valornumeros);

//Agregar el número 11 al final del array.
numeros.push(11);
console.log (numeros);

//Eliminar el primer elemento del array.
numeros.shift(1);
console.log (numeros);

// Imprimir en la consola todos los elementos del array utilizando un bucle for.
for(let i = 0; i <= 11; i = i+1){
    if (i > 0){
    console.log(i);
}
}


// Crear y acceder a propiedades de un objeto literal.
//Crear un objeto llamado persona con las propiedades nombre, edad y ciudad.


const persona = {
    nombre: "Marisol",
    edad: 43,
    ciudad: "Cartago"
};

console.log(persona);


// Imprimir en la consola el nombre de la persona.
console.log(persona.nombre);

// Cambiar la ciudad de la persona a "San José" u otro.
persona.nombre = "San José"
console.log(persona);


// Agregar una nueva propiedad llamada ocupación con el valor "Estudiante".
persona.ocupación = "estudiante"
console.log(persona);

// Imprimir en la consola todas las propiedades del objeto.
const listavalores = Object.values(persona);
console.log(listavalores);

// Definir y utilizar funciones
// Crear una función llamada saludar que tome un parámetro nombre y devuelva un mensaje de saludo.
function saludar(nombre) {
    return "Buenos días, " + nombre + "!";
}
const nombre = "Marisol";
console.log(saludar(nombre));

// Crear una función llamada sumar que tome dos parámetros a y b, y devuelva su suma.
function sumar(a, b) {
    const resultado = a + b;
    return resultado;
}
const resultadoSuma= sumar(5,2);
console.log(resultadoSuma);

// Llamar la función saludar con su nombre y mostrar el resultado en consola.

const saludo= saludar (nombre)
console.log(saludo)

// Llamar la función sumar con los números 5 y 7, y mostrar el resultado en la consola
const suma= sumar (5, 7);
console.log(suma)