var escolhas = document.querySelector("select");

escolhas.addEventListener("change", function (evento) {
  evento.preventDefault();

  var incremento = document.getElementById("valorIncremento");

  if (evento.target.value == "cesar") {
    incremento.style = "display: flex";
  } else {
    incremento.style = "display: none";
  }
}); 





var formulario = document.forms.formulario;

formulario.addEventListener("submit", function (evento) {
  evento.preventDefault();

  var texto = formulario.texto.value;
  var escolha = formulario.escolhacod.value;
  var botoes = formulario.codif.value;
  var numeroIncremento = formulario.numeroIncrementos.value;
  var mensagemFinal = "";

  if (escolha == "cesar") {
    mensagemFinal = cesar(botoes, texto, numeroIncremento);
  } else {
    mensagemFinal = base64(botoes, texto);
  }

  var resultadoTexto = document.getElementById("saidaTexto");
  resultadoTexto.innerHTML = `${mensagemFinal}`;
});





function cesar(codif, texto, numeroIncremento) {
  numeroIncremento = Number(numeroIncremento);

  var mensagemFinal = "";

  for (var i = 0; i < texto.length; i++) {
    var letra = texto[i];
    var codigo = letra.charCodeAt();

    if (codif == "codificar") {
      codigo += numeroIncremento;
    } else {
      codigo -= numeroIncremento;
    }
    mensagemFinal += String.fromCharCode(codigo);
  }
  return mensagemFinal;
}


function base64(codif, texto) {
  if (codif == "codificar") {
    return btoa(texto);
  } else {
    return atob(texto);
  }
}
