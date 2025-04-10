let usuario = prompt("Digite seu nome de usuário: ");
let senha = prompt("Digite a sua senha: ");
if (usuario == ""){
    prompt("Digite novamente o seu nome de usuário: " );
} else {
    alert("O seu nome de usuário foi cadastrado com sucesso!");
} if (senha == ""){
    prompt("Digite novamente a sua senha: " );
} else {
    alert("A sua senha foi cadastrada!");
}
alert("Cadastro realizado! Veja os detalhes no console.");
console.log(usuario);
console.log(senha);
let nomeVinho = prompt("Qual o nome do vinho?");
let tipoVinho = prompt("Qual o tipo do vinho?(Tinto, Branco, Rosé)\n");
let ano = prompt("Qual a Safra(ano) do vinho?");
let quantidadeEstoque = prompt("Qual a quantidade no estoque?");
if (quantidadeEstoque < 5) {
    alert("Verifique no console como está o estoque")
    console.log("ESTOQUE BAIXO!")
}
else {
    alert("")
}