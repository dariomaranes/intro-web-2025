// Clase 11

var btnUsersThen = document.getElementById("users-then");
var btnUsersAsync = document.getElementById("users-async");
var usersOutput = document.getElementById("users-output");
var url = "https://jsonplaceholder.typicode.com/users";

function printUsers(usersList) {
  var users = [];
  for (var i = 0; i < usersList.length; i++) {
    var user = usersList[i];
    var userDataFormatted = user.id + " - " + user.name + " (" + user.email + ")";
    users.push(userDataFormatted);
  }
  usersOutput.textContent = users.join("\n");
}

function cargarUsuariosThen() {
  usersOutput.textContent = "Cargando...";
  fetch(url)
    .then(function (response) {
      if (!response.ok) {
        throw new Error("HTTP status " + response.status);
      }
      return response.json();
    })
    .then(function (data) {
      console.log("Users (.then):", data);
      printUsers(data);
    })
    .catch(function (error) {
      console.log(error);
      usersOutput.textContent = error;
    });
}

btnUsersThen.addEventListener("click", cargarUsuariosThen);



async function cargarUsuariosAsync() {
  usersOutput.textContent = "Cargando...";
  try {
    var response = await fetch(url);
    if (!response.ok) {
      throw new Error("HTTP status " + response.status);
    }
    var data = await response.json();
    console.log("Users (async/await):", data);
    printUsers(data);
  } catch (error) {
    console.log(error);
    usersOutput.textContent = error;
  }
}

btnUsersAsync.addEventListener("click", cargarUsuariosAsync);


var LS_USER_KEY = "demoUser";
var LS_EMAIL_KEY = "demoEmail";

var SS_USER_KEY = "demoUserSS";
var SS_EMAIL_KEY = "demoEmailSS";

var btnLsShow = document.getElementById("ls-show");
var btnLsCreate = document.getElementById("ls-create");
var btnLsUpdate = document.getElementById("ls-update");
var btnLsDelete = document.getElementById("ls-delete");

btnLsShow.addEventListener("click", function () {
  var user = localStorage.getItem(LS_USER_KEY);
  var email = localStorage.getItem(LS_EMAIL_KEY);
  console.log("[LS] user: " + user + ", email: " + email);
});

btnLsCreate.addEventListener("click", function () {
  localStorage.setItem(LS_USER_KEY, "rick");
  localStorage.setItem(LS_EMAIL_KEY, "rick@example.com");
  console.log("[LS] creado: { user: rick, email: rick@example.com }");
});

btnLsUpdate.addEventListener("click", function () {
  localStorage.setItem(LS_USER_KEY, "morty");
  localStorage.setItem(LS_EMAIL_KEY, "morty@example.com");
  console.log("[LS] modificado: { user: morty, email: morty@example.com }");
});

btnLsDelete.addEventListener("click", function () {
  localStorage.removeItem(LS_USER_KEY);
  localStorage.removeItem(LS_EMAIL_KEY);
  console.log("[LS] eliminado: demoUser/demoEmail borrados");
});


var btnSsShow = document.getElementById("ss-show");
var btnSsCreate = document.getElementById("ss-create");
var btnSsUpdate = document.getElementById("ss-update");
var btnSsDelete = document.getElementById("ss-delete");

btnSsShow.addEventListener("click", function () {
  var user = sessionStorage.getItem(SS_USER_KEY);
  var email = sessionStorage.getItem(SS_EMAIL_KEY);
  console.log("[SS] user: " + user + ", email: " + email);
});

btnSsCreate.addEventListener("click", function () {
  sessionStorage.setItem(SS_USER_KEY, "summer");
  sessionStorage.setItem(SS_EMAIL_KEY, "summer@example.com");
  console.log("[SS] creado: { user: summer, email: summer@example.com }");
});

btnSsUpdate.addEventListener("click", function () {
  var user = sessionStorage.getItem(SS_USER_KEY);
  var email = sessionStorage.getItem(SS_EMAIL_KEY);
  if (user === null && email === null) {
    console.log("[SS] Nada que actualizar. Primero crea los datos.");
    return;
  }
  sessionStorage.setItem(SS_USER_KEY, "beth");
  sessionStorage.setItem(SS_EMAIL_KEY, "beth@example.com");
  console.log("[SS] modificado: { user: beth, email: beth@example.com }");
});

btnSsDelete.addEventListener("click", function () {
  sessionStorage.removeItem(SS_USER_KEY);
  sessionStorage.removeItem(SS_EMAIL_KEY);
  console.log("[SS] eliminado: demoUserSS/demoEmailSS borrados");
});
