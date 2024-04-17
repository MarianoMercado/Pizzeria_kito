//index
const ContactRegisterForm = document.querySelector(".form-container-login");
const btnContactEnviar = document.querySelector(".btnContact-Enviar");
const nameInput = document.getElementById("name");
const lastNameInput = document.getElementById("lastName");
// const emailInput = document.getElementById("email");
// const textarea = document.querySelector(".textarea");
const smallMsj = document.querySelector(".Smallmsj");
const modal = document.querySelector(".add-modal");
const modalMsj = document.querySelector(".modale-body");

let user = {
  name: "",
  password: "",
};
//login
const formContainerLogin = document.querySelector(".form-container-login");
console.log(formContainerLogin);
const btnIngresar = document.querySelector(".login-btnIngresar");
//vailida si esta vacio
const isEmpty = (input) => {
  return !input.value.trim().length;
};

//msj error
const msjError = (input, message) => {
  debugger;
  input.classList.remove("inputValidarSucces");
  input.classList.add("inputValidarError");
  const formField = input.closest(".contact-container-inputs");
  const error = formField.querySelector(".Smallmsj");
  error.style.display = "flex";
  error.classList.add("MsjError");
  error.textContent = message;
};

//msj Success
const msjSuccess = (input) => {
  input.classList.remove("inputValidarError");
  input.classList.add("inputValidarSucces");
  const formField = input.closest(".contact-container-inputs");
  const error = formField.querySelector(".Smallmsj");
  error.style.display = "none";
  error.classList.add("MsjSuccess");
  error.textContent = "";
};

//minimo y maximo caracteres
const isBetween = (input, min, max) => {
  return input.value.length >= min && input.value.length <= max;
};

//validacion inputs
const checkTextInput = (input) => {
  let valid = false;
  const minCharacters = 3;
  const maxCharacters = 10;

  if (isEmpty(input)) {
    msjError(input, "Este campo es obligatorio");
    return;
  }

  if (!isBetween(input, minCharacters, maxCharacters)) {
    msjError(
      input,
      `Este campo debe tener entre ${minCharacters} y ${maxCharacters} caracteres`
    );
    return;
  }
  msjSuccess(input);
  valid = true;
  return valid;
};
//expresion regular email
const isEmailValid = (input) => {
  const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
  return re.test(input.value.trim());
};

//validacion inputs

//evento submit page index
const submitContact = (e) => {
  try {
    debugger;
    e.preventDefault();

    let isNameValid = checkTextInput(nameInput);
    let isLastNameValid = checkTextInput(lastNameInput);

    let isValidForm = isNameValid && isLastNameValid;

    if (isValidForm) {
      ContactRegisterForm.reset();
      user.name = nameInput;
      user.password = lastNameInput;
      window.location.href = "administracion.html";
    }
  } catch (error) {
    showSuccessModal(error, -1);
  }
};

//validacion inputs login
const checkTextInputLogin = (input) => {
  let valid = false;

  if (isEmpty(input)) {
    msjError(input, "Este campo es obligatorio");
    return;
  }

  msjSuccess(input);
  valid = true;
  return valid;
};
//evento submit page login
// const submitLogin = (e) => {
//   try {
//     debugger;
//     e.preventDefault();

//     let isUserValid = checkTextInputLogin(isUserValid);
//     let isPasswordValid = checkTextInput(isPasswordValid);

//     let isValidForm = isUserValid && isPasswordValid;

//     if (isValidForm) {
//       showSuccessModal(`Bienvenido ${isUserValid} a Ramen Autos!`, 0);
//       formContainerLogin.reset();
//       window.location.href = "pages/administracion.html";
//     }
//   } catch (error) {
//     showSuccessModal(error, -1);
//   }
// };

const initValidaciones = () => {
  ContactRegisterForm.addEventListener("submit", submitContact);
  nameInput.addEventListener("input", () => checkTextInput(nameInput));
  lastNameInput.addEventListener("input", () => checkTextInput(lastNameInput));
  //   emailInput.addEventListener("input", () => checkEmail(emailInput));
  //   textarea.addEventListener("input", () => checkTexTarea(textarea));

  //login
  formContainerLogin.addEventListener("submit", submitLogin);
};

initValidaciones();
