// // Tipos de Datos Primitivos
// // Strings
// var color = "Yellow";
var name = "Johnson";
// console.log("color:", color);
// console.log("name:", name);

// // Ejemplos de metodos de strings
// var upperCaseColor = color.toUpperCase();
// var lowerCaseName = name.toLowerCase();
// var charAtIndex2 = name.charAt(2);
// var indexOfO = name.indexOf("o");
// var substringExample = "Example of string and substring".substring(11, 20);

// console.log("upperCaseColor:", upperCaseColor);
// console.log("lowerCaseName:", lowerCaseName);
// console.log("charAtIndex2:", charAtIndex2);
// console.log("indexOfO:", indexOfO);
// console.log("substringExample:", substringExample);

// // Number
var age = 16;
// console.log("age:", age);

// // Boolean
// var x = true;
// var y = false;
// console.log("Boolean true:", x);
// console.log("Boolean false:", y);

// // Undefined
// var undefinedVariable;
// console.log("undefinedVariable:", undefinedVariable);

// // Null
// console.log("nullVariable:", nullVariable);
// var nullVariable = null;
// console.log("nullVariable:", nullVariable);

// // Tipo de Datos no Primitivos
// // Object
// var person = { firstName: "John", lastName: "Doe" };
// console.log("person:", person);

// // Ejemplos de metodos de objetos
// var fullName = person.firstName + " " + person.lastName;
// person.fullName = fullName;
// person.age = 30;
// console.log("person:", person);

// // Array
// var fruits = ["Apple", "Banana", "Cherry"];
// var numbers = [1, 2, 3, 4, 5];
// var objects = [{ name: "John", lastName: "Doe" }, { name: "Jane", lastName: "Doe" }];

// // Ejemplos de metodos de arrays
// fruits.push("Orange");
// var firstFruit = fruits.shift();
// var cherryIndex = fruits.indexOf("Cherry");
// var slicedFruits = fruits.slice(0, 2);
// console.log("fruits:", fruits);
// console.log("firstFruit:", firstFruit);
// console.log("cherryIndex:", cherryIndex);
// console.log("slicedFruits:", slicedFruits);
// var allFruits = fruits.join(", ");
// console.log("allFruits:", allFruits);
// var reversedFruits = fruits.reverse();
// console.log("reversedFruits:", reversedFruits);

// // Date
// var date = new Date("2022-03-25");

// Tipos de Operadores
// // Asignación
var a = 10;
var b = 5;

// Aritméticos
var suma = a + b;
var incremento = ++a;
var sumaIgual = a += b;
var resta = a - b;
var decremento = --a;
var restaIgual = a -= b;
var multiplicacion = a * b;
var potenciacion = a ** b;
var division = a / b;
var modulo = a % b;
console.log("suma:", suma);
console.log("incremento:", incremento);
console.log("sumaIgual:", sumaIgual);
console.log("resta:", resta);
console.log("decremento:", decremento);
console.log("restaIgual:", restaIgual);
console.log("multiplicacion:", multiplicacion);
console.log("potenciacion:", potenciacion);
console.log("division:", division);
console.log("modulo:", modulo);

// // Comparación
// var igual = a == b;
// var estrictamenteIgual = a === b;
// var diferente = a != b;
// var estrictamenteDiferente = a !== b;
// var mayorQue = a > b;
// var menorQue = a < b;
// var mayorOIgualQue = a >= b;
// var menorOIgualQue = a <= b;
// console.log("igual:", igual);
// console.log("estrictamenteIgual:", estrictamenteIgual);
// console.log("diferente:", diferente);
// console.log("estrictamenteDiferente:", estrictamenteDiferente);
// console.log("mayorQue:", mayorQue);
// console.log("menorQue:", menorQue);
// console.log("mayorOIgualQue:", mayorOIgualQue);
// console.log("menorOIgualQue:", menorOIgualQue);

// // Lógicos
// var and = (a > 5 && b < 10);
// var or = (a > 20 || b < 3);
// var not = !(a > 5);
// console.log("and:", and);
// console.log("or:", or);
// console.log("not:", not);

// // Concatenación
// var concatenacion = "Hello, " + name + "! You are " + age + " years old.";
// console.log("concatenacion:", concatenacion);

// // Funciones
// function greet(personName) {
//   return "Hello, " + personName + "!";
// }

// function add(x, y) {
//   return x + y;
// }

// function isEven(num) {
//   return num % 2 === 0;
// }

// console.log("greet:", greet("Alice"));
// console.log("add:", add(3, 4));
// console.log("isEven:", isEven(10));

// // Funciones Puras
// function pureFunction(x) {
//   return x * 2;
// }
// console.log("pureFunction:", pureFunction(5));

// // Funciones
// var counter = 0;
// function impureFunction() {
//   counter++;
//   return counter;
// }
// console.log("impureFunction 1:", impureFunction());
// console.log("impureFunction 2:", impureFunction());
// console.log("impureFunction 3:", impureFunction());
// console.log("impureFunction 4:", impureFunction());

// // Funciones de Orden Superior
// function higherOrderFunction(fn, value) {
//   return fn(value);
// }
// console.log("higherOrderFunction:", higherOrderFunction(pureFunction, 10));

// // Funciones Anónimas
// console.log("anonymousFunction:", (function (x) {
//   return x + 1;
// }(5)));