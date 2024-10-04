alert('Seja bem-vindo ao Jogo do Número Secreto');

//Variáveis
let numeroMaximo = 100;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
let chute;
let tentativas = 1;

//Programa principal
while(chute != numeroSecreto) {
    chute = prompt (`Escolha um número entre 1 e ${numeroMaximo}`);
    if (chute == numeroSecreto) {
        break;
    } else {
        if (chute > numeroSecreto) {
            alert(`O número secreto é menor que ${chute}`);
        } else {
            alert(`O número secreto é maior que ${chute}`);
        }
        tentativas++;
    }
}

//Se acertar em 1 tentativa, a palavra tentativa ficará no singular, caso contrário, ficará no plural
let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Você acertou o número secreto ${numeroSecreto} em ${tentativas} ${palavraTentativa}!`);
