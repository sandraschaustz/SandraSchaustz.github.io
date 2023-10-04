const form = document.querySelector("#form")
const nameInput = document.querySelector("#name")
const emailInput = document.querySelector("#email")
const telefoneInput = document.querySelector("#telefone")
const mensagemtextarea = document.querySelector("#mensagem")
//const form = document.querySelector("")

form.addEventListener("submit", (event) => { 
    event.preventDefault(); 

    // Verifica se o nome está vazio
    if (nameInput.value === "") {
    alert("Por favor, preencha o seu nome.");
    return;
}

    // Se prenchido corretamente envie o formulário
    form.submit();

    // Verifica se o e-mail está vazio
if (emailInput.value === "" || !isEmailValid(emailInput.value)) {
    alert("Por favor, preencha o seu E-mail.");
    return;
}
    // Se prenchido corretamente envie o formulário
    form.submit();

     // Verifica se o nome está vazio
    if (telefoneInput.value === "") {
        alert("Por favor, preencha o seu telefone.");
        return;
    }
    
        // Se prenchido corretamente envie o formulário
        form.submit();

});


// função que valida o e-mail
function isEmailValid(email) {
    const emailRegex = new RegExp(
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/
    );
    
    if (emailRegex.test(email)) {
        return true;
    }
    return false;
}




