const formToEnter = document.querySelector(".form-to-enter");
const mask = document.querySelector(".mask-form")
const buttonCloseEnter = document.querySelector(".toClose");
const formToRegister = document.querySelector(".form-register");
const formForgotPassword = document.querySelector(".form-forgot-password")

function toEnter() {
    formToEnter.style.left = "50%"
    formToEnter.style.transform = "translateX(-50%)"
    mask.style.visibility = "visible"
}

function closelogin() {
    formToEnter.style.left = "-500%"
    mask.style.visibility = "hidden"

}

function register() {
    closelogin()
    formToRegister.style.left = "50%"
    formToRegister.style.transform = "translateX(-50%)"
    mask.style.visibility = "visible"
}

function closeRegistration() {
    formToRegister.style.left = "-500%"
    mask.style.visibility = "hidden"
}


function forgotPassword() {
    closelogin()
    formForgotPassword.style.left = "50%"
    formForgotPassword.style.transform = "translateX(-50%)"
    mask.style.visibility = "visible"
}

function closeForgotPassword() {
    formForgotPassword.style.left = "-500%"
    mask.style.visibility = "hidden"

}