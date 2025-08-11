// 1. Selecionar o título principal pelo ID
const tituloPrincipal = document.getElementById("titulo-principal");
document.querySelector('.titulo-principal')


// 2. Alterar o texto do subtítulo (h2 com classe subtitulo)
const subtitulo = document.querySelector(".subtitulo");
subtitulo.textContent ="Eu alternei"

// 3. Alterar o link do <a> para o YouTube
const linkGoogle = document.querySelector("a");


// 4. Adicionar alerta ao clicar no botão
const botao = document.querySelector("button");



// 5. Contar e exibir todos os itens com classe .itens
const itens = document.querySelectorAll(".numero");


// 6. Trocar a imagem do relógio por outra imagem
const imagem = document.querySelector("img");
imagem.src = "novo-relogio.jpg"

// 7. Alterar o fundo da div .conteudo para azul
const conteudo = document.querySelector(".conteudo");


// 8. Adicionar mais texto ao parágrafo
const paragrafo = document.querySelector("p");


// 9. Capturar valor do input do formulário
const inputNome = document.querySelector("input[name='nome']");
inputNome.addEventListener("blur", () => {
  console.log("Nome digitado:", inputNome.value);
});

//10. Usar loop para percorrer os itens e exibir no console
for (let item of itens){
    document.querySelector(".itens")
}
