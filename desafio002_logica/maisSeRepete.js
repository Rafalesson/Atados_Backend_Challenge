const log = console.log;
const entrada = ['A', 'R', 'A', 'R', 'A'];

function charQueMaisRepete(arr) {
    let charMaisRepete = arr[0];
    let qtdRepete = 0;
    for (let i = 0; i < arr.length; i++) {
        let qtd = 0;
        for (let j = 0; j < arr.length; j++) {
        if (arr[i] === arr[j]) {
            qtd++;
        }
        }
        if (qtd > qtdRepete) {
        qtdRepete = qtd;
        charMaisRepete = arr[i];
        }
    }
    return (`O caractere que mais se repete é "${charMaisRepete}" e ele se repete ${qtdRepete} vezes.`);
}

log(charQueMaisRepete(entrada));

// Para resolução desse desafio, foi utilizado o método de for aninhado, onde o primeiro for percorre o array e o segundo for percorre o array novamente para comparar o elemento do primeiro for com os demais elementos do array. Caso o elemento do primeiro for seja igual a algum elemento do segundo for, a variável qtd é incrementada. Caso a variável qtd seja maior que a variável qtdRepete, a variável qtdRepete recebe o valor de qtd e a variável charMaisRepete recebe o valor do elemento do primeiro for.