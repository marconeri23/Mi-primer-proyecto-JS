//Cambia el contenido de la etiqueta h1 con document.querySelector y asigna el siguiente texto: "Hora del Desafío".

let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora del Desafío';

//Crea una función que muestre en la consola el mensaje "El botón fue clicado" siempre que se presione el botón "Console".

//En el index.html , agregamos en el "onclick" el siguiente código:
//<button onclick="mostarMensajeEnLaConsola()" class="button">Console</button>

//En el app.js
function mostarMensajeEnLaConsola() {
    console.log('El botón fue clicado!')
}

//Crea una función que se ejecute cuando se haga clic en el botón "prompt", preguntando el nombre de una ciudad de Brasil. Luego, muestra una alerta con el mensaje concatenando la respuesta con el texto: "Estuve en {ciudad} y me acordé de ti".

//En el index.html , agregamos en el "onclick" el siguiente código:
//<button onclick="mostarAlerta()" class="button">Alert</button>
//En el app.js

function mostarAlerta(){
     let ciudad = prompt("Por favor, ingresa el nombre de una ciudad de Brasil:");
    alert("Estuve en " + ciudad + " y me acordé de ti.");
} 

//Crea una función que muestre una alerta con el mensaje: "Yo amo JS" siempre que se presione el botón "Alerta".

//En el index.html , agregamos en el "onclick" el siguiente código:
//<button onclick="mostarAlerta()" class="button">Alert</button>
//En el app.js

function mostarAlerta(){
    alert("AMO JS");
} 

//Al hacer clic en el botón "suma", pide 2 números y muestra el resultado de la suma en una alerta.

//En el index.html , agregamos en el onclick el siguiente código:

//<button onclick="sumaDosNumeros()" class="button">Suma</button>
//En el app.js

function sumaDosNumeros(){
    let primerNumero = parseInt(prompt('Digite el primer numero'));
    let segunNumero = parseInt(prompt('Digite el segundo numero'));
    let resultado = primerNumero + segunNumero;
    alert('${primerNumero} + ${segunNumero} = ${resultado}')
}

//El código HTML y JavaScript que proporcionaste trabaja juntos para crear un botón que, cuando se hace clic, 
//ejecuta la función sumaDosNumeros(). 
//Esta función pide al usuario que ingrese dos números a través de ventanas de prompt, 
//realiza la suma de esos dos números e imprime el resultado en una ventana de alerta. 

// Define una función llamada sumaDosNumeros
function sumaDosNumeros() {
    // Pide al usuario que ingrese el primer número y lo almacena en la variable primerNumero
    let primerNumero = parseInt(prompt('Digite el primer número'));

    // Pide al usuario que ingrese el segundo número y lo almacena en la variable segundoNumero
    let segundoNumero = parseInt(prompt('Digite el segundo número'));

    // Realiza la suma de los dos números ingresados y almacena el resultado en la variable resultado
    let resultado = primerNumero + segundoNumero;

    // Muestra una ventana de alerta con el resultado de la suma utilizando interpolación de cadenas
    alert(`${primerNumero} + ${segundoNumero} = ${resultado}`);
}

//1.-Crear una función que muestra "¡Hola, mundo!" en la consola.
function mostrarHola() {
  console.log("¡Hola, mundo!");
}

mostrarHola();


//2.-Crear una función que recibe un nombre como parámetro y muestra "¡Hola, [nombre]!" en la consola.
function mostrarHolaNombre(nombre) {
  console.log(`¡Hola, ${nombre}!`);
}

mostrarHolaNombre("Alice");


//3.-Crear una función que recibe un número como parámetro y devuelve el doble de ese número.
function calcularDoble(numero) {
  return numero * 2;
}

let resultadoDoble = calcularDoble(5);
console.log(resultadoDoble);
//Crear una función que recibe tres números como parámetros y devuelve su promedio.
function calcularPromedio(a, b, c) {
  return (a + b + c) / 3;
}

let promedio = calcularPromedio(4, 7, 10);
console.log(promedio);


//4.-Crear una función que recibe dos números como parámetros y devuelve el mayor de ellos.
function encontrarMayor(a, b) {
  return a > b ? a : b;
}

let numeroMayor = encontrarMayor(15, 9);
console.log(numeroMayor);


//5.-Crear una función que recibe un número como parámetro y devuelve el resultado de multiplicar ese número por sí mismo.
function cuadrado(numero) {
  return numero * numero;
}

let resultado = cuadrado(2);
console.log(resultado);

//Crea una lista vacía con el nombre listaGenerica.
let listaGenerica = [];
//Crea una lista de lenguajes de programación llamada lenguagesDeProgramacion.
let lenguagesDeProgramacion = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python'];

//Agrega a la lista lenguagesDeProgramacion los siguientes elementos.
lenguagesDeProgramacion.push('Java', 'Ruby', 'GoLang');

//Crea una función que muestre en la consola todos los elementos de la lista lenguagesDeProgramacion por separado.
function mostrarLenguagesSeparadamente() {
  for (let i = 0; i < lenguagesDeProgramacion.length; i++) {
    console.log(lenguagesDeProgramacion[i]);
  }
}

mostrarLenguagesSeparadamente();

//Crea una función que muestre en la consola todos los elementos de la lista lenguagesDeProgramacion de manera inversa.
function mostrarLenguagesReversoSeparadamente() {
  for (let i = lenguagesDeProgramacion.length - 1; i >= 0; i--) {
    console.log(lenguagesDeProgramacion[i]);
  }
}

mostrarLenguagesReversoSeparadamente();

//Crea una función que calcule la media de los elementos en una lista de números.
function calcularMedia(lista) {
  let suma = 0;
  for (let i = 0; i < lista.length; i++) {
    suma += lista[i];
  }
  return suma / lista.length;
}

let numeros = [10, 20, 30, 40, 50];
let media = calcularMedia(numeros);
console.log('Média:', media);

//Crea una función que muestre en la consola el número mayor y menor en una lista.
function encontrarMayorMenor(lista) {
  let mayor = lista[0];
  let menor = lista[0];

  for (let i = 1; i < lista.length; i++) {
    if (lista[i] > mayor) {
      mayor = lista[i];
    }
    if (lista[i] < menor) {
      menor = lista[i];
    }
  }

  console.log('Mayor:', mayor);
  console.log('Menor:', menor);
}

let numeros = [15, 8, 25, 5, 12];
encontrarMayorMenor(numeros);

//Crea una función que retorne la suma de todos los elementos en una lista.
function calcularSuma(lista) {
  let suma = 0;
  for (let i = 0; i < lista.length; i++) {
    suma += lista[i];
  }
  return suma;
}

let numeros = [15, 8, 25, 5, 12];
let suma = calcularSuma(numeros);
console.log('Suma:', suma);

//Crea una función que reciba una lista como parámetro y retorne el índice de un elemento también pasado como parámetro. Si ese elemento no existe en la lista, retorna -1.
function encontrarIndiceElemento(lista, elemento) {
  for (let i = 0; i < lista.length; i++) {
    if (lista[i] === elemento) {
      return i; // Retorna el índice del elemento encontrado
    }
  }
  return -1; // Retorna -1 si el elemento no se encuentra en la lista
}