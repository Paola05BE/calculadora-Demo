let primerInput = 0;
let segundoInput = '';
let operation = null;
let resultado;

function appendNumber(number) {
    // Asigna el número al input correspondiente
    if (operation === null) {
        primerInput += number;
    } else {
        segundoInput += number;
    }
    showNumbers();
}

function showNumbers() {
    let elementoHtml = document.getElementById('vista');
    if (operation === null) {
        elementoHtml.value = primerInput;
    } else {
        elementoHtml.value = `${primerInput} ${operation} ${segundoInput}`;
    }
}

function setOperation(op) {
    if (primerInput === '') return; // Evita configurar la operación si no hay número ingresado
    if (operation !== null) calculate(); // Si ya hay una operación pendiente, calcula primero
    operation = op;
    showNumbers();
}

function calculate() {
    const prev = parseFloat(primerInput);
    const current = parseFloat(segundoInput);

    if (isNaN(prev) || isNaN(current)) return; // Manejar errores

    switch (operation) {
        case '+':
            resultado = prev + current;
            break;
        case '-':
            resultado = prev - current;
            break;
        case '*':
            resultado = prev * current;
            break;
        case '/':
            resultado = prev / current;
            break;
        case '%':
            resultado = (prev * current) / 100;
            break;
        default:
            return;
    }

    // Mostrar el resultado y limpiar las variables
    primerInput = resultado.toString();
    operation = null;
    segundoInput = '';
    showNumbers();
}

function clearDisplay(){
    primerInput='';
    segundoInput='';
    operation = null;
    showNumbers();

}
function deleteDigit() {
    if (operation === null) {
        primerInput = primerInput.slice(0, -1);
    } else if (segundoInput === '') {
        operation = null;
    } else {
        segundoInput = segundoInput.slice(0, -1);
    }
    showNumbers();
}

document.addEventListener('DOMContentLoaded', function() {
    clearDisplay();
});