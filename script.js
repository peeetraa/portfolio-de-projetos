// script.js
document.addEventListener("DOMContentLoaded", () => {
  const botaoAcessibilidade = document.getElementById("botao-acessibilidade");
  const opcoesAcessibilidade = document.getElementById("opcoes-acessibilidade");
  const aumentarFonte = document.getElementById("aumentar-fonte");
  const diminuirFonte = document.getElementById("diminuir-fonte");
  const alternaContraste = document.getElementById("alterna-contraste");

  let tamanhoFonte = 100; // porcentagem base

  // Alternar exibição do menu de acessibilidade
  botaoAcessibilidade.addEventListener("click", () => {
    const ativo = opcoesAcessibilidade.classList.toggle("apresenta-lista");
    botaoAcessibilidade.setAttribute("aria-expanded", !ativo);
  });

  // Aumentar fonte progressivamente
  aumentarFonte.addEventListener("click", () => {
    tamanhoFonte += 10;
    document.body.style.fontSize = `${tamanhoFonte}%`;
  });

  // Diminuir fonte progressivamente
  diminuirFonte.addEventListener("click", () => {
    if (tamanhoFonte > 50) { // limite mínimo
      tamanhoFonte -= 10;
      document.body.style.fontSize = `${tamanhoFonte}%`;
    }
  });

  // Alternar alto contraste
  alternaContraste.addEventListener("click", () => {
    document.body.classList.toggle("alto-contraste");

    // Atualiza texto para acessibilidade (ARIA)
    const ativo = document.body.classList.contains("alto-contraste");
    alternaContraste.setAttribute(
      "aria-label",
      ativo ? "Desativar contraste de cores" : "Ativar contraste de cores"
    );
  });

  // Melhor acessibilidade: fechar menu com ESC
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !opcoesAcessibilidade.classList.contains("apresenta-lista")) {
      opcoesAcessibilidade.classList.add("apresenta-lista");
      botaoAcessibilidade.setAttribute("aria-expanded", "false");
    }
  });
});
