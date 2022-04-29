// Ejercicio 1

const ejercicio1 = document.getElementById('button-01');
ejercicio1.addEventListener('click', numDeCaractes);

function numDeCaractes() {
    const frase = prompt('Ingresa una cadena de palabras')
    alert(`La cadena de palabras ingrsada tiene ${frase.length} caracteres `)
}

// Ejercicio 2
const ejercicio2 = document.getElementById('button-02');
ejercicio2.addEventListener('click', textoRecortado);

function textoRecortado() {
    const str = prompt('Ingresa el texto para recortar')
    const numCaracteres = parseInt(prompt('Ingresa la cantidad de caracters que quieres recortar'))
    alert(`Texto recortado: ${str.slice(0, numCaracteres)}`)
}

// Ejercicio 3
const ejercicio3 = document.getElementById('button-03');
ejercicio3.addEventListener('click', textoSeparado);

function textoSeparado() {
    const text = prompt('Ingresa el texto');
    const textArray = text.split(' ');
    alert(`Array : ${textArray}`);
}

// Ejercicio 4
const ejercicio4 = document.getElementById('button-04');
ejercicio4.addEventListener('click', textoRepetido);

function textoRepetido() {
    const texto = prompt('Ingresa el texto que quieres que se repita')
    const repeticiones = parseInt(prompt('Ingresa la cantidad de veces que quieres que se repita'))
    alert(`Texto repetido ${repeticiones} veces : ${(texto + ' ').repeat(repeticiones)}`)
}
