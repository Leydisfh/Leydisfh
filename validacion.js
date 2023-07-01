//variables
const name = document.querySelector("#formcontato__nombre");
const asunto = document.querySelector("#formcontato__asunto");
const email = document.querySelector("#formcontato__email");
const mensaje = document.querySelector("#mensagem");
const btn = document.querySelector("#formulario__btn");


btn.addEventListener("click", validacion);

function validacion(event){
    event.preventDefault();
    const nameValue = name.value;
    const asuntoValue = asunto.value;
    const emailValue = email.value;
    const mensajeValue = mensaje.value;
    
    name.value = ""; 
    asunto.value = "";
    email.value = "";
    mensaje.value = "";

        console.log(nameValue);
        console.log(asuntoValue);
        console.log(emailValue);
        console.log(mensajeValue);
}

