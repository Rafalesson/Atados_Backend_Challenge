const log = console.log;
const listaNumero = [1, 2, 5];

function menorInteiroPositivo(listaNumero) {
  let menorNumero = 1;
  // Ordena a lista de forma crescente. Não é necessário, mas ajuda a visualizar melhor.
  const listaNumeroOrdenada = listaNumero.sort();
  for (let i = 0; i < listaNumeroOrdenada.length; i++) {
    if (listaNumeroOrdenada[i] === menorNumero) {
      menorNumero++;
    }
  }
  return menorNumero;
}

log(menorInteiroPositivo(listaNumero));


// Para realizar o exercício, iniciei uma variável (menorNumero) em 1; Verifico se ela não está na listaNumero; Se não estiver, retornar menorNumero, caso contrário, incremento +1 a menorNumero e continuo o loop até a condição ser verdadeira.
