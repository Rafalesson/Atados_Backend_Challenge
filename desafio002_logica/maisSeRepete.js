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