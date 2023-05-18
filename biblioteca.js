function Redirectinicio() {
    window.location.assign ("http://127.0.0.1:5500/projeto-automa%C3%A7ao/auto.html")
}

function main() {
    var nome = document.querySelector('.nome input').value;
    var ra = document.querySelector('.RA input').value;
    var senha = document.querySelector('.senha input').value;
  
    if (nome === "") {
      alert("Por favor, insira seu nome.");
      return;
    }
  
    if (ra === "") {
      alert("Por favor, digite seu RA.");
      return;
    }
  
    if (senha === "") {
      alert("Por favor, insira sua senha.");
      return;
    }
  
    if (nome === "Gustavo" && ra === "4355" && senha === "12345") {
      alert("Sucesso");
      window.location.assign ("http://127.0.0.1:5500/projeto-automa%C3%A7ao/auto.html")
      return;
    } else {
      alert("Nome, RA ou senha incorretos.");
      return;
    }
  }
  