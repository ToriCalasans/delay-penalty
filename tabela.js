document.addEventListener("DOMContentLoaded", function () {
  const nameUSer = localStorage.getItem("name");
  //Pega o nome salvo

  if (nameUser) {
    document.getElementById(nameUser).innerText = `Tabela de ${nameUser}`;
    // Mostra o nome da tabela
  }
});
