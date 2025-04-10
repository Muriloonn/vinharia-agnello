let usuario = prompt("Digite seu nome de usuário: ");
let senha = prompt("Digite a sua senha: ");
if (usuario == "") {
    prompt("Erro! Digite novamente o seu nome de usuário: " );
} else {
    alert("O seu nome de usuário foi cadastrado com sucesso!");
} if (senha == "") {
    prompt("Erro! Digite novamente a sua senha: " );
} else {
    alert("A sua senha foi cadastrada!");
}
alert("Cadastro realizado! Veja os detalhes no console.");
console.log(usuario);
console.log(senha);
let nomeVinho = prompt("Qual o nome do vinho?\n");
let tipoVinho = prompt("Qual o tipo do vinho?(Tinto, Branco, Rosé)\n");
let ano = prompt("Qual a safra(ano) do vinho?\n");
let quantidadeEstoque = prompt("Qual a quantidade no estoque?\n");
if (quantidadeEstoque < 5) {
    alert("Verifique no console como está o estoque");
    console.log("ESTOQUE BAIXO!");
}
else {
    alert("");
}
if (ano >= 2020) {
    alert("Vinho jovem");
    console.log("Vinho amadurecido");
} else if (ano >= 2015 && ano <= 2019) {
    alert("Vinho amadurecido");
    console.log("Vinho amadurecido");
} else {
    alert("Vinho antigo");
    console.log("Vinho antigo");
}

