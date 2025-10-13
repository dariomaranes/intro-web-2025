// SetTimeOut

const timeOutButton = document.getElementById("timeout");

timeOutButton.addEventListener("click", function () {
  console.log("Inicio del programa");
  setTimeout(() => {
    console.log("Esto se ejecuta después de 2 segundos");
  }, 2000);
  console.log("Fin del programa");
});

// Ejemplo de codigo sincronico bloqueante

function heavyFunction() {
  let count = 0;
  for (let i = 0; i < 1000000000; i++) {
    count++;
  }
  console.log("Desbloqueado");
}

const blockButton = document.getElementById("block");

blockButton.addEventListener("click", function () {
  console.log("First step");
  heavyFunction();
  console.log("Last Step");
});

// Solucion del ejemplo anterior con asincronismo

const noBlockButton = document.getElementById("no-block");

noBlockButton.addEventListener("click", function () {
  console.log("First step");
  setTimeout(function () {
    let count = 0;
    for (let i = 0; i < 1000000000; i++) {
      count++;
    }
    console.log("Desbloqueado");
  }, 0);
  console.log("Last Step");
});

// Callbacks

const callBackButton = document.getElementById("callback");

callBackButton.addEventListener("click", function () {
  function saludar(nombre, callback) {
    console.log("Hola " + nombre);
    callback();
  }

  function despedir() {
    console.log("Adiós!");
  }

  saludar("Julián", despedir);
});

// Callback Hell

const hellButton = document.getElementById("hellButton");

hellButton.addEventListener("click", function () {
  setTimeout(() => {
    console.log("Primer paso");
    setTimeout(() => {
      console.log("Segundo paso");
      setTimeout(() => {
        console.log("Tercer paso");
      }, 1000);
    }, 1000);
  }, 1000);
});

// Promise Resolved

const resolvePromiseBtn = document.getElementById("promise-resolved");

resolvePromiseBtn.addEventListener("click", function () {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("✅ Operación exitosa");
    }, 2000);
  });

  promise
    .then((mensaje) => console.log(mensaje))
    .catch((error) => console.log(error));
});

// Promise Resolved

const rejectPromiseBtn = document.getElementById("promise-rejected");

rejectPromiseBtn.addEventListener("click", function () {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("❌ Hubo un error");
    }, 2000);
  });

  promise
    .then((mensaje) => console.log(mensaje))
    .catch((error) => console.log(error));
});

// async await

const asyncAwaitBtn = document.getElementById("async-await");

asyncAwaitBtn.addEventListener("click", async function main() {
  try {
    console.log("⏳ Cargando...");
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    const data = await response.json();
    console.log(data);
    console.log("✅ Listo");
  } catch (error) {
    console.log(error);
  }
});
