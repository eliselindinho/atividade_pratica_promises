/*
A Mach1 está desenvolvendo um sistema e ele possuirá várias telas de cadastro 
que precisaram ter validações de campos obrigatórios, e após validar os campos 
deve exibir uma única mensagem com todos os campos que não estão preenchidos. 
Então precisaremos criar uma função de validação de campos que retornará uma 
Promise seguindo as seguintes regras. 
Regras 
a. Criar uma função que receberá por parâmetro um array com os ids dos 
campos a serem validados. 
b. A função deve retornar uma Promise que fará a validação dos campos 
recebidos via parâmetro, caso nenhum campo a ser validado esteja invalido 
a Promise deve retornar sucesso e executar a função passada no THEN, 
caso a função encontre um ou mais campos sem estar preenchido a promise 
deve retornar os campos que estão inválidos e chamar a função que está no 
CATCH da promise. 
c. Ao clicar no botão salvar deve ser chamado a função de validação passando 
os ids dos campos que devem ser validados. 
d. No THEN exiba um alert com a mensagem “Dados salvos com sucesso”.
e. No CATCH receberá os ids inválidos e então mostre-os no DIV mensagem 
com o texto “Campo X é obrigatório” onde X refere-se a cada campo 
invalido retornado. 
f. Use o HTML abaixo como base para o desenvolvimento
*/

let botao = document.querySelector("#salvar");
let mensagem = document.querySelector("#message");

function validar(campos) {
  return new Promise((resolve, reject) => {
    let listaIdInvalidos = [];
    for (let i = 0; i < campos.length; i++) {
      // let input = document.querySelector("#" + campos[i]);
      let input = document.querySelector(`#${campos[i]}`);

      if (input.value == "") {
        listaIdInvalidos.push(campos[i]);
      }
    }

    if (listaIdInvalidos.length > 0) {
      reject(listaIdInvalidos);
    } else {
      resolve();
    }
  });
}

botao.addEventListener("click", () => {
  validar(["nome", "idade", "endereco", "telefone"])
    .then((response) => {
      alert("Dados salvos com sucesso!");
    })
    .catch((error) => {
      console.log(error);
      let mensagens = error.map((item) => {
        return `<p>campos ${item} é obrigatório</p>`;
      });
      mensagem.innerHTML = mensagens.join("");
      mensagem.style.color = "red";
    });
});
