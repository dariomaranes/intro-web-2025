console.log('DOM', document);

// 1. MÉTODOS DE SELECCIÓN

function demoGetById() {
    var elemento = document.getElementById('texto-ejemplo');
    elemento.textContent = 'Texto cambiado con getElementById';
    elemento.style.color = 'blue';
    console.log('getElementById:', elemento);
}

function demoGetByClass() {
    var elementos = document.getElementsByClassName('destacado');
    console.log('getElementsByClassName encontró:', elementos.length, 'elementos');

    for (var i = 0; i < elementos.length; i++) {
        elementos[i].style.backgroundColor = 'orange';
        elementos[i].style.color = 'white';
    }
}

var primerItem = document.querySelector('.item');
console.log('querySelector: ', primerItem);

var todosLosItems = document.querySelectorAll('.item');
console.log('querySelectorAll: ', todosLosItems);

var elementByTagName = document.getElementsByTagName('ul');
console.log('getElementsByTagName:', elementByTagName);

function demoQuerySelector() {
    var primerItem = document.querySelector('.item');
    primerItem.style.backgroundColor = 'lightgreen';
    primerItem.textContent = 'Seleccionado con querySelector';
    console.log('querySelector seleccionó:', primerItem);
}

// 2. CREAR Y MODIFICAR ELEMENTOS
function demoCreate() {
    // var contenedor = document.getElementById('contenedor');

    // Crear nuevo párrafo
    var nuevoP = document.createElement('p');
    nuevoP.textContent = 'Párrafo creado con createElement()';
    nuevoP.style.backgroundColor = 'lightblue';

    // Añadir al contenedor
    // contenedor.appendChild(nuevoP);
    console.log('Elemento creado y añadido:', nuevoP);

    contenedor.insertAdjacentElement('beforeend', nuevoP);
}

function demoRemove() {
    var lista = document.getElementById('lista-items');
    var item = document.getElementById('item-remover');

    if (item) {
        lista.removeChild(item);
        console.log('Elemento removido');
    }
}

// 3. EVENT LISTENERS
var clickCount = 0;

function configurarEventos() {
    console.log('Configurando eventos...');
    // Evento click
    document.getElementById('btn-click').addEventListener('click', function() {
        clickCount++;
        document.getElementById('resultado').textContent = 'Botón clickeado ' + clickCount + ' veces';
        console.log('Click número:', clickCount);
    });

    // Evento input
    document.getElementById('input-change').addEventListener('input', function(e) {
        var valor = e.target.value;
        document.getElementById('resultado').textContent = 'Escribiste: ' + valor;
        console.log('Input cambió a:', valor);
    });

    // Evento blur (cuando pierde el foco)
    var inputBlur = document.getElementById('input-blur');
    inputBlur.addEventListener('blur', function(e) {
        var valor = e.target.value;
        inputBlur.style.borderColor = 'red';
        inputBlur.style.borderWidth = '2px';
        document.getElementById('resultado').textContent = 'Perdió el foco. Valor: ' + valor;
        console.log('Input perdió el foco con valor:', valor);
    });

    // Evento focus (cuando recibe el foco)
    inputBlur.addEventListener('focus', function() {
        inputBlur.style.borderColor = '';
        inputBlur.style.borderWidth = '';
        document.getElementById('resultado').textContent = 'Campo enfocado - escribe algo';
        console.log('Input recibió el foco');
    });
}

// INICIALIZACIÓN
document.addEventListener('DOMContentLoaded', function() {
    console.log('Clase de Manipulación del DOM iniciada');

    document.getElementById('btn-get-by-id').addEventListener('click', demoGetById);
    document.getElementById('btn-get-by-class').addEventListener('click', demoGetByClass);
    document.getElementById('btn-query-selector').addEventListener('click', demoQuerySelector);
    document.getElementById('btn-create').addEventListener('click', demoCreate);
    document.getElementById('btn-remove').addEventListener('click', demoRemove);

    configurarEventos();
});

