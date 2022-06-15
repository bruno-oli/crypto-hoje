function getCrypto() {
  const input = document.querySelector("#cryptoName");
  const button = document.querySelector("#cryptoGo");
  let moeda = "";
  button.addEventListener("click", () => {
    moeda = input.value;
    fetch("https://www.mercadobitcoin.net/api/" + moeda + "/ticker/")
      .then((response) => {
        return response.json();
      })
      .then((i) => {
        if (i.ticker.high > 0) {
          document.querySelector(".maior-preco").innerHTML = parseFloat(
            i.ticker.high
          ).toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
          document.querySelector(".menor-preco").innerHTML = parseFloat(
            i.ticker.low
          ).toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
          document.querySelector(".quantidade-negociada").innerHTML =
            i.ticker.vol;
          document.querySelector(".preco-unitario").innerHTML = parseFloat(
            i.ticker.last
          ).toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
          document.querySelector(".preco-oferta-compra").innerHTML = parseFloat(
            i.ticker.buy
          ).toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
          document.querySelector(".preco-oferta-venda").innerHTML = parseFloat(
            i.ticker.sell
          ).toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
        }
      });
  });
}

getCrypto();
