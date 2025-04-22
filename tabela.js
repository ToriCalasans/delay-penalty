document.addEventListener("DOMContentLoaded", function () {
  const nameUser = localStorage.getItem("name");
  //Pega o nome salvo
  if (nameUser) {
    document.getElementById("nameUser").innerText = `Tabela de ${nameUser}`;
  }
  // Mostra o nome da tabela
  let atrasos = JSON.parse(localStorage.getItem(`atrasos_${nameUser}`)) || [];
  //Aqui pegamos o atraso do meliante
  const tableBody = document.querySelector("tbody");
  //aqui criamos uma constante para selecionar o tbody da tabela.
  function atualizaTabela() {
    tableBody.innerHTML = "";
    //deixa a tabela limpa antes de recriar ( mas será que isso não será um problema?)

    atrasos.forEach((atraso, index) => {
      let row = document.createElement("tr");

      let cellDia = document.createElement("td");
      cellDia.innerText = atraso.dia;
      row.appendChild(cellDia);

      let cellTempo = document.createElement("td");
      cellTempo.innerText = `${atraso.tempo} min`;
      row.appendChild(cellTempo);

      tableBody.appendChild(row);
    });
    let total = 0;
    atrasos.forEach((atraso) => (total += atraso.tempo));
    document.getElementById("totalMinutos").innerText = total;

    if (total >= 0 && total < 5) {
      document.getElementById("punicao").innerHTML = "Paga nada";
      console.log("entrei aqui");
    } else if (total >= 5 && total < 10) {
      document.getElementById("punicao").innerHTML = "Paga 3 reais";
      console.log("entrei aqui2");
    } else if (total >= 10 && total < 15) {
      document.getElementById("punicao").innerHTML = "Paga 6 reais";
    } else if (total >= 15 && total < 30) {
      document.getElementById("punicao").innerHTML = "Paga 9 reais";
    } else if (total >= 30 && total < 60) {
      document.getElementById("punicao").innerHTML = "Paga 18 reais";
    } else if (total >= 60 && total < 90) {
      document.getElementById("punicao").innerHTML = "Paga 36 reais";
    } else if (total >= 90 && total < 120) {
      document.getElementById("punicao").innerHTML = "Paga 54 reais";
    } else if (total >= 120 && total < 150) {
      document.getElementById("punicao").innerHTML = "Paga Lanche completo";
    } else if (total >= 150 && total < 180) {
      document.getElementById("punicao").innerHTML =
        "Além do lanche paga Refri";
    } else if (total >= 180 && total < 210) {
      document.getElementById("punicao").innerHTML =
        "Além do lanche e refri, paga batata";
    } else if (total >= 210 && total < 240) {
      document.getElementById("punicao").innerHTML =
        "Além de lanche, refri e batata, paga sobremesa";
    } else if (total >= 240 && total < 270) {
      document.getElementById("punicao").innerHTML =
        "Além de todo combo precisa pagar pra Camila.";
    } else if (total >= 270) {
      document.getElementById("punicao").innerHTML = "Muda a foto do Linkedly";
    }
    console.log(total);
  }
  //Aqui atualizamos o total de minutos e depois nossa tabela dps de carregar.
  atualizaTabela();

  //aqui colocamos uma função pra adicionar os minutos.
  document.getElementById("adicionar").addEventListener("click", () => {
    const minutos = parseInt(document.getElementById("minutes").value);
    if (!isNaN(minutos) && minutos > 0) {
      const novoatraso = {
        dia: new Date().toLocaleDateString(), //aqui é a data atual
        tempo: minutos,
      };
      atrasos.push(novoatraso);
      localStorage.setItem(`atrasos_${nameUser}`, JSON.stringify(atrasos));
      atualizaTabela();
    }
  });
  document.getElementById("resetar").addEventListener("click", () => {
    localStorage.removeItem(`atrasos_${nameUser}`);
    atrasos = [];
    atualizaTabela();
  });
  document.getElementById("voltar").addEventListener("click", () => {
    window.location.href = "index.html"; // Redireciona pra página inicial
  });
});
