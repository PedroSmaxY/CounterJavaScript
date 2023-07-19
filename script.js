function confirmar() {
  let inicio = Number(window.document.querySelector("input#txtinicio").value);
  let fim = Number(window.document.querySelector("input#txtfim").value);
  let passo = Number(window.document.querySelector("input#txtpasso").value);
  let res = window.document.querySelector("div#res");
  let resultado = "";
  if (inicio <= 0 || fim <= 0) {
    res.innerHTML = "Impossível contar!";
  } else if (passo <= 0) {
    window.alert("Passo inválido! Considerando PASSO 1");
    passo = 1;
  }
  if (inicio < fim) {
    // contagem crescente
    for (let i = inicio; i <= fim; i += passo) {
      resultado += `${i} `;
      for (let j = 1; j <= passo; j++) {
        resultado += "👉";
      }
    }
  } else {
    // contagem regressiva
    for (let c = inicio; c >= fim; c -= passo) {
      resultado += `${c} `;
      for (let j = 1; j <= passo; j++) {
        resultado += "👉";
      }
    }
  }

  resultado = resultado.slice(0, -2) + "🏁";
  res.innerHTML = resultado;
}
