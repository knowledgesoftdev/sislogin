/* Crea una página de inicio de sesión con HTML, CSS y JavaScript. Utiliza JavaScript para validar el nombre de usuario y la contraseña antes de permitir que el usuario inicie sesión. Si el nombre de usuario o la contraseña son incorrectos, muestra un mensaje de error al usuario. */

//OBTENER IDS
const btnLogin = document.querySelector("#login");
const loading = document.querySelector(".loading");

const username = document.querySelector("#username");
const error_username = document.querySelector("#error-username");

const password = document.querySelector("#password");
const error_password = document.querySelector("#error-password");

const resultado = document.querySelector("#resultado");

//FUNCIONES
mostrarLoading = () => {
  loading.style.display = "block";
};

ocultarLoadingLoading = () => {
  loading.style.display = "none";
};

validacionInputs = () => {
  if (!username.value.length > 0) {
    error_username.innerHTML = "Campo Obligatorio";
  } else {
    error_username.innerHTML = "";
  }

  if (!password.value.length > 0) {
    error_password.innerHTML = "Campo Obligatorio";
  } else {
    error_password.innerHTML = "";
  }
};

acceso = () => {
  let usernameInput = username.value.trim();
  let passwordInput = password.value.trim();

  if (
    usernameInput == "knowledgesoftdev" &&
    passwordInput == "knowledgesoftdev.com"
  ) {
    resultado.style.color = "green";
    resultado.innerHTML = "Acceso al Sistema";
  } else {
    resultado.style.color = "red";
    resultado.innerHTML = "Usuario o Password incorrecto";
  }
};

//EVENTOS
btnLogin.addEventListener("click", () => {
  mostrarLoading();
  setTimeout(() => {
    ocultarLoadingLoading();
    validacionInputs();
    acceso();
  }, 3000);
});
