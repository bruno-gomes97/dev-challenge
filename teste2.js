// Definindo o número a ser verificado se pertence à sequência de Fibonacci
let numeroVerificado = 22;

// Função para calcular a sequência de Fibonacci e verificar se o número pertence a ela
function verificaFibonacci(num) {
    // Iniciando os dois primeiros números da sequência de Fibonacci
    let a = 0; // Primeiro número da sequência
    let b = 1; // Segundo número da sequência

    // Caso o número seja 0 ou 1, retornamos que pertence, pois são os primeiros números da sequência
    if (num === 0 || num === 1) {
        return `${num} pertence à sequência de Fibonacci.`;
    }

    // Continuamos somando os números até que a sequência seja maior ou igual ao número verificado
    while (b < num) {
        let temp = b;  // Variável temporária para armazenar o valor anterior de b
        b = a + b;     // Atualiza o valor de b para a soma dos dois números anteriores
        a = temp;      // Atualiza o valor de a para o número anterior de b
    }

    // Se o valor de b for igual ao número verificado, ele pertence à sequência
    if (b === num) {
        return `${num} pertence à sequência de Fibonacci.`;
    } else {
        // Caso contrário, o número não pertence à sequência
        return `${num} não pertence à sequência de Fibonacci.`;
    }
}

// Chamando a função e imprimindo o resultado
console.log(verificaFibonacci(numeroVerificado));
