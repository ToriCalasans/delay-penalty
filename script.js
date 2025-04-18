  const buttonsName = document.querySelectorAll("button");
  //O addEventListener permite que você configure funções a serem chamadas quando um evento específico acontece

  buttonsName.forEach((buttonName) => {
    buttonName.addEventListener("click", function () {
      // Aqui pegamos o click
      const nameUser = buttonName.innerText;
      // E Aqui pegamos o texto do botão
      localStorage.setItem("name", nameUser);
      // Criamos uma entrada no localStorage para a tabela dessa pessoa, se ainda não existir
      if (!localStorage.getItem('atrasos_${nameUser}')){
        localStorage.setItem('atrasos_${nameUser}',JSON.stringify([]));
      }
      //Guarda os valores no localStorage
      window.location.href = "tabela.html";
      //E aqui redirecionamos para outra páginas
    });
  });

