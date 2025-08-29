// Menu de acessibilidade
const botaoMenu = document.getElementById("botao-acessibilidade");
const opcoesMenu = document.getElementById("opcoes-acessibilidade");

botaoMenu.addEventListener("click", () => {
    opcoesMenu.classList.toggle("apresenta-lista");
    botaoMenu.setAttribute("aria-expanded", opcoesMenu.classList.contains("apresenta-lista"));
});

// Aumentar fonte
document.getElementById("aumentar-fonte").addEventListener("click", () => {
    let fontSize = parseFloat(window.getComputedStyle(document.body).fontSize);
    document.body.style.fontSize = (fontSize + 2) + "px";
});

// Diminuir fonte
document.getElementById("diminuir-fonte").addEventListener("click", () => {
    let fontSize = parseFloat(window.getComputedStyle(document.body).fontSize);
    document.body.style.fontSize = (fontSize - 2) + "px";
});

// Alternar contraste
document.getElementById("alterna-contraste").addEventListener("click", () => {
    document.body.classList.toggle("alto-contraste");
});
