let gradient = new Gradient();
gradient.initGradient("#gradient-canvas");

// Remove confirmação de envio de formulário
if (window.history.replaceState) {
  window.history.replaceState(null, null, window.location.href);
}

// Mostrar e esconder senha
const mostrarSenha = document.getElementById("mostrar-senha");
const senhaInput = document.getElementById("senha");

mostrarSenha.addEventListener("click", function () {
  if (senhaInput.type === "password") {
    senhaInput.type = "text";
    mostrarSenha.style.backgroundImage =
      "url(../../img/icons/esconder_senha.svg)";
  } else {
    senhaInput.type = "password";
    mostrarSenha.style.backgroundImage = "url(../../img/icons/ver_senha.svg)";
  }
});
