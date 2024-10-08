/*
 *Crie um programa que liste conjuntos de notas de acordo com a entrada de uma lista de números. Calcule a média destas notas.
 *Exiba o conjunto das notas abaixo da média calculada. Em seguida, exiba o outro conjunto de notas maiores do que a média. 
 *Se uma nota for igual a média calculada não mostre-a em nenhum dos conjuntos. 
 *A ordem da saída é a seguinte:
 *notas ABAIXO da média.
 *notas ACIMA da média.

 * EXEMPLO: 
 - entrada: 7,8,9,10,5.5,6.7
 - saída: 
    7, 5.5, 6.7
    8, 9, 10
*/ 

function processaNotas(notasStr) {
    // Converte a string de entrada em uma lista de números
    let notas = notasStr.split(',').map(Number);

    // Calcular a média
    let soma = notas.reduce((acc, nota) => acc + nota, 0);
    let media = soma / notas.length;

    // Filtrar notas abaixo e acima da média
    let notasAbaixo = notas.filter(nota => nota < media);
    let notasAcima = notas.filter(nota => nota > media);

    // Gerar saída sem espaços entre os números, separados por vírgula
    console.log(notasAbaixo.join(','));
    console.log(notasAcima.join(','));
}

// Exemplo de uso
processaNotas("7,8,9,10,5.5,6.7");