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